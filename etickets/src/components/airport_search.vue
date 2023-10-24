<template>
  <div class="py-1 px-1">
    <div class="relative max-w-full">
      <input
        type="text"
        v-model="term"
        class="block px-2.5 pt-4 pb-2.5 w-full text-sm bg-transparent rounded-lg border appearance-none focus:ring-0 focus:outline-none text-telegram-text border-1 peer border-telegram-hint focus:border-telegram-primary"
        @keyup="activate"
        @input="activate"
        @click.stop="activate"
      />

      <label
        class="absolute left-1 top-2 z-10 px-2 text-sm duration-300 transform scale-75 -translate-y-4 bg-telegram-bg origin-[0] peer-focus:px-2 text-telegram-hint peer-focus:text-telegram-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4"
        >{{ props.label }}</label
      >
      <div
        class="absolute z-20 w-full rounded-md border border-telegram-secondary-bg airport-dropdown bg-telegram-bg"
        :class="{ hidden: !isActive }"
      >
        <template v-for="airport in filteredAirports" :key="airport.code">
          <div
            @click="selectAirport(airport)"
            class="flex items-center py-2 px-4 mr-1 cursor-pointer hover:bg-telegram-secondary-bg"
          >
            <div class="flex-1">
              <p class="text-telegram-text">
                <span class="font-bold">({{ airport.code }})</span> {{ airport.name }}
              </p>
              <p class="text-sm text-telegram-hint">{{ airport.city }}, {{ airport.country }}</p>
            </div>
          </div>
          <div class="border-b border-telegram-secondary-bg"></div>
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
