<template>
  <div>
    <Navbar />
    <header>
      <div class="lg:h-screen flex justify-between mt-14 xl:mt-0">
        <div class="container px-6 py-16 mx-auto items-center lg:flex">
          <div class="w-full lg:w-1/2">
            <div class="lg:max-w-lg">
              <h1 class="text-2xl text-white font-bold lg:text-4xl">Profesjonalne usługi fotograficzne</h1>
              <p class="mt-2 text-gray-300 text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro beatae error laborum ab amet sunt recusandae? Reiciendis natus perspiciatis optio.</p>
              <button class="w-full px-3 py-2 mt-6 text-sm font-bold text-gray-800 transition-colors duration-200 transform bg-white rounded-md lg:w-auto hover:bg-gray-300 focus:outline-none focus:bg-gray-300">
                <router-link to="/about">O mnie</router-link>
              </button>
            </div>
          </div>
          <div class="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
            <img class="w-full h-full lg:max-w-2xl" src="../assets/svg/photograph.svg" alt="Photograph graphic.svg">
          </div>
        </div>
      </div>
    </header>

    <AboutComponent :aditionalClass="'lg:-mt-20'" />

    <ContactComponent :aditionalClass="'-mt-6'" />

    <Footer />
  </div>
</template>
<script>
import Navbar from '../components/Navbar'
import AboutComponent from '../components/AboutComponent.vue'
import ContactComponent from '../components/ContactComponent.vue'
import Footer from '../components/Footer.vue'

export default {
  data() {
    return {
      images: []
    }
  },
  components: {
    Navbar,
    AboutComponent,
    ContactComponent,
    Footer,
  },
}
</script>