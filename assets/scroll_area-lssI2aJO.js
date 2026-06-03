
/**
 * 由 Kpu-mobile 提供技术支持
 * Powered by Kpu-mobile
 * https://kpu-mobile.kpui.cn
 */
  
import{C as e,Dt as t,E as n,Nt as r,O as i,Y as a,_ as o,ct as s,k as c,mt as l,q as u,w as d,yt as f}from"./vue-router-DpP-iWv7.js";import{B as p,L as m,O as h}from"./index-CqA6ZM_a.js";import{t as g}from"./AppPageLayout-b-gp_UZ6.js";var _={class:`flex-col-start gap-4`},v={class:`flex-col-start gap-4`},y={class:`flex-center-start gap-4`},b={class:`flex-center-start gap-4`},x={class:`flex-center-start`},S=c({__name:`_demo1`,setup(c){let d=f(!0),h=f(!1);return(c,f)=>{let g=m,S=p;return u(),n(`div`,_,[e(`div`,v,[e(`div`,y,[f[2]||(f[2]=e(`div`,{class:`text-sm`},` 显示滚动条 `,-1)),i(g,{modelValue:t(d),"onUpdate:modelValue":f[0]||(f[0]=e=>l(d)?d.value=e:null)},null,8,[`modelValue`])]),e(`div`,b,[f[3]||(f[3]=e(`div`,{class:`text-sm`},` 显示遮罩 `,-1)),i(g,{modelValue:t(h),"onUpdate:modelValue":f[1]||(f[1]=e=>l(h)?h.value=e:null)},null,8,[`modelValue`])])]),i(S,{scrollbar:t(d),mask:t(h),class:`border rounded-md h-72 w-full`},{default:s(()=>[(u(),n(o,null,a(20,t=>e(`div`,{key:t,class:`text-sm p-4`},r(t),1)),64))]),_:1},8,[`scrollbar`,`mask`]),i(S,{horizontal:``,scrollbar:t(d),mask:t(h),class:`border rounded-md w-full`},{default:s(()=>[e(`div`,x,[(u(),n(o,null,a(20,t=>e(`div`,{key:t,class:`text-sm flex-center h-16 w-16`},r(t),1)),64))])]),_:1},8,[`scrollbar`,`mask`])])}}}),C=`<script setup lang="ts">
const scrollbar = ref(true)
const mask = ref(false)
<\/script>

<template>
  <div class="flex-col-start gap-4">
    <div class="flex-col-start gap-4">
      <div class="flex-center-start gap-4">
        <div class="text-sm">
          显示滚动条
        </div>
        <KmSwitch v-model="scrollbar" />
      </div>
      <div class="flex-center-start gap-4">
        <div class="text-sm">
          显示遮罩
        </div>
        <KmSwitch v-model="mask" />
      </div>
    </div>
    <KmScrollArea :scrollbar :mask class="border rounded-md h-72 w-full">
      <div v-for="tag in 20" :key="tag" class="text-sm p-4">
        {{ tag }}
      </div>
    </KmScrollArea>
    <KmScrollArea horizontal :scrollbar :mask class="border rounded-md w-full">
      <div class="flex-center-start">
        <div v-for="tag in 20" :key="tag" class="text-sm flex-center h-16 w-16">
          {{ tag }}
        </div>
      </div>
    </KmScrollArea>
  </div>
</template>
`,w=c({__name:`index`,setup(e){return(e,n)=>{let r=h,a=g;return u(),d(a,{navbar:``,"navbar-start-side":`back`},{default:s(()=>[i(r,{code:t(C)},{default:s(()=>[i(S)]),_:1},8,[`code`])]),_:1})}}});export{w as default};