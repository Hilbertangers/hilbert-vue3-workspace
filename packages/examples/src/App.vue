<template>
  <div id="app">
    <header class="header">
      <p>现代化的 Vue3 组件库示例</p>
    </header>

    <div class="container">
      <nav class="sidebar">
        <ul class="nav-list">
          <li
            v-for="route in routes"
            :key="route.name"
            :class="['nav-item', { active: $route.name === route.name }]"
          >
            <router-link :to="route.path">{{ route.name }}</router-link>
          </li>
        </ul>
      </nav>

      <main class="main">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const routes = computed(() => {
  return router.getRoutes()
    .filter((route) => route.name && route.name !== undefined)
    .map((route) => ({
      name: route.name as string,
      path: route.path
    }))
    .filter((route) => route.name !== 'undefined' && route.name)
    .sort((a, b) => a.name.localeCompare(b.name))
})
</script>

<style scoped>
#app {
  font-family: var(--ui-font-family, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif);
  color: var(--ui-color-gray-900, #333);
  line-height: 1.6;
  min-height: 100vh;
}

.header {
  text-align: center;
  padding: var(--ui-space-12, 48px) 0;
  background: linear-gradient(135deg, #1890ff 0%, #40a9ff 100%);
  color: white;
  margin-bottom: var(--ui-space-8, 32px);
}

.header p {
  font-size: 20px;
  font-weight: 500;
  margin: 0;
}

.container {
  display: flex;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px 40px;
  gap: 20px;
}

.sidebar {
  width: 200px;
  flex-shrink: 0;
  position: sticky;
  top: 20px;
  height: fit-content;
  max-height: calc(100vh - 40px);
  overflow-y: auto;
}

.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav-item {
  margin-bottom: 8px;
}

.nav-item a {
  display: block;
  padding: 12px 16px;
  border-radius: 8px;
  color: #333;
  text-decoration: none;
  transition: all 0.2s;
  font-size: 14px;
  font-weight: 500;
}

.nav-item a:hover {
  background-color: #f5f5f5;
}

.nav-item.active a {
  background-color: #1890ff;
  color: white;
}

.main {
  flex: 1;
  min-width: 0;
}

@media (max-width: 768px) {
  .container {
    flex-direction: column;
  }

  .sidebar {
    width: 100%;
    position: static;
    max-height: none;
  }

  .nav-list {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  .nav-item {
    margin-bottom: 0;
  }

  .nav-item a {
    padding: 8px 12px;
    font-size: 13px;
  }
}
</style>

<style>
:root {
  --ui-font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  --ui-color-gray-900: #333;
  --ui-color-gray-600: #666;
  --ui-color-gray-400: #999;
  --ui-color-gray-200: #e0e0e0;
  --ui-color-gray-100: #f5f5f5;
  --ui-space-12: 48px;
  --ui-space-8: 32px;
  --ui-space-4: 16px;
  --ui-space-2: 8px;
  --ui-space-1: 4px;
  --ui-font-size-2xl: 24px;
  --ui-font-size-xl: 20px;
  --ui-font-size-lg: 18px;
  --ui-font-size-base: 16px;
  --ui-font-size-sm: 14px;
  --ui-font-size-xs: 12px;
  --ui-border-radius: 8px;
  --ui-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  --ui-shadow-lg: 0 4px 16px rgba(0, 0, 0, 0.12);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: var(--ui-font-family);
  background-color: #fff;
}

.section {
  margin-bottom: var(--ui-space-8);
}

.section h2 {
  font-size: 28px;
  margin-bottom: var(--ui-space-2);
  color: #333;
}

.component-demo {
  background-color: var(--ui-color-gray-100);
  padding: var(--ui-space-4);
  border-radius: var(--ui-border-radius);
}

.demo-group {
  margin-bottom: var(--ui-space-4);
}

.demo-group h3 {
  font-size: 18px;
  margin-bottom: var(--ui-space-2);
  color: #333;
}

.demo-column {
  display: flex;
  flex-direction: column;
  gap: var(--ui-space-2);
}

.demo-row {
  display: flex;
  gap: var(--ui-space-2);
}

.control-button {
  padding: 8px 16px;
  border: none;
  border-radius: var(--ui-border-radius);
  background-color: #1890ff;
  color: white;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.2s;
}

.control-button:hover {
  background-color: #40a9ff;
}

input {
  padding: 8px 12px;
  border: 1px solid var(--ui-color-gray-200);
  border-radius: var(--ui-border-radius);
  font-size: 14px;
  outline: none;
}

input:focus {
  border-color: #1890ff;
}

button {
  padding: 8px 16px;
  border: none;
  border-radius: 8px;
  background-color: #1890ff;
  color: white;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.2s;
}

button:hover {
  background-color: #40a9ff;
}

.marquee-demo-content {
  margin-bottom: 16px;
}

.marquee-demo-content p {
  margin-bottom: 8px;
}

.marquee-demo-wrapper {
  margin-bottom: 20px;
}

.demo-content {
  background: #fff;
  border: 1px solid #e8e8e8;
  border-radius: 8px;
  padding: 20px;
}

.demo-content-light {
  background: #fafafa;
  border: 1px solid #e8e8e8;
  border-radius: 8px;
  padding: 20px;
}

.demo-content-green {
  background: #f0fff4;
  border: 1px solid #c6f6d5;
  border-radius: 8px;
  padding: 20px;
}

.demo-content-blue {
  background: #ebf8ff;
  border: 1px solid #bee3f8;
  border-radius: 8px;
  padding: 20px;
}

.demo-content-yellow {
  background: #fffff0;
  border: 1px solid #fefcbf;
  border-radius: 8px;
  padding: 20px;
}

.marquee-item {
  padding: 12px 20px;
  font-size: 16px;
  white-space: nowrap;
}

.marquee-logo {
  padding: 12px 24px;
  font-size: 18px;
  font-weight: bold;
  white-space: nowrap;
}

.signature-pad-demo {
  margin-bottom: 20px;
}

.signature-pad-demo p {
  margin-bottom: 8px;
  font-weight: 500;
}

.screenshots-demo {
  text-align: center;
}

.BulbSwitchWrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 0;
}
</style>
