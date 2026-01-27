<template>
  <div :class="className" :style="{ height, width }" ref="chartRef" />
</template>

<script setup lang="ts">
import { ref, watch, onMounted, onBeforeUnmount, nextTick } from 'vue';
import { debounce } from 'es-toolkit';
import echarts from './echarts';

export interface ChartDataItem {
  name: string;
  color: string;
  tips: string;
  value: number;
}

export interface ChartParam {
  data: ChartDataItem[];
}

interface Props {
  className?: string;
  width?: string;
  height?: string;
  chartParam: ChartParam;
  color?: string[];
}

const props = withDefaults(defineProps<Props>(), {
  className: 'chart',
  width: '100%',
  height: '300px',
  color: () => ['#0055FE', '#88DDFF', '#FF749D', '#FCDD69']
});

const chartRef = ref<HTMLElement | null>(null);
let chart: ReturnType<typeof echarts.init> | null = null;

const setLegendData = (data: ChartDataItem[]) => {
  return data.map((t) => {
    const { name, color } = t;
    return {
      name,
      itemStyle: {
        color
      }
    };
  });
};

const setSeries = (data: ChartDataItem[]) => {
  const common = {
    type: 'pie' as const,
    center: ['50%', '40%'],
    startAngle: -120,
    itemStyle: {
      borderRadius: 0
    },
    selectedMode: 'series' as const,
    selectedOffset: 1,
    label: {
      show: false
    }
  };

  const sortedData = [...data].sort((a, b) => b.value - a.value);

  const res = sortedData.map((_, i, sortArr) => {
    const index = i + 1;
    const dataSeries = sortArr.map((_t, _i) => {
      const { name, value, color } = _t;
      return {
        name,
        value,
        itemStyle: {
          color: _i === i ? color : 'rgba(0, 0, 0, 0)'
        },
        emphasis: {
          disabled: true
        }
      };
    });

    return {
      ...common,
      radius: [50 + index * 3, 90 - index * 3],
      data: dataSeries
    };
  });

  return res;
};

const setOptions = (option: ChartParam) => {
  if (!chart) {
    return;
  }
  chart.clear();
  chart.setOption({
    tooltip: {
      trigger: 'item',
      extraCssText: 'box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.15);border-radius: 4px;',
      formatter: '{b}: {c}, 占比{d}%',
      borderWidth: 0
    },
    legend: {
      left: '10',
      bottom: '40',
      itemGap: 16,
      itemWidth: 16,
      itemHeight: 8,
      icon: 'rect',
      orient: 'vertical',
      formatter: function (key: string) {
        const obj = option.data.find((el) => el.name === key);
        if (obj) {
          return [
            '{a|' + obj.name + ':' + '}',
            '{b|' + obj.tips + '}',
            `{c|共${obj.value}人}`
          ].join('');
        }
        return key;
      },
      data: setLegendData(option.data),
      textStyle: {
        padding: [0, 0, 0],
        rich: {
          a: {
            color: 'rgba(0,0,0,0.85)',
            fontSize: 12,
            fontWeight: 600,
            width: 70
          },
          b: {
            color: 'rgba(0,0,0,0.85)',
            fontSize: 12,
            fontWeight: 400,
            width: 180,
            padding: [0, 0, 0, 20]
          },
          c: {
            color: 'rgba(0,0,0,0.85)',
            fontSize: 12,
            fontWeight: 400
          }
        }
      }
    },
    series: setSeries(option.data)
  });
};

const initChart = () => {
  if (!chartRef.value) return;
  chart = echarts.init(chartRef.value);
  setOptions(props.chartParam);
};

const resize = () => {
  chart && chart.resize();
};

const handleResize = debounce(resize, 100);

watch(
  () => props.chartParam,
  (val) => {
    setOptions(val);
  },
  { deep: true }
);

onMounted(() => {
  nextTick(() => {
    initChart();
  });
  window.addEventListener('resize', handleResize);
});

onBeforeUnmount(() => {
  if (!chart) {
    return;
  }
  window.removeEventListener('resize', handleResize);
  chart.dispose();
  chart = null;
});
</script>
