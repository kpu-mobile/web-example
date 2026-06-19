
/**
 * 由 Kpu-mobile 提供技术支持
 * Powered by Kpu-mobile
 * https://kpu-mobile.kpui.cn
 */
  
import{C as e,Dt as t,E as n,O as r,ct as i,k as a,mt as o,q as s,w as c,yt as l}from"./vue-router-DpP-iWv7.js";import{L as u,O as d,y as f,z as p}from"./index-D4TT8-Ku.js";import{t as m}from"./AppPageLayout-DuOJLTKk.js";var h={class:`flex flex-col gap-2`},g={class:`flex gap-2 items-center`},_={class:`flex gap-2 items-center`},v={class:`flex gap-2 items-center`},y={class:`flex gap-2 items-center`},b={class:`flex gap-2 items-center`},x=a({__name:`_demo1`,setup(i){let a=l(`grid`),c=l(`md`),d=l(`ellipse`),m=l(!0),x=l(`top`);return(i,l)=>{let S=p,C=u,w=f;return s(),n(`div`,h,[e(`div`,g,[l[5]||(l[5]=e(`span`,null,`图案`,-1)),r(S,{modelValue:t(a),"onUpdate:modelValue":l[0]||(l[0]=e=>o(a)?a.value=e:null),options:[{label:`grid`,value:`grid`},{label:`dot`,value:`dot`},{label:`big-dot`,value:`big-dot`}]},null,8,[`modelValue`])]),e(`div`,_,[l[6]||(l[6]=e(`span`,null,`尺寸`,-1)),r(S,{modelValue:t(c),"onUpdate:modelValue":l[1]||(l[1]=e=>o(c)?c.value=e:null),options:[{label:`xs`,value:`xs`},{label:`sm`,value:`sm`},{label:`md`,value:`md`},{label:`lg`,value:`lg`}]},null,8,[`modelValue`])]),e(`div`,v,[l[7]||(l[7]=e(`span`,null,`动画`,-1)),r(C,{modelValue:t(m),"onUpdate:modelValue":l[2]||(l[2]=e=>o(m)?m.value=e:null)},null,8,[`modelValue`])]),e(`div`,y,[l[8]||(l[8]=e(`span`,null,`方向`,-1)),r(S,{modelValue:t(x),"onUpdate:modelValue":l[3]||(l[3]=e=>o(x)?x.value=e:null),options:[{label:`top-left`,value:`top-left`},{label:`top-right`,value:`top-right`},{label:`bottom-left`,value:`bottom-left`},{label:`bottom-right`,value:`bottom-right`},{label:`top`,value:`top`},{label:`bottom`,value:`bottom`},{label:`left`,value:`left`},{label:`right`,value:`right`}]},null,8,[`modelValue`])]),e(`div`,b,[l[9]||(l[9]=e(`span`,null,`遮罩`,-1)),r(S,{modelValue:t(d),"onUpdate:modelValue":l[4]||(l[4]=e=>o(d)?d.value=e:null),options:[{label:`ellipse`,value:`ellipse`},{label:`ellipse-top`,value:`ellipse-top`},{label:`ellipse-bottom`,value:`ellipse-bottom`},{label:`ellipse-left`,value:`ellipse-left`},{label:`ellipse-right`,value:`ellipse-right`},{label:`ellipse-top-left`,value:`ellipse-top-left`},{label:`ellipse-top-right`,value:`ellipse-top-right`},{label:`ellipse-bottom-left`,value:`ellipse-bottom-left`},{label:`ellipse-bottom-right`,value:`ellipse-bottom-right`}]},null,8,[`modelValue`])]),r(w,{variant:t(a),size:t(c),animate:t(m),direction:t(x),mask:t(d),class:`h-100`},null,8,[`variant`,`size`,`animate`,`direction`,`mask`])])}}}),S=`<script setup lang="ts">
const variant = ref<'grid' | 'dot' | 'big-dot'>('grid')
const size = ref<'xs' | 'sm' | 'md' | 'lg'>('md')
const mask = ref<'ellipse' | 'ellipse-top' | 'ellipse-bottom' | 'ellipse-left' | 'ellipse-right' | 'ellipse-top-left' | 'ellipse-top-right' | 'ellipse-bottom-left' | 'ellipse-bottom-right'>('ellipse')
const animate = ref(true)
const direction = ref<'top' | 'bottom' | 'left' | 'right' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'>('top')
<\/script>

<template>
  <div class="flex flex-col gap-2">
    <div class="flex gap-2 items-center">
      <span>图案</span>
      <KmSelect
        v-model="variant" :options="[
          { label: 'grid', value: 'grid' },
          { label: 'dot', value: 'dot' },
          { label: 'big-dot', value: 'big-dot' },
        ]"
      />
    </div>
    <div class="flex gap-2 items-center">
      <span>尺寸</span>
      <KmSelect
        v-model="size" :options="[
          { label: 'xs', value: 'xs' },
          { label: 'sm', value: 'sm' },
          { label: 'md', value: 'md' },
          { label: 'lg', value: 'lg' },
        ]"
      />
    </div>
    <div class="flex gap-2 items-center">
      <span>动画</span>
      <KmSwitch v-model="animate" />
    </div>
    <div class="flex gap-2 items-center">
      <span>方向</span>
      <KmSelect
        v-model="direction" :options="[
          { label: 'top-left', value: 'top-left' },
          { label: 'top-right', value: 'top-right' },
          { label: 'bottom-left', value: 'bottom-left' },
          { label: 'bottom-right', value: 'bottom-right' },
          { label: 'top', value: 'top' },
          { label: 'bottom', value: 'bottom' },
          { label: 'left', value: 'left' },
          { label: 'right', value: 'right' },
        ]"
      />
    </div>
    <div class="flex gap-2 items-center">
      <span>遮罩</span>
      <KmSelect
        v-model="mask" :options="[
          { label: 'ellipse', value: 'ellipse' },
          { label: 'ellipse-top', value: 'ellipse-top' },
          { label: 'ellipse-bottom', value: 'ellipse-bottom' },
          { label: 'ellipse-left', value: 'ellipse-left' },
          { label: 'ellipse-right', value: 'ellipse-right' },
          { label: 'ellipse-top-left', value: 'ellipse-top-left' },
          { label: 'ellipse-top-right', value: 'ellipse-top-right' },
          { label: 'ellipse-bottom-left', value: 'ellipse-bottom-left' },
          { label: 'ellipse-bottom-right', value: 'ellipse-bottom-right' },
        ]"
      />
    </div>
    <KmPatternBg :variant :size :animate :direction :mask class="h-100" />
  </div>
</template>
`,C=a({__name:`index`,setup(e){return(e,n)=>{let a=d,o=m;return s(),c(o,{navbar:``,"navbar-start-side":`back`},{default:i(()=>[r(a,{code:t(S)},{default:i(()=>[r(x)]),_:1},8,[`code`])]),_:1})}}});export{C as default};