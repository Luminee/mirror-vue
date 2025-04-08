<script setup>
import {ref} from "vue";

const {option, id, emits} = defineProps(['option', 'id', 'emits'])
defineEmits(['clear-error-msg'])

const checked = ref(false)

function handleInput() {
  emits('update-field', option.name, checked)
}

</script>

<template>
  <input :id="id" :name="option.name" type="checkbox" hidden :checked="checked"
         :required="option.required">
  <div class="flex items-center cursor-pointer" @change="$emit('clear-error-msg')"
       @click="checked = !checked; handleInput()">

    <div class="h-5 w-5 border bg-white rounded mr-2 flex items-center justify-center"
         :class="{'border-primary': checked}">
      <svg v-if="checked" xmlns="http://www.w3.org/2000/svg" class="text-primary w-4 h-4" fill="none"
           viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
      </svg>
    </div>

    <div class="block text-gray-700">
      {{ option.title }}
      <span v-if="option.required" class="text-red-500">*</span>
    </div>

  </div>
</template>

<style scoped>

</style>