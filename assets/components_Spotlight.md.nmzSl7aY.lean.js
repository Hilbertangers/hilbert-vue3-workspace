const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/base.B7wfiBK0.js","assets/chunks/framework.ba8B019S.js"])))=>i.map(i=>d[i]);
import{p as h,D as p,v as c,ae as u,C as m,c as g,o as b,j as e,af as f,G as o,ag as v,a as d,ah as _,k as n,w as s,ai as w}from"./chunks/framework.ba8B019S.js";import{L as S,N as k}from"./chunks/index.xZojqZfn.js";const P=`<template>
  <div>
    <input
      placeholder="Search..."
      style="width: 300px;height: 50px;border: 1px solid #ccc;border-radius: 8px;padding: 0 16px;font-size: 16px;"
      @click="openSearch"
    >
    </input>
    <div>或者键盘快捷键打开：Ctrl/Command + K</div>
    <Spotlight v-bind="spotlightProps" />
  </div>
</template>

<script setup lang="ts">
import {Spotlight, useSpotlight} from 'hilbert-vue3-ui/Spotlight'
import type { SpotlightProps } from 'hilbert-vue3-ui'
import 'hilbert-vue3-ui/Spotlight/style'

function openSearch() {
  useSpotlight().open()
}

const spotlightProps: SpotlightProps = {
  actions: [
    {
      id: 'flow',
      title: '与或逻辑图绘制器',
      description: 'flow, 一个通过canvas绘制与或流程图的组件，支持与逻辑，或逻辑，括号逻辑和节点设置',
      onTrigger: () => {
        console.log('go to flow demo')
        window.location.href = '/components/Flow.html'
      }
    },
    {
      id: 'sku-choose',
      title: '商品多规格选择组件',
      description: 'sku-choose, 一个使用加权图实现的商品多规格选择组件',
      onTrigger: () => {
        console.log('go to sku-choose demo')
        window.location.href = '/components/SkuChoose.html'
      }
    },
    {
      id: 'pin-input',
      title: 'PIN输入',
      description: 'pin-input, 一个验证码输入组件，支持数字、字母、密码、移动端输入，支持自动聚焦，粘贴，回退等功能',
      onTrigger: () => {
        console.log('go to pin-input demo')
        window.location.href = '/components/PinInput.html'
      }
    },
    {
      id: 'spotlight',
      title: '全局搜索',
      description: 'spotlight, 一个基于Fuse.js的全局搜索组件，支持中英文模糊搜索、支持高亮、支持背景毛玻璃',
      onTrigger: () => {
        console.log('go to spotlight demo')
        window.location.href = '/components/Spotlight.html'
      }
    },
    {
      id: 'bulb-switch',
      title: '灯泡开关',
      description: 'bulb-switch, 一个纯css实现的灯泡开关组件，可以应用项目暗黑模式的开关',
      onTrigger: () => {
        console.log('go to bulb-switch demo')
        window.location.href = '/components/BulbSwitch.html'
      }
    },
  ]
}

<\/script>
`,V=JSON.parse('{"title":"Spotlight 全局搜索","description":"","frontmatter":{},"headers":[],"relativePath":"components/Spotlight.md","filePath":"components/Spotlight.md"}'),y={name:"components/Spotlight.md"},N=Object.assign(y,{setup(x){const l=h(!0),i=p();return c(async()=>{i.value=(await u(async()=>{const{default:a}=await import("./chunks/base.B7wfiBK0.js");return{default:a}},__vite__mapDeps([0,1]))).default}),(a,t)=>{const r=m("ClientOnly");return b(),g("div",null,[t[1]||(t[1]=e("h1",{id:"spotlight-全局搜索",tabindex:"-1"},[e("code",null,"Spotlight"),d(" 全局搜索 "),e("a",{class:"header-anchor",href:"#spotlight-全局搜索","aria-label":'Permalink to "`Spotlight` 全局搜索"'},"​")],-1)),t[2]||(t[2]=e("p",null,"Spotlight, 一个基于 Fuse.js 的全局搜索组件，支持中英文模糊搜索、支持高亮、支持背景毛玻璃",-1)),t[3]||(t[3]=e("h2",{id:"基本用法",tabindex:"-1"},[d("基本用法 "),e("a",{class:"header-anchor",href:"#基本用法","aria-label":'Permalink to "基本用法"'},"​")],-1)),f(o(n(S),null,null,512),[[_,l.value]]),o(r,null,{default:s(()=>[o(n(k),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:t[0]||(t[0]=()=>{l.value=!1}),vueCode:n(P)},w({_:2},[i.value?{name:"vue",fn:s(()=>[o(n(i))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),t[4]||(t[4]=v("",5))])}}});export{V as __pageData,N as default};
