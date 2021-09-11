<template>
  <div>
    <Navbar :linkHighlight="'download'" />
    <div class="w-full h-screen bg-gray-900 flex justify-center items-center">
      <div class="w-full max-w-sm m-10 sm:m-0 overflow-hidden bg-white py-10 rounded-lg shadow-md">
        <div class="px-6 py-4">
          <h2 class="text-3xl font-bold text-center mb-3 text-gray-70">Do pobrania</h2>
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
        </div>
      </div>
      <img class="h-96 ml-32 hidden xl:block" src="../assets/logingraphic.svg">
    </div>
  </div>
</template>
<script>
import Navbar from '../components/Navbar.vue';
export default {
  data() {
    return {
      codeValue: ''
    }
  },
  components: { 
    Navbar 
  },
  methods: {
    checkCode() {
      console.log(this.codeValue);
    }
  },
}
</script>