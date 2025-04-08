<script setup>
const {selectedCommand, loading} = defineProps(['selectedCommand', 'loading'])
defineEmits(['close'])
</script>

<template>
  <transition
      enter-active-class="transition-all ease-out-quad duration-300"
      leave-active-class="transition-all ease-in-quad duration-50"
      enter-class="opacity-0"
      enter-to-class="opacity-100"
      leave-class="opacity-100"
      leave-to-class="opacity-0"
  >
    <div v-if="selectedCommand != null || loading" @click="$emit('close')"
         class="fixed w-full h-full top-0 left-0" :class="{'cursor-pointer': selectedCommand != null}">
      <div class="bg-black opacity-20 w-full h-full"></div>
    </div>
  </transition>
</template>

<style scoped>

</style>