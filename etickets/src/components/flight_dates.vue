<script setup>
import VueTailwindDatepicker from 'vue-tailwind-datepicker'
import { ref, watch } from 'vue'
const props = defineProps(['label', 'modelValue', 'oneway'])
const emit = defineEmits(['update:modelValue'])
const dateValue = ref(props.modelValue)
watch(dateValue, (value) => {
  emit('update:modelValue', value)
})

const formatter = ref({
  date: 'DD MMM YYYY',
  month: 'MMM'
})
</script>
<template>
  <div class="py-1 px-1 replative">
    <vue-tailwind-datepicker
      v-model="dateValue"
      input-classes="block"
      v-slot="{ value, placeholder }"
      :formatter="formatter"
      :as-single="props.oneway"
    >
      <input
        type="text"
        :value="value || placeholder"
        class="block px-2.5 pt-4 pb-2.5 w-full text-sm text-gray-900 bg-transparent rounded-lg border appearance-none cursor-pointer focus:border-blue-600 focus:ring-0 focus:outline-none border-1 peer"
        readonly
      />
      <label
        for="dates"
        class="absolute left-1 top-2 z-10 px-2 text-sm duration-300 transform scale-75 -translate-y-4 bg-telegram-bg origin-[0] peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4"
        >Дат{{ !props.oneway ? 'ы' : 'а' }}</label
      >
    </vue-tailwind-datepicker>
  </div>
</template>
