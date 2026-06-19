
/**
 * 由 Kpu-mobile 提供技术支持
 * Powered by Kpu-mobile
 * https://kpu-mobile.kpui.cn
 */
  
import{Dt as e,O as t,ct as n,k as r,mt as i,q as a,w as o,yt as s}from"./vue-router-DpP-iWv7.js";import{O as c,z as l}from"./index-D4TT8-Ku.js";import{t as u}from"./AppPageLayout-DuOJLTKk.js";var d=r({__name:`_demo1`,setup(t){let n=s(`1`);return(t,r)=>{let s=l;return a(),o(s,{modelValue:e(n),"onUpdate:modelValue":r[0]||(r[0]=e=>i(n)?n.value=e:null),options:[{label:`选项1`,value:`1`},{label:`选项2`,value:`2`,disabled:!0},{label:`选项3`,value:`3`}]},null,8,[`modelValue`])}}}),f=`<script setup lang="ts">
const select = ref('1')
<\/script>

<template>
  <KmSelect
    v-model="select"
    :options="[
      { label: '选项1', value: '1' },
      { label: '选项2', value: '2', disabled: true },
      { label: '选项3', value: '3' },
    ]"
  />
</template>
`,p=r({__name:`index`,setup(r){return(r,i)=>{let s=c,l=u;return a(),o(l,{navbar:``,"navbar-start-side":`back`},{default:n(()=>[t(s,{code:e(f)},{default:n(()=>[t(d)]),_:1},8,[`code`])]),_:1})}}});export{p as default};