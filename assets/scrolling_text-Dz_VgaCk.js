
/**
 * 由 Kpu-mobile 提供技术支持
 * Powered by Kpu-mobile
 * https://kpu-mobile.kpui.cn
 */
  
import{C as e,Dt as t,Nt as n,O as r,ct as i,k as a,kt as o,q as s,w as c}from"./vue-router-DpP-iWv7.js";import{O as l,P as u,h as d,ot as f}from"./index-D4TT8-Ku.js";import{t as p}from"./AppPageLayout-DuOJLTKk.js";var m={};function h(e,t){let n=d;return s(),c(n,{items:[`Kpu-mobile v6 正式发布，欢迎体验新特性！`,`框架已支持 Vue 3.6 + Vite 8，性能大幅提升`,`新增 30+ 内建 UI 组件，开箱即用`,`支持亮色/暗色主题，一键切换`],class:`text-sm flex-1 h-6`})}var g=f(m,[[`render`,h]]),_=`<template>
  <KmScrollingText
    :items="[
      'Kpu-mobile v6 正式发布，欢迎体验新特性！',
      '框架已支持 Vue 3.6 + Vite 8，性能大幅提升',
      '新增 30+ 内建 UI 组件，开箱即用',
      '支持亮色/暗色主题，一键切换',
    ]"
    class="text-sm flex-1 h-6"
  />
</template>
`,v={};function y(e,t){let n=d;return s(),c(n,{items:[`公告：系统将于今晚 22:00 进行维护升级`,`新功能：支持批量导出数据，欢迎体验`,`提示：请及时更新您的账户安全信息`],"visible-count":2,animation:`fade`,transition:300,class:`text-sm px-3 border rounded-lg h-16`,"item-class":`border-b border-dashed last:border-0`})}var b=f(v,[[`render`,y]]),x=`<template>
  <KmScrollingText
    :items="[
      '公告：系统将于今晚 22:00 进行维护升级',
      '新功能：支持批量导出数据，欢迎体验',
      '提示：请及时更新您的账户安全信息',
    ]"
    :visible-count="2"
    animation="fade"
    :transition="300"
    class="text-sm px-3 border rounded-lg h-16"
    item-class="border-b border-dashed last:border-0"
  />
</template>
`,S=a({__name:`_demo3`,setup(e){let t=[`点击查看：Vue 3 最佳实践指南`,`点击查看：TypeScript 进阶教程`,`点击查看：Vite 构建优化技巧`,`点击查看：Pinia 状态管理详解`,`kpu mobile 最新功能介绍`];function n(e,t){u().info(`点击了第 ${t+1} 条：${e}`)}return(e,r)=>{let i=d;return s(),c(i,{items:t,direction:`down`,duration:2e3,class:`text-sm text-primary h-8 cursor-pointer`,onItemClick:n})}}}),C=`<script setup lang="ts">
const items = [
  '点击查看：Vue 3 最佳实践指南',
  '点击查看：TypeScript 进阶教程',
  '点击查看：Vite 构建优化技巧',
  '点击查看：Pinia 状态管理详解',
  'kpu mobile 最新功能介绍',
]

function handleClick(text: string, index: number) {
  useKmToast().info(\`点击了第 \${index + 1} 条：\${text}\`)
}
<\/script>

<template>
  <KmScrollingText
    :items="items"
    direction="down"
    :duration="2000"
    class="text-sm text-primary h-8 cursor-pointer"
    @item-click="handleClick"
  />
</template>
`,w={class:`py-1 flex gap-2 w-full items-center`},T={class:`text-sm truncate`},E=a({__name:`_demo4`,setup(t){let r=[{tag:`紧急`,text:`系统将于今晚 22:00 进行维护升级`,type:`error`},{tag:`新功能`,text:`支持批量导出数据，欢迎体验`,type:`success`},{tag:`提示`,text:`请及时更新您的账户安全信息`,type:`warning`}];return(t,a)=>{let l=d;return s(),c(l,{items:r.map(e=>e.text)},{item:i(({index:t})=>[e(`div`,w,[e(`span`,{class:o([`text-xs font-medium px-1.5 py-0.5 rounded shrink-0`,{"bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400":r[t].type===`error`,"bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400":r[t].type===`success`,"bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400":r[t].type===`warning`}])},n(r[t].tag),3),e(`span`,T,n(r[t].text),1)])]),_:1},8,[`items`])}}}),D=`<script setup lang="ts">
const notices = [
  { tag: '紧急', text: '系统将于今晚 22:00 进行维护升级', type: 'error' },
  { tag: '新功能', text: '支持批量导出数据，欢迎体验', type: 'success' },
  { tag: '提示', text: '请及时更新您的账户安全信息', type: 'warning' },
]
<\/script>

<template>
  <KmScrollingText :items="notices.map(n => n.text)">
    <template #item="{ index }">
      <div class="py-1 flex gap-2 w-full items-center">
        <span
          class="text-xs font-medium px-1.5 py-0.5 rounded shrink-0"
          :class="{
            'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400': notices[index].type === 'error',
            'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400': notices[index].type === 'success',
            'bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400': notices[index].type === 'warning',
          }"
        >
          {{ notices[index].tag }}
        </span>
        <span class="text-sm truncate">{{ notices[index].text }}</span>
      </div>
    </template>
  </KmScrollingText>
</template>
`,O=a({__name:`index`,setup(e){return(e,n)=>{let a=l,o=p;return s(),c(o,{navbar:``,"navbar-start-side":`back`},{default:i(()=>[r(a,{code:t(_)},{default:i(()=>[r(g)]),_:1},8,[`code`]),r(a,{title:`多条可见 + fade 动画`,code:t(x)},{default:i(()=>[r(b)]),_:1},8,[`code`]),r(a,{title:`向下滚动 + 点击事件`,code:t(C)},{default:i(()=>[r(S)]),_:1},8,[`code`]),r(a,{title:`自定义条目 slot`,code:t(D)},{default:i(()=>[r(E)]),_:1},8,[`code`])]),_:1})}}});export{O as default};