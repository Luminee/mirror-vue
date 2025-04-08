<script setup>
defineProps(['show'])
defineEmits(['hide-terminal', 'show-terminal'])
</script>

<template>
  <div class="fixed justify-end left-1 bottom-1">
    <button @click="$emit(show ? 'hide-terminal' : 'show-terminal')"
            class="focus:outline-none items-center text-right rounded-lg justify-center px-2 py-0
              bg-white hover:shadow-xl text-primary hover:text-primary-m hover:bg-gray-200
            transition-ease-200">
      <span>Console </span>
      <svg v-if="!show" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 inline-block" fill="purple"
           viewBox="0 0 448 512">
        <path
            d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/>
      </svg>

      <svg v-if="show" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 inline-block" fill="purple"
           viewBox="0 0 448 512">
        <path
            d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z"/>
      </svg>

    </button>
  </div>
</template>

<style scoped>

</style>