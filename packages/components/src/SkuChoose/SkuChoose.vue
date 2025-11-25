<template>
  <div class="sku-choose">
    <div v-for="(spec, index) in specList" :key="index">
      <p class="sku-choose-title">{{ spec.title }}</p>

      <div class="sku-choose-spec">
        <span
          v-for="(value, _index) in spec.list"
          :class="{
            'sku-choose-spec-option': isOption(value),
            'sku-choose-spec-active': isActive(value),
            'sku-choose-spec-disabled': !isOption(value),
          }"
          :key="_index"
          @click="() => handleChoose(isOption(value), value, index)"
          >{{ value }}</span
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
/**
 * sku-choose
 * @desc 商品多规格选择组件--加权图实现
 * @example 调用示例
 *   <sku-choose
 *      :specList="specList"
 *     :specCombinationList="specCombinationList"
 *    />
 **/
import SpecAdjoinMatrix from './spec-adjoin-martix'
import { ref, computed } from 'vue'

export type CommoditySpecsType = {
  title: string
  list: Array<string>
}

export type SpecCategoryType = {
  id: string
  specs: Array<string>
}

export interface SkuChooseProps {
  specList: Array<CommoditySpecsType>
  specCombinationList: Array<SpecCategoryType>
}

const props = withDefaults(defineProps<SkuChooseProps>(), {
  specList: () => [],
  specCombinationList: () => [],
})

const specsS = ref<string[]>([])

const specAdjoinMatrix = computed(
  () => new SpecAdjoinMatrix(props.specList, props.specCombinationList)
)
const optionSpecs = computed(() => specAdjoinMatrix.value.getSpecscOptions(specsS.value))

function handleChoose(bool: boolean, text: string, index: number) {
  // 排除可选规格里面没有的规格
  if (specsS.value[index] !== text && !bool) return
  // 根据text判断是否已经被选中了
  specsS.value[index] = specsS.value[index] === text ? '' : text
  specsS.value = specsS.value.slice()
}

function isOption(v: string) {
  // 当前规格是否可选
  return optionSpecs.value.includes(v)
}

function isActive(v: string) {
  // 当前规格是否被选
  return specsS.value.includes(v)
}
</script>
