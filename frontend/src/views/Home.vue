<template>
  <div>
    <header>
      <Navbar />

      <div class="h-screen flex justify-between mt-10 xl:mt-0">
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
    <Footer />
  </div>
</template>
<script>
import Footer from '../components/Footer.vue'
import Navbar from '../components/Navbar'
export default {
  components: {
    Navbar,
    Footer,
  }
}
</script>