
/**
 * 由 Kpu-mobile 提供技术支持
 * Powered by Kpu-mobile
 * https://kpu-mobile.kpui.cn
 */
  
import{Dt as e,E as t,O as n,ct as r,k as i,q as a,w as o}from"./vue-router-DpP-iWv7.js";import{E as s,O as c,ot as l}from"./index-CqA6ZM_a.js";import{t as u}from"./AppPageLayout-b-gp_UZ6.js";var d={},f={class:`flex flex-col gap-4`};function p(e,r){let i=s;return a(),t(`div`,f,[n(i,{title:`总收入`,icon:`i-carbon:currency-yen`,digital:`￥45,231.89`,description:`较上周上升19%`,trend:`up`}),n(i,{title:`订阅数`,icon:`i-mynaui:users`,digital:`+50`,description:`较上周下降3%`,trend:`down`}),n(i,{title:`销售额`,icon:`i-bytesize:creditcard`,digital:`+12,234`,description:`较上周上升55%`,trend:`stable`}),n(i,{title:`活跃用户`,"title-tips":`仅统计近一小时的活跃用户数量`,icon:`i-carbon:activity`,digital:`+573`,description:`较近一小时上升10%`})])}var m=l(d,[[`render`,p]]),h=`<template>
  <div class="flex flex-col gap-4">
    <KmDigitalCard title="总收入" icon="i-carbon:currency-yen" digital="￥45,231.89" description="较上周上升19%" trend="up" />
    <KmDigitalCard title="订阅数" icon="i-mynaui:users" digital="+50" description="较上周下降3%" trend="down" />
    <KmDigitalCard title="销售额" icon="i-bytesize:creditcard" digital="+12,234" description="较上周上升55%" trend="stable" />
    <KmDigitalCard title="活跃用户" title-tips="仅统计近一小时的活跃用户数量" icon="i-carbon:activity" digital="+573" description="较近一小时上升10%" />
  </div>
</template>
`,g=i({__name:`index`,setup(t){return(t,i)=>{let s=c,l=u;return a(),o(l,{navbar:``,"navbar-start-side":`back`},{default:r(()=>[n(s,{code:e(h)},{default:r(()=>[n(m)]),_:1},8,[`code`])]),_:1})}}});export{g as default};