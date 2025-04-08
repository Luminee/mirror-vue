<script setup>
import Info from "@/components/CommandSidebar/Info.vue";
import ArgumentInput from "@/components/CommandSidebar/ArgumentInput.vue";
import OptionInput from "@/components/CommandSidebar/OptionInput.vue";
import RunButton from "@/components/CommandSidebar/Button/RunButton.vue";
import {ref} from "vue";

const {command} = defineProps(['command'])
const emit = defineEmits(['close', 'run'])

const formData = ref([])

Object.values(command.arguments ?? []).forEach(argument => {
  formData.value[argument.name] = ''
})

Object.values(command.options ?? []).forEach(option => {
  formData.value[option.name] = option.default ?? ''
})

function updateFormData(field, val) {
  formData.value[field] = val.value
}

function onSubmit() {
  let fd = new FormData()
  for (let key of Object.keys(formData.value)) {
    fd.append(key, formData.value[key])
  }

  emit('run', command, fd)

  emit('close')
}
</script>

<template>
  <form ref="submitForm" @submit.prevent="onSubmit" class="flex flex-col h-full relative">

    <div class="sticky top-0 bg-white px-6 py-4">
      <Info :command="command" @close="$emit('close')"/>

      <div v-if="command.arguments != null">
        <div v-for="argument in command.arguments" :key="argument.name" class="mt-4">
          <ArgumentInput :argument="argument" :command="command" @update-field="updateFormData"/>
        </div>
      </div>

    </div>

    <div class="flex-1 bg-gray-50 px-6 py-5">

      <div v-if="command.options != null" class="-my-6">

        <div v-for="option in command.options" :key="option.name" class="my-6">
          <OptionInput :option="option" :command="command" @update-field="updateFormData"/>
        </div>

      </div>

    </div>

    <RunButton/>

  </form>
</template>

<style scoped>

</style>