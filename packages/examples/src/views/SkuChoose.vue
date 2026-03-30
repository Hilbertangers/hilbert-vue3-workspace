<template>
  <div class="sku-choose-demo">
    <h2>sku-choose - 商品多规格选择组件</h2>
    <div class="component-demo">
      <div class="demo-group">
        <h3>基础用法</h3>
        <div class="demo-column">
          <sku-choose v-bind="skuChooseProps" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SkuChoose from 'hilbert-vue3-ui/SkuChoose'
import 'hilbert-vue3-ui/SkuChoose/style'

import type { SkuChooseProps } from 'hilbert-vue3-ui'

const skuChooseProps: SkuChooseProps = {
  specList: [
    { title: '颜色', list: ['白色', '粉色'] },
    { title: '尺寸', list: ['1寸', '2寸'] },
    { title: '体重', list: ['G', 'KG', 'PG'] }
  ],
  specCombinationList: [
    { id: '2', specs: ['白色', '1寸', 'KG'] },
    { id: '3', specs: ['白色', '1寸', 'PG'] },
    { id: '4', specs: ['白色', '2寸', 'G'] },
    { id: '8', specs: ['粉色', '1寸', 'KG'] },
    { id: '9', specs: ['粉色', '1寸', 'PG'] },
    { id: '10', specs: ['粉色', '2寸', 'G'] },
    { id: '11', specs: ['粉色', '2寸', 'KG'] },
    { id: '12', specs: ['粉色', '2寸', 'PG'] }
  ]
}
</script>

<style scoped>
.sku-choose-demo {
  font-family: var(--ui-font-family);
  color: var(--ui-color-gray-900);
  line-height: 1.6;
}

.sku-choose-demo h2 {
  font-size: var(--ui-font-size-xl);
  margin-bottom: var(--ui-space-6);
  padding-bottom: var(--ui-space-2);
  border-bottom: 1px solid var(--ui-color-gray-200);
}

.component-demo {
  background: var(--ui-color-white);
  border-radius: var(--ui-border-radius-lg);
  padding: var(--ui-space-6);
  box-shadow: var(--ui-shadow);
}

.demo-group {
  margin-bottom: var(--ui-space-6);
}

.demo-group:last-child {
  margin-bottom: 0;
}

.demo-group h3 {
  font-size: var(--ui-font-size-lg);
  margin-bottom: var(--ui-space-4);
  color: var(--ui-color-gray-700);
}

.demo-column {
  display: flex;
  flex-direction: column;
  gap: var(--ui-space-4);
  max-width: 400px;
}

.demo-column p {
  margin: 0;
  color: var(--ui-color-gray-600);
  font-size: var(--ui-font-size-sm);
}
</style>
