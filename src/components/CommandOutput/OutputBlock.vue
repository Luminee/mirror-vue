<script setup>
import {computed, ref} from "vue";
import {parse} from "ansicolor";

const {output} = defineProps(['output'])
const {formData, data} = output
const {command, status, output: opt} = data

const styledOutput = computed(() => {
  let styled = ''

  const {spans} = parse(opt.replaceAll('\n', '<br />'))
  for (let span of spans) {
    styled += `<span style="${span.css}">${span.text}</span>`
  }

  return styled
})

</script>

<template>
  <div class="mb-4 flex">
    <div class="bg-primary text-white px-3 py-1 rounded-lg">
      {{ command }}
    </div>
  </div>

  <div>
    <p v-for="(value) of formData" class="mb-2">
      [{{ value[0] }} : {{ value[1] === '' ? '--' : value[1] }}]
    </p>
  </div>

  <div class="mb-4 text-gray-500">
    Status: {{ status }}
  </div>

  <div class="whitespace-pre" v-html="styledOutput">
  </div>
</template>

<style scoped>

</style>