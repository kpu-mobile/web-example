
/**
 * 由 Kpu-mobile 提供技术支持
 * Powered by Kpu-mobile
 * https://kpu-mobile.kpui.cn
 */
  
import{D as e,Dt as t,E as n,Nt as r,O as i,ct as a,k as o,q as s,w as c,yt as l}from"./vue-router-DpP-iWv7.js";import{F as u,O as d,Q as f,x as p}from"./index-D4TT8-Ku.js";import{t as m}from"./AppPageLayout-DuOJLTKk.js";var h={class:`flex gap-4`},g=o({__name:`_demo1`,setup(o){let c=l(!1),d=[{text:`获取用户数据`,afterText:`获取用户数据成功`,name:`user`,action:async()=>(await new Promise(e=>setTimeout(e,1e3)),{id:1,name:`张三`})},{text:`获取用户订单（随机模拟出错）`,afterText:`获取用户订单成功`,name:`orders`,action:async e=>{if(await new Promise(e=>setTimeout(e,1500)),Math.random()>.5)throw Error(`获取订单数据失败：网络连接超时`);return[{id:1,userId:e.user.id,product:`商品A`},{id:2,userId:e.user.id,product:`商品B`}]}},{text:`处理订单数据`,action:async e=>(await new Promise(e=>setTimeout(e,2e3)),{user:e.user,orders:e.orders,totalAmount:e.orders.length*100})}];function m(e){u.info(`当前步骤：${e+1}`)}function g(){u.success(`所有步骤已完成`),c.value=!1}function _(e,t){u.error(`步骤 ${t+1} 执行失败: ${e.message}`),c.value=!1}return(o,l)=>{let u=f,v=p;return s(),n(`div`,h,[i(u,{onClick:l[0]||(l[0]=e=>c.value=!t(c))},{default:a(()=>[e(r(t(c)?`停止`:`开始`),1)]),_:1}),i(v,{loading:t(c),steps:d,"prevent-close":``,onStateChange:m,onComplete:g,onError:_},null,8,[`loading`])])}}}),_=`<script setup lang="ts">
import type { Step, StepContext } from '@kpu-mobile/components'
import { toast } from 'vue-sonner'

const isLoading = ref(false)
const taskSteps: Step[] = [
  {
    text: '获取用户数据',
    afterText: '获取用户数据成功',
    name: 'user',
    action: async () => {
      // 模拟异步请求
      await new Promise(resolve => setTimeout(resolve, 1000))
      return { id: 1, name: '张三' }
    },
  },
  {
    text: '获取用户订单（随机模拟出错）',
    afterText: '获取用户订单成功',
    name: 'orders',
    action: async (context: StepContext) => {
      await new Promise(resolve => setTimeout(resolve, 1500))
      // 随机模拟错误
      if (Math.random() > 0.5) {
        throw new Error('获取订单数据失败：网络连接超时')
      }
      return [
        { id: 1, userId: context.user.id, product: '商品A' },
        { id: 2, userId: context.user.id, product: '商品B' },
      ]
    },
  },
  {
    text: '处理订单数据',
    action: async (context: StepContext) => {
      // 模拟异步请求
      await new Promise(resolve => setTimeout(resolve, 2000))
      return {
        user: context.user,
        orders: context.orders,
        totalAmount: context.orders.length * 100,
      }
    },
  },
]

function handleStateChange(state: number) {
  toast.info(\`当前步骤：\${state + 1}\`)
}

function handleComplete() {
  toast.success('所有步骤已完成')
  isLoading.value = false
}

function handleError(error: Error, stepIndex: number) {
  toast.error(\`步骤 \${stepIndex + 1} 执行失败: \${error.message}\`)
  isLoading.value = false
}
<\/script>

<template>
  <div class="flex gap-4">
    <KmButton @click="isLoading = !isLoading">
      {{ isLoading ? '停止' : '开始' }}
    </KmButton>
    <KmMultiStepLoader
      :loading="isLoading"
      :steps="taskSteps"
      prevent-close
      @state-change="handleStateChange"
      @complete="handleComplete"
      @error="handleError"
    />
  </div>
</template>
`,v=o({__name:`index`,setup(e){return(e,n)=>{let r=d,o=m;return s(),c(o,{navbar:``,"navbar-start-side":`back`},{default:a(()=>[i(r,{code:t(_)},{default:a(()=>[i(g)]),_:1},8,[`code`])]),_:1})}}});export{v as default};