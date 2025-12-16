const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/base.BM5DxPdQ.js","assets/chunks/framework.ba8B019S.js"])))=>i.map(i=>d[i]);
import{p as h,D as p,v as c,ae as u,C as m,c as g,o as f,j as e,af as b,G as o,ag as v,a as n,ah as _,k as i,w as s,ai as w}from"./chunks/framework.ba8B019S.js";import{L as S,N as x}from"./chunks/index.xZojqZfn.js";const k=`<template>
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

const affix = process.env.NODE_ENV === 'production' ? '/hilbert-vue3-workspace/' : '/'

const spotlightProps: SpotlightProps = {
  actions: [
    {
      id: 'flow',
      title: '与或逻辑图绘制器',
      description: 'flow, 一个通过canvas绘制与或流程图的组件，支持与逻辑，或逻辑，括号逻辑和节点设置',
      onTrigger: () => {
        console.log('go to flow demo')
        window.location.href = affix + '/components/Flow.html'
      }
    },
    {
      id: 'sku-choose',
      title: '商品多规格选择组件',
      description: 'sku-choose, 一个使用加权图实现的商品多规格选择组件',
      onTrigger: () => {
        console.log('go to sku-choose demo')
        window.location.href = affix + '/components/SkuChoose.html'
      }
    },
    {
      id: 'pin-input',
      title: 'PIN输入',
      description: 'pin-input, 一个验证码输入组件，支持数字、字母、密码、移动端输入，支持自动聚焦，粘贴，回退等功能',
      onTrigger: () => {
        console.log('go to pin-input demo')
        window.location.href = affix + '/components/PinInput.html'
      }
    },
    {
      id: 'spotlight',
      title: '全局搜索',
      description: 'spotlight, 一个基于Fuse.js的全局搜索组件，支持中英文模糊搜索、支持高亮、支持背景毛玻璃',
      onTrigger: () => {
        console.log('go to spotlight demo')
        window.location.href = affix + '/components/Spotlight.html'
      }
    },
    {
      id: 'bulb-switch',
      title: '灯泡开关',
      description: 'bulb-switch, 一个纯css实现的灯泡开关组件，可以应用项目暗黑模式的开关',
      onTrigger: () => {
        console.log('go to bulb-switch demo')
        window.location.href = affix + '/components/BulbSwitch.html'
      }
    },
  ]
}

<\/script>
`,V=JSON.parse('{"title":"Spotlight 全局搜索","description":"","frontmatter":{},"headers":[],"relativePath":"components/Spotlight.md","filePath":"components/Spotlight.md"}'),P={name:"components/Spotlight.md"},N=Object.assign(P,{setup(y){const l=h(!0),a=p();return c(async()=>{a.value=(await u(async()=>{const{default:d}=await import("./chunks/base.BM5DxPdQ.js");return{default:d}},__vite__mapDeps([0,1]))).default}),(d,t)=>{const r=m("ClientOnly");return f(),g("div",null,[t[1]||(t[1]=e("h1",{id:"spotlight-全局搜索",tabindex:"-1"},[e("code",null,"Spotlight"),n(" 全局搜索 "),e("a",{class:"header-anchor",href:"#spotlight-全局搜索","aria-label":'Permalink to "`Spotlight` 全局搜索"'},"​")],-1)),t[2]||(t[2]=e("p",null,"Spotlight, 一个基于 Fuse.js 的全局搜索组件，支持中英文模糊搜索、支持高亮、支持背景毛玻璃",-1)),t[3]||(t[3]=e("h2",{id:"基本用法",tabindex:"-1"},[n("基本用法 "),e("a",{class:"header-anchor",href:"#基本用法","aria-label":'Permalink to "基本用法"'},"​")],-1)),b(o(i(S),null,null,512),[[_,l.value]]),o(r,null,{default:s(()=>[o(i(x),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:t[0]||(t[0]=()=>{l.value=!1}),vueCode:i(k)},w({_:2},[a.value?{name:"vue",fn:s(()=>[o(i(a))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),t[4]||(t[4]=v('<h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>例子</th><th>默认值</th></tr></thead><tbody><tr><td>actions</td><td>可查询项目</td><td><code>SpotlightProps[]</code></td><td>见基本用法案例</td><td></td></tr><tr><td>placeholder</td><td>输入框提示</td><td><code>string</code></td><td></td><td><code>搜索...</code></td></tr><tr><td>emptyText</td><td>搜索为空时提示</td><td><code>string</code></td><td></td><td><code>未找到结果</code></td></tr></tbody></table><h3 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-label="Permalink to &quot;Events&quot;">​</a></h3><table tabindex="0"><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>open</td><td>打开回调</td><td></td></tr><tr><td>close</td><td>关闭回调</td><td></td></tr></tbody></table>',5))])}}});export{V as __pageData,N as default};
