<template>
  <div>
    <div v-if="!isDeleteGalleryLayer && !isExtensionGalleryLayer && !isDeletePortfolioImageLayer" class="flex flex-row">
      <div class="fixed flex flex-col w-64 min-h-screen h-full px-4 py-8 bg-gray-700 border-gray-600 border-r overflow-y-auto">
        <img class="w-3/5 ml-2" src="../assets/panel.png" alt="Panel">
        <div class="flex flex-col justify-between flex-1">
          <nav>
            <button 
              v-for="subpage in subpageButtons"
              :key="subpage.name"
              @click="activeSubpage = subpage.name.toLowerCase()" 
              class="flex w-full items-center px-4 py-2 mt-1 2xl:mt-5 transition-colors duration-200 transform rounded-md hover:bg-gray-600" href="#">
              <img class="w-6 h-6" :src="require(`../assets/svg/panel/${subpage.svg}.svg`)" alt="Icon">

              <span class="mx-4 font-medium">{{ subpage.name }}</span>
            </button>
            <hr class="my-4 2xl:my-6" />
            <RouterLinks :className="'panel'" />
          </nav>
          <div class="flex flex-col items-start mt-10">
            <div class="flex items-center px-4 -mx-2 mb-4">
              <img class="object-cover mx-2 rounded-full h-8 w-8" src="../assets/svg/avatar.svg" alt="avatar"/>
              <h4 class="mx-2 font-medium">Simmon</h4>
            </div>
            <button class="flex items-center px-4 -mx-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 mx-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              <h4 class="mx-2 font-medium" @click="logout">Wyloguj</h4>
            </button>
          </div>
        </div>
      </div>
      <div v-if="activeSubpage === 'kody'" class="p-20 flex flex-col w-full ml-64">
        <h1 class="text-5xl font-bold">Kody</h1>
        <hr class="my-10 border-gray-700">
        <div class="flex flex-row flex-wrap">
          <router-link to="/add-gallery" class="flex flex-col justify-center items-center w-52 h-32 bg-gray-700 hover:bg-gray-600 rounded shadow-md cursor-pointer mb-7 mr-7">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 mb-1" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" />
            </svg>
            Dodaj kod
          </router-link>
          <router-link to="/check-code" class="flex flex-col justify-center items-center w-52 h-32 bg-gray-700 hover:bg-gray-600 rounded shadow-md cursor-pointer mb-7 mr-7">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 mb-1" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
            </svg>
            Sprawdź kod
          </router-link>
          <div class="flex flex-col justify-center items-center w-52 h-32 bg-gray-700 rounded shadow-md mb-7 mr-7">
            <span class="font-semibold text-4xl"> {{ this.codes.length }} </span>
            Ilość kodów
          </div>
        </div>
        <hr class="my-10 border-gray-700">
        <div class="flex flex-col">
          <h3 class="text-3xl font-semibold mb-6">Lista kodów</h3>
          <div v-if="this.codes.length === 0" class="flex w-full max-w-sm overflow-hidden bg-gray-700 rounded-lg shadow-md">
            <div class="flex items-center justify-center w-12 bg-blue-500">
              <svg class="w-6 h-6 text-white fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM21.6667 28.3333H18.3334V25H21.6667V28.3333ZM21.6667 21.6666H18.3334V11.6666H21.6667V21.6666Z"/>
              </svg>
            </div>
            <div class="px-4 py-2">
              <span class="font-semibold text-blue-400">Info</span>
              <p class="text-sm text-gray-200">Na ten moment nie posiadasz żadnych kodów.</p>
            </div>
          </div>
          <div class="flex flex-row flex-wrap">
            <div
              class="w-84 bg-gray-700 rounded shadow-md cursor-pointer p-2 mr-7 mb-10"
              v-for="code in codes"
              :key="code"
            >
              <router-link
                :to="{ name: 'Gallery', params: { code: code.code }}"
                class="flex flex-col justify-center items-center "
              >
                <span>{{ code.timeToDelete.slice(0, 10) }}</span>
                <span class="font-bold text-2xl text-blue-400">{{ code.code }}</span>
              </router-link>
              <div class="flex flex-row w-full justify-end items-center -mt-1">
                <button @click="toggleExtensionGalleryLayer(code.id, code.code)" class="hover:text-gray-300">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </button>
                <button @click="toggleDeleteGalleryLayer(code.id, code.code)" class="hover:text-gray-300">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div v-else-if="activeSubpage === 'portfolio'" class="p-20 flex flex-col w-full ml-64">
        <h1 class="text-5xl font-bold">Portfolio</h1>
        <hr class="my-10 border-gray-700">
        <div class="flex flex-row flex-wrap">
          <router-link to="/add-portfolio-image" class="flex flex-col justify-center items-center w-52 h-32 bg-gray-700 hover:bg-gray-600 rounded shadow-md cursor-pointer mr-7">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 mb-1" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" />
            </svg>
            Dodaj zdjęcie
          </router-link>
          <div class="flex flex-col justify-center items-center w-52 h-32 bg-gray-700 rounded shadow-md mr-7">
            <span class="font-semibold text-4xl"> {{ this.portfolioImages.length }} </span>
            Ilość zdjęć
          </div>
        </div>
        <hr class="my-10 border-gray-700">
        <div class="flex flex-col">
          <h3 class="text-3xl font-semibold mb-6">Lista zdjęć</h3>
          <div v-if="this.portfolioImages.length === 0" class="flex w-full max-w-sm overflow-hidden bg-gray-700 rounded-lg shadow-md">
            <div class="flex items-center justify-center w-12 bg-blue-500">
              <svg class="w-6 h-6 text-white fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM21.6667 28.3333H18.3334V25H21.6667V28.3333ZM21.6667 21.6666H18.3334V11.6666H21.6667V21.6666Z"/>
              </svg>
            </div>
            <div class="px-4 py-2">
              <span class="font-semibold text-blue-400">Info</span>
              <p class="text-sm text-gray-200">Na ten moment nie posiadasz żadnych zdjęć.</p>
            </div>
          </div>
          <div class="flex flex-row flex-wrap">
            <div
              class="bg-gray-700 rounded shadow-md mr-7 mb-10"
              v-show="portfolioImages.length !== 0"
              v-for="(imageUrl, index) in portfolioImages"
              :key="index"
            >
              <div class="flex flex-col w-full justify-end items-center">
                <div
                  class="w-72 h-72 bg-center bg-cover bg-no-repeat m-2 rounded shadow-md"
                  :style="{ backgroundImage: 'url(' + imageUrl.image + ')' }"
                >
                </div>
                <div class="flex w-full justify-end">
                  <button @click="toggleDeletePortfolioImageLayer(imageUrl.id)" class="hover:text-gray-300 mb-2 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else class="p-20 flex flex-col w-full ml-64">
        <h1 class="text-5xl font-bold">Dysk</h1>
        <hr class="my-10 border-gray-700">
        <div class="flex flex-row flex-wrap">
          <router-link to="/add-drive-image" class="flex flex-col justify-center items-center w-52 h-32 bg-gray-700 hover:bg-gray-600 rounded shadow-md cursor-pointer mr-7">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 mb-1" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" />
            </svg>
            Dodaj zdjęcie
          </router-link>
          <div class="flex flex-col justify-center items-center w-52 h-32 bg-gray-700 rounded shadow-md mr-7">
            <span class="font-semibold text-4xl"> {{ this.driveImages.length }} </span>
            Ilość zdjęć
          </div>
        </div>
        <hr class="my-10 border-gray-700">
        <div class="flex flex-col">
          <h3 class="text-3xl font-semibold mb-6">Lista zdjęć</h3>
          <div v-if="this.driveImages.length === 0" class="flex w-full max-w-sm overflow-hidden bg-gray-700 rounded-lg shadow-md">
            <div class="flex items-center justify-center w-12 bg-blue-500">
              <svg class="w-6 h-6 text-white fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM21.6667 28.3333H18.3334V25H21.6667V28.3333ZM21.6667 21.6666H18.3334V11.6666H21.6667V21.6666Z"/>
              </svg>
            </div>
            <div class="px-4 py-2">
              <span class="font-semibold text-blue-400">Info</span>
              <p class="text-sm text-gray-200">Na ten moment nie posiadasz żadnych zdjęć.</p>
            </div>
          </div>
          <div class="flex flex-row flex-wrap">
            <div
              class="bg-gray-700 rounded shadow-md mr-7 mb-10"
              v-show="driveImages.length !== 0"
              v-for="(imageUrl, index) in driveImages"
              :key="index"
            >
              <div class="flex flex-col w-full justify-end items-center">
                <div
                  class="w-72 h-72 bg-center bg-cover bg-no-repeat m-2 rounded shadow-md"
                  :style="{ backgroundImage: 'url(' + imageUrl.image + ')' }"
                >
                </div>
                <div class="flex w-full justify-end">
                  <button @click="toggleDeleteGalleryLayer(image.image)" class="hover:text-gray-300 mb-2 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <DeleteGalleryLayer
      :codeId="codeId"
      :codeCode="codeCode"
      v-else-if="isDeleteGalleryLayer"
      @delete-gallery="deleteGallery"
      @toggle-delete-gallery-layer="toggleDeleteGalleryLayer"
    />
    <ExtensionGalleryLayer
      :codeId="codeId"
      v-else-if="isExtensionGalleryLayer"
      @set-time-to-delete="setTimeToDelete"
      @extension-gallery="extensionGallery"
      @toggle-extension-gallery-layer="toggleExtensionGalleryLayer"
    />

    <DeletePortfolioImageLayerVue 
      v-else-if="isDeletePortfolioImageLayer"
      @toggle-delete-portfolio-image-layer="toggleDeletePortfolioImageLayer"
      @delete-portfolio-image="deletePortfolioImage"
    />
  </div>
</template>
<script>

import RouterLinks from '../components/RouterLinks.vue'
import DeleteGalleryLayer from '../components/DeleteGalleryLayer.vue'
import ExtensionGalleryLayer from '../components/ExtensionGalleryLayer.vue'
import DeletePortfolioImageLayerVue from '../components/DeletePortfolioImageLayer.vue.vue'

import API_URL from '../API_URL'
import axios from 'axios'

export default {
  data() {
    return {
      ISjwt: this.$cookies.isKey('jwt'),
      jwt: this.$cookies.get('jwt'),

      timeToDelete: 604800000,
      codes: [],
      portfolioImages: [],
      driveImages: [],
      codeId: '',
      portfolioImageId: '',
      isDeleteGalleryLayer: false,
      isExtensionGalleryLayer: false,
      isDeletePortfolioImageLayer: false,
      activeSubpage: 'kody',
      subpageButtons: [
        { name: "Kody", svg: "ticket" },
        { name: "Portfolio", svg: "image" },
        { name: "Dysk", svg: "drive" }
      ]
    }
  },
  components: {
    RouterLinks,
    DeleteGalleryLayer,
    ExtensionGalleryLayer,
    DeletePortfolioImageLayerVue
  },
  async created() {
    if(!this.ISjwt){
      this.$router.push('/login')
    }

    await axios.get(`${API_URL}/galleries`,
    { headers: { Authorization: `Bearer ${this.jwt}` } }
    ).then(response => {
      this.codes = response.data
    })

    await axios.get(`${API_URL}/portfolio-images`)
    .then(response => {
      this.portfolioImages = response.data
    })
  },
  methods: {
    setTimeToDelete(timeToDelete){
      this.timeToDelete = timeToDelete;
    },
    async deleteGallery() {
      await axios.delete(`${API_URL}/galleries/${this.codeId}`,
      { headers: { Authorization: `Bearer ${this.jwt}` } })
      .then(res => console.log(res))
      .catch(err => console.log(err));

      const index = this.codes.findIndex(el => el.id === this.codeId)
      this.codes.splice(index, 1)

      this.toggleDeleteGalleryLayer('')
    },
    async extensionGallery() {
      let gallery = {}

      await axios.get(`${API_URL}/galleries/${this.codeCode}`)
      .then(res => gallery = res.data)
      .catch(err => console.log(err))

      const newTimeToDelete = Date.parse(gallery.timeToDelete) + Number(this.timeToDelete);

      await axios.put(`${API_URL}/galleries/${this.codeId}`,
      { timeToDelete: newTimeToDelete },
      { headers: { Authorization: `Bearer ${this.jwt}` } })
      .then(res => {
        const index = this.codes.findIndex(el => el.id === this.codeId)
        this.codes[index].timeToDelete = res.data.timeToDelete
      })
      .catch(err => console.log(err));


      this.toggleExtensionGalleryLayer('')
    },
    async logout(){
      await this.$cookies.remove('jwt');
      await this.$cookies.remove('user');
      this.$router.push('/')
    },
    toggleDeleteGalleryLayer(id, code){
      this.codeId = id;
      this.codeCode = code;
      this.isDeleteGalleryLayer = !this.isDeleteGalleryLayer;
    },
    toggleExtensionGalleryLayer(id, code){
      this.codeId = id;
      this.codeCode = code;
      this.isExtensionGalleryLayer = !this.isExtensionGalleryLayer;
    },
    async deletePortfolioImage() {
      await axios.delete(`${API_URL}/portfolio-images/${this.portfolioImageId}`,
      { headers: { Authorization: `Bearer ${this.jwt}` } })
      .then(res => console.log(res))
      .catch(err => console.log(err));
      
      const index = this.portfolioImages.findIndex(el => el.id === this.portfolioImageId)
      this.portfolioImages.splice(index, 1)

      this.toggleDeletePortfolioImageLayer('')
      
    },
    toggleDeletePortfolioImageLayer(id){
      this.portfolioImageId = id
      this.isDeletePortfolioImageLayer = !this.isDeletePortfolioImageLayer;
    }
  },
}
</script>