<script setup>
import {ref} from "vue";
import Badge from "@/components/CommandCard/Badge.vue";

defineProps(['command'])

const hover = ref(false)

</script>

<template>
  <div class="h-full">
    <div @mouseenter="hover = true" @mouseleave="hover = false" :class="{'shadow-2xl': hover}"
         class="flex h-full flex-col px-8 py-7 rounded-xl bg-white cursor-pointer
         transition-ease-200">
      <div :class="{'text-gray-700': !hover, 'text-primary': hover}"
           class="text-xl mb-4 transition-ease-200">
        {{ command.name }}
      </div>

      <div :class="{'mb-7': command.arguments != null || command.options != null}"
           class="text-gray-500">
        {{ command.description }}
      </div>

      <div class="flex items-center mt-auto justify-end">
        <Badge v-if="command.arguments != null" name="Argument"
               :count="Object.keys(command.arguments).length" :active="hover"/>

        <div v-if="command.options != null" class="ml-2">
          <Badge name="Option" :count="Object.keys(command.options).length" :active="hover"/>
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped>

</style>