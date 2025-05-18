
/**
 * 由 Kpu-mobile 提供技术支持
 * Powered by Kpu-mobile
 * https://kpu-mobile.kpui.top/
 */
    
import{_ as B}from"./index-CPokHgEa.js";import{_ as K}from"./index.vue_vue_type_script_setup_true_lang-yVcVFY2c.js";import{a7 as k,d as v,ae as D,A as C,k as h,o as _,q as f,u as l,s as c,a,C as N,v as S,r,b as o,i as m,af as T,c as A,w as x}from"./index-DYOJpx7Z.js";import{_ as R}from"./index.vue_vue_type_script_setup_true_lang-BW1dv8vy.js";import"./index.vue_vue_type_script_setup_true_lang-BJ4zJUgu.js";import"./check-BwihiVmz.js";const $={Top:"top"},b={Grid:"grid",Dot:"dot",BigDot:"big-dot"},P={Default:1e4},U=k("relative text-clip",{variants:{variant:{[b.Grid]:"bg-[linear-gradient(to_right,hsl(var(--foreground)/0.3)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--foreground)/0.3)_1px,transparent_1px)]",[b.Dot]:"bg-[radial-gradient(hsl(var(--foreground)/0.3)_1px,transparent_1px)]",[b.BigDot]:"bg-[radial-gradient(hsl(var(--foreground)/0.3)_3px,transparent_3px)]"},size:{xs:"bg-[size:8px_8px]",sm:"bg-[size:16px_16px]",md:"bg-[size:24px_24px]",lg:"bg-[size:32px_32px]"}},defaultVariants:{variant:"grid",size:"md"}}),E=k("bg-background",{variants:{mask:{ellipse:"[mask-image:radial-gradient(ellipse_at_center,transparent,black_80%)]","ellipse-top":"[mask-image:radial-gradient(ellipse_at_top,transparent,black_80%)]","ellipse-bottom":"[mask-image:radial-gradient(ellipse_at_bottom,transparent,black_80%)]","ellipse-left":"[mask-image:radial-gradient(ellipse_at_left,transparent,black_80%)]","ellipse-right":"[mask-image:radial-gradient(ellipse_at_right,transparent,black_80%)]","ellipse-top-left":"[mask-image:radial-gradient(ellipse_at_top_left,transparent,black_80%)]","ellipse-top-right":"[mask-image:radial-gradient(ellipse_at_top_right,transparent,black_80%)]","ellipse-bottom-left":"[mask-image:radial-gradient(ellipse_at_bottom_left,transparent,black_80%)]","ellipse-bottom-right":"[mask-image:radial-gradient(ellipse_at_bottom_right,transparent,black_80%)]"}},defaultVariants:{mask:"ellipse"}}),G=v({__name:"index",props:{class:{},animate:{type:Boolean},direction:{default:()=>$.Top},variant:{default:()=>b.Grid},size:{default:void 0},mask:{default:void 0},speed:{default:()=>P.Default}},setup(g){D(t=>({"1641d44f":i.value}));const n=g,i=C(()=>`${n.speed}ms`);return(t,p)=>(_(),h("div",{class:f(l(c)(l(U)({variant:t.variant,size:t.size}),` ${t.animate?`move move-${t.direction}`:""} `,n.class))},[a("div",{class:f(l(c)("absolute pointer-events-none inset-0 flex items-center justify-center",l(E)({mask:t.mask})))},null,2),N(t.$slots,"default",{},void 0,!0)],2))}}),w=S(G,[["__scopeId","data-v-5dc3fb6e"]]),I={class:"flex flex-col gap-2"},O={class:"flex items-center gap-2"},y={class:"flex items-center gap-2"},j={class:"flex items-center gap-2"},q={class:"flex items-center gap-2"},F={class:"flex items-center gap-2"},L=v({__name:"_demo1",setup(g){const n=r("grid"),i=r("md"),t=r("ellipse"),p=r(!0),d=r("top");return(H,e)=>{const u=R,V=T,z=w;return _(),h("div",I,[a("div",O,[e[5]||(e[5]=a("span",null,"图案",-1)),o(u,{modelValue:l(n),"onUpdate:modelValue":e[0]||(e[0]=s=>m(n)?n.value=s:null),options:[{label:"grid",value:"grid"},{label:"dot",value:"dot"},{label:"big-dot",value:"big-dot"}]},null,8,["modelValue"])]),a("div",y,[e[6]||(e[6]=a("span",null,"尺寸",-1)),o(u,{modelValue:l(i),"onUpdate:modelValue":e[1]||(e[1]=s=>m(i)?i.value=s:null),options:[{label:"xs",value:"xs"},{label:"sm",value:"sm"},{label:"md",value:"md"},{label:"lg",value:"lg"}]},null,8,["modelValue"])]),a("div",j,[e[7]||(e[7]=a("span",null,"动画",-1)),o(V,{modelValue:l(p),"onUpdate:modelValue":e[2]||(e[2]=s=>m(p)?p.value=s:null)},null,8,["modelValue"])]),a("div",q,[e[8]||(e[8]=a("span",null,"方向",-1)),o(u,{modelValue:l(d),"onUpdate:modelValue":e[3]||(e[3]=s=>m(d)?d.value=s:null),options:[{label:"top-left",value:"top-left"},{label:"top-right",value:"top-right"},{label:"bottom-left",value:"bottom-left"},{label:"bottom-right",value:"bottom-right"},{label:"top",value:"top"},{label:"bottom",value:"bottom"},{label:"left",value:"left"},{label:"right",value:"right"}]},null,8,["modelValue"])]),a("div",F,[e[9]||(e[9]=a("span",null,"遮罩",-1)),o(u,{modelValue:l(t),"onUpdate:modelValue":e[4]||(e[4]=s=>m(t)?t.value=s:null),options:[{label:"ellipse",value:"ellipse"},{label:"ellipse-top",value:"ellipse-top"},{label:"ellipse-bottom",value:"ellipse-bottom"},{label:"ellipse-left",value:"ellipse-left"},{label:"ellipse-right",value:"ellipse-right"},{label:"ellipse-top-left",value:"ellipse-top-left"},{label:"ellipse-top-right",value:"ellipse-top-right"},{label:"ellipse-bottom-left",value:"ellipse-bottom-left"},{label:"ellipse-bottom-right",value:"ellipse-bottom-right"}]},null,8,["modelValue"])]),o(z,{variant:l(n),size:l(i),animate:l(p),direction:l(d),mask:l(t),class:"h-100"},null,8,["variant","size","animate","direction","mask"])])}}}),M=`<script setup lang="ts">
const variant = ref<'grid' | 'dot' | 'big-dot'>('grid')
const size = ref<'xs' | 'sm' | 'md' | 'lg'>('md')
const mask = ref<'ellipse' | 'ellipse-top' | 'ellipse-bottom' | 'ellipse-left' | 'ellipse-right' | 'ellipse-top-left' | 'ellipse-top-right' | 'ellipse-bottom-left' | 'ellipse-bottom-right'>('ellipse')
const animate = ref(true)
const direction = ref<'top' | 'bottom' | 'left' | 'right' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'>('top')
<\/script>

<template>
  <div class="flex flex-col gap-2">
    <div class="flex items-center gap-2">
      <span>图案</span>
      <KmSelect
        v-model="variant" :options="[
          { label: 'grid', value: 'grid' },
          { label: 'dot', value: 'dot' },
          { label: 'big-dot', value: 'big-dot' },
        ]"
      />
    </div>
    <div class="flex items-center gap-2">
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
    <div class="flex items-center gap-2">
      <span>动画</span>
      <KmSwitch v-model="animate" />
    </div>
    <div class="flex items-center gap-2">
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
    <div class="flex items-center gap-2">
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
`,ee=v({__name:"index",setup(g){return(n,i)=>{const t=K,p=B;return _(),A(p,{navbar:"","navbar-start-side":"back"},{default:x(()=>[o(t,{code:l(M)},{default:x(()=>[o(L)]),_:1},8,["code"])]),_:1})}}});export{ee as default};
