<script setup>
import {ref, onMounted, getCurrentInstance, computed} from "vue";
import TopBar from "@/components/TopBar.vue";
import Group from "@/components/Group.vue";
import CommandSidebar from "@/components/CommandSidebar.vue";
import Overlay from "@/components/CommandSidebar/Overlay.vue";
import CommandOutput from "@/components/CommandOutput.vue";
import Console from "@/components/Console.vue";

const proxy = getCurrentInstance()
const axios = proxy.appContext.config.globalProperties.$axios

const groups = ref({})
const loading = ref(false)
const search = ref('')
const selectedCommand = ref(null)
const output = ref([])
const errors = ref([])
const old = ref(null)

const showTerminal = ref(false)

function onSearch(str) {
  search.value = str
}

function onSelect(command) {
  selectedCommand.value = command
}

function runCommand(command, formData) {
  loading.value = true

  axios.post(url + '/' + command.name, formData)
      .then((response) => {
        output.value.push({
          formData: formData,
          data: response.data
        })
        if (!showTerminal.value) {
          showTerminal.value = true
        }
      })
      .catch((err) => {
        selectedCommand.value = command;
        let data = err.response.data;

        if (data.errors) {
          errors.value = data.errors;
        }

        old.value = [];
        formData.forEach((val, k) => {
          old.value[k] = val
        });
      })
      .finally(() => {
        loading.value = false
      })

}

function onClose() {
  selectedCommand.value = null
}

function onShowTerminal() {
  showTerminal.value = true
}

function onHideTerminal() {
  showTerminal.value = false
}

onMounted(() => {
  loading.value = true

  axios.get(url)
      .then((response) => {
        groups.value = response.data
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        loading.value = false
      })
})

const filteredGroups = computed(() => {
  if (search.value === '') {
    return groups.value
  }

  let res = {}
  let searchLower = search.value.toString().toLowerCase()

  for (let key of Object.keys(groups.value)) {

    let group = groups.value[key];
    if (key.toLowerCase().includes(searchLower)) {
      res[key] = group
      continue
    }

    let tmpGroup = []

    for (let command of Object.values(group)) {
      if (command.name.toLowerCase().includes(searchLower)) {
        tmpGroup.push(command)
      }
    }

    if (tmpGroup.length > 0) {
      res[key] = tmpGroup
    }
  }

  return res
})
</script>

<template>
  <div class="w-full antialiased">
    <!--  Display-->
    <div class="px-6 pb-4">
      <div class="container mx-auto">
        <TopBar @onSearch="onSearch"/>

        <div v-for="(commands, key) in filteredGroups">
          <Group @onSelect="onSelect" :name="key" :commands="commands"/>
        </div>

      </div>
    </div>

    <!--    Overlay-->

    <Overlay :selectedCommand="selectedCommand" :loading="loading" @close="onClose"/>

    <!--    Sidebar-->
    <transition enter-active-class="transition-all ease-out-quad duration-300"
                leave-active-class="transition-all ease-in-quad duration-50"
                enter-from-class="transform translate-x-full"
                enter-to-class="transform translate-x-0"
                leave-from-class="transform translate-x-0"
                leave-to-class="transform translate-x-full">

      <div v-if="selectedCommand != null"
           class="fixed max-w-lg w-full h-full overflow-x-hidden bg-white overflow-y-auto top-0 right-0">
        <CommandSidebar :command="selectedCommand" @run="runCommand" @close="onClose"/>

      </div>

    </transition>

    <!--    Loading spinner-->
    <transition
        enter-active-class="transition-all ease-out-quad duration-300"
        leave-active-class="transition-all ease-in-quad duration-50"
        enter-class="opacity-0"
        enter-to-class="opacity-100"
        leave-class="opacity-100"
        leave-to-class="opacity-0"
    >
      <div v-if="loading" class="fixed w-full h-full top-0 left-0 flex items-center justify-center text-primary">
        <div class="w-8 h-8 text-primary animate-spin">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" class="w-full h-full" viewBox="0 0 24 24"
               stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
          </svg>
        </div>
      </div>
    </transition>

    <transition
        enter-active-class="transition-all ease-out-quad duration-300"
        leave-active-class="transition-all ease-in-quad duration-50"
        enter-class="transform translate-y-full"
        enter-to-class="transform translate-y-0"
        leave-class="transform translate-y-0"
        leave-to-class="transform translate-y-full"
    >
      <div v-if="showTerminal" class="w-full fixed bottom-0 left-0 mb-8">

        <CommandOutput :output="output" @hide-terminal="onHideTerminal"/>

      </div>
    </transition>

    <Console :show="showTerminal" @hide-terminal="onHideTerminal" @show-terminal="onShowTerminal"/>

  </div>
</template>

<style scoped>

</style>
