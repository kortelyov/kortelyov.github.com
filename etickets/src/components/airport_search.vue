<template>
  <div class="py-1 px-1">
    <div class="relative max-w-full">
      <input
        type="text"
        v-model="term"
        class="block px-2.5 pt-4 pb-2.5 w-full text-sm text-gray-900 bg-transparent rounded-lg border appearance-none focus:border-blue-600 focus:ring-0 focus:outline-none border-1 peer"
        @keyup="activate"
        @input="activate"
        @click.stop="activate"
      />

      <label
        class="absolute left-1 top-2 z-10 px-2 text-sm duration-300 transform scale-75 -translate-y-4 bg-telegram-bg origin-[0] peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4"
        >{{ props.label }}</label
      >
      <div
        class="absolute z-20 w-full rounded-md border airport-dropdown bg-telegram-bg"
        :class="{ hidden: !isActive }"
      >
        <template v-for="airport in filteredAirports" :key="airport.code">
          <div
            @click="selectAirport(airport)"
            class="flex items-center py-2 px-4 mr-1 cursor-pointer hover:bg-telegram-secondary-bg"
          >
            <div class="flex-1">
              <p>
                <span class="font-bold">({{ airport.code }})</span> {{ airport.name }}
              </p>
              <p class="text-sm text-gray-500">{{ airport.city }}, {{ airport.country }}</p>
            </div>
          </div>
          <div class="border-b"></div>
        </template>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { useAirportsStore } from '@/stores/airports'
import airports from '@/assets/airports.json'
const props = defineProps(['label', 'modelValue'])
const emit = defineEmits(['update:modelValue'])

const airportsStore = useAirportsStore()

const term = ref('')
const isActive = ref(false)

const filteredAirports = computed(() => {
  return airportsStore.searchByTerm(term.value)
})

const handleClickOutside = (event) => {
  const dropwdownElement = document.querySelector('.airport-dropdown')

  if (dropwdownElement && !dropwdownElement.contains(event.target.parentNode)) {
    isActive.value = false
  }
}

const selectAirport = (airport) => {
  term.value = airport.name
  isActive.value = false
  emit('update:modelValue', airport.name)
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})
const activate = () => {
  isActive.value = true
}
</script>
