<template>
  <div>
<<<<<<< Updated upstream
  <Navbar />
  <div class="w-full h-screen flex justify-center items-center">
    <div class="w-full max-w-sm m-10 sm:m-0 overflow-hidden bg-white py-10 rounded-lg shadow-md">
      <div class="px-6 py-4">
        <h2 class="text-3xl font-bold text-center mb-3 text-gray-700">Logowanie</h2>
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
          <div class="flex items-center mt-4">
            <input 
              class="px-4 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded cursor-pointer hover:bg-gray-600 focus:outline-none"
              type="submit" 
              value="Zaloguj"
            >
          </div>
        </form>
      </div>
    </div>
    <div class="w-136 ml-32 hidden xl:block">
      <img class="w-full" src="../assets/svg/authentication.svg">
    </div>
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
=======
    <form @submit.prevent="login">
      <input type="text" v-model="emailValue">
      <input type="password" v-model="passwordValue">
      <input type="submit" value="zaloguj sie" @submit.prevent="login">
    </form>

    <div v-if="loginError" class="validation-alert top-0 sm:top-3/4" role="alert">
      <span class="block sm:inline">Podany login i/lub hasło są nieprawidłowe</span>
      <span class="absolute top-0 bottom-0 right-0 px-4 py-3"></span>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

import API_URL from '../API_URL'

export default {
  data(){
    return{
      emailValue: '',
      passwordValue: '',

      user: {},
      ISjwt: this.$cookies.isKey('jwt'),

      loginError: false,

      setTimeout: Function,
      setTimeoutTime: 4000
    }
  },
  created(){
    if(this.ISjwt){
      this.$router.push('/panel')
    }
  },
  methods: {
    async login(){
      clearTimeout(this.setTimeout)

      await axios.post(`${API_URL}/auth/local`, {
        identifier: this.emailValue,
        password: this.passwordValue
      })

      .then(async res=>{
        this.user = res.data

        await this.$cookies.set('jwt',this.user.jwt, '30d')
        await this.$cookies.set('user',this.user.user, '30d')

        this.$router.push('/')
      })
      .catch(() =>{
        this.setTimeout = setTimeout(() =>{
          this.loginError = false
        },this.setTimeoutTime)
        return this.loginError = true
      })
    },
  }
}
</script>

<style>

</style>
>>>>>>> Stashed changes
