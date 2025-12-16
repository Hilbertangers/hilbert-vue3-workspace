<template>
  <div class="SwitchWrapper" :style="{transform: `scale(${scale})`}">
    <input
      name="switch"
      type="checkbox"
      :checked="modelValue"
      @change="handleChange"
    />
    <label class="Switch" for="switch">
      <div class="Bulb bulb">
        <div class="BulbCenter bulb-center"></div>
        <div class="filament Filament Filament-Left"></div>
        <div class="filament Filament Filament-Right"></div>
        <div class="Reflections">
          <span></span>
        </div>
        <div class="spark">
          <div class="Spark Spark-1"></div>
          <div class="Spark Spark-2"></div>
          <div class="Spark Spark-3"></div>
          <div class="Spark Spark-4"></div>
        </div>
      </div>
    </label>
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue'
/* --------- 类型 --------- */
export interface BulbSwitchProps {
  modelValue?: boolean
  width?: number         // 缩放基准
}
/* --------- 宏定义 --------- */
const props = withDefaults(defineProps<BulbSwitchProps>(), {
  modelValue: false,
  width: 220
})
const emit = defineEmits<{
  'update:modelValue': [val: boolean]
}>()
/* --------- 计算 & 方法 --------- */
const scale = computed(() =>
  typeof props.width === 'number' ? props.width / 220 : 1
)
function handleChange(e: Event) {
  emit('update:modelValue', (e.target as HTMLInputElement).checked)
}
</script>
