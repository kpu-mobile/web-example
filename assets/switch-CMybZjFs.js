
/**
 * 由 Kpu-mobile 提供技术支持
 * Powered by Kpu-mobile
 * https://kpu-mobile.kpui.cn
 */
  
import{Dt as e,E as t,O as n,ct as r,k as i,mt as a,q as o,w as s,yt as c}from"./vue-router-DpP-iWv7.js";import{L as l,O as u}from"./index-D4TT8-Ku.js";import{t as d}from"./AppPageLayout-DuOJLTKk.js";var f={class:`flex gap-4`},p=i({__name:`_demo1`,setup(r){let i=c(!1);return(r,s)=>{let c=l;return o(),t(`div`,f,[n(c,{modelValue:e(i),"onUpdate:modelValue":s[0]||(s[0]=e=>a(i)?i.value=e:null)},null,8,[`modelValue`]),n(c,{modelValue:e(i),"onUpdate:modelValue":s[1]||(s[1]=e=>a(i)?i.value=e:null),"on-icon":`ri:sun-line`,"off-icon":`ri:moon-line`},null,8,[`modelValue`])])}}}),m=`<script setup lang="ts">
const switchVal = ref(false)
<\/script>

<template>
  <div class="flex gap-4">
    <KmSwitch v-model="switchVal" />
    <KmSwitch v-model="switchVal" on-icon="ri:sun-line" off-icon="ri:moon-line" />
  </div>
</template>
`,h=i({__name:`index`,setup(t){return(t,i)=>{let a=u,c=d;return o(),s(c,{navbar:``,"navbar-start-side":`back`},{default:r(()=>[n(a,{code:e(m)},{default:r(()=>[n(p)]),_:1},8,[`code`])]),_:1})}}});export{h as default};