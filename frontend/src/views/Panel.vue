<template>
  <div class="flex flex-row">
    <div class="fixed flex flex-col w-64 min-h-screen h-full px-4 py-8 bg-gray-700 border-gray-600 border-r overflow-y-auto">
      <h2 class="mx-4 text-3xl font-semibold">Panel</h2>
      <div class="flex flex-col justify-between flex-1 mt-3 2xl:mt-6">
        <nav>
          <a class="flex items-center px-4 py-2 mt-2 2xl:mt-5 transition-colors duration-200 transform rounded-md hover:bg-gray-200 hover:text-gray-700" href="#">
            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 5V7M15 11V13M15 17V19M5 5C3.89543 5 3 5.89543 3 7V10C4.10457 10 5 10.8954 5 12C5 13.1046 4.10457 14 3 14V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V14C19.8954 14 19 13.1046 19 12C19 10.8954 19.8954 10 21 10V7C21 5.89543 20.1046 5 19 5H5Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

            <span class="mx-4 font-medium">Kody</span>
          </a>
          <a class="flex items-center px-4 py-2 mt-2 2xlmt-5 transition-colors duration-200 transform rounded-md hover:bg-gray-200 hover:text-gray-700" href="#">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span class="mx-4 font-medium">Portfolio</span>
          </a>
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
            <h4 class="mx-2 font-medium">Wyloguj</h4>
          </button>
        </div>
      </div>
    </div>
    <div class="p-20 flex flex-col w-full ml-64">
      <h1 class="text-5xl font-bold">Kody</h1>
      <hr class="my-10 border-gray-700">
      <div class="flex flex-row">
        <router-link to="/add-gallery" class="flex flex-col justify-center items-center w-52 h-32 bg-gray-700 rounded shadow-md cursor-pointer mr-7">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 mb-1" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" />
          </svg>
          Dodaj kod
        </router-link>
        <router-link to="/check-code" class="flex flex-col justify-center items-center w-52 h-32 bg-gray-700 rounded shadow-md cursor-pointer mr-7">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 mb-1" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
          </svg>
          Sprawdź kod
        </router-link>
        <div class="flex flex-col justify-center items-center w-52 h-32 bg-gray-700 rounded shadow-md cursor-pointer mr-7">
          <span class="font-semibold text-4xl"> {{ this.codes.length }} </span>
          Ilość kodów
        </div>
      </div>
      <hr class="my-10 border-gray-700">
      <div class="flex flex-col">
        <h3 class="text-3xl font-semibold mb-6">Lista kodów</h3>
        <div v-if="this.codes.legth === 0" class="flex w-full max-w-sm overflow-hidden bg-gray-700 rounded-lg shadow-md">
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
        <div class="flex flex-row">
          <router-link 
            v-for="code in codes"
            :key="code"
            :to="{ name: 'Gallery', params: { code: code.code }}"
            class="flex flex-col justify-center items-center w-84 h-20 bg-gray-700 rounded shadow-md cursor-pointer mr-7 mb-10"
          >
            <span>Użytkownik</span>
            <span class="font-bold text-2xl text-blue-400">{{ code.code }}</span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import RouterLinks from '../components/RouterLinks.vue'

import API_URL from '../API_URL'
import axios from 'axios'

export default {
  data() {
    return { 
      ISjwt: this.$cookies.isKey('jwt'),
      jwt: this.$cookies.get('jwt'),
      
      codes: []
    }
  },
  components: {
    RouterLinks,
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
  },
  
}
</script>