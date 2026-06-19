
/**
 * 由 Kpu-mobile 提供技术支持
 * Powered by Kpu-mobile
 * https://kpu-mobile.kpui.cn
 */
  
import{D as e,Dt as t,E as n,O as r,ct as i,k as a,q as o,w as s}from"./vue-router-DpP-iWv7.js";import{F as c,O as l,Q as u}from"./index-D4TT8-Ku.js";import{t as d}from"./AppPageLayout-DuOJLTKk.js";var f={class:`flex flex-col gap-2`},p=a({__name:`_demo1`,setup(t){function a(e){if(e)if(e===`loading1`)c.promise(()=>new Promise(e=>{setTimeout(e,2e3)}),{loading:`加载中`,success:()=>`加载成功`,error:()=>`加载失败`,position:`top-right`,duration:3e3});else if(e===`loading2`){let e=c.loading(`加载中`,{position:`top-right`,duration:1/0});setTimeout(()=>{c.dismiss(e),c(`Kpu-mobile 自成一派的 H5 框架`,{description:`开箱即用，提供舒适开发体验`,position:`top-right`,duration:3e3})},2e3)}else c[e](`Kpu-mobile 自成一派的 H5 框架`,{description:`开箱即用，提供舒适开发体验`,position:`top-right`,duration:3e3});else c(`Kpu-mobile 自成一派的 H5 框架`,{description:`开箱即用，提供舒适开发体验`,position:`top-right`,duration:3e3})}return(t,s)=>{let c=u;return o(),n(`div`,f,[r(c,{onClick:s[0]||(s[0]=e=>a())},{default:i(()=>[...s[7]||(s[7]=[e(` 默认 `,-1)])]),_:1}),r(c,{onClick:s[1]||(s[1]=e=>a(`success`))},{default:i(()=>[...s[8]||(s[8]=[e(` 成功 `,-1)])]),_:1}),r(c,{onClick:s[2]||(s[2]=e=>a(`error`))},{default:i(()=>[...s[9]||(s[9]=[e(` 错误 `,-1)])]),_:1}),r(c,{onClick:s[3]||(s[3]=e=>a(`info`))},{default:i(()=>[...s[10]||(s[10]=[e(` 信息 `,-1)])]),_:1}),r(c,{onClick:s[4]||(s[4]=e=>a(`warning`))},{default:i(()=>[...s[11]||(s[11]=[e(` 警告 `,-1)])]),_:1}),r(c,{onClick:s[5]||(s[5]=e=>a(`loading1`))},{default:i(()=>[...s[12]||(s[12]=[e(` 加载中 1 `,-1)])]),_:1}),r(c,{onClick:s[6]||(s[6]=e=>a(`loading2`))},{default:i(()=>[...s[13]||(s[13]=[e(` 加载中 2 `,-1)])]),_:1})])}}}),m=`<script setup lang="ts">
import { toast } from 'vue-sonner'

function showToast(type?: 'success' | 'error' | 'info' | 'warning' | 'loading1' | 'loading2') {
  if (type) {
    if (type === 'loading1') {
      toast.promise(() => new Promise((resolve) => {
        setTimeout(resolve, 2000)
      }), {
        loading: '加载中',
        success: () => '加载成功',
        error: () => '加载失败',
        position: 'top-right',
        duration: 3000,
      })
    }
    else if (type === 'loading2') {
      const loading = toast.loading('加载中', {
        position: 'top-right',
        duration: Infinity,
      })
      setTimeout(() => {
        toast.dismiss(loading)
        toast('Kpu-mobile 自成一派的 H5 框架', {
          description: '开箱即用，提供舒适开发体验',
          position: 'top-right',
          duration: 3000,
        })
      }, 2000)
    }
    else {
      toast[type]('Kpu-mobile 自成一派的 H5 框架', {
        description: '开箱即用，提供舒适开发体验',
        position: 'top-right',
        duration: 3000,
      })
    }
  }
  else {
    toast('Kpu-mobile 自成一派的 H5 框架', {
      description: '开箱即用，提供舒适开发体验',
      position: 'top-right',
      duration: 3000,
    })
  }
}
<\/script>

<template>
  <div class="flex flex-col gap-2">
    <KmButton @click="showToast()">
      默认
    </KmButton>
    <KmButton @click="showToast('success')">
      成功
    </KmButton>
    <KmButton @click="showToast('error')">
      错误
    </KmButton>
    <KmButton @click="showToast('info')">
      信息
    </KmButton>
    <KmButton @click="showToast('warning')">
      警告
    </KmButton>
    <KmButton @click="showToast('loading1')">
      加载中 1
    </KmButton>
    <KmButton @click="showToast('loading2')">
      加载中 2
    </KmButton>
  </div>
</template>
`,h=a({__name:`index`,setup(e){return(e,n)=>{let a=l,c=d;return o(),s(c,{navbar:``,"navbar-start-side":`back`},{default:i(()=>[r(a,{code:t(m)},{default:i(()=>[r(p)]),_:1},8,[`code`])]),_:1})}}});export{h as default};