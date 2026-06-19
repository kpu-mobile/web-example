
/**
 * 由 Kpu-mobile 提供技术支持
 * Powered by Kpu-mobile
 * https://kpu-mobile.kpui.cn
 */
  
import{C as e,D as t,Dt as n,E as r,Nt as i,O as a,T as o,ct as s,k as c,q as l,w as u}from"./vue-router-DpP-iWv7.js";import{O as d,Z as f,c as p}from"./index-D4TT8-Ku.js";import{t as m}from"./AppPageLayout-DuOJLTKk.js";var h={key:0,class:`flex-center-end flex-1`},g=c({__name:`_demo1`,setup(t){let n=[{datetime:`2025/03/23`,content:`请假申请`,name:`张三`},{datetime:`2025/03/23`,content:`部门主管审批`,name:`李四`},{datetime:`2025/03/24`,content:`人事审批`,name:`王五`},{datetime:`2025/03/24`,content:`完成`}];return(t,c)=>{let d=f,m=p;return l(),u(m,{data:n},{default:s(({item:t})=>[a(d,{class:`h-full`},{header:s(()=>[e(`div`,null,i(t.content),1)]),footer:s(()=>[t.name?(l(),r(`div`,h,[e(`div`,null,`操作人：`+i(t.name),1)])):o(``,!0)]),_:2},1024)]),_:1})}}}),_=`<script setup lang="ts">
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
`,v={key:0,class:`flex-center-end flex-1`},y=c({__name:`_demo2`,setup(t){let n=[{datetime:`2025/03/23`,content:`请假申请`,name:`张三`},{datetime:`2025/03/23`,content:`部门主管审批`,name:`李四`},{datetime:`2025/03/24`,content:`人事审批`,name:`王五`},{datetime:`2025/03/24`,content:`完成`}];return(t,c)=>{let d=f,m=p;return l(),u(m,{data:n,merge:``},{default:s(({item:t})=>[a(d,{class:`h-full`},{header:s(()=>[e(`div`,null,i(t.content),1)]),footer:s(()=>[t.name?(l(),r(`div`,v,[e(`div`,null,`操作人：`+i(t.name),1)])):o(``,!0)]),_:2},1024)]),_:1})}}}),b=`<script setup lang="ts">
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
`,x=c({__name:`_demo3`,setup(n){let r=[{datetime:`2022/05/08`,title:`Element Plus`,content:`4000.00`},{datetime:`2022/07/06`,title:`Element Plus`,content:`4000.00`},{datetime:`2022/08/08`,title:`Element Plus`,content:`4000.00`},{datetime:`2024/01/09`,title:`condorheroblog`,content:`100.00`},{datetime:`2024/01/12`,title:`antfu`,content:`1024.00`},{datetime:`2024/01/12`,title:`sxzz`,content:`256.00`},{datetime:`2024/02/04`,title:`Vue.js`,content:`15000.00`},{datetime:`2024/05/06`,title:`Element Plus`,content:`2000.00`},{datetime:`2024/07/17`,title:`Vxe Table`,content:`800.00`},{datetime:`2024/10/18`,title:`Element Plus`,content:`2000.00`},{datetime:`2025/02/28`,title:`hyoban`,content:`60.00`},{datetime:`2025/03/19`,title:`Element Plus`,content:`10000.00`}];return(n,o)=>{let c=f,d=p;return l(),u(d,{data:r,class:`h-100`},{default:s(({item:n})=>[a(c,null,{header:s(()=>[e(`p`,null,[o[0]||(o[0]=t(`向 `,-1)),e(`b`,null,i(n.title),1),o[1]||(o[1]=t(` 赞助`,-1))])]),default:s(()=>[e(`div`,null,i(n.content)+` 元`,1)]),_:2},1024)]),_:1})}}}),S=`<script setup lang="ts">
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
`,C=c({__name:`index`,setup(t){return(t,r)=>{let i=d,o=m;return l(),u(o,{navbar:``,"navbar-start-side":`back`},{default:s(()=>[e(`div`,null,[a(i,{code:n(_)},{default:s(()=>[a(g)]),_:1},8,[`code`]),a(i,{title:`合并时间线`,code:n(b)},{default:s(()=>[a(y)]),_:1},8,[`code`]),a(i,{title:`设置高度并出现滚动条`,code:n(S)},{default:s(()=>[a(x)]),_:1},8,[`code`])])]),_:1})}}});export{C as default};