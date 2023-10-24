<script setup>
import { ref, watch } from 'vue'
import { useSearchStore } from '@/stores/search'
import { useRouter, useRoute } from 'vue-router'
const searchStore = useSearchStore()
const router = useRouter()
const route = useRoute()
const fromType = ref('econom')
const toType = ref('econom')
if (searchStore.from === '' || searchStore.to === '' || searchStore.dates.length === 0) {
  router.push('/')
}
</script>
<template>
  <div class="p-5 w-full text-telegram-text">
    <div class="pb-5">
      <router-link to="/" class="text-telegram-link">Назад</router-link>
    </div>
    <p class="py-2">{{ searchStore.dates[0] }}</p>
    <div class="flex-row md:flex md:h-44">
      <div class="overflow-x-auto relative mr-2 mb-2 h-full grow">
        <div class="py-2 px-4 h-full rounded border">
          <div class="flex flex-col justify-between h-full">
            <div class="flex flex-col text-telegram-text">
              <span>{{ searchStore.from.code }}</span>
              <span class="text-sm text-telegram-hint">{{ searchStore.from.name }}</span>
            </div>
            <div class="flex flex-col text-telegram-text">
              <span>{{ searchStore.to.code }}</span>
              <span class="text-sm text-telegram-hint">{{ searchStore.to.name }}</span>
            </div>
            <div class="text-sm text-telegram-hint">Продолжительность полета 5ч 35мин</div>
          </div>
        </div>
      </div>
      <div class="flex overflow-x-auto relative flex-col mr-2 mb-2 h-full grow-0">
        <div class="mb-1 h-full rounded border">
          <div class="py-1 px-3 uppercase bg-telegram-primary text-telegram-primary-text">
            Эконом
          </div>
          <div class="py-2 px-3">
            <input
              id="fromtype"
              type="radio"
              value="econom"
              name="default-radio"
              v-model="fromType"
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-2 focus:ring-telegram-primary"
            />
            <label for="default-radio-1" class="ml-2 text-sm">4500 р.</label>
          </div>
        </div>
        <div class="mt-1 h-full rounded border">
          <div class="py-1 px-3 uppercase bg-telegram-primary text-telegram-primary-text">
            Бизнес
          </div>
          <div class="py-2 px-3">
            <input
              id="fromtype"
              type="radio"
              value="business"
              name="default-radio"
              v-model="fromType"
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-2 focus:ring-telegram-primary"
            />
            <label for="default-radio-1" class="ml-2 text-sm">15000 р.</label>
          </div>
        </div>
      </div>
    </div>

    <p class="pt-4 pb-2" v-if="searchStore.dates.length > 1">{{ searchStore.dates[1] }}</p>
    <div class="flex-row md:flex md:h-44" v-if="searchStore.dates.length > 1">
      <div class="overflow-x-auto relative mr-2 mb-2 h-full grow">
        <div class="py-2 px-4 h-full rounded border">
          <div class="flex flex-col justify-between h-full">
            <div class="flex flex-col text-telegram-text">
              <span>{{ searchStore.from.code }}</span>
              <span class="text-sm text-telegram-hint">{{ searchStore.to.name }}</span>
            </div>
            <div class="flex flex-col text-telegram-text">
              <span>{{ searchStore.to.code }}</span>
              <span class="text-sm text-telegram-hint">{{ searchStore.from.name }}</span>
            </div>
            <div class="text-sm text-telegram-hint">Продолжительность полета 5ч</div>
          </div>
        </div>
      </div>
      <div class="flex overflow-x-auto relative flex-col mr-2 mb-2 h-full grow-0">
        <div class="mb-1 h-full rounded border">
          <div class="py-1 px-3 uppercase bg-telegram-primary text-telegram-primary-text">
            Эконом
          </div>
          <div class="py-2 px-3">
            <input
              id="totype"
              type="radio"
              value="econom"
              name="totype"
              v-model="toType"
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-2 focus:ring-telegram-primary"
            />
            <label for="default-radio-1" class="ml-2 text-sm">5700 р.</label>
          </div>
        </div>
        <div class="mt-1 h-full rounded border">
          <div class="py-1 px-3 uppercase bg-telegram-primary text-telegram-primary-text">
            Бизнес
          </div>
          <div class="py-2 px-3">
            <input
              type="radio"
              value="business"
              name="totype"
              v-model="toType"
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-2 focus:ring-telegram-primary"
            />
            <label for="default-radio-1" class="ml-2 text-sm">17000 р.</label>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-4 w-full">
      <button
        class="py-2 px-4 w-full rounded bg-telegram-primary text-telegram-primary-text"
        @click="router.push('/payment')"
      >
        Оплатить
      </button>
    </div>
  </div>
</template>
