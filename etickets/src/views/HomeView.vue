<script setup>
import AirportSearch from '@/components/airport_search.vue'
import FlightDates from '@/components/flight_dates.vue'
import DirectionsCheck from '@/components/directions_check.vue'
import { ref, watch } from 'vue'
import { useSearchStore } from '@/stores/search'
const searchStore = useSearchStore()

import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const route = useRoute()
const from = ref('')
const to = ref('')
const way = ref('oneway')
const dates = ref([])

const updateAndNavigate = () => {
  searchStore.updateSearch({ from: from.value, to: to.value, dates: dates.value })
  router.push('/flights')
}
</script>
<template>
  <div class="home">
    <h1 class="p-2 text-center uppercase text-telegram-text">Поиск билетов</h1>
  </div>
  <div class="form">
    <AirportSearch label="Откуда" v-model="from" />
    <AirportSearch label="Куда" v-model="to" />
    <DirectionsCheck v-model="way" />
    <FlightDates v-model="dates" :oneway="way == 'oneway'" />
    <div class="py-1 px-1 w-full">
      <router-link
        to="/flights"
        custom
        class="py-2 px-4 w-full rounded-md text-telegram-primary-text bg-telegram-primary"
      >
        <button
          @click="updateAndNavigate"
          class="py-2 px-4 w-full rounded-md text-telegram-primary-text bg-telegram-primary"
        >
          Найти
        </button>
      </router-link>
    </div>
  </div>
</template>
