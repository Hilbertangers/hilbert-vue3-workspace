<template>
  <div class="article-container">
    <div class="article-card">
      <div class="article-header">
        <div class="author-info">
          <Skeleton :width="40" :height="40" :circle="true" />
          <div class="author-meta">
            <Skeleton :height="16" :width="120" />
            <Skeleton :height="12" :width="80" />
          </div>
        </div>
        <div class="article-actions">
          <Skeleton :width="24" :height="24" :circle="true" />
        </div>
      </div>
      <div class="article-content">
        <Skeleton :height="24" :width="90" :border-radius="4" />
        <Skeleton :height="14" :width="100" />
        <Skeleton :height="14" :width="95" />
        <Skeleton :height="14" :width="70" />
        <Skeleton :height="14" :width="85" />
        <br />
        <Skeleton :height="14" :width="98" />
        <Skeleton :height="14" :width="75" />
        <Skeleton :height="14" :width="92" />
        <Skeleton :height="14" :width="88" />
      </div>
      <div class="article-footer">
        <Skeleton :height="20" :width="60" />
        <div class="article-stats">
          <Skeleton :height="16" :width="50" />
          <Skeleton :height="16" :width="40" />
        </div>
      </div>
    </div>

    <div class="article-card">
      <div class="article-header">
        <div class="author-info">
          <Skeleton :width="40" :height="40" :circle="true" />
          <div class="author-meta">
            <Skeleton :height="16" :width="100" />
            <Skeleton :height="12" :width="70" />
          </div>
        </div>
      </div>
      <div class="article-content">
        <Skeleton :height="24" :width="80" :border-radius="4" />
        <Skeleton :height="14" :width="100" />
        <Skeleton :height="14" :width="88" />
        <Skeleton :height="14" :width="65" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Skeleton from 'hilbert-vue3-ui/Skeleton'
import 'hilbert-vue3-ui/Skeleton/style'
</script>

<style scoped>
.article-container {
  max-width: 800px;
  margin: 0 auto;
}

.article-card {
  background: #fff;
  border-radius: 12px;
  padding: 24px;
  margin-bottom: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.article-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.author-info {
  display: flex;
  gap: 12px;
  align-items: center;
}

.author-meta {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.article-content {
  margin-bottom: 16px;
}

.article-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.article-stats {
  display: flex;
  gap: 16px;
}
</style>
