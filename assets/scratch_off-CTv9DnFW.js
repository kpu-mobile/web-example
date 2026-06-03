
/**
 * 由 Kpu-mobile 提供技术支持
 * Powered by Kpu-mobile
 * https://kpu-mobile.kpui.cn
 */
  
import{C as e,Dt as t,O as n,ct as r,k as i,q as a,w as o}from"./vue-router-DpP-iWv7.js";import{F as s,O as c,g as l}from"./index-CqA6ZM_a.js";import{t as u}from"./AppPageLayout-b-gp_UZ6.js";var d=i({__name:`_demo1`,setup(t){function n(){s.success(`恭喜你刮中了`)}return(t,i)=>{let s=l;return a(),o(s,{width:250,height:250,"min-scratch-percentage":30,class:`border-2 rounded-2xl bg-gray-100 flex items-center justify-center overflow-hidden`,onComplete:n},{default:r(()=>[...i[0]||(i[0]=[e(`div`,{class:`text-8xl`},` 🥳 `,-1)])]),_:1})}}}),f=`<script lang="ts" setup>
import { toast } from 'vue-sonner'

function handleComplete() {
  toast.success('恭喜你刮中了')
}
<\/script>

<template>
  <KmScratchOff
    :width="250"
    :height="250"
    :min-scratch-percentage="30"
    class="border-2 rounded-2xl bg-gray-100 flex items-center justify-center overflow-hidden"
    @complete="handleComplete"
  >
    <div class="text-8xl">
      🥳
    </div>
  </KmScratchOff>
</template>
`,p=i({__name:`index`,setup(e){return(e,i)=>{let s=c,l=u;return a(),o(l,{navbar:``,"navbar-start-side":`back`},{default:r(()=>[n(s,{code:t(f)},{default:r(()=>[n(d)]),_:1},8,[`code`])]),_:1})}}});export{p as default};