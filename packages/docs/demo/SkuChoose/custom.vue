<template>
  <SkuChoose class="custom" v-bind="skuChooseProps" />
</template>

<script setup lang="ts">
import SkuChoose from 'hilbert-vue3-ui/SkuChoose'
// import 'hilbert-vue3-ui/SkuChoose/style'
import type { SkuChooseProps } from 'hilbert-vue3-ui'

const skuChooseProps: SkuChooseProps = {
  specList: [
    { title: '颜色', list: ['白色', '粉色'] },
    { title: '尺寸', list: ['1寸', '2寸'] },
    { title: '体重', list: ['G', 'KG', 'PG'] },
  ],
  specCombinationList: [
    // {id: "1", specs: ["白色", "1寸", "G"]},
    { id: '2', specs: ['白色', '1寸', 'KG'] },
    { id: '3', specs: ['白色', '1寸', 'PG'] },
    { id: '4', specs: ['白色', '2寸', 'G'] },
    // {id: "5", specs: ["白色", "2寸", "KG"]},
    // {id: "6", specs: ["白色", "2寸", "PG"]},
    // {id: "7", specs: ["粉色", "1寸", "G"]},
    { id: '8', specs: ['粉色', '1寸', 'KG'] },
    { id: '9', specs: ['粉色', '1寸', 'PG'] },
    { id: '10', specs: ['粉色', '2寸', 'G'] },
    { id: '11', specs: ['粉色', '2寸', 'KG'] },
    { id: '12', specs: ['粉色', '2寸', 'PG'] },
  ],
}
</script>
<style lang="less">
@accent: #0066ff;
@option-bg: #f2f3f7;
@option-color: #333;
@disabled-bg: #e0e0e0;
@disabled-color: #a0a0a0;
.custom {
  .sku-choose {
    max-width: 480px;
    margin: 32px auto;
    padding: 32px;
    background: rgba(250, 249, 247, 0.85);
    border: 1px solid rgba(196, 198, 202, 0.25);
    border-radius: 20px;
    backdrop-filter: blur(16px) saturate(120%);
    box-shadow: rgba(131, 162, 198, 0.12) 0 1px 6px;
    &-title {
      font-size: 17px;
      font-weight: 700;
      letter-spacing: -0.01em;
      color: #465160;
      margin-bottom: 16px;
    }
    &-spec {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      // 共享骨架
      .gen-btn() {
        padding: 8px 16px;
        font-size: 13px;
        line-height: 1.2;
        border-radius: 22px;
        transition: all 0.22s ease;
        user-select: none;
        cursor: pointer;
        border: 1px solid transparent;
      }
      // 默认
      &-option {
        .gen-btn();
        background: @option-bg;
        color: @option-color;
        &:hover {
          background: darken(@option-bg, 4%);
        }
      }
      // 激活
      &-active {
        .gen-btn();
        background: @accent;
        color: #fff;
        border-color: @accent;
      }
      // 禁用
      &-disabled {
        .gen-btn();
        background: @disabled-bg;
        color: @disabled-color;
        cursor: not-allowed;
        border-color: darken(@disabled-bg, 6%);
      }
    }
  }
}

</style>
