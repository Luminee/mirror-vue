<script setup>
import CommandCard from "@/components/CommandCard.vue";

defineProps(['name', 'commands'])

</script>

<template>
  <div class="mt-6 mb-10">
    <div class="text-3xl text-gray-400 mb-6">
      {{ name === '__' ? 'laravel' : name }}
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <CommandCard @click="$emit('onSelect', command)" v-for="command in commands" :command="command"/>
    </div>
  </div>
</template>

<style scoped>

</style>