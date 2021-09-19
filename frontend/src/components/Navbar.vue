<template>
  <nav class="absolute left-0 -top-4 xl:-top-0 bg-transparent w-full">
    <div class="container px-6 py-3 mx-auto flex justify-between items-center">
      <router-link
        class="text-2xl font-bold text-white lg:text-3xl hover:text-gray-200"
        to="/"
      >
        <img class="w-40" src="../assets/logo.png" alt="Simmon logo">
      </router-link>
      <div class="flex flex-row">
        <div>
          <div 
            class="h-screen w-full top-0 left-0 bg-gray-800 flex-col items-center justify-between py-52 fixed z-30 lg:bg-transparent lg:flex lg:flex-row lg:mx-6 lg:static lg:h-auto lg:w-auto lg:p-0" 
            :class="[navbarExpanded ? 'flex' : 'hidden']"
          >
            <button
              class="lg:hidden text-white hover:text-gray-300 focus:outline-none focus:text-gray-300 absolute top-5 right-5"
              :class="[navbarExpanded ? 'flex' : 'hidden']"
              aria-label="toggle menu"
              type="button"
              @click="this.navbarExpanded = !this.navbarExpanded"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <RouterLinks :className="'navbar'" />
          </div>
          <button
            class="flex lg:hidden text-white hover:text-gray-300 focus:outline-none focus:text-gray-300"
            aria-label="toggle menu"
            type="button"
            @click="this.navbarExpanded = !this.navbarExpanded"
          >
            <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
              <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
            </svg>
          </button>
        </div>
        <div class="flex justify-center lg:block">
          <div class="relative">
            <button class="relative z-10 block px-2 rounded-md hover:text-gray-100 focus:outline-none focus:text-gray-300 group">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.6" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div class="hidden absolute right-0 z-20 w-48 py-2 mt-2 text-white bg-gray-700 rounded-md shadow-xl group-focus:block">
                <button
                  class="flex flex-row justify-between w-full items-center px-5 py-2 text-sm capitalize transition-colors duration-200 transform hover:text-gray-200 hover:bg-gray-800"
                  v-for="lang in languages"
                  :key="lang.name"
                >
                  {{ lang.name }}
                  <img class="ml-2 h-3" :src="require(`../assets/svg/${lang.id}.svg`)" alt="">
                </button>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
import RouterLinks from '../components/RouterLinks.vue'

export default {
  data() {
    return {
      navbarExpanded: false,
      languages: [
        { 'name': "Polski", 'id': 'pl' },
        { 'name': "English", 'id': 'en' },
        { 'name': "Deutsch", 'id': 'de' }
      ]
    }
  },
  components: {
    RouterLinks,
  }
}
</script>