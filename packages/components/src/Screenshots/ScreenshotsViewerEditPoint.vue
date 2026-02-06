<template>
  <div>
    <div
      v-for="pointer in pointers"
      :key="pointer.name"
      class="screenshots-viewer-edit-pointer"
      :style="{
        transform: `translate(${pointer.x - pointer.size / 2}px, ${pointer.y - pointer.size / 2}px)`,
        width: `${pointer.size}px`,
        height: `${pointer.size}px`,
        borderColor: pointer.color
      }"
    />
  </div>
</template>

<script setup lang="ts">
interface EditPointer {
  name: string
  x: number
  y: number
  cursor: string
  size: number
  color: string
}

defineProps<{
  pointers: EditPointer[]
}>()
</script>
