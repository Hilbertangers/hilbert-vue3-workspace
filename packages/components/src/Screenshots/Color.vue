<template>
  <div class="screenshots-color">
    <div
      v-for="color in colors"
      :key="color"
      :class="[
        'screenshots-color-item',
        color === value ? 'screenshots-color-active' : ''
      ]"
      :style="{ backgroundColor: color }"
      @click="() => $emit('onChange', color)"
    >
      <div class="screenshots-color-hook">
        <div class="screenshots-color-hook-symbol" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  value: string
}>()

const colors = ref([
  '#ee5126',
  '#fceb4d',
  '#90e746',
  '#51c0fa',
  '#7a7a7a',
  '#ffffff'
])

defineEmits<{
  (e: 'onChange', value: string): void
}>()
</script>
