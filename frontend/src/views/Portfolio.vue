<template>
  <div>
    <Navbar />
    <div
      v-for="(imageUrl, index) in imagesUrl"
      :key="index"
      class="w-96 h-96"
      :style="{ backgroundImage: 'url(' + imageUrl.image + ')' }"
    >
    </div>
  </div>
</template>
<script>
import Navbar from '../components/Navbar';

import axios from 'axios';
import API_URL from '../API_URL'

export default {
  components: {
    Navbar
  },
  data(){
    return{
      imagesUrl: [],
    }
  },
  async created(){
    await axios.get(`${API_URL}/portfolio-images`)
    .then(res => {
      console.log(res)
      this.imagesUrl = res.data
    })
    .catch(err => console.log(err))
  },
}
</script>