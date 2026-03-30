<template>
  <div class="cards-container">
    <div class="user-list">
      <div class="user-list-item" v-for="i in 4" :key="i">
        <Skeleton :width="48" :height="48" :circle="true" :border-radius="4" />
        <div class="user-list-info">
          <Skeleton :height="18" :width="100" />
          <Skeleton :height="14" :width="70" />
        </div>
        <div class="user-list-actions">
          <Skeleton :height="32" :width="32" :circle="true" />
          <Skeleton :height="32" :width="32" :circle="true" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Skeleton from 'hilbert-vue3-ui/Skeleton'
import 'hilbert-vue3-ui/Skeleton/style'
</script>

<style scoped>
.cards-container {
  max-width: 1000px;
  margin: 0 auto;
}

.user-list {
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 24px;
}

.user-list-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
  border-bottom: 1px solid #f0f0f0;
}

.user-list-item:last-child {
  border-bottom: none;
}

.user-list-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.user-list-actions {
  display: flex;
  gap: 8px;
}
</style>
