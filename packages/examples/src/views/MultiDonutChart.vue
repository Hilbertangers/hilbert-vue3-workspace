<template>
  <div class="multi-donut-chart-demo">
    <h2>MultiDonutChart - 多层级环图组件</h2>
    <div class="component-demo">
      <div class="demo-group">
        <h3>基础用法</h3>
        <div class="demo-column">
          <p>基于 echarts 实现的多层级环图，会根据数据量排序递减环宽度</p>
          <div class="chart-wrapper">
            <MultiDonutChart
              v-if="chartParam"
              :chart-param="chartParam"
              width="500px"
              height="500px"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { MultiDonutChart } from 'hilbert-vue3-ui/MultiDonutChart'

interface ChartDataItem {
  name: string
  color: string
  tips: string
  value: number
}

interface ChartParam {
  data: ChartDataItem[]
}

const chartParam = ref<ChartParam | null>(null)

onMounted(() => {
  chartParam.value = {
    data: [
      {
        name: '高消费会员',
        color: '#0055FE',
        tips: '单均金额>25.8/单',
        value: 300
      },
      {
        name: '中高消费会员',
        color: '#88DDFF',
        tips: '21.5元/单<单均金额<25.8元/单',
        value: 200
      },
      {
        name: '中消费会员',
        color: '#FF749D',
        tips: '17.2元/单<单均金额<21.5元/单',
        value: 100
      },
      {
        name: '低消费会员',
        color: '#FCDD69',
        tips: '单均金额<17.2元/单',
        value: 50
      }
    ]
  }
})
</script>

<style scoped>
.multi-donut-chart-demo {
  font-family: var(--ui-font-family);
  color: var(--ui-color-gray-900);
  line-height: 1.6;
}

.multi-donut-chart-demo h2 {
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
}

.demo-column p {
  margin: 0;
  color: var(--ui-color-gray-600);
  font-size: var(--ui-font-size-sm);
}

.chart-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background: #f5f5f5;
  border-radius: 8px;
}
</style>
