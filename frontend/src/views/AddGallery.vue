<template>
  <div>
    <label for="">kod</label>
    <input type="" v-model="codeValue">
    <div v-show="codeError">wprowadzony kod juz istnieje</div>

    <div v-for="time in expirationOptions " :key="time" @click="setTimeValue(time.asNumber)">
      {{ time.asString }}
    </div>

    <label for="">dodaj zdjecia</label>
    <input
      type="file"
      accept="image/png, image/jpeg"
      required
      multiple
      class=""
      @change="onFileChange($event)"
    >
    <div class="grid grid-cols-1 2xl:grid-cols-2 h-auto">
      <div
        v-for="(url, index) in urls"
        :key="url"
        class="bg-cover bg-no-repeat bg-center grid-cols-1 m-2 h-72 flex flex-col"
        :style="{ backgroundImage: 'url(' + url + ')' }"
      >
        <div
          class=" text-black bg-white text-center text-sm md:text-base xl:text-xl p-2 w-full opacity-40"
          v-if="index === 0"
        >
          To zdjęcie będzie główne
        </div>
        <div class="flex justify-end items-end h-full">
        <svg xmlns="http://www.w3.org/2000/svg"
          @click="removeImage(index)"
          class="h-10 w-10 text-red-600 button-animation-hover cursor-pointer " fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
        </div>
      </div>
    </div>

    <button @click="addGallery">Dodaj galerie</button>
  </div>
</template>

<script>
import axios from 'axios'

import API_URL from '../API_URL'
import expirationOptions  from  '../json_files/expirationOptions .json'

export default {
  data(){
    return{
      codeValue: '',

      urls: [],
      images: [],
      imagesUrl: [],

      jwt: this.$cookies.get('jwt'),
      ISjwt: this.$cookies.isKey('jwt'),

      expirationOptions : expirationOptions ,
      expirationTime: 604800000,

      setTimeout: Function,
      setTimeoutTime: 4000,
      codeError: false
    }
  },
  created(){
    if(!this.ISjwt){
      this.$router.push('/login')
    }
  },
  methods: {
    setTimeValue(value){
      this.expirationTime = value;
    },
    async onFileChange(e){
      e.target.files.forEach(image => {
        this.images.push(image)
        this.urls.push(URL.createObjectURL(image))
      })
    },
    removeImage(index){
      this.images.splice(index,1)
      this.urls.splice(index,1)
    },
    async addGallery(){
      await axios.get(`${API_URL}/galleries/${this.codeValue}`)
      .then(() => {
        this.setTimeout = setTimeout(() =>{
          this.codeError = false
        },this.setTimeoutTime)
        return this.codeError = true
      })
      .catch(err => console.log(err))
      // adding images to cloudinary and waiting for save, next step is sending request to backend(strapi) and save the gallery
      if(!this.codeError){
        const timeToDelete = Number(new Date()) + this.expirationTime;

        await this.images.forEach(async image =>{
          let isPostedImages = false;

          const data = new FormData()
          data.append('file', image)
          data.append("api_key", '416912495735314');
          data.append("api_secret", 'YBiJZM4b-1K36oto3R9fPHygxr0');
          data.append("cloud_name", 'dz5juxdmi');
          data.append("upload_preset", "imti6imf");

          await axios.post(
            `https://api.cloudinary.com/v1_1/dz5juxdmi/image/upload`,
            data
          )
          .then(async res => {
            console.log(res.data);
            await this.imagesUrl.push(res.data.url);
            if(this.imagesUrl.length === this.images.length) isPostedImages = true;
          })
          .catch(err => console.log(err))

          if(isPostedImages){
            await axios.post(`${API_URL}/galleries`,
            { images: this.imagesUrl, code: this.codeValue, timeToDelete },
            { headers: { Authorization: `Bearer ${this.jwt}` } }
            )
            .then(() => this.$router.push('/panel'))
            .catch(err => console.log(err))
          }
        })
      }
    }
  }
}
</script>

<style>
/* created by : KordianJanowski & StanisławSztrajt © */
</style>