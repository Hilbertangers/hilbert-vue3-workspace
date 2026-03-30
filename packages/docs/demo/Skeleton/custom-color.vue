<template>
  <div style="display: flex; flex-direction: column; gap: 16px;">
    <p>自定义颜色</p>

    <div style="display: flex; flex-direction: column; gap: 8px;">
      <p style="margin-bottom: 4px; font-size: 14px; color: #666;">紫色主题</p>
      <Skeleton
        :width="200"
        :height="60"
        base-color="#f3e5f5"
        highlight-color="#e1bee7"
      />
    </div>

    <div style="display: flex; flex-direction: column; gap: 8px;">
      <p style="margin-bottom: 4px; font-size: 14px; color: #666;">蓝色主题</p>
      <Skeleton
        :width="200"
        :height="60"
        base-color="#e3f2fd"
        highlight-color="#bbdefb"
      />
    </div>

    <div style="display: flex; flex-direction: column; gap: 8px;">
      <p style="margin-bottom: 4px; font-size: 14px; color: #666;">绿色主题</p>
      <Skeleton
        :width="200"
        :height="60"
        base-color="#e8f5e9"
        highlight-color="#c8e6c9"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import Skeleton from 'hilbert-vue3-ui/Skeleton'
import 'hilbert-vue3-ui/Skeleton/style'
</script>
