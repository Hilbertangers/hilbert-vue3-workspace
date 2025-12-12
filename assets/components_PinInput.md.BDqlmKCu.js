const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/password.CgcwCXgu.js","assets/chunks/index.CmPf4Tap.js","assets/chunks/framework.BJG7AQGO.js","assets/chunks/text.ygcdr_Ay.js","assets/chunks/number.nF4xiJY5.js"])))=>i.map(i=>d[i]);
import{D as p,v as h,ae as m,p as k,C as y,c as B,o as P,j as a,af as b,G as e,ag as C,a as i,ah as v,k as n,w as d,ai as f}from"./chunks/framework.BJG7AQGO.js";import{L as _,N as V}from"./chunks/index.BKM7_Gpy.js";const g=`<template>
  <PinInput
    v-model="pin"
    type="password"
    :length="4"
    @complete="handleComplete"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import PinInput from 'hilbert-vue3-ui/PinInput'
import 'hilbert-vue3-ui/PinInput/style'

const pin = ref('')

function handleComplete(value: string) {
  console.log('输入完成，当前值为：', value)
}
<\/script>
`,w=`<template>
  <PinInput
    v-model="pin"
    type="text"
    :length="6"
    @complete="handleComplete"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import PinInput from 'hilbert-vue3-ui/PinInput'
import 'hilbert-vue3-ui/PinInput/style'

const pin = ref('12ab')

function handleComplete(value: string) {
  console.log('输入完成，当前值为：', value)
}
<\/script>
`,Z=`<template>
  <PinInput
    v-model="pin"
    type="number"
    :length="4"
    @complete="handleComplete"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import PinInput from 'hilbert-vue3-ui/PinInput'
import 'hilbert-vue3-ui/PinInput/style'

const pin = ref('12')

function handleComplete(value: string) {
  console.log('输入完成，当前值为：', value)
}
<\/script>
`,I=JSON.parse('{"title":"PinInput 验证码输入框","description":"","frontmatter":{},"headers":[],"relativePath":"components/PinInput.md","filePath":"components/PinInput.md"}'),D={name:"components/PinInput.md"},G=Object.assign(D,{setup(W){const r=p();h(async()=>{r.value=(await m(async()=>{const{default:o}=await import("./chunks/password.CgcwCXgu.js");return{default:o}},__vite__mapDeps([0,1,2]))).default});const u=p();h(async()=>{u.value=(await m(async()=>{const{default:o}=await import("./chunks/text.ygcdr_Ay.js");return{default:o}},__vite__mapDeps([3,1,2]))).default});const l=k(!0),s=p();return h(async()=>{s.value=(await m(async()=>{const{default:o}=await import("./chunks/number.nF4xiJY5.js");return{default:o}},__vite__mapDeps([4,1,2]))).default}),(o,t)=>{const c=y("ClientOnly");return P(),B("div",null,[t[3]||(t[3]=a("h1",{id:"pininput-验证码输入框",tabindex:"-1"},[a("code",null,"PinInput"),i(" 验证码输入框 "),a("a",{class:"header-anchor",href:"#pininput-验证码输入框","aria-label":'Permalink to "`PinInput` 验证码输入框"'},"​")],-1)),t[4]||(t[4]=a("p",null,"PinInput, 一个验证码输入组件，长度可配，支持数字、字母、密码、移动端输入，支持自动聚焦，禁用，粘贴，回退等功能",-1)),t[5]||(t[5]=a("h2",{id:"数字输入",tabindex:"-1"},[i("数字输入 "),a("a",{class:"header-anchor",href:"#数字输入","aria-label":'Permalink to "数字输入"'},"​")],-1)),b(e(n(_),null,null,512),[[v,l.value]]),e(c,null,{default:d(()=>[e(n(V),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:t[0]||(t[0]=()=>{l.value=!1}),vueCode:n(Z)},f({_:2},[s.value?{name:"vue",fn:d(()=>[e(n(s))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),t[6]||(t[6]=a("h2",{id:"数字字母输入",tabindex:"-1"},[i("数字字母输入 "),a("a",{class:"header-anchor",href:"#数字字母输入","aria-label":'Permalink to "数字字母输入"'},"​")],-1)),b(e(n(_),null,null,512),[[v,l.value]]),e(c,null,{default:d(()=>[e(n(V),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:t[1]||(t[1]=()=>{l.value=!1}),vueCode:n(w)},f({_:2},[u.value?{name:"vue",fn:d(()=>[e(n(u))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),t[7]||(t[7]=a("h2",{id:"密码输入",tabindex:"-1"},[i("密码输入 "),a("a",{class:"header-anchor",href:"#密码输入","aria-label":'Permalink to "密码输入"'},"​")],-1)),b(e(n(_),null,null,512),[[v,l.value]]),e(c,null,{default:d(()=>[e(n(V),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:t[2]||(t[2]=()=>{l.value=!1}),vueCode:n(g)},f({_:2},[r.value?{name:"vue",fn:d(()=>[e(n(r))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),t[8]||(t[8]=C('<h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>例子</th><th>默认值</th></tr></thead><tbody><tr><td>length</td><td>输入框数量</td><td><code>number</code></td><td></td><td><code>4</code></td></tr><tr><td>type</td><td>可输入类型</td><td><code>string</code></td><td><code>number</code>、<code>text</code>、<code>password</code></td><td><code>text</code></td></tr><tr><td>disabled</td><td>是否禁用</td><td><code>boolean</code></td><td></td><td><code>false</code></td></tr><tr><td>modelValue</td><td>值</td><td><code>string</code></td><td></td><td>``</td></tr></tbody></table><h3 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-label="Permalink to &quot;Events&quot;">​</a></h3><table tabindex="0"><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>complete</td><td>全部输入完成后返回值</td><td><code>string</code></td></tr></tbody></table>',5))])}}});export{I as __pageData,G as default};
