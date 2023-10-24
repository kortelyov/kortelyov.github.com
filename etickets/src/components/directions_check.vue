<template>
  <div class="flex flex-row py-3 px-1">
    <div class="flex flex-row items-center mr-2">
      <input
        id="oneway"
        type="radio"
        value="oneway"
        name="default-radio"
        v-model="way"
        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-2 focus:ring-telegram-primary"
      />
      <label for="default-radio-1" class="ml-2 text-sm">В одну сторону</label>
    </div>
    <div class="flex flex-row items-center">
      <input
        id="round"
        type="radio"
        value="round"
        name="default-radio"
        v-model="way"
        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-2 focus:ring-telegram-primary"
      />
      <label for="default-radio-1" class="ml-2 text-sm">Туда-Обратно</label>
    </div>
  </div>
</template>
<script setup>
import { ref, watch } from 'vue'
const props = defineProps(['label', 'modelValue'])
const way = ref(props.modelValue)
const emit = defineEmits(['update:modelValue'])
watch(way, (value) => {
  emit('update:modelValue', value)
})
</script>
