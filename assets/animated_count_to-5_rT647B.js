
/**
 * 由 Kpu-mobile 提供技术支持
 * Powered by Kpu-mobile
 * https://kpu-mobile.kpui.cn
 */
  
import{Dt as e,E as t,O as n,ct as r,k as i,kt as a,q as o,w as s,yt as c}from"./vue-router-DpP-iWv7.js";import{M as l,O as u,j as d}from"./index-CqA6ZM_a.js";import{t as f}from"./AppPageLayout-b-gp_UZ6.js";var p=i({__name:`_demo1`,setup(t){let n=c(0);return setInterval(()=>{n.value+=Math.floor(Math.random()*1e3)*(Math.random()>.5?1:-1)},2e3),(t,r)=>{let i=d;return o(),s(i,{value:e(n),"will-change":``,class:`text-4xl font-bold`},null,8,[`value`])}}}),m=`<script setup lang="ts">
const value = ref(0)

setInterval(() => {
  value.value += Math.floor(Math.random() * 1000) * (Math.random() > 0.5 ? 1 : -1)
}, 2000)
<\/script>

<template>
  <KmAnimatedCountTo :value will-change class="text-4xl font-bold" />
</template>
`,h=i({__name:`_demo2`,setup(t){let n=c(0);return setInterval(()=>{n.value+=Math.floor(Math.random()*1e3)*(Math.random()>.5?1:-1)},2e3),(t,r)=>{let i=d;return o(),s(i,{value:e(n),prefix:`￥`,suffix:`元`,"will-change":``,class:`text-4xl font-bold`},null,8,[`value`])}}}),g=`<script setup lang="ts">
const value = ref(0)

setInterval(() => {
  value.value += Math.floor(Math.random() * 1000) * (Math.random() > 0.5 ? 1 : -1)
}, 2000)
<\/script>

<template>
  <KmAnimatedCountTo :value prefix="￥" suffix="元" will-change class="text-4xl font-bold" />
</template>
`,_={class:`flex flex-col gap-2`},v=i({__name:`_demo3`,setup(r){let i=c(0);return setInterval(()=>{i.value+=Math.floor(Math.random()*1e3)*(Math.random()>.5?1:-1)},2e3),(r,a)=>{let s=d;return o(),t(`div`,_,[n(s,{value:e(i),trend:1,"will-change":``,class:`text-4xl font-bold`},null,8,[`value`]),n(s,{value:e(i),trend:0,"will-change":``,class:`text-4xl font-bold`},null,8,[`value`]),n(s,{value:e(i),trend:-1,"will-change":``,class:`text-4xl font-bold`},null,8,[`value`])])}}}),y=`<script setup lang="ts">
const value = ref(0)

setInterval(() => {
  value.value += Math.floor(Math.random() * 1000) * (Math.random() > 0.5 ? 1 : -1)
}, 2000)
<\/script>

<template>
  <div class="flex flex-col gap-2">
    <KmAnimatedCountTo :value :trend="1" will-change class="text-4xl font-bold" />
    <KmAnimatedCountTo :value :trend="0" will-change class="text-4xl font-bold" />
    <KmAnimatedCountTo :value :trend="-1" will-change class="text-4xl font-bold" />
  </div>
</template>
`,b=i({__name:`_demo4`,setup(t){let n=c(0),r=c(0),i=[`en-US`,`en-US`,`fr-FR`,`en-US`,`en-US`,`zh-CN`,`en-US`,`en-US`,`fr-FR`],a=[{},{minimumFractionDigits:2},{style:`currency`,currency:`USD`,currencySign:`accounting`,signDisplay:`always`},{style:`percent`,signDisplay:`always`},{style:`unit`,unit:`meter`,notation:`compact`,minimumFractionDigits:2,maximumFractionDigits:2,signDisplay:`never`},{style:`currency`,currency:`CNY`},{signDisplay:`always`}];return setInterval(()=>{r.value+=Math.floor(Math.random()*1e3)*(Math.random()>.5?1:-1),n.value+=1},2e3),(t,c)=>{let l=d;return o(),s(l,{value:e(r),format:a[e(n)%a.length],locales:i[e(n)%i.length],"will-change":``,class:`text-4xl font-bold`},null,8,[`value`,`format`,`locales`])}}}),x=`<script setup lang="ts">
const index = ref(0)
const value = ref(0)

const LOCALES = ['en-US', 'en-US', 'fr-FR', 'en-US', 'en-US', 'zh-CN', 'en-US', 'en-US', 'fr-FR']
const FORMATS = [
  {},
  {
    minimumFractionDigits: 2,
  },
  {
    style: 'currency',
    currency: 'USD',
    currencySign: 'accounting',
    signDisplay: 'always',
  },
  {
    style: 'percent',
    signDisplay: 'always',
  },
  {
    style: 'unit',
    unit: 'meter',
    notation: 'compact',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    signDisplay: 'never',
  },
  {
    style: 'currency',
    currency: 'CNY',
  },
  {
    signDisplay: 'always',
  },
]

setInterval(() => {
  value.value += Math.floor(Math.random() * 1000) * (Math.random() > 0.5 ? 1 : -1)
  index.value += 1
}, 2000)
<\/script>

<template>
  <KmAnimatedCountTo
    :value
    :format="FORMATS[index % FORMATS.length] as any"
    :locales="LOCALES[index % LOCALES.length]"
    will-change
    class="text-4xl font-bold"
  />
</template>
`,S=i({__name:`_demo5`,setup(t){let n=c(0);return setInterval(()=>{n.value+=Math.floor(Math.random()*1e3)*(Math.random()>.5?1:-1)},2e3),(t,r)=>{let i=d;return o(),s(i,{value:e(n),"transform-timing":{duration:750,easing:`ease-out`},"spin-timing":{duration:750,easing:`cubic-bezier(0.175, 0.885, 0.32, 1.275)`},"opacity-timing":{duration:350,easing:`ease-out`},"will-change":``,class:`text-4xl font-bold`},null,8,[`value`])}}}),C=`<script setup lang="ts">
const value = ref(0)

setInterval(() => {
  value.value += Math.floor(Math.random() * 1000) * (Math.random() > 0.5 ? 1 : -1)
}, 2000)
<\/script>

<template>
  <KmAnimatedCountTo :value :transform-timing="{ duration: 750, easing: 'ease-out' }" :spin-timing="{ duration: 750, easing: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)' }" :opacity-timing="{ duration: 350, easing: 'ease-out' }" will-change class="text-4xl font-bold" />
</template>
`,w={class:`flex-center-start gap-2`},T=i({__name:`_demo6`,setup(i){let s=c(0),u=c(0);return setInterval(()=>{s.value+=Math.floor(Math.random()*1e3)*(Math.random()>.5?1:-1),u.value+=Math.random()*(Math.random()>.5?1:-1)},2e3),(i,c)=>{let f=d,p=l;return o(),t(`div`,w,[n(p,null,{default:r(()=>[n(f,{value:e(s),locales:`zh-CN`,format:{style:`currency`,currency:`CNY`},"will-change":``,class:`text-4xl font-bold`},null,8,[`value`]),n(f,{value:e(u),locales:`zh-CN`,format:{style:`percent`,maximumFractionDigits:2,signDisplay:`always`},"will-change":``,class:a([`text-2xl text-green-500 font-bold`,{"text-red-500":e(u)<0}])},null,8,[`value`,`class`])]),_:1})])}}}),E=`<script setup lang="ts">
const value1 = ref(0)
const value2 = ref(0)

setInterval(() => {
  value1.value += Math.floor(Math.random() * 1000) * (Math.random() > 0.5 ? 1 : -1)
  value2.value += Math.random() * (Math.random() > 0.5 ? 1 : -1)
}, 2000)
<\/script>

<template>
  <div class="flex-center-start gap-2">
    <KmAnimatedCountToGroup>
      <KmAnimatedCountTo :value="value1" locales="zh-CN" :format="{ style: 'currency', currency: 'CNY' }" will-change class="text-4xl font-bold" />
      <KmAnimatedCountTo :value="value2" locales="zh-CN" :format="{ style: 'percent', maximumFractionDigits: 2, signDisplay: 'always' }" will-change class="text-2xl text-green-500 font-bold" :class="{ 'text-red-500': value2 < 0 }" />
    </KmAnimatedCountToGroup>
  </div>
</template>
`,D=i({__name:`index`,setup(t){return(t,i)=>{let a=u,c=f;return o(),s(c,{navbar:``,"navbar-start-side":`back`},{default:r(()=>[n(a,{code:e(m)},{default:r(()=>[n(p)]),_:1},8,[`code`]),n(a,{title:`前缀/后缀`,code:e(g)},{default:r(()=>[n(h)]),_:1},8,[`code`]),n(a,{title:`方向`,code:e(y)},{default:r(()=>[n(v)]),_:1},8,[`code`]),n(a,{title:`格式化`,code:e(x)},{default:r(()=>[n(b)]),_:1},8,[`code`]),n(a,{title:`时机`,code:e(C)},{default:r(()=>[n(S)]),_:1},8,[`code`]),n(a,{title:`组`,code:e(E)},{default:r(()=>[n(T)]),_:1},8,[`code`])]),_:1})}}});export{D as default};