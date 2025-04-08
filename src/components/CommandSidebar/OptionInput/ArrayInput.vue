<script setup>
import {ref} from "vue";

const {option, id, emits} = defineProps(['option', 'id', 'emits'])
defineEmits(['clear-error-msg'])

const items = ref([])
const arrayInput = ref('')

function handleInput() {
  emits('update-field', option.name, arrayInput)
}

</script>

<template>
  <div
      class="flex flex-wrap items-center cursor-text px-2 py-px border
            bg-white rounded-lg focus-within:border-primary transition-ease-200"
      @click="$refs.arrayInput.focus()">

    <input type="hidden" :name="option.name + '[]'" v-for="item in items" :value="item">

    <div
        v-for="item in items"
        class="cursor-pointer px-2 py-1 bg-gray-100 text-gray-800 hover:bg-gray-200
               mr-1 rounded my-1 transition-ease-200">
      {{ item }}
    </div>

    <input
        type="text"
        ref="arrayInput"
        :id="id"
        class="focus:outline-none bg-transparent flex-1 px-2 py-1 my-1"
        placeholder="Add item..."
        v-model="arrayInput"
        @input="handleInput"
        :required="option.required && items.length === 0"
        @focus="$emit('clear-error-msg')"
    >
  </div>
</template>

<style scoped>

</style>