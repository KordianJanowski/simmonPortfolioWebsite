<template>
    <footer class="bg-gray-700">
        <div class="container px-6 py-8 mx-auto">
          <img class="w-32 -my-5" src="../assets/logo.png" alt="Simmon logo">
          <hr class="my-8 border-gray-600">
          <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            <router-link 
              v-for="link in navLinks"
              :key="link.text"
              :to="link.to" 
              class="text-xs font-medium text-gray-200 uppercase"
            >
              {{ link.text }}
            </router-link>
          </div>
          <hr class="my-8 border-gray-600">
          <div class="sm:flex sm:items-center sm:justify-between">
            <p class="text-sm text-gray-300">© Copyright 2021. All Rights Reserved.</p>
            <SocialMediaIcons />
          </div>
        </div>
    </footer>
</template>
<script>
import SocialMediaIcons from './SocialMediaIcons.vue'
export default {
  data() {
    return {
      navLinks: [
        { to: '/', text: "Strona główna", id: "home" },
        { to: '/portfolio', text: "Portfolio", id: "portfolio" },
        { to: '/about', text: "O mnie", id: "about" },
        { to: '/download', text: "Do pobrania", id: "download" },
        { to: '/contact', text: "Kontakt", id: "contact" },
      ],
    }
  },
  components: { 
    SocialMediaIcons 
  },
}
</script>