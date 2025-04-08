<script setup>
import {ref} from "vue";

const {option, id, emits} = defineProps(['option', 'id', 'emits'])
defineEmits(['clear-error-msg'])

const input = ref('')

function handleInput() {
  emits('update-field', option.name, input)
}
</script>

<template>
  <input :name="option.name"
         :id="id"
         type="text"
         class="px-4 py-2 rounded-lg border w-full focus:outline-none focus:border-primary transition-ease-200"
         :placeholder="'Enter ' + option.title.toLowerCase() + '...'"
         :required="option.required && false"
         @input="handleInput"
         @focus="$emit('clear-error-msg')"
         v-model="input"
  >
</template>

<style scoped>

</style>