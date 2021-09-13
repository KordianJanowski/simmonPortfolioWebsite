<template>
  <div>
    <Navbar />
    <div class="container w-4/5 md:w-3/5 mx-auto">
      <section class="bg-transparent mt-20 lg:mt-32 2xl:mt-40 dark:bg-gray-800">
        <div class="py-8 mx-auto">
          <div class="items-center lg:flex">
            <div class="lg:w-1/2">
              <h2 class="text-3xl font-bold text-white dark:text-gray-100">Kim jestem?</h2>
              <p class="my-4 text-gray-100 dark:text-gray-400 text-lg lg:max-w-md">
                Cześć, jestem... Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum in sed non alias, fugiat, commodi nemo ut fugit corrupti dolorem sequi ex veniam consequuntur id, maiores beatae ipsa omnis aliquam?
              </p>
              <SocialMediaIcons />
            </div>
            <div class="mt-8 lg:mt-0 lg:w-1/2">
              <div class="flex items-center justify-center lg:justify-end">
                <div class="max-w-lg">
                  <img class="object-cover object-center w-full h-64" src="../assets/svg/avatar.svg" alt="Avatar">
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <Footer />
  </div>
</template>
<script>
import Footer from '../components/Footer.vue'
import Navbar from '../components/Navbar'
import SocialMediaIcons from '../components/SocialMediaIcons.vue'

export default {
  components: {
    Navbar,
    SocialMediaIcons,
    Footer
  }
}
</script>