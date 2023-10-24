<script setup>
import { ref, watch } from 'vue'
import { useSearchStore } from '@/stores/search'
import { useRouter, useRoute } from 'vue-router'
const searchStore = useSearchStore()
const router = useRouter()
const route = useRoute()
if (searchStore.from === '' || searchStore.to === '' || searchStore.dates.length === 0) {
  router.push('/')
}
</script>
<template>
  <div class="p-5 w-full text-telegram-text">
    <router-link to="/" class="text-telegram-link">Назад</router-link>
    <div class="overflow-x-auto relative mb-2 shadow-md sm:rounded-lg">
      <table class="p-2 w-full text-sm text-left border border-telegram-hint">
        <thead class="text-xs uppercase text-telegram-text">
          <tr>
            <th class="py-3 px-6">Маршрут</th>
            <th class="py-3 px-6">Дата</th>
            <th class="py-3 px-6">Номер рейса</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="py-3 px-6">{{ searchStore.from }}</td>
            <td class="py-3 px-6">{{ searchStore.dates[0] }}</td>
            <td class="py-3 px-6">LX2816</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div
      class="overflow-x-auto relative shadow-md sm:rounded-lg"
      v-if="searchStore.dates.length > 1"
    >
      <table class="p-2 w-full text-sm text-left border border-telegram-hint">
        <thead class="text-xs uppercase text-telegram-text">
          <tr>
            <th class="py-3 px-6">Маршрут</th>
            <th class="py-3 px-6">Дата</th>
            <th class="py-3 px-6">Номер рейса</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="py-3 px-6">{{ searchStore.to }}</td>
            <td class="py-3 px-6">{{ searchStore.dates[1] }}</td>
            <td class="py-3 px-6">LX2816</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
