<script setup>
defineEmits(['close'])
</script>

<template>
  <button @click="$emit('close')"
          class="focus:outline-none flex items-center justify-center h-10 w-10 rounded-full bg-white hover:shadow-xl text-gray-500 hover:text-gray-800 hover:bg-gray-100 transition ease-in-out duration-200">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" class="h-4 w-4" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
    </svg>
  </button>
</template>

<style scoped>

</style>