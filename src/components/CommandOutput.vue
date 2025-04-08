<script setup>
import {computed} from "vue";
import {parse} from "ansicolor";
import Console from "@/components/Console.vue";
import OutputBlock from "@/components/CommandOutput/OutputBlock.vue";


const {output} = defineProps(['output'])

defineEmits(['hide-terminal'])


</script>

<template>
  <div class="container mx-auto cursor-pointer rounded-2xl overflow-hidden px-4 md:px-0">
    <div class="rounded-2xl shadow-2xl bg-gray-800 text-gray-300 p-6 overflow-y-auto" style="max-height: 50vh;">
      <div v-for="op in output">
        <OutputBlock :output="op"/>
      </div>

    </div>
  </div>
</template>

<style scoped>

</style>