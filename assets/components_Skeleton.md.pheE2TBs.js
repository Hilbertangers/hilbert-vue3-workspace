const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/dashboard.CDngbpj5.js","assets/chunks/index.BRyApJ95.js","assets/chunks/framework.BnfD-2QM.js","assets/chunks/gallery.Dvy-6GBf.js","assets/chunks/cards.CqYc9f3g.js","assets/chunks/article.0Mn2RmYB.js","assets/chunks/ecommerce.7oYmV3UM.js","assets/chunks/inline.m5JzsiyF.js","assets/chunks/animation.CqmkhWaL.js","assets/chunks/custom-color.BVCezKNW.js","assets/chunks/shape.D0iB5uTq.js","assets/chunks/count.DMcFyydE.js","assets/chunks/basic.DkGa95t6.js"])))=>i.map(i=>d[i]);
import{D as s,v as c,ae as u,p as B,C as _,c as X,o as D,j as l,af as p,G as t,ag as A,a as o,ah as h,k as n,w as d,ai as m}from"./chunks/framework.BnfD-2QM.js";import{L as v,N as f}from"./chunks/index.3JkuxlVZ.js";const C=`<template>
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
<\/script>

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
`,L=`<template>
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
<\/script>

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
`,M=`<template>
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
<\/script>

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
`,z=`<template>
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
<\/script>

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
`,T=`<template>
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
<\/script>

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
`,J=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px;">
    <p>行内模式</p>

    <div>
      <p style="margin-bottom: 8px; font-size: 14px; color: #666;">非行内模式（默认）- 每个骨架屏独占一行</p>
      <div style="display: flex; flex-direction: column; gap: 8px;">
        <Skeleton :count="3" :height="20" :width="100" />
      </div>
    </div>

    <div>
      <p style="margin-bottom: 8px; font-size: 14px; color: #666;">行内模式（inline: true）- 多个骨架屏在同一行</p>
      <div>
        <Skeleton :count="5" :height="20" :width="60" :inline="true" />
      </div>
    </div>

    <div>
      <p style="margin-bottom: 8px; font-size: 14px; color: #666;">行内模式示例 - 模拟文本行</p>
      <div style="line-height: 1.6;">
        <span>这是一段文本示例，</span>
        <Skeleton :height="14" :width="80" :inline="true" />
        <span>中间有一个</span>
        <Skeleton :height="14" :width="60" :inline="true" />
        <span>占位符。</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Skeleton from 'hilbert-vue3-ui/Skeleton'
import 'hilbert-vue3-ui/Skeleton/style'
<\/script>
`,j=`<template>
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
<\/script>
`,R=`<template>
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
<\/script>
`,N=`<template>
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
<\/script>
`,F=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px;">
    <p>多骨架屏效果</p>

    <div>
      <p style="margin-bottom: 8px; font-size: 14px; color: #666;">count="3" - 显示 3 个骨架屏</p>
      <div style="display: flex; flex-direction: column; gap: 8px;">
        <Skeleton :count="3" :height="20" :width="100" />
      </div>
    </div>

    <div>
      <p style="margin-bottom: 8px; font-size: 14px; color: #666;">count="5" - 显示 5 个骨架屏</p>
      <div style="display: flex; flex-direction: column; gap: 8px;">
        <Skeleton :count="5" :height="20" :width="100" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Skeleton from 'hilbert-vue3-ui/Skeleton'
import 'hilbert-vue3-ui/Skeleton/style'
<\/script>
`,E=`<template>
  <div style="display: flex; flex-direction: column; gap: 12px;">
    <p>基础骨架屏加载效果</p>

    <div style="display: flex; align-items: center; gap: 12px;">
      <Skeleton :width="40" :height="40" :circle="true" />
      <div style="flex: 1; display: flex; flex-direction: column; gap: 8px;">
        <Skeleton :height="16" :width="120" />
        <Skeleton :height="14" :width="80" />
      </div>
    </div>

    <Skeleton :height="14" :width="100" />
    <Skeleton :height="14" :width="95" />
    <Skeleton :height="14" :width="70" />
  </div>
</template>

<script setup lang="ts">
import Skeleton from 'hilbert-vue3-ui/Skeleton'
import 'hilbert-vue3-ui/Skeleton/style'
<\/script>
`,Q=JSON.parse('{"title":"Skeleton 骨架屏","description":"","frontmatter":{},"headers":[],"relativePath":"components/Skeleton.md","filePath":"components/Skeleton.md"}'),U={name:"components/Skeleton.md"},H=Object.assign(U,{setup(Y){const b=s();c(async()=>{b.value=(await u(async()=>{const{default:a}=await import("./chunks/dashboard.CDngbpj5.js");return{default:a}},__vite__mapDeps([0,1,2]))).default});const g=s();c(async()=>{g.value=(await u(async()=>{const{default:a}=await import("./chunks/gallery.Dvy-6GBf.js");return{default:a}},__vite__mapDeps([3,1,2]))).default});const x=s();c(async()=>{x.value=(await u(async()=>{const{default:a}=await import("./chunks/cards.CqYc9f3g.js");return{default:a}},__vite__mapDeps([4,1,2]))).default});const k=s();c(async()=>{k.value=(await u(async()=>{const{default:a}=await import("./chunks/article.0Mn2RmYB.js");return{default:a}},__vite__mapDeps([5,1,2]))).default});const y=s();c(async()=>{y.value=(await u(async()=>{const{default:a}=await import("./chunks/ecommerce.7oYmV3UM.js");return{default:a}},__vite__mapDeps([6,1,2]))).default});const w=s();c(async()=>{w.value=(await u(async()=>{const{default:a}=await import("./chunks/inline.m5JzsiyF.js");return{default:a}},__vite__mapDeps([7,1,2]))).default});const S=s();c(async()=>{S.value=(await u(async()=>{const{default:a}=await import("./chunks/animation.CqmkhWaL.js");return{default:a}},__vite__mapDeps([8,1,2]))).default});const V=s();c(async()=>{V.value=(await u(async()=>{const{default:a}=await import("./chunks/custom-color.BVCezKNW.js");return{default:a}},__vite__mapDeps([9,1,2]))).default});const Z=s();c(async()=>{Z.value=(await u(async()=>{const{default:a}=await import("./chunks/shape.D0iB5uTq.js");return{default:a}},__vite__mapDeps([10,1,2]))).default});const W=s();c(async()=>{W.value=(await u(async()=>{const{default:a}=await import("./chunks/count.DMcFyydE.js");return{default:a}},__vite__mapDeps([11,1,2]))).default});const i=B(!0),G=s();return c(async()=>{G.value=(await u(async()=>{const{default:a}=await import("./chunks/basic.DkGa95t6.js");return{default:a}},__vite__mapDeps([12,1,2]))).default}),(a,e)=>{const r=_("ClientOnly");return D(),X("div",null,[e[11]||(e[11]=l("h1",{id:"skeleton-骨架屏",tabindex:"-1"},[l("code",null,"Skeleton"),o(" 骨架屏 "),l("a",{class:"header-anchor",href:"#skeleton-骨架屏","aria-label":'Permalink to "`Skeleton` 骨架屏"'},"​")],-1)),e[12]||(e[12]=l("p",null,"Skeleton，一个轻量级的骨架屏组件，用于在内容加载时提供视觉反馈。支持自定义颜色、尺寸、形状、动画等。",-1)),e[13]||(e[13]=l("h2",{id:"基础用法",tabindex:"-1"},[o("基础用法 "),l("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1)),p(t(n(v),null,null,512),[[h,i.value]]),t(r,null,{default:d(()=>[t(n(f),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:e[0]||(e[0]=()=>{i.value=!1}),vueCode:n(E)},m({_:2},[G.value?{name:"vue",fn:d(()=>[t(n(G))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),e[14]||(e[14]=l("h2",{id:"多骨架屏",tabindex:"-1"},[o("多骨架屏 "),l("a",{class:"header-anchor",href:"#多骨架屏","aria-label":'Permalink to "多骨架屏"'},"​")],-1)),p(t(n(v),null,null,512),[[h,i.value]]),t(r,null,{default:d(()=>[t(n(f),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:e[1]||(e[1]=()=>{i.value=!1}),vueCode:n(F)},m({_:2},[W.value?{name:"vue",fn:d(()=>[t(n(W))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),e[15]||(e[15]=l("h2",{id:"不同形状和尺寸",tabindex:"-1"},[o("不同形状和尺寸 "),l("a",{class:"header-anchor",href:"#不同形状和尺寸","aria-label":'Permalink to "不同形状和尺寸"'},"​")],-1)),p(t(n(v),null,null,512),[[h,i.value]]),t(r,null,{default:d(()=>[t(n(f),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:e[2]||(e[2]=()=>{i.value=!1}),vueCode:n(N)},m({_:2},[Z.value?{name:"vue",fn:d(()=>[t(n(Z))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),e[16]||(e[16]=l("h2",{id:"自定义颜色",tabindex:"-1"},[o("自定义颜色 "),l("a",{class:"header-anchor",href:"#自定义颜色","aria-label":'Permalink to "自定义颜色"'},"​")],-1)),p(t(n(v),null,null,512),[[h,i.value]]),t(r,null,{default:d(()=>[t(n(f),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:e[3]||(e[3]=()=>{i.value=!1}),vueCode:n(R)},m({_:2},[V.value?{name:"vue",fn:d(()=>[t(n(V))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),e[17]||(e[17]=l("h2",{id:"动画控制",tabindex:"-1"},[o("动画控制 "),l("a",{class:"header-anchor",href:"#动画控制","aria-label":'Permalink to "动画控制"'},"​")],-1)),p(t(n(v),null,null,512),[[h,i.value]]),t(r,null,{default:d(()=>[t(n(f),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:e[4]||(e[4]=()=>{i.value=!1}),vueCode:n(j)},m({_:2},[S.value?{name:"vue",fn:d(()=>[t(n(S))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),e[18]||(e[18]=l("h2",{id:"行内模式",tabindex:"-1"},[o("行内模式 "),l("a",{class:"header-anchor",href:"#行内模式","aria-label":'Permalink to "行内模式"'},"​")],-1)),p(t(n(v),null,null,512),[[h,i.value]]),t(r,null,{default:d(()=>[t(n(f),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:e[5]||(e[5]=()=>{i.value=!1}),vueCode:n(J)},m({_:2},[w.value?{name:"vue",fn:d(()=>[t(n(w))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),e[19]||(e[19]=l("h2",{id:"实际场景示例",tabindex:"-1"},[o("实际场景示例 "),l("a",{class:"header-anchor",href:"#实际场景示例","aria-label":'Permalink to "实际场景示例"'},"​")],-1)),e[20]||(e[20]=l("h3",{id:"📱-电商app首页",tabindex:"-1"},[o("📱 电商App首页 "),l("a",{class:"header-anchor",href:"#📱-电商app首页","aria-label":'Permalink to "📱 电商App首页"'},"​")],-1)),e[21]||(e[21]=l("p",null,"模拟完整的电商App首页骨架屏，包含状态栏、搜索栏、分类导航、轮播图、限时抢购、商品列表等元素。",-1)),p(t(n(v),null,null,512),[[h,i.value]]),t(r,null,{default:d(()=>[t(n(f),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:e[6]||(e[6]=()=>{i.value=!1}),vueCode:n(T)},m({_:2},[y.value?{name:"vue",fn:d(()=>[t(n(y))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),e[22]||(e[22]=l("h3",{id:"📄-文章-博客加载",tabindex:"-1"},[o("📄 文章/博客加载 "),l("a",{class:"header-anchor",href:"#📄-文章-博客加载","aria-label":'Permalink to "📄 文章/博客加载"'},"​")],-1)),e[23]||(e[23]=l("p",null,"模拟博客文章、新闻资讯的内容加载，包含作者信息、标题、正文、标签等元素。",-1)),p(t(n(v),null,null,512),[[h,i.value]]),t(r,null,{default:d(()=>[t(n(f),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:e[7]||(e[7]=()=>{i.value=!1}),vueCode:n(z)},m({_:2},[k.value?{name:"vue",fn:d(()=>[t(n(k))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),e[24]||(e[24]=l("h3",{id:"👤-用户资料卡片",tabindex:"-1"},[o("👤 用户资料卡片 "),l("a",{class:"header-anchor",href:"#👤-用户资料卡片","aria-label":'Permalink to "👤 用户资料卡片"'},"​")],-1)),e[25]||(e[25]=l("p",null,"模拟用户列表、成员展示、社交资料卡片的骨架屏，适用于团队管理、社交媒体等场景。",-1)),p(t(n(v),null,null,512),[[h,i.value]]),t(r,null,{default:d(()=>[t(n(f),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:e[8]||(e[8]=()=>{i.value=!1}),vueCode:n(M)},m({_:2},[x.value?{name:"vue",fn:d(()=>[t(n(x))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),e[26]||(e[26]=l("h3",{id:"🖼️-图片-媒体列表",tabindex:"-1"},[o("🖼️ 图片/媒体列表 "),l("a",{class:"header-anchor",href:"#🖼️-图片-媒体列表","aria-label":'Permalink to "🖼️ 图片/媒体列表"'},"​")],-1)),e[27]||(e[27]=l("p",null,"模拟图库、相册、媒体中心的加载占位，使用瀑布流布局展示不同高度的图片占位。",-1)),p(t(n(v),null,null,512),[[h,i.value]]),t(r,null,{default:d(()=>[t(n(f),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:e[9]||(e[9]=()=>{i.value=!1}),vueCode:n(L)},m({_:2},[g.value?{name:"vue",fn:d(()=>[t(n(g))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),e[28]||(e[28]=l("h3",{id:"📊-数据仪表板",tabindex:"-1"},[o("📊 数据仪表板 "),l("a",{class:"header-anchor",href:"#📊-数据仪表板","aria-label":'Permalink to "📊 数据仪表板"'},"​")],-1)),e[29]||(e[29]=l("p",null,"模拟后台管理系统、数据大屏、统计报表的骨架屏，包含统计卡片、图表占位等元素。",-1)),p(t(n(v),null,null,512),[[h,i.value]]),t(r,null,{default:d(()=>[t(n(f),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:e[10]||(e[10]=()=>{i.value=!1}),vueCode:n(C)},m({_:2},[b.value?{name:"vue",fn:d(()=>[t(n(b))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),e[30]||(e[30]=A('<h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>count</td><td>骨架屏数量</td><td><code>number</code></td><td>-</td><td><code>1</code></td></tr><tr><td>baseColor</td><td>基础颜色</td><td><code>string</code></td><td>-</td><td><code>&#39;#e6e8eb&#39;</code></td></tr><tr><td>highlightColor</td><td>高亮颜色</td><td><code>string</code></td><td>-</td><td><code>&#39;#f1f3f5&#39;</code></td></tr><tr><td>width</td><td>宽度</td><td><code>string | number</code></td><td>-</td><td><code>&#39;100%&#39;</code></td></tr><tr><td>height</td><td>高度</td><td><code>string | number</code></td><td>-</td><td><code>16px</code></td></tr><tr><td>borderRadius</td><td>圆角</td><td><code>string | number</code></td><td>-</td><td><code>&#39;4px&#39;</code></td></tr><tr><td>circle</td><td>是否圆形（覆盖 borderRadius）</td><td><code>boolean</code></td><td>-</td><td><code>false</code></td></tr><tr><td>inline</td><td>是否行内模式</td><td><code>boolean</code></td><td>-</td><td><code>false</code></td></tr><tr><td>duration</td><td>动画持续时间（秒）</td><td><code>number</code></td><td>-</td><td><code>1.5</code></td></tr><tr><td>enableAnimation</td><td>是否启用动画</td><td><code>boolean</code></td><td>-</td><td><code>true</code></td></tr><tr><td>direction</td><td>动画方向</td><td><code>string</code></td><td><code>ltr</code>、<code>rtl</code></td><td><code>&#39;ltr&#39;</code></td></tr><tr><td>wrapperClassName</td><td>容器自定义类名</td><td><code>string</code></td><td>-</td><td><code>&#39;&#39;</code></td></tr><tr><td>className</td><td>骨架屏自定义类名</td><td><code>string</code></td><td>-</td><td><code>&#39;&#39;</code></td></tr></tbody></table><h3 id="特性" tabindex="-1">特性 <a class="header-anchor" href="#特性" aria-label="Permalink to &quot;特性&quot;">​</a></h3><ul><li><strong>响应式设计</strong>：支持所有 CSS 单位（<code>px</code>、<code>%</code>、<code>rem</code> 等）和数字值</li><li><strong>灵活布局</strong>：支持行内模式和块级模式</li><li><strong>动画控制</strong>：可以自定义动画持续时间、方向，或完全禁用</li><li><strong>自定义样式</strong>：支持通过 props 自定义颜色、尺寸、圆角等</li><li><strong>类型安全</strong>：完整的 TypeScript 类型定义</li></ul>',5))])}}});export{Q as __pageData,H as default};
