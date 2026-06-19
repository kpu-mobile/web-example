
/**
 * 由 Kpu-mobile 提供技术支持
 * Powered by Kpu-mobile
 * https://kpu-mobile.kpui.cn
 */
  
import{C as e,D as t,Dt as n,E as r,O as i,_ as a,at as o,ct as s,k as c,kt as l,mt as u,q as d,w as f,yt as p}from"./vue-router-DpP-iWv7.js";import{F as m,O as h,Q as g,U as _,W as v}from"./index-D4TT8-Ku.js";import{t as y}from"./AppPageLayout-DuOJLTKk.js";var b={class:`flex-start-center flex-wrap gap-2`},x=c({__name:`_demo1`,setup(c){let f=p(!1),m=p({closable:!0,center:!1,header:!0,footer:!0,contentHeight:``,loading:!1});o(()=>m.value.loading,e=>{e&&setTimeout(()=>{m.value.loading=!1},3e3)});function h(e,t){e===`close`?_().confirm({title:`提示`,content:`确定要关闭吗？`,onConfirm:()=>{t()}}):t()}return(o,c)=>{let p=g,_=v;return d(),r(a,null,[i(p,{onClick:c[0]||(c[0]=e=>f.value=!0)},{default:s(()=>[...c[8]||(c[8]=[t(` 打开 `,-1)])]),_:1}),i(_,{modelValue:n(f),"onUpdate:modelValue":c[7]||(c[7]=e=>u(f)?f.value=e:null),title:`标题`,description:`这里是一段描述介绍`,closable:n(m).closable,center:n(m).center,loading:n(m).loading,header:n(m).header,footer:n(m).footer,"before-close":h},{default:s(()=>[e(`div`,{class:l(n(m).contentHeight)},[e(`div`,b,[i(p,{variant:n(m).closable?`default`:`outline`,class:`w-full`,onClick:c[1]||(c[1]=e=>n(m).closable=!n(m).closable)},{default:s(()=>[...c[9]||(c[9]=[t(` 关闭按钮 `,-1)])]),_:1},8,[`variant`]),i(p,{variant:n(m).center?`default`:`outline`,class:`w-full`,onClick:c[2]||(c[2]=e=>n(m).center=!n(m).center)},{default:s(()=>[...c[10]||(c[10]=[t(` 居中显示 `,-1)])]),_:1},8,[`variant`]),i(p,{variant:n(m).header?`default`:`outline`,class:`w-full`,onClick:c[3]||(c[3]=e=>n(m).header=!n(m).header)},{default:s(()=>[...c[11]||(c[11]=[t(` 头部区域 `,-1)])]),_:1},8,[`variant`]),i(p,{variant:n(m).footer?`default`:`outline`,class:`w-full`,onClick:c[4]||(c[4]=e=>n(m).footer=!n(m).footer)},{default:s(()=>[...c[12]||(c[12]=[t(` 尾部区域 `,-1)])]),_:1},8,[`variant`]),i(p,{variant:n(m).contentHeight?`default`:`outline`,class:`w-full`,onClick:c[5]||(c[5]=e=>n(m).contentHeight=n(m).contentHeight?``:`h-400`)},{default:s(()=>[...c[13]||(c[13]=[t(` 切换内容高度 `,-1)])]),_:1},8,[`variant`]),i(p,{variant:`outline`,class:`w-full`,onClick:c[6]||(c[6]=e=>n(m).loading=!0)},{default:s(()=>[...c[14]||(c[14]=[t(` 显示加载中 `,-1)])]),_:1})])],2)]),_:1},8,[`modelValue`,`closable`,`center`,`loading`,`header`,`footer`])],64)}}}),S=`<script setup lang="ts">
const modal = ref(false)
const modalInfo = ref({
  closable: true,
  center: false,
  header: true,
  footer: true,
  contentHeight: '',
  loading: false,
})
watch(() => modalInfo.value.loading, (loading) => {
  if (loading) {
    setTimeout(() => {
      modalInfo.value.loading = false
    }, 3000)
  }
})

function handleBeforeClose(action: 'confirm' | 'cancel' | 'close', done: () => void) {
  if (action === 'close') {
    useKmModal().confirm({
      title: '提示',
      content: '确定要关闭吗？',
      onConfirm: () => {
        done()
      },
    })
  }
  else {
    done()
  }
}
<\/script>

<template>
  <KmButton @click="modal = true">
    打开
  </KmButton>
  <KmModal v-model="modal" title="标题" description="这里是一段描述介绍" :closable="modalInfo.closable" :center="modalInfo.center" :loading="modalInfo.loading" :header="modalInfo.header" :footer="modalInfo.footer" :before-close="handleBeforeClose">
    <div :class="modalInfo.contentHeight">
      <div class="flex-start-center flex-wrap gap-2">
        <KmButton :variant="modalInfo.closable ? 'default' : 'outline'" class="w-full" @click="modalInfo.closable = !modalInfo.closable">
          关闭按钮
        </KmButton>
        <KmButton :variant="modalInfo.center ? 'default' : 'outline'" class="w-full" @click="modalInfo.center = !modalInfo.center">
          居中显示
        </KmButton>
        <KmButton :variant="modalInfo.header ? 'default' : 'outline'" class="w-full" @click="modalInfo.header = !modalInfo.header">
          头部区域
        </KmButton>
        <KmButton :variant="modalInfo.footer ? 'default' : 'outline'" class="w-full" @click="modalInfo.footer = !modalInfo.footer">
          尾部区域
        </KmButton>
        <KmButton :variant="!!modalInfo.contentHeight ? 'default' : 'outline'" class="w-full" @click="modalInfo.contentHeight = !!modalInfo.contentHeight ? '' : 'h-400'">
          切换内容高度
        </KmButton>
        <KmButton variant="outline" class="w-full" @click="modalInfo.loading = true">
          显示加载中
        </KmButton>
      </div>
    </div>
  </KmModal>
</template>
`,C={class:`flex flex-wrap gap-4`},w=c({__name:`_demo2`,setup(e){function n(){_().info({title:`温馨提醒`,content:`这是 info 弹窗`,onConfirm:()=>{m.info(`你点了确定`)}})}function a(){_().success({title:`温馨提醒`,content:`这是 success 弹窗`,onConfirm:()=>{m.info(`你点了确定`)}})}function o(){_().warning({title:`温馨提醒`,content:`这是 warning 弹窗`,onConfirm:()=>{m.info(`你点了确定`)}})}function c(){_().error({title:`温馨提醒`,content:`这是 confirm 弹窗`,onConfirm:()=>{m.info(`你点了确定`)}})}function l(){_().confirm({title:`温馨提醒`,content:`这是 confirm 弹窗`,onConfirm:()=>{m.info(`你点了确定`)}})}function u(){_().confirm({title:`温馨提醒`,content:`这是 confirm 弹窗`,confirmButtonText:`确认（随机成功或失败）`,beforeClose:async(e,t)=>{e===`confirm`?(await new Promise(e=>setTimeout(e,1e3)),Math.random()>.5?(m.success(`成功了！`),t()):m.error(`失败了！`)):t()}})}return(e,f)=>{let p=g;return d(),r(`div`,C,[i(p,{onClick:n},{default:s(()=>[...f[0]||(f[0]=[t(` Info `,-1)])]),_:1}),i(p,{onClick:a},{default:s(()=>[...f[1]||(f[1]=[t(` Success `,-1)])]),_:1}),i(p,{onClick:o},{default:s(()=>[...f[2]||(f[2]=[t(` Warning `,-1)])]),_:1}),i(p,{onClick:c},{default:s(()=>[...f[3]||(f[3]=[t(` Error `,-1)])]),_:1}),i(p,{onClick:l},{default:s(()=>[...f[4]||(f[4]=[t(` Confirm `,-1)])]),_:1}),i(p,{onClick:u},{default:s(()=>[...f[5]||(f[5]=[t(` Confirm with promise `,-1)])]),_:1})])}}}),T=`<script setup lang="ts">
import { toast } from 'vue-sonner'

function showModalInfo() {
  useKmModal().info({
    title: '温馨提醒',
    content: '这是 info 弹窗',
    onConfirm: () => {
      toast.info('你点了确定')
    },
  })
}
function showModalSuccess() {
  useKmModal().success({
    title: '温馨提醒',
    content: '这是 success 弹窗',
    onConfirm: () => {
      toast.info('你点了确定')
    },
  })
}
function showModalWarning() {
  useKmModal().warning({
    title: '温馨提醒',
    content: '这是 warning 弹窗',
    onConfirm: () => {
      toast.info('你点了确定')
    },
  })
}
function showModalError() {
  useKmModal().error({
    title: '温馨提醒',
    content: '这是 confirm 弹窗',
    onConfirm: () => {
      toast.info('你点了确定')
    },
  })
}
function showModalConfirm() {
  useKmModal().confirm({
    title: '温馨提醒',
    content: '这是 confirm 弹窗',
    onConfirm: () => {
      toast.info('你点了确定')
    },
  })
}
function showModalPromiseConfirm() {
  useKmModal().confirm({
    title: '温馨提醒',
    content: '这是 confirm 弹窗',
    confirmButtonText: '确认（随机成功或失败）',
    beforeClose: async (action, done) => {
      if (action === 'confirm') {
        await new Promise(resolve => setTimeout(resolve, 1000))
        if (Math.random() > 0.5) {
          toast.success('成功了！')
          done()
        }
        else {
          toast.error('失败了！')
        }
      }
      else {
        done()
      }
    },
  })
}
<\/script>

<template>
  <div class="flex flex-wrap gap-4">
    <KmButton @click="showModalInfo">
      Info
    </KmButton>
    <KmButton @click="showModalSuccess">
      Success
    </KmButton>
    <KmButton @click="showModalWarning">
      Warning
    </KmButton>
    <KmButton @click="showModalError">
      Error
    </KmButton>
    <KmButton @click="showModalConfirm">
      Confirm
    </KmButton>
    <KmButton @click="showModalPromiseConfirm">
      Confirm with promise
    </KmButton>
  </div>
</template>
`,E=c({__name:`index`,setup(e){return(e,t)=>{let r=h,a=y;return d(),f(a,{navbar:``,"navbar-start-side":`back`},{default:s(()=>[i(r,{title:`弹窗`,code:n(S)},{default:s(()=>[i(x)]),_:1},8,[`code`]),i(r,{title:`对话框`,code:n(T)},{default:s(()=>[i(w)]),_:1},8,[`code`])]),_:1})}}});export{E as default};