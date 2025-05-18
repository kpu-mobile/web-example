
/**
 * 由 Kpu-mobile 提供技术支持
 * Powered by Kpu-mobile
 * https://kpu-mobile.kpui.top/
 */
    
import{_ as y}from"./index-CPokHgEa.js";import{_ as x}from"./index.vue_vue_type_script_setup_true_lang-yVcVFY2c.js";import{_ as b}from"./index.vue_vue_type_script_setup_true_lang-CGp2WfYP.js";import{d as _,A as h,c as s,o as n,w as l,a as o,k as f,p as r,e as C,t as d,u as c,f as v,q as w,s as k,v as K,b as i}from"./index-DYOJpx7Z.js";import"./index.vue_vue_type_script_setup_true_lang-BJ4zJUgu.js";const D={class:"flex flex-row items-center justify-between gap-y-1.5 space-y-0"},$={class:"flex-center-start gap-x-1 text-sm font-medium tracking-tight"},B={class:"flex-center-start gap-x-1 text-2xl font-bold"},N={key:0,class:"text-sm text-gray-500"},V=_({__name:"index",props:{title:{type:null,default:null},icon:{type:null,default:null},digital:{type:null,default:null},description:{type:null,default:null},trend:{type:null,default:null},class:{type:null,default:null}},setup(t){const a=t,e=h(()=>{switch(a.trend){case"up":return"i-material-symbols:trending-up";case"stable":return"i-material-symbols:trending-flat";case"down":return"i-material-symbols:trending-down";default:return""}});return(m,u)=>{const p=v,g=b;return n(),s(g,{class:w(c(k)("w-full",a.class)),"header-class":"pb-2","footer-class":"flex flex-col items-start gap-y-1"},{header:l(()=>[o("div",D,[o("h3",$,d(t.title),1),t.icon?(n(),s(p,{key:0,name:t.icon,class:"text-muted-foreground"},null,8,["name"])):r("",!0)])]),footer:l(()=>[o("div",B,[C(d(t.digital)+" ",1),c(e)?(n(),s(p,{key:0,name:c(e)},null,8,["name"])):r("",!0)]),t.description?(n(),f("p",N,d(t.description),1)):r("",!0)]),_:1},8,["class"])}}}),z={},I={class:"flex flex-col gap-4"};function P(t,a){const e=V;return n(),f("div",I,[i(e,{title:"总收入",icon:"i-carbon:currency-yen",digital:"￥45,231.89",description:"较上周上升19%",trend:"up"}),i(e,{title:"订阅数",icon:"i-mynaui:users",digital:"+50",description:"较上周下降3%",trend:"down"}),i(e,{title:"销售额",icon:"i-bytesize:creditcard",digital:"+12,234",description:"较上周上升55%",trend:"stable"}),i(e,{title:"活跃用户","title-tips":"仅统计近一小时的活跃用户数量",icon:"i-carbon:activity",digital:"+573",description:"较近一小时上升10%"})])}const j=K(z,[["render",P]]),q=`<template>
  <div class="flex flex-col gap-4">
    <KmDigitalCard title="总收入" icon="i-carbon:currency-yen" digital="￥45,231.89" description="较上周上升19%" trend="up" />
    <KmDigitalCard title="订阅数" icon="i-mynaui:users" digital="+50" description="较上周下降3%" trend="down" />
    <KmDigitalCard title="销售额" icon="i-bytesize:creditcard" digital="+12,234" description="较上周上升55%" trend="stable" />
    <KmDigitalCard title="活跃用户" title-tips="仅统计近一小时的活跃用户数量" icon="i-carbon:activity" digital="+573" description="较近一小时上升10%" />
  </div>
</template>
`,F=_({__name:"index",setup(t){return(a,e)=>{const m=x,u=y;return n(),s(u,{navbar:"","navbar-start-side":"back"},{default:l(()=>[i(m,{code:c(q)},{default:l(()=>[i(j)]),_:1},8,["code"])]),_:1})}}});export{F as default};
