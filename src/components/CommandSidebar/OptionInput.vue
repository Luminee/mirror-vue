<script setup>
import {computed, ref} from "vue";
import CheckboxInput from "@/components/CommandSidebar/OptionInput/CheckboxInput.vue";
import TextInput from "@/components/CommandSidebar/OptionInput/TextInput.vue";
import ArrayInput from "@/components/CommandSidebar/OptionInput/ArrayInput.vue";

const {option, command} = defineProps(['option', 'command'])
defineEmits(['update-field'])

const errorMsg = ref('')

const id = computed(() => {
  return option.name + command.name
})

function clearErrorMsg() {
  errorMsg.value = ''
}
</script>

<template>
  <div>

    <div v-if="option['accept_value']">

      <label :for="id" class="block text-gray-500 mb-1 text-sm">
        {{ option.title }}
        <span v-if="option.required" class="text-primary">*</span>
        <span v-if="option.array" class="px-1 py-px rounded text-xs bg-gray-200">array</span>
      </label>

      <div v-if="option['array']">

        Array
        <ArrayInput
            :id="id"
            :option="option"
            @clear-error-msg="clearErrorMsg"
            :emits="$emit"/>

      </div>

      <div v-else>

        Text
        <TextInput
            :id="id"
            :option="option"
            @clear-error-msg="clearErrorMsg"
            :emits="$emit"/>

      </div>

    </div>

    <div v-else>

      <CheckboxInput
          :id="id"
          :option="option"
          @clear-error-msg="clearErrorMsg"
          :emits="$emit"/>

    </div>

    <!--    Description and error message-->
    <div class="text-xs mt-1">
      <div class="text-gray-400" v-if="option.description != null && !errorMsg">
        {{ option.description }}
      </div>

      <div class="text-red-800 opacity-80" v-else-if="errorMsg">
        {{ errorMsg }}
      </div>
    </div>

  </div>
</template>

<style scoped>

</style>