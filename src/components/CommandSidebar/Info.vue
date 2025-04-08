<script setup>
import CloseButton from "@/components/CommandSidebar/Button/CloseButton.vue";

defineProps(['command'])
defineEmits(['close'])
</script>

<template>
  <div class="flex items-center justify-between mb-2">

    <div class="text-2xl">
      {{ command.name }}
    </div>

    <CloseButton @close="$emit('close')"/>

  </div>

  <div class="text-xs text-gray-400" :class="{'mb-6': command.arguments != null}">
    {{ command.description }}
  </div>
</template>

<style scoped>

</style>