<template>
  <div style="display: flex; flex-direction: column; gap: 16px;">
    <p>动画控制</p>

    <div style="display: flex; flex-direction: column; gap: 8px;">
      <p style="margin-bottom: 4px; font-size: 14px; color: #666;">默认动画</p>
      <Skeleton :width="200" :height="60" />
    </div>

    <div style="display: flex; flex-direction: column; gap: 8px;">
      <p style="margin-bottom: 4px; font-size: 14px; color: #666;">慢速动画（duration: 3s）</p>
      <Skeleton :width="200" :height="60" :duration="3" />
    </div>

    <div style="display: flex; flex-direction: column; gap: 8px;">
      <p style="margin-bottom: 4px; font-size: 14px; color: #666;">禁用动画（enableAnimation: false）</p>
      <Skeleton :width="200" :height="60" :enable-animation="false" />
    </div>

    <div style="display: flex; flex-direction: column; gap: 8px;">
      <p style="margin-bottom: 4px; font-size: 14px; color: #666;">从右向左动画（direction: 'rtl'）</p>
      <Skeleton :width="200" :height="60" direction="rtl" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Skeleton from 'hilbert-vue3-ui/Skeleton'
import 'hilbert-vue3-ui/Skeleton/style'
</script>
