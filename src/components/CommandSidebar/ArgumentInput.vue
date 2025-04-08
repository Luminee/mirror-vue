<script setup>
import {computed, ref} from "vue";

const {command, argument} = defineProps(['command', 'argument'])
const emit = defineEmits(['update-field'])

const value = ref('')
const errorMsg = ref('')

const id = computed(() => {
  return argument.name + command.name
})

function handleInput() {
  emit('update-field', argument.name, value)
}

</script>

<template>
  <div>
    <label :for="id" class="flex items-center text-gray-500 mb-1">
      {{ argument.title }}
      <span class="px-1 py-px rounded text-xs ml-2"
            :class="argument.required ? 'bg-red-100 text-primary' : 'text-green-500 bg-green-100'">
        {{ argument.required ? 'Required' : 'Optional' }}
      </span>
    </label>

    <input
        class="px-5 py-3 w-full border rounded-lg focus:border-primary transition-ease-200 focus:outline-none"
        type="text"
        :id="id"
        :name="argument.name"
        :placeholder="'Enter ' + argument.title.toLowerCase() + '...'"
        v-model="value"
        @input="handleInput"
        @focus="errorMsg = ''"
    >
    <div class="text-xs mt-1">
      <div class="text-gray-400" v-if="argument.description != null && !errorMsg">
        {{ argument.description }}
      </div>

      <div class="text-red-800 opacity-80" v-else-if="errorMsg">
        {{ errorMsg }}
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>