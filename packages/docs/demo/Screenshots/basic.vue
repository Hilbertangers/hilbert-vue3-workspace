<script setup lang="ts">
import { ref } from 'vue'
import Screenshots from 'hilbert-vue3-ui/Screenshots'
import 'hilbert-vue3-ui/Screenshots/style'

const affix = process.env.NODE_ENV === 'production' ? '/hilbert-vue3-workspace/' : '/'

const start = ref(false)
const image = ref(affix + 'screenshot.png')

function onCancel() {
  start.value = false
  console.log('Screenshots::CANCEL')
}

function onOk({ viewer, dataURL }: { viewer: any; dataURL: string }) {
  start.value = false
  console.log('Screenshots::OK', dataURL, viewer)
}
</script>

<template>
  <div style="position: relative; width: 100%; min-height: 500px;">
    <button @click="start = true" style="padding: 8px 16px; background: #39f; color: white; border: none; border-radius: 4px; cursor: pointer; margin-bottom: 16px;">
      开启截图
    </button>
    <img
      v-if="!start"
      :src="image"
      style="display: block; width: 500px; height: 500px;"
    />
    <Screenshots
      v-if="start"
      :image="image"
      :width="500"
      :height="500"
      @onCancel="onCancel"
      @onOk="onOk"
    />
  </div>
</template>
