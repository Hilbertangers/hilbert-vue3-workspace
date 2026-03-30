<template>
  <div class="signature-pad-demo">
    <h2>SignaturePad - 笔锋签字板组件</h2>
    <div class="component-demo">
      <div class="demo-group">
        <h3>基础用法</h3>
        <div class="demo-column">
          <div class="signature-pad-demo">
            <p>网格背景：</p>
            <SignaturePad
              :background="{
                type: 'grid',
                color: '#e5e5e5',
                gridSize: 20,
                opacity: 0.2
              }"
              @save="handleSave"
            />
          </div>
          <div class="signature-pad-demo">
            <p>横线背景：</p>
            <SignaturePad
              :background="{
                type: 'line',
                color: '#e5e5e5',
                lineHeight: 40,
                opacity: 0.2
              }"
              @save="handleSave"
            />
          </div>
          <div class="signature-pad-demo">
            <p>无背景：</p>
            <SignaturePad
              :background="{
                type: 'line',
                color: '#e5e5e5',
                lineHeight: 40,
                opacity: 0
              }"
              @save="handleSave"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { SignaturePad } from 'hilbert-vue3-ui/SignaturePad'
import 'hilbert-vue3-ui/SignaturePad/style'

function handleSave(dataUrl: string) {
  console.log('签名图片数据:', dataUrl)
  // 这里可以处理签名图片数据
}
</script>

<style scoped>
.signature-pad-demo {
  font-family: var(--ui-font-family);
  color: var(--ui-color-gray-900);
  line-height: 1.6;
}

.signature-pad-demo h2 {
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
}

.signature-pad-demo {
  position: relative;
  width: 100%;
  height: 280px;
  margin-bottom: 20px;
}

.signature-pad-demo p {
  margin: 0 0 10px 0;
  color: var(--ui-color-gray-700);
  font-size: var(--ui-font-size-sm);
}
</style>
