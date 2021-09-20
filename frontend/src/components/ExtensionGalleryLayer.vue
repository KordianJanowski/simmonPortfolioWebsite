<template>
  <div class="h-screen w-screen flex flex-col justify-center items-center">
    <div class=" w-4/5 h-4/5 flex flex-col justify-center items-center" >
      <h1 class="text-4xl font-bold">
        Wybierz, o ile chcesz przedłużyć kod <span class="font-bold text-blue-400">{{ this.codeId }}</span>
      </h1>
      <select ref="extensionSelect" class="text-gray-800 text-2xl p-2 w-52 h-16 my-10">
        <option 
          v-for="timeOption in expirationOptions"
          :key="timeOption.asString"
          :value="timeOption.asNumber"
        >
          {{ timeOption.asString }}
        </option>
      </select>
      <div class="mt-10">
        <button
          class="bg-blue-500 text-white text-3xl p-4 w-40 rounded-xl"
          @click="extensionGallery"
        >
          Zapisz
        </button>
        <button
          class="bg-gray-700 text-blue-400 text-3xl p-4 w-40 ml-10 rounded-xl"
          @click="toggleExtensionGalleryLayer"
        >
          Anuluj
        </button>
      </div>
    </div>
  </div>
</template>

<script>

import expirationOptions  from  '../json_files/expirationOptions .json'

export default {
  data() {
    return {
      expirationOptions: expirationOptions,
      extensionValue: '',
    }
  },
  props: {
    codeId: String,
  },
  methods: {
    extensionGallery(){
      this.extensionValue = this.$refs.extensionSelect.value
      this.$emit('extension-gallery')
    },
    toggleExtensionGalleryLayer(){
      this.$emit('toggle-extension-gallery-layer')
    }
  }
}
</script>