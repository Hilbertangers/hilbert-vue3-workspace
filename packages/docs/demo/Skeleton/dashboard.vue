<template>
  <div class="dashboard-container">
    <div class="stats-grid">
      <div class="stat-card" v-for="i in 4" :key="i">
        <div class="stat-header">
          <Skeleton :height="14" :width="80" />
          <Skeleton :width="20" :height="20" :circle="true" />
        </div>
        <div class="stat-value">
          <Skeleton :height="32" :width="100" />
        </div>
        <div class="stat-footer">
          <Skeleton :height="12" :width="60" />
        </div>
      </div>
    </div>

    <div class="charts-section">
      <div class="chart-card">
        <div class="chart-header">
          <Skeleton :height="18" :width="120" />
        </div>
        <div class="chart-body">
          <Skeleton width="100%" :height="250" :border-radius="8" />
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
.dashboard-container {
  max-width: 1200px;
  margin: 0 auto;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 16px;
  margin-bottom: 24px;
}

.stat-card {
  background: #fff;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
}

.stat-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.stat-value {
  margin-bottom: 12px;
}

.charts-section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 16px;
  margin-bottom: 24px;
}

.chart-card {
  background: #fff;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
}

.chart-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.chart-body {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
