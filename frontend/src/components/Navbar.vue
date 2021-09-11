<template>
    <nav class="bg-white shadow absolute w-screen">
      <div class="container flex items-center justify-center p-6 mx-auto text-gray-600">
        <router-link 
          v-for="link in navLinks"
          :key="link.text"
          :to="link.to" 
          class="text-gray-800 border-b-2 border-transparent mx-1.5 sm:mx-6 hover:border-gray-800"
          :class="{ 'border-gray-800': linkHighlight === link.id }"
        >
          {{ link.text }}
        </router-link>
      </div>
    </nav>
</template>
<script>
export default {
  data() {
    return {
      navLinks: [
        { to: '/', text: "Strona główna", id: "home" },
        { to: '/portfolio', text: "Portfolio", id: "portfolio" },
        { to: '/about', text: "O mnie", id: "about" },
        { to: '/download', text: "Do pobrania", id: "download" },
        { to: '/contact', text: "Kontakt", id: "contact" },
      ]
    }
  },
  props: {
    linkHighlight: String
  }
}
</script>