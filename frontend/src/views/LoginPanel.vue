<template>
  <div>
  <Navbar />
  <div class="w-full h-screen bg-gray-900 flex justify-center items-center">
    <div class="w-full max-w-sm m-10 sm:m-0 overflow-hidden bg-white py-10 rounded-lg shadow-md">
      <div class="px-6 py-4">
        <h2 class="text-3xl font-bold text-center mb-3 text-gray-70">Logowanie</h2>
        <p class="mt-1 text-center text-gray-500">Panel administracyjny</p>
        <form @submit.prevent="login()">
          <div class="w-full mt-4">
            <input 
              class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring" 
              v-model="loginValue"
              type="text" 
              placeholder="Login" 
              aria-label="Login"
              required
            >
          </div>
          <div class="w-full mt-4">
            <input 
              class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring" 
              v-model="passwordValue"
              type="password" 
              placeholder="Hasło" 
              aria-label="Hasło"
              required
            >
          </div>
          <div class="flex items-center justify-end mt-4">
            <input 
              class="px-4 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded hover:bg-gray-600 focus:outline-none"
              type="submit" 
              value="Zaloguj"
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
import Navbar from '../components/Navbar'

export default {
  data() {
    return {
      loginValue: '',
      passwordValue: ''
    }
  },
  components: {
    Navbar
  },
  methods: {
    login() {
      console.log(this.loginValue, this.passwordValue);
    }
  },
}
</script>