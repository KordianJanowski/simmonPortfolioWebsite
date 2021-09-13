<template>
  <div>
    <Navbar :linkHighlight="'download'" />
    <div>
      <div v-if="!isCheckedSuccessfullyGallery" class="w-full h-screen bg-gray-900 flex justify-center items-center">
        <div class="w-full max-w-sm m-10 sm:m-0 overflow-hidden bg-white py-10 rounded-lg shadow-md">
          <div class="px-6 py-4">
            <h2 class="text-3xl font-bold text-center mb-3 text-gray-70 text-black">Do pobrania</h2>
            <p class="mt-1 text-center text-gray-500">Poniżej podaj twój kod dostępu aby pobrać wybrane zdjęcia</p>
            <form @submit.prevent="checkCode()">
              <div class="w-full mt-4">
                <input
                  class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring"
                  v-model="codeValue"
                  type="password"
                  placeholder="Kod dostępu"
                  aria-label="Kod dostępu"
                  required
                >
              </div>
              <div class="flex items-center justify-end mt-4">
                <input
                  class="px-4 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded hover:bg-gray-600 focus:outline-none"
                  type="submit"
                  value="Dalej"
                >
              </div>
            </form>
            <div v-show="codeError">Wprowadzono nieprawidłowy kod</div>
          </div>
        </div>
        <img class="h-96 ml-32 hidden xl:block" src="../assets/svg/logingraphic.svg">
      </div>
      <div v-else class="w-full h-screen bg-gray-900 flex justify-center items-center">
        <div>uzyty kod: {{ gallery.code }}</div>
        <button @click="hideCheckedSuccessfullyGallery">wroc</button>
        <div>Wyniki :</div>
          <div class="grid grid-cols-1 2xl:grid-cols-2 h-auto">
            <div
              v-for="(image, index) in gallery.images"
              :key="index"
              class="bg-cover bg-no-repeat bg-center grid-cols-1 m-2 h-64 w-96
               flex flex-col"
              :style="{ backgroundImage: 'url(' + image + ')' }"
            >
              <a :href="image" download class="h-48 w-48 bg-white text-black">download</a>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>
<script>
import Navbar from '../components/Navbar.vue';

import API_URL from '../API_URL'
import axios from 'axios'

export default {
  data() {
    return {
      codeValue: '',
      isCheckedSuccessfullyGallery: false,

      codeError: false,
      setTimeout: Function,
      setTimeoutTime: 4000,

      gallery: {}
    }
  },
  components: {
    Navbar
  },
  methods: {
    async checkCode() {
      await axios.get(`${API_URL}/galleries/${this.codeValue}`)
      .then(res => {
        this.gallery = res.data;
        this.isCheckedSuccessfullyGallery = true;
        this.codeValue = ''
      })
      .catch(() => {
        this.setTimeout = setTimeout(() =>{
          this.codeError = false
        },this.setTimeoutTime)
        return this.codeError = true
      })
    },
    hideCheckedSuccessfullyGallery(){
      this.isCheckedSuccessfullyGallery = false;
      this.gallery = {}
    }
  },

}
</script>