<template>
  <div style="display: flex; flex-direction: column; gap: 16px;">
    <p>不同形状和尺寸</p>

    <div style="display: flex; align-items: center; gap: 16px;">
      <div style="display: flex; flex-direction: column; gap: 4px; align-items: center;">
        <Skeleton :width="60" :height="60" :circle="true" />
        <span style="font-size: 12px; color: #666;">圆形头像</span>
      </div>

      <div style="display: flex; flex-direction: column; gap: 4px; align-items: center;">
        <Skeleton :width="60" :height="60" />
        <span style="font-size: 12px; color: #666;">方块图片</span>
      </div>

      <div style="display: flex; flex-direction: column; gap: 4px; align-items: center;">
        <Skeleton :width="100" :height="60" :border-radius="8" />
        <span style="font-size: 12px; color: #666;">圆角卡片</span>
      </div>
    </div>

    <div style="display: flex; flex-direction: column; gap: 8px;">
      <p style="margin-bottom: 4px; font-size: 14px; color: #666;">自定义尺寸</p>
      <Skeleton :width="200" :height="12" />
      <Skeleton :width="150" :height="12" />
      <Skeleton :width="'100%'" :height="120" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Skeleton from 'hilbert-vue3-ui/Skeleton'
import 'hilbert-vue3-ui/Skeleton/style'
</script>
