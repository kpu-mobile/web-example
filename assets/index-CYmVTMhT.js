
/**
 * 由 Kpu-mobile 提供技术支持
 * Powered by Kpu-mobile
 * https://kpu-mobile.kpui.top/
 */
    
import{_ as z}from"./index-CPokHgEa.js";import{_ as Y}from"./index.vue_vue_type_script_setup_true_lang-yVcVFY2c.js";import{d as x,U as B,r as S,A as b,c as g,o as i,ap as A,u as r,s as M,w as n,a as l,b as e,k as K,n as j,F,a$ as C,q as L,C as q,v as G,p as $,t as p,e as E}from"./index-DYOJpx7Z.js";import{_ as O,a as R}from"./index.vue_vue_type_script_setup_true_lang-DPcGvbc8.js";import{_ as T}from"./index.vue_vue_type_script_setup_true_lang-CGp2WfYP.js";import"./index.vue_vue_type_script_setup_true_lang-BJ4zJUgu.js";const U={class:"absolute top-0 z-1 w-20 flex-col-center-start p-2 backdrop-blur"},H={class:"flex items-center"},J={class:"w-full flex flex-col gap-4"},Q={class:"flex items-center"},W={class:"flex-1"},X=x({__name:"index",props:{class:{},merge:{type:Boolean,default:!1},data:{default:()=>[]}},setup(f){const s=f,u=B("timelineItems"),a=S(0),m=b(()=>{var _;const t=(_=u.value)==null?void 0:_.map(c=>(c==null?void 0:c.offsetTop)-60||0);return((t==null?void 0:t.findIndex(c=>c>a.value))??1)-1}),d=t=>Number(C(t).format("YYYY")),o=t=>Number(C(t).format("MM")),P=t=>Number(C(t).format("DD")),D=b(()=>{var t;return d(((t=s.data[m.value])==null?void 0:t.datetime)||"")}),k=b(()=>{var t;return o(((t=s.data[m.value])==null?void 0:t.datetime)||"")}),w=b(()=>{var t;return P(((t=s.data[m.value])==null?void 0:t.datetime)||"")});function I(t){var _;a.value=(_=t.target)==null?void 0:_.scrollTop}return(t,_)=>{const c=O,V=R,N=A;return i(),g(N,{"content-class":r(M)("relative w-full",s.class),onOnScroll:I},{default:n(()=>[l("div",U,[e(c,{value:r(D),"will-change":"",format:{notation:"compact"},class:"text-lg font-bold opacity-20"},null,8,["value"]),l("div",H,[e(V,null,{default:n(()=>[e(c,{value:r(k),"will-change":"",format:{minimumIntegerDigits:2,notation:"compact"},suffix:"/",class:"text-xl font-bold"},null,8,["value"]),e(c,{value:r(w),"will-change":"",format:{minimumIntegerDigits:2,notation:"compact"},class:"text-xl font-bold"},null,8,["value"])]),_:1})])]),l("div",J,[(i(!0),K(F,null,j(t.data,(v,h)=>(i(),K("div",{key:h,ref_for:!0,ref_key:"timelineItems",ref:u,class:"flex gap-4"},[l("div",{class:L(["w-20 flex-col-center-start p-2 transition-all",[{"opacity-0 -translate-y-10":h<=r(m),"opacity-0":t.merge&&h>0&&v.datetime===t.data[h-1].datetime}]])},[e(c,{value:d(v.datetime),format:{notation:"compact"},class:"text-lg font-bold opacity-20"},null,8,["value"]),l("div",Q,[e(c,{value:o(v.datetime),format:{minimumIntegerDigits:2,notation:"compact"},suffix:"/",class:"text-xl font-bold"},null,8,["value"]),e(c,{value:P(v.datetime),format:{minimumIntegerDigits:2,notation:"compact"},class:"text-xl font-bold"},null,8,["value"])])],2),l("div",W,[q(t.$slots,"default",{item:v},void 0,!0)])]))),128))])]),_:3},8,["content-class"])}}}),y=G(X,[["__scopeId","data-v-b780775c"]]),Z={key:0,class:"flex-center-end flex-1"},tt=x({__name:"_demo1",setup(f){const s=[{datetime:"2025/03/23",content:"请假申请",name:"张三"},{datetime:"2025/03/23",content:"部门主管审批",name:"李四"},{datetime:"2025/03/24",content:"人事审批",name:"王五"},{datetime:"2025/03/24",content:"完成"}];return(u,a)=>{const m=T,d=y;return i(),g(d,{data:s},{default:n(({item:o})=>[e(m,{class:"h-full"},{header:n(()=>[l("div",null,p(o.content),1)]),footer:n(()=>[o.name?(i(),K("div",Z,[l("div",null,"操作人："+p(o.name),1)])):$("",!0)]),_:2},1024)]),_:1})}}}),et=`<script setup lang="ts">
const data = [
  { datetime: '2025/03/23', content: '请假申请', name: '张三' },
  { datetime: '2025/03/23', content: '部门主管审批', name: '李四' },
  { datetime: '2025/03/24', content: '人事审批', name: '王五' },
  { datetime: '2025/03/24', content: '完成' },
]
<\/script>

<template>
  <KmTimeline :data="data">
    <template #default="{ item }">
      <KmCard class="h-full">
        <template #header>
          <div>{{ item.content }}</div>
        </template>
        <template #footer>
          <div v-if="item.name" class="flex-center-end flex-1">
            <div>操作人：{{ item.name }}</div>
          </div>
        </template>
      </KmCard>
    </template>
  </KmTimeline>
</template>
`,nt={key:0,class:"flex-center-end flex-1"},at=x({__name:"_demo2",setup(f){const s=[{datetime:"2025/03/23",content:"请假申请",name:"张三"},{datetime:"2025/03/23",content:"部门主管审批",name:"李四"},{datetime:"2025/03/24",content:"人事审批",name:"王五"},{datetime:"2025/03/24",content:"完成"}];return(u,a)=>{const m=T,d=y;return i(),g(d,{data:s,merge:""},{default:n(({item:o})=>[e(m,{class:"h-full"},{header:n(()=>[l("div",null,p(o.content),1)]),footer:n(()=>[o.name?(i(),K("div",nt,[l("div",null,"操作人："+p(o.name),1)])):$("",!0)]),_:2},1024)]),_:1})}}}),ot=`<script setup lang="ts">
const data = [
  { datetime: '2025/03/23', content: '请假申请', name: '张三' },
  { datetime: '2025/03/23', content: '部门主管审批', name: '李四' },
  { datetime: '2025/03/24', content: '人事审批', name: '王五' },
  { datetime: '2025/03/24', content: '完成' },
]
<\/script>

<template>
  <KmTimeline :data="data" merge>
    <template #default="{ item }">
      <KmCard class="h-full">
        <template #header>
          <div>{{ item.content }}</div>
        </template>
        <template #footer>
          <div v-if="item.name" class="flex-center-end flex-1">
            <div>操作人：{{ item.name }}</div>
          </div>
        </template>
      </KmCard>
    </template>
  </KmTimeline>
</template>
`,lt=x({__name:"_demo3",setup(f){const s=[{datetime:"2022/05/08",title:"Element Plus",content:"4000.00"},{datetime:"2022/07/06",title:"Element Plus",content:"4000.00"},{datetime:"2022/08/08",title:"Element Plus",content:"4000.00"},{datetime:"2024/01/09",title:"condorheroblog",content:"100.00"},{datetime:"2024/01/12",title:"antfu",content:"1024.00"},{datetime:"2024/01/12",title:"sxzz",content:"256.00"},{datetime:"2024/02/04",title:"Vue.js",content:"15000.00"},{datetime:"2024/05/06",title:"Element Plus",content:"2000.00"},{datetime:"2024/07/17",title:"Vxe Table",content:"800.00"},{datetime:"2024/10/18",title:"Element Plus",content:"2000.00"},{datetime:"2025/02/28",title:"hyoban",content:"60.00"},{datetime:"2025/03/19",title:"Element Plus",content:"10000.00"}];return(u,a)=>{const m=T,d=y;return i(),g(d,{data:s,class:"h-100"},{default:n(({item:o})=>[e(m,null,{header:n(()=>[l("p",null,[a[0]||(a[0]=E("向 ")),l("b",null,p(o.title),1),a[1]||(a[1]=E(" 赞助"))])]),default:n(()=>[l("div",null,p(o.content)+" 元",1)]),_:2},1024)]),_:1})}}}),mt=`<script setup lang="ts">
const data = [
  { datetime: '2022/05/08', title: 'Element Plus', content: '4000.00' },
  { datetime: '2022/07/06', title: 'Element Plus', content: '4000.00' },
  { datetime: '2022/08/08', title: 'Element Plus', content: '4000.00' },
  { datetime: '2024/01/09', title: 'condorheroblog', content: '100.00' },
  { datetime: '2024/01/12', title: 'antfu', content: '1024.00' },
  { datetime: '2024/01/12', title: 'sxzz', content: '256.00' },
  { datetime: '2024/02/04', title: 'Vue.js', content: '15000.00' },
  { datetime: '2024/05/06', title: 'Element Plus', content: '2000.00' },
  { datetime: '2024/07/17', title: 'Vxe Table', content: '800.00' },
  { datetime: '2024/10/18', title: 'Element Plus', content: '2000.00' },
  { datetime: '2025/02/28', title: 'hyoban', content: '60.00' },
  { datetime: '2025/03/19', title: 'Element Plus', content: '10000.00' },
]
<\/script>

<template>
  <KmTimeline :data="data" class="h-100">
    <template #default="{ item }">
      <KmCard>
        <template #header>
          <p>向 <b>{{ item.title }}</b> 赞助</p>
        </template>
        <div>{{ item.content }} 元</div>
      </KmCard>
    </template>
  </KmTimeline>
</template>
`,_t=x({__name:"index",setup(f){return(s,u)=>{const a=Y,m=z;return i(),g(m,{navbar:"","navbar-start-side":"back"},{default:n(()=>[e(a,{code:r(et)},{default:n(()=>[e(tt)]),_:1},8,["code"]),e(a,{title:"合并时间线",code:r(ot)},{default:n(()=>[e(at)]),_:1},8,["code"]),e(a,{title:"设置高度并出现滚动条",code:r(mt)},{default:n(()=>[e(lt)]),_:1},8,["code"])]),_:1})}}});export{_t as default};
