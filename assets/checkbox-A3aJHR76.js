
/**
 * 由 Kpu-mobile 提供技术支持
 * Powered by Kpu-mobile
 * https://kpu-mobile.kpui.cn
 */
  
import{D as e,Dt as t,E as n,Nt as r,O as i,ct as a,k as o,mt as s,q as c,w as l,yt as u}from"./vue-router-DpP-iWv7.js";import{O as d,Y as f}from"./index-D4TT8-Ku.js";import{t as p}from"./AppPageLayout-DuOJLTKk.js";var m={class:`flex gap-4`},h=o({__name:`_demo1`,setup(o){let l=u(!1);return(o,u)=>{let d=f;return c(),n(`div`,m,[i(d,{modelValue:t(l),"onUpdate:modelValue":u[0]||(u[0]=e=>s(l)?l.value=e:null)},{default:a(()=>[...u[1]||(u[1]=[e(` 复选框 `,-1)])]),_:1},8,[`modelValue`]),e(` `+r(t(l)),1)])}}}),g=`<script setup lang="ts">
const checked = ref(false)
<\/script>

<template>
  <div class="flex gap-4">
    <KmCheckbox v-model="checked">
      复选框
    </KmCheckbox>
    {{ checked }}
  </div>
</template>
`,_=o({__name:`index`,setup(e){return(e,n)=>{let r=d,o=p;return c(),l(o,{navbar:``,"navbar-start-side":`back`},{default:a(()=>[i(r,{code:t(g)},{default:a(()=>[i(h)]),_:1},8,[`code`])]),_:1})}}});export{_ as default};