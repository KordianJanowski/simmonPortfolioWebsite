<template>
  <div>
    <input
      type="file"
      accept="image/png, image/jpeg"
      required
      multiple
      class=""
      @change="onFileChange($event)"
    >
    <textarea name="" v-model="descriptionValue" id="" cols="30" rows="10"></textarea>

    <div
      class="bg-cover bg-no-repeat bg-center grid-cols-1 m-2 h-72 flex flex-col"
      :style="{ backgroundImage: 'url(' + url + ')' }"
    ></div>
    <div class="flex justify-end items-end h-full">
      <svg xmlns="http://www.w3.org/2000/svg"
        @click="removeImage"
        class="h-10 w-10 text-red-600 button-animation-hover cursor-pointer " fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
      </svg>
    </div>
    <button @click="addImage">Add image</button>
  </div>
</template>

<script>
import axios from 'axios';
import API_URL from '../API_URL'

export default {
  data(){
    return{
      descriptionValue: '',
      image: '',
      url: '',

      jwt: this.$cookies.get('jwt')
    }
  },
  methods: {
    async onFileChange(e){
      e.target.files.forEach(image => {
        this.image = image;
        this.url = URL.createObjectURL(image);
      })
    },
    removeImage(){
      this.image = '';
      this.url = '';
      this.imageUrl = '';
    },
    async addImage(){
      let isPostedImages = false;

      const data = new FormData()
      data.append('file', this.image)
      data.append("api_key", '416912495735314');
      data.append("api_secret", 'YBiJZM4b-1K36oto3R9fPHygxr0');
      data.append("cloud_name", 'dz5juxdmi');
      data.append("upload_preset", "imti6imf");

      await axios.post(
        `https://api.cloudinary.com/v1_1/dz5juxdmi/image/upload`,
        data
      )
      .then(async res => {
        console.log(res)
        this.imageUrl = res.data.url;
        isPostedImages = true;
      })
      .catch(err => console.log(err))

      if(isPostedImages){
        await axios.post(`${API_URL}/portfolio-images`,
        { image: this.imageUrl, description: descriptionValue },
        { headers: { Authorization: `Bearer ${this.jwt}` } }
        )
        .then(() => this.$router.push('/panel'))
        .catch(err => console.log(err))
      }
    }
  }
}
</script>

<style>

</style>