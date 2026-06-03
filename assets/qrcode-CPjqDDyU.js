
/**
 * 由 Kpu-mobile 提供技术支持
 * Powered by Kpu-mobile
 * https://kpu-mobile.kpui.cn
 */
  
import{C as e,D as t,Dt as n,E as r,Nt as i,O as a,S as o,T as s,Y as c,_ as l,ct as u,it as d,k as f,mt as p,q as m,w as h,yt as g}from"./vue-router-DpP-iWv7.js";import{$ as _,K as v,O as y,Q as b,R as x,_ as S,at as C}from"./index-CqA6ZM_a.js";import{t as w}from"./AppPageLayout-b-gp_UZ6.js";import{t as T}from"./logo-BuKSDxoE.js";var E={class:`flex flex-col gap-6`},D={class:`flex flex-col gap-2 items-center`},O={class:`flex flex-col gap-2 items-center`},k={class:`flex flex-col gap-2 items-center`},A=f({__name:`_demo1`,setup(t){let i=g(`https://kpu-mobile.github.io`);return(t,o)=>{let s=S;return m(),r(`div`,E,[e(`div`,D,[o[0]||(o[0]=e(`span`,{class:`text-sm text-muted-foreground`},`基础二维码`,-1)),a(s,{value:n(i),size:150},null,8,[`value`])]),e(`div`,O,[o[1]||(o[1]=e(`span`,{class:`text-sm text-muted-foreground`},`带 Logo (网络图片)`,-1)),a(s,{value:n(i),size:150,logo:`https://kpu-mobile.github.io/logo.png`},null,8,[`value`])]),e(`div`,k,[o[2]||(o[2]=e(`span`,{class:`text-sm text-muted-foreground`},`带 Logo (本地图片)`,-1)),a(s,{value:n(i),size:150,logo:n(T)},null,8,[`value`,`logo`])])])}}}),j=`<script setup lang="ts">
import logo from '@/assets/images/logo.png'

const qrValue = ref('https://kpu-mobile.github.io')
<\/script>

<template>
  <div class="flex flex-col gap-6">
    <div class="flex flex-col gap-2 items-center">
      <span class="text-sm text-muted-foreground">基础二维码</span>
      <KmQrcode :value="qrValue" :size="150" />
    </div>

    <div class="flex flex-col gap-2 items-center">
      <span class="text-sm text-muted-foreground">带 Logo (网络图片)</span>
      <KmQrcode
        :value="qrValue"
        :size="150"
        logo="https://kpu-mobile.github.io/logo.png"
      />
    </div>

    <div class="flex flex-col gap-2 items-center">
      <span class="text-sm text-muted-foreground">带 Logo (本地图片)</span>
      <KmQrcode
        :value="qrValue"
        :size="150"
        :logo="logo"
      />
    </div>
  </div>
</template>
`,M={class:`flex flex-col gap-4`},N={class:`flex gap-4 items-center`},P=f({__name:`_demo2`,setup(i){let o=d(`qrcodeRef`),s=g(`https://kpu-mobile.github.io`);return(i,c)=>{let l=v,d=b,f=S;return m(),r(`div`,M,[e(`div`,N,[a(l,{modelValue:n(s),"onUpdate:modelValue":c[0]||(c[0]=e=>p(s)?s.value=e:null),placeholder:`输入二维码内容`,class:`w-64`},null,8,[`modelValue`]),a(d,{variant:`secondary`,onClick:c[1]||(c[1]=e=>n(o)?.download(`my-qrcode.png`))},{default:u(()=>[...c[2]||(c[2]=[t(` 下载 `,-1)])]),_:1})]),a(f,{ref_key:`qrcodeRef`,ref:o,value:n(s),size:200},null,8,[`value`])])}}}),F=`<script setup lang="ts">
const qrcodeRef = useTemplateRef('qrcodeRef')

const qrValue = ref('https://kpu-mobile.github.io')
<\/script>

<template>
  <div class="flex flex-col gap-4">
    <div class="flex gap-4 items-center">
      <KmInput v-model="qrValue" placeholder="输入二维码内容" class="w-64" />
      <KmButton variant="secondary" @click="qrcodeRef?.download('my-qrcode.png')">
        下载
      </KmButton>
    </div>
    <KmQrcode
      ref="qrcodeRef"
      :value="qrValue"
      :size="200"
    />
  </div>
</template>
`,I={class:`space-y-2`},L=f({__name:`_demo3`,setup(e){let o=g(`M`),s=g(`https://kpu-mobile.github.io`),d=[{label:`L`,value:`L`,desc:`7%`},{label:`M`,value:`M`,desc:`15%`},{label:`Q`,value:`Q`,desc:`25%`},{label:`H`,value:`H`,desc:`30%`}];return(e,f)=>{let p=b,h=_,g=S;return m(),r(`div`,I,[a(h,null,{default:u(()=>[(m(),r(l,null,c(d,e=>a(p,{key:e.value,variant:n(o)===e.value?`default`:`outline`,onClick:t=>o.value=e.value},{default:u(()=>[t(i(e.label),1)]),_:2},1032,[`variant`,`onClick`])),64))]),_:1}),a(g,{value:n(s),size:150,"error-correction-level":n(o)},null,8,[`value`,`error-correction-level`])])}}}),R=`<script setup lang="ts">
const errorCorrectionLevel = ref<'L' | 'M' | 'Q' | 'H'>('M')
const qrValue = ref('https://kpu-mobile.github.io')

const levels = [
  { label: 'L', value: 'L' as const, desc: '7%' },
  { label: 'M', value: 'M' as const, desc: '15%' },
  { label: 'Q', value: 'Q' as const, desc: '25%' },
  { label: 'H', value: 'H' as const, desc: '30%' },
]
<\/script>

<template>
  <div class="space-y-2">
    <KmButtonGroup>
      <KmButton
        v-for="item in levels"
        :key="item.value"
        :variant="errorCorrectionLevel === item.value ? 'default' : 'outline'"
        @click="errorCorrectionLevel = item.value"
      >
        {{ item.label }}
      </KmButton>
    </KmButtonGroup>
    <KmQrcode
      :value="qrValue"
      :size="150"
      :error-correction-level="errorCorrectionLevel"
    />
  </div>
</template>
`,z={class:`space-y-2`},B={class:`flex gap-4 items-center`},ee={class:`text-sm text-muted-foreground w-16`},V=f({__name:`_demo4`,setup(t){let s=g([200]),c=g(`https://kpu-mobile.github.io`),l=o(()=>s.value[0]);return(t,o)=>{let u=x,d=S;return m(),r(`div`,z,[e(`div`,B,[a(u,{modelValue:n(s),"onUpdate:modelValue":o[0]||(o[0]=e=>p(s)?s.value=e:null),min:100,max:400,step:100,class:`w-48`},null,8,[`modelValue`]),e(`span`,ee,i(n(l))+`px`,1)]),a(d,{value:n(c),size:n(l)},null,8,[`value`,`size`])])}}}),H=`<script setup lang="ts">
const sizeValue = ref([200])
const qrValue = ref('https://kpu-mobile.github.io')

const size = computed(() => sizeValue.value[0])
<\/script>

<template>
  <div class="space-y-2">
    <div class="flex gap-4 items-center">
      <KmSlider v-model="sizeValue" :min="100" :max="400" :step="100" class="w-48" />
      <span class="text-sm text-muted-foreground w-16">{{ size }}px</span>
    </div>
    <KmQrcode
      :value="qrValue"
      :size="size"
    />
  </div>
</template>
`,U={class:`flex flex-wrap gap-6`},W={class:`flex flex-col gap-2 items-center`},G={class:`flex flex-col gap-2 items-center`},K={class:`flex flex-col gap-2 items-center`},q={class:`flex flex-col gap-2 items-center`},J={class:`flex flex-col gap-2 items-center`},Y=f({__name:`_demo5`,setup(t){let i=g(`https://kpu-mobile.github.io`);return(t,o)=>{let s=S;return m(),r(`div`,U,[e(`div`,W,[o[0]||(o[0]=e(`span`,{class:`text-sm text-muted-foreground`},`经典黑白`,-1)),a(s,{value:n(i),size:120,"foreground-color":`#000000`,"background-color":`#ffffff`},null,8,[`value`])]),e(`div`,G,[o[1]||(o[1]=e(`span`,{class:`text-sm text-muted-foreground`},`品牌绿色`,-1)),a(s,{value:n(i),size:120,"foreground-color":`#059669`,"background-color":`#f0fdf4`},null,8,[`value`])]),e(`div`,K,[o[2]||(o[2]=e(`span`,{class:`text-sm text-muted-foreground`},`科技蓝`,-1)),a(s,{value:n(i),size:120,"foreground-color":`#2563eb`,"background-color":`#eff6ff`},null,8,[`value`])]),e(`div`,q,[o[3]||(o[3]=e(`span`,{class:`text-sm text-muted-foreground`},`活力橙`,-1)),a(s,{value:n(i),size:120,"foreground-color":`#ea580c`,"background-color":`#fff7ed`},null,8,[`value`])]),e(`div`,J,[o[4]||(o[4]=e(`span`,{class:`text-sm text-muted-foreground`},`暗色模式`,-1)),a(s,{value:n(i),size:120,"foreground-color":`#e5e5e5`,"background-color":`#171717`},null,8,[`value`])])])}}}),X=`<script setup lang="ts">
const qrValue = ref('https://kpu-mobile.github.io')
<\/script>

<template>
  <div class="flex flex-wrap gap-6">
    <div class="flex flex-col gap-2 items-center">
      <span class="text-sm text-muted-foreground">经典黑白</span>
      <KmQrcode
        :value="qrValue"
        :size="120"
        foreground-color="#000000"
        background-color="#ffffff"
      />
    </div>

    <div class="flex flex-col gap-2 items-center">
      <span class="text-sm text-muted-foreground">品牌绿色</span>
      <KmQrcode
        :value="qrValue"
        :size="120"
        foreground-color="#059669"
        background-color="#f0fdf4"
      />
    </div>

    <div class="flex flex-col gap-2 items-center">
      <span class="text-sm text-muted-foreground">科技蓝</span>
      <KmQrcode
        :value="qrValue"
        :size="120"
        foreground-color="#2563eb"
        background-color="#eff6ff"
      />
    </div>

    <div class="flex flex-col gap-2 items-center">
      <span class="text-sm text-muted-foreground">活力橙</span>
      <KmQrcode
        :value="qrValue"
        :size="120"
        foreground-color="#ea580c"
        background-color="#fff7ed"
      />
    </div>

    <div class="flex flex-col gap-2 items-center">
      <span class="text-sm text-muted-foreground">暗色模式</span>
      <KmQrcode
        :value="qrValue"
        :size="120"
        foreground-color="#e5e5e5"
        background-color="#171717"
      />
    </div>
  </div>
</template>
`,Z={class:`flex flex-col gap-4`},Q={key:0,class:`text-success flex flex-col gap-1 items-center`},$={key:1,class:`text-muted-foreground flex flex-col gap-1 items-center`},te={key:2,class:`text-destructive flex flex-col gap-1 items-center`},ne=f({__name:`_demo6`,setup(o){let d=g(`loading`),f=g(`https://kpu-mobile.github.io`),p=[{label:`加载中`,value:`loading`},{label:`已扫描`,value:`success`},{label:`已过期`,value:`expired`},{label:`错误`,value:`error`}];function h(e){d.value=e}return(o,g)=>{let v=b,y=_,x=C,w=S;return m(),r(`div`,Z,[a(y,null,{default:u(()=>[(m(),r(l,null,c(p,e=>a(v,{key:e.value,variant:n(d)===e.value?`default`:`outline`,onClick:t=>h(e.value)},{default:u(()=>[t(i(e.label),1)]),_:2},1032,[`variant`,`onClick`])),64))]),_:1}),a(w,{value:n(f),size:200,status:n(d)},{statusRender:u(({status:t})=>[t===`success`?(m(),r(`div`,Q,[a(x,{name:`i-mdi:check-circle`,class:`size-6`}),g[0]||(g[0]=e(`span`,{class:`text-xs`},`已扫描`,-1))])):t===`expired`?(m(),r(`div`,$,[a(x,{name:`i-mdi:clock-alert`,class:`size-6`}),g[1]||(g[1]=e(`span`,{class:`text-xs`},`二维码已过期`,-1))])):t===`error`?(m(),r(`div`,te,[a(x,{name:`i-mdi:alert-circle`,class:`size-6`}),g[2]||(g[2]=e(`span`,{class:`text-xs`},`加载失败`,-1))])):s(``,!0)]),_:1},8,[`value`,`status`])])}}}),re=`<script setup lang="ts">
const status = ref<'loading' | 'success' | 'expired' | 'error'>('loading')
const qrValue = ref('https://kpu-mobile.github.io')

const statuses = [
  { label: '加载中', value: 'loading' as const },
  { label: '已扫描', value: 'success' as const },
  { label: '已过期', value: 'expired' as const },
  { label: '错误', value: 'error' as const },
]

function setStatus(s: typeof status.value) {
  status.value = s
}
<\/script>

<template>
  <div class="flex flex-col gap-4">
    <KmButtonGroup>
      <KmButton
        v-for="item in statuses"
        :key="item.value"
        :variant="status === item.value ? 'default' : 'outline'"
        @click="setStatus(item.value)"
      >
        {{ item.label }}
      </KmButton>
    </KmButtonGroup>
    <KmQrcode :value="qrValue" :size="200" :status="status">
      <template #statusRender="{ status: s }">
        <template v-if="s === 'success'">
          <div class="text-success flex flex-col gap-1 items-center">
            <KmIcon name="i-mdi:check-circle" class="size-6" />
            <span class="text-xs">已扫描</span>
          </div>
        </template>
        <template v-else-if="s === 'expired'">
          <div class="text-muted-foreground flex flex-col gap-1 items-center">
            <KmIcon name="i-mdi:clock-alert" class="size-6" />
            <span class="text-xs">二维码已过期</span>
          </div>
        </template>
        <template v-else-if="s === 'error'">
          <div class="text-destructive flex flex-col gap-1 items-center">
            <KmIcon name="i-mdi:alert-circle" class="size-6" />
            <span class="text-xs">加载失败</span>
          </div>
        </template>
      </template>
    </KmQrcode>
  </div>
</template>
`,ie=f({__name:`index`,setup(e){return(e,t)=>{let r=y,i=w;return m(),h(i,{navbar:``,"navbar-start-side":`back`},{default:u(()=>[a(r,{code:n(j)},{default:u(()=>[a(A)]),_:1},8,[`code`]),a(r,{title:`交互式操作`,code:n(F)},{default:u(()=>[a(P)]),_:1},8,[`code`]),a(r,{title:`纠错等级`,code:n(R)},{default:u(()=>[a(L)]),_:1},8,[`code`]),a(r,{title:`尺寸设置`,code:n(H)},{default:u(()=>[a(V)]),_:1},8,[`code`]),a(r,{title:`颜色定制`,code:n(X)},{default:u(()=>[a(Y)]),_:1},8,[`code`]),a(r,{title:`状态展示`,code:n(re)},{default:u(()=>[a(ne)]),_:1},8,[`code`])]),_:1})}}});export{ie as default};