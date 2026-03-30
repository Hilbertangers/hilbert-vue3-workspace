<template>
  <div class="phone-mockup">
    <div class="phone-screen">
      <div class="status-bar">
        <Skeleton class="status-time" :width="50" :height="16" />
        <div class="status-icons">
          <Skeleton :width="16" :height="16" :circle="true" />
          <Skeleton :width="16" :height="16" :circle="true" />
          <Skeleton :width="16" :height="16" :circle="true" />
        </div>
      </div>

      <div class="search-bar">
        <Skeleton :width="20" :height="20" />
        <Skeleton class="search-input" :height="36" :border-radius="18" />
      </div>

      <div class="category-nav">
        <div class="category-item" v-for="i in 5" :key="i">
          <Skeleton :width="44" :height="44" :circle="true" />
          <Skeleton :height="12" :width="40" />
        </div>
      </div>

      <div class="banner-section">
        <Skeleton class="banner-skeleton" :height="140" :border-radius="8" />
        <div class="banner-dots">
          <Skeleton v-for="j in 3" :key="j" :width="6" :height="6" :circle="true" />
        </div>
      </div>

      <div class="flash-sale-section">
        <div class="section-header">
          <Skeleton class="section-title" :height="22" :width="80" />
          <div class="countdown">
            <Skeleton :height="22" :width="20" />
            <Skeleton :height="22" :width="20" />
            <Skeleton :height="22" :width="20" />
          </div>
          <Skeleton class="more-btn" :height="20" :width="40" />
        </div>
        <div class="flash-products">
          <div class="flash-item" v-for="i in 4" :key="i">
            <Skeleton :width="90" :height="90" :border-radius="4" />
            <Skeleton class="flash-price" :height="18" :width="50" />
          </div>
        </div>
      </div>

      <div class="recommend-section">
        <Skeleton :height="24" :width="60" />
      </div>

      <div class="product-grid">
        <div class="product-card" v-for="i in 4" :key="i">
          <Skeleton width="100%" :height="100" :border-radius="8" />
          <div class="product-info">
            <Skeleton class="product-title" :height="14" :width="85" />
            <Skeleton class="product-title" :height="14" :width="60" />
            <Skeleton class="product-tags" :height="16" :width="45" />
            <div class="product-price-row">
              <Skeleton class="price" :height="20" :width="50" />
              <Skeleton class="sales" :height="14" :width="40" />
            </div>
          </div>
        </div>
      </div>

      <div class="bottom-nav">
        <div class="nav-item" v-for="i in 5" :key="i">
          <Skeleton :width="24" :height="24" :circle="true" />
          <Skeleton :height="10" :width="30" />
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
.phone-mockup {
  width: 100%;
  max-width: 375px;
  margin: 0 auto;
  background: #000;
  border-radius: 40px;
  padding: 12px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

.phone-screen {
  background: #f5f5f5;
  min-height: 667px;
  border-radius: 32px;
  overflow: hidden;
}

.status-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 20px 0;
  background: #fff;
  position: sticky;
  top: 0;
  z-index: 10;
}

.search-bar {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 20px 10px;
  background: #fff;
  position: sticky;
  top: 32px;
  z-index: 9;
}

.category-nav {
  display: flex;
  justify-content: space-around;
  padding: 12px 10px 10px;
  background: #fff;
  margin-bottom: 6px;
}

.category-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
}

.banner-section {
  position: relative;
  padding: 12px 20px;
  background: #fff;
  margin-bottom: 6px;
}

.banner-dots {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 8px;
}

.flash-sale-section {
  padding: 12px 20px;
  background: #fff;
  margin-bottom: 6px;
}

.section-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
}

.flash-products {
  display: flex;
  gap: 12px;
  overflow-x: auto;
  padding-bottom: 0;
}

.flash-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  flex-shrink: 0;
}

.recommend-section {
  padding: 12px 20px 8px;
  background: #fff;
  margin-bottom: 6px;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
  padding: 8px 20px;
  background: #fff;
}

.product-card {
  padding: 8px;
  background: #fff;
  border-radius: 8px;
  border: 1px solid #f5f5f5;
}

.product-info {
  margin-top: 8px;
}

.product-title {
  margin-bottom: 4px;
}

.product-price-row {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

.bottom-nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 6px 0 8px;
  background: #fff;
  border-top: 1px solid #f5f5f5;
  position: sticky;
  bottom: 0;
}

.nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}
</style>
