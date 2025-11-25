const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/custom.Eo3cAZT_.js","assets/chunks/SkuChoose.vue2.DGJOeXb9.js","assets/chunks/framework.BJG7AQGO.js","assets/chunks/base.BzOM9xIq.js"])))=>i.map(i=>d[i]);
import{D as p,v as u,ae as h,p as C,C as _,c as g,o as G,j as t,af as b,G as n,ag as S,a as o,ah as m,k as s,w as d,ai as k}from"./chunks/framework.BJG7AQGO.js";import{L as f,N as v}from"./chunks/index.BKM7_Gpy.js";const x=`<template>
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
<\/script>
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
`,y=`<template>
  <p>比如热饮只能做常规杯，冰饮只能加椰果，就无法选择相关的sku组合</p>
  <SkuChoose v-bind="skuChooseProps" />
</template>

<script setup lang="ts">
import SkuChoose from 'hilbert-vue3-ui/SkuChoose'
import 'hilbert-vue3-ui/SkuChoose/style'
import type { SkuChooseProps } from 'hilbert-vue3-ui'

const skuChooseProps: SkuChooseProps = {
  specList: [
    { title: '规格', list: ['常规', '大杯'] },
    { title: '状态', list: ['冰', '热'] },
    { title: '甜度', list: ['标准糖', '半糖', '无糖'] },
    { title: '小料', list: ['珍珠', '椰果', '红豆'] },
  ],
  specCombinationList: [
    // { id: '1', specs: ["常规", "冰", "标准糖", "珍珠"] },
    { id: '2', specs: ["常规", "冰", "标准糖", "椰果"] },
    // { id: '3', specs: ["常规", "冰", "标准糖", "红豆"] },
    // { id: '4', specs: ["常规", "冰", "半糖",  "珍珠"] },
    { id: '5', specs: ["常规", "冰", "半糖",  "椰果"] },
    // { id: '6', specs: ["常规", "冰", "半糖",  "红豆"] },
    // { id: '7', specs: ["常规", "冰", "无糖",  "珍珠"] },
    { id: '8', specs: ["常规", "冰", "无糖",  "椰果"] },
    // { id: '9', specs: ["常规", "冰", "无糖",  "红豆"] },
    { id: '10', specs: ["常规", "热", "标准糖", "珍珠"] },
    { id: '11', specs: ["常规", "热", "标准糖", "椰果"] },
    { id: '12', specs: ["常规", "热", "标准糖", "红豆"] },
    { id: '13', specs: ["常规", "热", "半糖",  "珍珠"] },
    { id: '14', specs: ["常规", "热", "半糖",  "椰果"] },
    { id: '15', specs: ["常规", "热", "半糖",  "红豆"] },
    { id: '16', specs: ["常规", "热", "无糖",  "珍珠"] },
    { id: '17', specs: ["常规", "热", "无糖",  "椰果"] },
    { id: '18', specs: ["常规", "热", "无糖",  "红豆"] },
    // { id: '19', specs: ["大杯", "冰", "标准糖", "珍珠"] },
    { id: '20', specs: ["大杯", "冰", "标准糖", "椰果"] },
    // { id: '21', specs: ["大杯", "冰", "标准糖", "红豆"] },
    // { id: '22', specs: ["大杯", "冰", "半糖",  "珍珠"] },
    { id: '23', specs: ["大杯", "冰", "半糖",  "椰果"] },
    // { id: '24', specs: ["大杯", "冰", "半糖",  "红豆"] },
    // { id: '25', specs: ["大杯", "冰", "无糖",  "珍珠"] },
    { id: '26', specs: ["大杯", "冰", "无糖",  "椰果"] },
    // { id: '27', specs: ["大杯", "冰", "无糖",  "红豆"] },
    // { id: '28', specs: ["大杯", "热", "标准糖", "珍珠"] },
    // { id: '29', specs: ["大杯", "热", "标准糖", "椰果"] },
    // { id: '30', specs: ["大杯", "热", "标准糖", "红豆"] },
    // { id: '31', specs: ["大杯", "热", "半糖",  "珍珠"] },
    // { id: '32', specs: ["大杯", "热", "半糖",  "椰果"] },
    // { id: '33', specs: ["大杯", "热", "半糖",  "红豆"] },
    // { id: '34', specs: ["大杯", "热", "无糖",  "珍珠"] },
    // { id: '35', specs: ["大杯", "热", "无糖",  "椰果"] },
    // { id: '36', specs: ["大杯", "热", "无糖",  "红豆"] }
  ],
}
<\/script>
`,Z=JSON.parse('{"title":"SkuChoose 商品 SKU 选择组件","description":"","frontmatter":{},"headers":[],"relativePath":"components/SkuChoose.md","filePath":"components/SkuChoose.md"}'),P={name:"components/SkuChoose.md"},B=Object.assign(P,{setup(V){const l=p();u(async()=>{l.value=(await h(async()=>{const{default:i}=await import("./chunks/custom.Eo3cAZT_.js");return{default:i}},__vite__mapDeps([0,1,2]))).default});const a=C(!0),r=p();return u(async()=>{r.value=(await h(async()=>{const{default:i}=await import("./chunks/base.BzOM9xIq.js");return{default:i}},__vite__mapDeps([3,1,2]))).default}),(i,e)=>{const c=_("ClientOnly");return G(),g("div",null,[e[2]||(e[2]=t("h1",{id:"skuchoose-商品-sku-选择组件",tabindex:"-1"},[t("code",null,"SkuChoose"),o(" 商品 SKU 选择组件 "),t("a",{class:"header-anchor",href:"#skuchoose-商品-sku-选择组件","aria-label":'Permalink to "`SkuChoose` 商品 SKU 选择组件"'},"​")],-1)),e[3]||(e[3]=t("p",null,[o("SkuChoose, 一个使用加权领接图实现的商品多规格选择组件。"),t("br"),o(" 只要传入 specList（规格维度）+ specCombinationList（有库存的组合），组件自动计算出哪些值可以/不可选，无需你在业务代码里写任何过滤逻辑。把「选规格」的门槛降到一行组件，把「选对规格」的复杂度藏进一张图。")],-1)),e[4]||(e[4]=t("h2",{id:"基础用法",tabindex:"-1"},[o("基础用法 "),t("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1)),b(n(s(f),null,null,512),[[m,a.value]]),n(c,null,{default:d(()=>[n(s(v),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:e[0]||(e[0]=()=>{a.value=!1}),vueCode:s(y)},k({_:2},[r.value?{name:"vue",fn:d(()=>[n(s(r))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),e[5]||(e[5]=t("h2",{id:"自定义样式",tabindex:"-1"},[o("自定义样式 "),t("a",{class:"header-anchor",href:"#自定义样式","aria-label":'Permalink to "自定义样式"'},"​")],-1)),b(n(s(f),null,null,512),[[m,a.value]]),n(c,null,{default:d(()=>[n(s(v),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:e[1]||(e[1]=()=>{a.value=!1}),vueCode:s(x)},k({_:2},[l.value?{name:"vue",fn:d(()=>[n(s(l))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),e[6]||(e[6]=S("",5))])}}});export{Z as __pageData,B as default};
