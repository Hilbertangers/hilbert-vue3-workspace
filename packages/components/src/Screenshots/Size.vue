<template>
  <div class="screenshots-size">
    <template v-if="!isFont">
      <div
        v-for="t in border"
        :key="t"
        :class="[
          'screenshots-size-item',
          t === value ? 'screenshots-size-active' : ''
        ]"
        @click="handleChange(t)"
      >
        <div
          class="screenshots-size-pointer"
          :style="{
            width: t * 1.8 + 'px',
            height: t * 1.8 + 'px'
          }"
        />
      </div>
    </template>
    <div v-else class="screenshots-size-font">
      <select
        :value="value"
        @change="(e) => $emit('onChange', Number((e.target as HTMLSelectElement).value))"
      >
        <option
          v-for="(t, i) in font"
          :value="t"
          :key="i">{{t}}</option>
      </select>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  value: number
  isFont: boolean
}>()

const border = ref([3, 6, 9])
const font = ref([14, 17, 20, 23, 26, 29, 32, 64, 96, 128])

const emit = defineEmits<{
  (e: 'onChange', value: number): void
}>()

function handleChange(t: number) {
  emit('onChange', t)
}
</script>
