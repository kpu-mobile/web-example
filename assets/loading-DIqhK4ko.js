
/**
 * 由 Kpu-mobile 提供技术支持
 * Powered by Kpu-mobile
 * https://kpu-mobile.kpui.cn
 */
  
import{D as e,Dt as t,E as n,O as r,Z as i,_ as a,ct as o,k as s,mt as c,q as l,w as u,yt as d}from"./vue-router-DpP-iWv7.js";import{t as f}from"./VanFieldPicker-gPAETx6r.js";import{G as p,O as m,Q as h}from"./index-CqA6ZM_a.js";import{t as g}from"./AppPageLayout-b-gp_UZ6.js";var _=s({__name:`_demo1`,setup(s){let u=d(`plane`),m=d(50),g=d(`加载中...`);function _(){let{close:e}=p({type:u.value,size:m.value,text:g.value});setTimeout(()=>{e()},2e3)}return(s,d)=>{let p=f,v=i(`VanSlider`),y=i(`VanField`),b=i(`VanCellGroup`),x=i(`VanForm`),S=h;return l(),n(a,null,[r(x,null,{default:o(()=>[r(b,null,{default:o(()=>[r(p,{modelValue:t(u),"onUpdate:modelValue":d[0]||(d[0]=e=>c(u)?u.value=e:null),label:`类型`,columns:[{text:`Plane`,value:`plane`},{text:`Chase`,value:`chase`},{text:`Bounce`,value:`bounce`},{text:`Wave`,value:`wave`},{text:`Pulse`,value:`pulse`},{text:`Flow`,value:`flow`},{text:`Swing`,value:`swing`},{text:`Circle`,value:`circle`},{text:`Circle Fade`,value:`circle-fade`},{text:`Grid`,value:`grid`},{text:`Fold`,value:`fold`},{text:`Wander`,value:`wander`}]},null,8,[`modelValue`]),r(y,{label:`尺寸`},{input:o(()=>[r(v,{modelValue:t(m),"onUpdate:modelValue":d[1]||(d[1]=e=>c(m)?m.value=e:null),min:20,max:200,step:10},null,8,[`modelValue`])]),_:1}),r(y,{modelValue:t(g),"onUpdate:modelValue":d[2]||(d[2]=e=>c(g)?g.value=e:null),label:`提示文字`},null,8,[`modelValue`])]),_:1})]),_:1}),r(S,{onClick:_},{default:o(()=>[...d[3]||(d[3]=[e(` 加载 Loading（演示控制在 2 秒后关闭） `,-1)])]),_:1})],64)}}}),v=`<script setup lang="ts">
const type = ref<'plane' | 'chase' | 'bounce' | 'wave' | 'pulse' | 'flow' | 'swing' | 'circle' | 'circle-fade' | 'grid' | 'fold' | 'wander'>('plane')
const size = ref(50)
const text = ref('加载中...')

function loading() {
  // 提供 3 个参数
  const { close } = useKmLoading({
    type: type.value,
    size: size.value,
    text: text.value,
  })
  setTimeout(() => {
    close()
  }, 2000)
}
<\/script>

<template>
  <VanForm>
    <VanCellGroup>
      <VanFieldPicker
        v-model="type"
        label="类型"
        :columns="[
          { text: 'Plane', value: 'plane' },
          { text: 'Chase', value: 'chase' },
          { text: 'Bounce', value: 'bounce' },
          { text: 'Wave', value: 'wave' },
          { text: 'Pulse', value: 'pulse' },
          { text: 'Flow', value: 'flow' },
          { text: 'Swing', value: 'swing' },
          { text: 'Circle', value: 'circle' },
          { text: 'Circle Fade', value: 'circle-fade' },
          { text: 'Grid', value: 'grid' },
          { text: 'Fold', value: 'fold' },
          { text: 'Wander', value: 'wander' },
        ]"
      />
      <VanField label="尺寸">
        <template #input>
          <VanSlider v-model="size" :min="20" :max="200" :step="10" />
        </template>
      </VanField>
      <VanField v-model="text" label="提示文字" />
    </VanCellGroup>
  </VanForm>
  <KmButton @click="loading">
    加载 Loading（演示控制在 2 秒后关闭）
  </KmButton>
</template>
`,y=s({__name:`index`,setup(e){return(e,n)=>{let i=m,a=g;return l(),u(a,{navbar:``,"navbar-start-side":`back`},{default:o(()=>[r(i,{code:t(v)},{default:o(()=>[r(_)]),_:1},8,[`code`])]),_:1})}}});export{y as default};