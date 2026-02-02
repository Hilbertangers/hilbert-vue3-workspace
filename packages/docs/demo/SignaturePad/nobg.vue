<template>
  <div class="signature-pad-demo">
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
</template>

<script setup lang="ts">
import SignaturePad from 'hilbert-vue3-ui/SignaturePad'
import 'hilbert-vue3-ui/SignaturePad/style'

function handleSave(dataUrl: string) {
  console.log('签名图片数据:', dataUrl)
  // 这里可以处理签名图片数据
}
</script>

<style scoped>
.signature-pad-demo {
  position: relative;
  width: 100%;
  height: 280px;
}
</style>
