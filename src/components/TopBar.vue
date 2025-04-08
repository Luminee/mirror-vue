<script setup>
import {ref} from "vue";

const home = ref('/')
const search = ref('')

function clear() {
  search.value = ''
}

</script>

<template>
  <div class="flex items-center py-6">
    <div class="ml-3 text-primary text-2xl">
      Mirror
    </div>

    <div class="ml-6 w-full max-w-md relative">
      <input v-model="search" @input="$emit('onSearch', search)"
             class="focus:outline-none ring-primary-500 focus:ring-2 focus:ring-opacity-50
             focus:bg-white w-full bg-gray-200 px-5 pr-12 py-3 rounded-lg
             transition-ease-200" type="text" placeholder="Search..">

      <button v-if="search !== ''"
              class="absolute top-0 right-0 flex items-center justify-center h-full px-4 cursor-pointer"
              @click="clear(); $emit('onSearch', '')">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" class="w-4 h-4" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>
    </div>

    <a :href="home"
       class="transition-ease-200 ml-auto hidden md:block px-4 py-2
       rounded-lg text-gray-500 hover:text-gray-800 hover:bg-gray-200">./home</a>
  </div>
</template>

<style scoped>

</style>