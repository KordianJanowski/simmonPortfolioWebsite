<template>
  <div class="container w-4/5 md:w-3/5 mx-auto">
    <section class="bg-transparent" :class="aditionalClass">
      <div class="py-8 mx-auto">
        <div class="items-center lg:flex">
          <div class="lg:w-1/2">
            <h2 class="text-3xl font-bold text-white">Kim jestem?</h2>
            <p class="my-4 text-gray-100 text-lg lg:max-w-md">
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
    <hr class="w-1/2 mx-auto border-gray-600">
    <section class="my-8 2xl:my-20">
      <div class="container px-6 py-8 mx-auto">
        <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <img class="w-8 h-8 mx-auto" src="../assets/svg/sport.svg" alt="Sport icon">

            <h1 class="mt-4 text-xl font-bold text-white text-center">Imprezy sportowe</h1>

            <p class="mt-2 text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim fusce tortor, ac sed malesuada blandit. Et mi gravida sem feugiat.</p>
          </div>
    
          <div>
            <img class="w-8 h-8 mx-auto" src="../assets/svg/car.svg" alt="Car icon">   

            <h1 class="mt-4 text-xl font-semibold text-white text-center">Imprezy motoryzacyjne</h1>
            
            <p class="mt-2 text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim fusce tortor, ac sed malesuada blandit. Et mi gravida sem feugiat.</p>
          </div>
                
          <div>
            <img class="w-8 h-8 mx-auto" src="../assets/svg/gifts.svg" alt="Gifts icon">
        
            <h1 class="mt-4 text-xl font-semibold text-white text-center">Imprezy okolicznościowe</h1>
        
            <p class="mt-2 text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim fusce tortor, ac sed malesuada blandit. Et mi gravida sem feugiat.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>

import SocialMediaIcons from './SocialMediaIcons.vue'

export default {
  components: {
    SocialMediaIcons
  },
  props: {
    aditionalClass: String
  },
}
</script>