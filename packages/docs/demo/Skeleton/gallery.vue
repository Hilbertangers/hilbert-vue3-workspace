<template>
  <div class="gallery-container">
    <div class="masonry-grid">
      <div class="masonry-item" v-for="i in 8" :key="i">
        <Skeleton width="100%" :height="heights[i - 1]" :border-radius="8" />
        <div class="masonry-meta">
          <Skeleton :height="14" :width="85" />
          <Skeleton :height="12" :width="60" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Skeleton from 'hilbert-vue3-ui/Skeleton'
import 'hilbert-vue3-ui/Skeleton/style'

const heights = ref([180, 220, 160, 200, 190, 170, 210, 175])
</script>

<style scoped>
.gallery-container {
  max-width: 1000px;
  margin: 0 auto;
}

.masonry-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
  margin-bottom: 32px;
}

.masonry-item {
  break-inside: avoid;
  margin-bottom: 0;
}

.masonry-meta {
  padding: 12px 0 4px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}
</style>
