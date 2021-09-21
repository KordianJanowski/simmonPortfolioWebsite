<template>
  <div>
    <Navbar />

    <ContactComponent />

    <Footer />
  </div>
</template>
<script>
import Navbar from '../components/Navbar'
import ContactComponent from '../components/ContactComponent.vue'
import Footer from '../components/Footer.vue'

export default {
  components: {
    Navbar,
    ContactComponent,
    Footer,
  },
}
</script>