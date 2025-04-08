<script setup>
defineProps(['name', 'count', 'active'])
</script>

<template>
  <div class="text-xs flex items-center">
    <div :class="{'bg-gray-100 text-gray-500': !active, 'bg-purple-50 text-primary': active}"
         class="rounded-l-md px-2 py-1 transition-ease-200">
      {{ name }}
    </div>

    <div :class="{'bg-gray-100 text-gray-500': !active, 'bg-purple-100 text-primary': active}"
         class="rounded-r-md px-2 py-1 transition-ease-200">
      {{ count }}
    </div>
  </div>

</template>

<style scoped>

</style>