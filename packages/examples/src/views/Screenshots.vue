<template>
  <div class="screenshots-demo">
    <h2>Screenshots - 截图工具组件</h2>
    <div class="component-demo">
      <div class="demo-group">
        <h3>基础用法</h3>
        <div class="demo-column">
          <div class="screenshots-demo">
            <button @click="startScreenshots = true">开启截图</button>
            <img
              v-if="!startScreenshots && screenshotImage"
              :src="screenshotImage"
              alt="截图结果"
              style="display: block; width: 500px; height: 500px"
            />
            <Screenshots
              v-if="startScreenshots"
              :image="screenshotImage"
              :width="500"
              :height="500"
              @onCancel="handleScreenshotsCancel"
              @onOk="handleScreenshotsOk"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import { Screenshots } from 'hilbert-vue3-ui/Screenshots'
import 'hilbert-vue3-ui/Screenshots/style'

const startScreenshots = ref(false)
const screenshotImage = ref('/screenshot.png')

function handleScreenshotsCancel() {
  startScreenshots.value = false
  console.log('Screenshots::CANCEL')
}

function handleScreenshotsOk({ viewer, dataURL }: { viewer: any; dataURL: string }) {
  startScreenshots.value = false
  console.log('Screenshots::OK', dataURL, viewer)
}
</script>

<style scoped>
.screenshots-demo {
  font-family: var(--ui-font-family);
  color: var(--ui-color-gray-900);
  line-height: 1.6;
}

.screenshots-demo h2 {
  font-size: var(--ui-font-size-xl);
  margin-bottom: var(--ui-space-6);
  padding-bottom: var(--ui-space-2);
  border-bottom: 1px solid var(--ui-color-gray-200);
}

.component-demo {
  background: var(--ui-color-white);
  border-radius: var(--ui-border-radius-lg);
  padding: var(--ui-space-6);
  box-shadow: var(--ui-shadow);
}

.demo-group {
  margin-bottom: var(--ui-space-6);
}

.demo-group:last-child {
  margin-bottom: 0;
}

.demo-group h3 {
  font-size: var(--ui-font-size-lg);
  margin-bottom: var(--ui-space-4);
  color: var(--ui-color-gray-700);
}

.demo-column {
  display: flex;
  flex-direction: column;
  gap: var(--ui-space-4);
  max-width: 400px;
}

.demo-column p {
  margin: 0;
  color: var(--ui-color-gray-600);
  font-size: var(--ui-font-size-sm);
}

.screenshots-demo {
  position: relative;
  width: 100%;
  min-height: 500px;
}

.screenshots-demo button {
  padding: 8px 16px;
  background: #1890ff;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  margin-bottom: 16px;
  transition: background-color 0.2s;
}

.screenshots-demo button:hover {
  background: #40a9ff;
}
</style>
