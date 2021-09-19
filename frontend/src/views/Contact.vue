<template>
  <div>
    <Navbar />
    <section class="h-screen w-full flex items-center justify-center text-gray-400 bg-transparent body-font 2xl:mt-0">
      <div class="container px-3 sm:px-10 lg:px-20 py-5 mx-auto">
        <div class="flex flex-col text-center w-full mb-12">
          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Kontakt</h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Skontaktuj się ze mną</p>
        </div>
        <form  
          class="lg:w-1/2 md:w-2/3 mx-auto"
          @submit.prevent="sendMail"
          ref="form"
        >
          <div class="flex flex-wrap -m-2">
            <div class="p-2 w-1/2">
              <div class="relative">
                <label for="name" class="leading-7 text-sm text-gray-400">Imię</label>
                <input 
                  type="text"
                  id="from_name" 
                  name="from_name" 
                  required
                  class="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-blue-600 focus:bg-gray-900 focus:ring-2 focus:ring-blue-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                >
              </div>
            </div>
            <div class="p-2 w-1/2">
              <div class="relative">
                <label for="email" class="leading-7 text-sm text-gray-400">Email</label>
                <input 
                  type="email"  
                  id="reply_to"
                  name="reply_to"
                  required
                  class="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-blue-600 focus:bg-gray-900 focus:ring-2 focus:ring-blue-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                >
              </div>
            </div>
            <div class="p-2 w-full">
              <div class="relative">
                <label for="message" class="leading-7 text-sm text-gray-400">Wiadomość</label>
                <textarea 
                  id="message"
                  name="message"
                  required
                  class="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-blue-600 focus:bg-gray-900 focus:ring-2 focus:ring-blue-500 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
            </div>
            <div class="p-2 w-full">
              <input 
                class="flex mx-auto text-white bg-blue-500 border-0 py-2 px-8 rounded text-lg cursor-pointer focus:outline-none hover:bg-blue-600"
                type="submit" 
                value="Wyślij"
              />
            </div>
            <div class="flex flex-col justify-center items-center p-2 w-full pt-8 mt-8 border-t border-gray-700 text-center">
              <a href="mailto:przykładowymail@gmail.com" class="text-blue-400 mb-4">przykładowymail@gmail.com</a>
              <SocialMediaIcons />
            </div>
          </div>
          <Alert 
            v-if="this.alertVisible" 
            :alertText="alertMessage" 
          />
        </form>
      </div>
    </section>
    <Footer />
  </div>
</template>
<script>
import Footer from '../components/Footer.vue'
import Navbar from '../components/Navbar'
import SocialMediaIcons from '../components/SocialMediaIcons.vue'
import Alert from '../components/Alert.vue'

import emailjs from 'emailjs-com'

export default {
  data() {
    return {
      alertMessage: '',
      alertVisible: false,
      setTimeout: Function,
      setTimeoutTime: 4000,
    }
  },
  components: {
    Navbar,
    SocialMediaIcons,
    Footer,
    Alert
  },
    methods: {
    async sendMail() {
      await emailjs.sendForm('service_q4wrklc', 'template_3tul818', this.$refs.form, 'user_cygJRD1koIJvUMmavNCLd')
      .then(() => {
        this.alertMessage = "Wiadomość została wysłana"

        this.setTimeout = setTimeout(() =>{
          this.alertVisible = false
        },this.setTimeoutTime)
        return this.alertVisible = true
      })
      .catch(err => {
        console.log(err);

        this.alertMessage = "Wystąpił błąd, wiadomość nie została wysłana"

        this.setTimeout = setTimeout(() =>{
          this.alertVisible = false
        },this.setTimeoutTime)
        return this.alertVisible = true
      })

      this.$refs.form.reset()
    }
  }
}
</script>