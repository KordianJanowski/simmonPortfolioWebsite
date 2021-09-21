<template>
  <div>
    <Navbar />
    <div class="container flex flex-col items-center mx-auto my-32">
      <div class="flex flex-row w-84 justify-between items-center border-b border-gray-600 shadow-md mb-5">
        <input 
          type="text"
          class="text-2xl w-11/12 bg-transparent focus:outline-none p-1"
          placeholder="Wyszukaj"
        >
        <button class="hover:bg-gray-700 p-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
          </svg>
        </button>
      </div>
      <div class="flex flex-row flex-wrap justify-center max-w-7xl">
        <button
          v-show="imagesUrl.length !== 0"
          v-for="(imageUrl, index) in imagesUrl"
          :key="index"
          class="w-72 h-72 bg-center bg-cover bg-no-repeat m-7 rounded shadow-md"
          :style="{ backgroundImage: 'url(' + imageUrl.image + ')' }"
        >
        </button>
        <div v-show="imagesUrl.length === 0" class="flex flex-col items-center justify-center mt-12">
          <img 
            class="w-1/2"
            src="../assets/svg/noImagesFound.svg" 
            alt="No images found"
          >
          <span class="text-2xl md:text-3xl mt-10 text-gray-300">Nie znaleziono żadnych zdjęć</span>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script>
import Navbar from '../components/Navbar';
import Footer from '../components/Footer.vue';

import axios from 'axios';
import API_URL from '../API_URL'

export default {
  components: {
    Navbar,
    Footer
  },
  data(){
    return{
      imagesUrl: [],
    }
  },
  async created(){
    await axios.get(`${API_URL}/portfolio-images`)
    .then(res => {
      this.imagesUrl = res.data
    })
    .catch(err => console.log(err))
  },
}
</script>