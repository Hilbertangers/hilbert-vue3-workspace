<template>
  <div class="screenshots-sizecolor">
      <Size :isFont="isFont" :value="size" @onChange="handleSizeChange" />
      <Color :value="color" @onChange="handleColorChange" />
  </div>
</template>

<script setup lang="ts">
import Size from './Size.vue'
import Color from './Color.vue'

defineProps<{
  size: number
  color: string
  isFont: boolean
}>()

const emit = defineEmits<{
  (e: 'onSizeChange', value: number): void
  (e: 'onColorChange', value: string): void
}>()

function handleSizeChange(v: number) {
  emit('onSizeChange', v)
}

function handleColorChange(v: string) {
  emit('onColorChange', v)
}
</script>
