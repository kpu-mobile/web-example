
/**
 * 由 Kpu-mobile 提供技术支持
 * Powered by Kpu-mobile
 * https://kpu-mobile.kpui.cn
 */
  
import{C as e,Dt as t,E as n,O as r,ct as i,k as a,q as o,w as s}from"./vue-router-DpP-iWv7.js";import{O as c,b as l,ht as u,ot as d}from"./index-D4TT8-Ku.js";import{t as f}from"./AppPageLayout-DuOJLTKk.js";var p={class:`p-2 bg-background flex flex-col h-50 w-full items-center justify-center relative overflow-hidden`},m=a({__name:`_demo1`,setup(e){let i=u();return(e,a)=>{let s=l;return o(),n(`div`,p,[r(s,{class:`inset-0 absolute`,color:t(i).currentColorScheme===`dark`?`#FFF`:`#000`},null,8,[`color`])])}}}),h=`<script setup lang="ts">
const appSettingsStore = useAppSettingsStore()
<\/script>

<template>
  <div class="p-2 bg-background flex flex-col h-50 w-full items-center justify-center relative overflow-hidden">
    <KmParticlesBg
      class="inset-0 absolute"
      :color="appSettingsStore.currentColorScheme === 'dark' ? '#FFF' : '#000'"
    />
  </div>
</template>
`,g={},_={class:`p-2 bg-background flex flex-col h-50 w-full items-center justify-center relative overflow-hidden`};function v(e,t){let i=l;return o(),n(`div`,_,[r(i,{class:`inset-0 absolute`,color:`#2563EB`,quantity:1e3,ease:100,staticity:5})])}var y=d(g,[[`render`,v]]),b=`<template>
  <div class="p-2 bg-background flex flex-col h-50 w-full items-center justify-center relative overflow-hidden">
    <KmParticlesBg
      class="inset-0 absolute"
      color="#2563EB"
      :quantity="1000"
      :ease="100"
      :staticity="5"
    />
  </div>
</template>
`,x={class:`p-2 bg-background flex flex-col h-50 w-full items-center justify-center relative overflow-hidden`},S=a({__name:`_demo3`,setup(i){let a=u();return(i,s)=>{let c=l;return o(),n(`div`,x,[s[0]||(s[0]=e(`span`,{class:`text-2xl text-transparent leading-none font-semibold text-center pointer-events-none whitespace-pre-wrap from-black to-gray-300/80 bg-gradient-to-b bg-clip-text dark:from-white dark:to-slate-900/10`},` Kpu-mobile 真好用 ! `,-1)),r(c,{class:`inset-0 absolute`,color:t(a).currentColorScheme===`dark`?`#FFF`:`#000`,quantity:100,ease:100,staticity:10},null,8,[`color`])])}}}),C=`<script setup lang="ts">
const appSettingsStore = useAppSettingsStore()
<\/script>

<template>
  <div class="p-2 bg-background flex flex-col h-50 w-full items-center justify-center relative overflow-hidden">
    <span class="text-2xl text-transparent leading-none font-semibold text-center pointer-events-none whitespace-pre-wrap from-black to-gray-300/80 bg-gradient-to-b bg-clip-text dark:from-white dark:to-slate-900/10">
      Kpu-mobile 真好用 !
    </span>
    <KmParticlesBg
      class="inset-0 absolute"
      :color="appSettingsStore.currentColorScheme === 'dark' ? '#FFF' : '#000'"
      :quantity="100"
      :ease="100"
      :staticity="10"
    />
  </div>
</template>
`,w=a({__name:`index`,setup(e){return(e,n)=>{let a=c,l=f;return o(),s(l,{navbar:``,"navbar-start-side":`back`},{default:i(()=>[r(a,{code:t(h)},{default:i(()=>[r(m)]),_:1},8,[`code`]),r(a,{code:t(b)},{default:i(()=>[r(y)]),_:1},8,[`code`]),r(a,{code:t(C)},{default:i(()=>[r(S)]),_:1},8,[`code`])]),_:1})}}});export{w as default};