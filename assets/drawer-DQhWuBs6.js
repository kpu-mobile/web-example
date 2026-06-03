
/**
 * 由 Kpu-mobile 提供技术支持
 * Powered by Kpu-mobile
 * https://kpu-mobile.kpui.cn
 */
  
import{C as e,D as t,Dt as n,E as r,O as i,_ as a,at as o,ct as s,k as c,mt as l,q as u,w as d,yt as f}from"./vue-router-DpP-iWv7.js";import{O as p,Q as m,q as h,z as g}from"./index-CqA6ZM_a.js";import{t as _}from"./AppPageLayout-b-gp_UZ6.js";var v={class:`flex-start-center flex-wrap gap-2`},y=c({__name:`_demo1`,setup(c){let d=f(!1),p=f({side:`right`,closable:!0,header:!0,footer:!0,loading:!1});return o(()=>p.value.loading,e=>{e&&setTimeout(()=>{p.value.loading=!1},3e3)}),(o,c)=>{let f=m,_=g,y=h;return u(),r(a,null,[i(f,{onClick:c[0]||(c[0]=e=>d.value=!0)},{default:s(()=>[...c[7]||(c[7]=[t(` 打开 `,-1)])]),_:1}),i(y,{modelValue:n(d),"onUpdate:modelValue":c[6]||(c[6]=e=>l(d)?d.value=e:null),title:`标题`,description:`这里是一段描述介绍`,side:n(p).side,closable:n(p).closable,header:n(p).header,footer:n(p).footer,loading:n(p).loading},{default:s(()=>[e(`div`,v,[i(_,{modelValue:n(p).side,"onUpdate:modelValue":c[1]||(c[1]=e=>n(p).side=e),options:[{label:`左侧`,value:`left`},{label:`右侧`,value:`right`},{label:`顶部`,value:`top`},{label:`底部`,value:`bottom`}],class:`w-full`},null,8,[`modelValue`]),i(f,{variant:n(p).closable?`default`:`outline`,class:`w-full`,onClick:c[2]||(c[2]=e=>n(p).closable=!n(p).closable)},{default:s(()=>[...c[8]||(c[8]=[t(` 关闭按钮 `,-1)])]),_:1},8,[`variant`]),i(f,{variant:n(p).header?`default`:`outline`,class:`w-full`,onClick:c[3]||(c[3]=e=>n(p).header=!n(p).header)},{default:s(()=>[...c[9]||(c[9]=[t(` 头部区域 `,-1)])]),_:1},8,[`variant`]),i(f,{variant:n(p).footer?`default`:`outline`,class:`w-full`,onClick:c[4]||(c[4]=e=>n(p).footer=!n(p).footer)},{default:s(()=>[...c[10]||(c[10]=[t(` 尾部区域 `,-1)])]),_:1},8,[`variant`]),i(f,{variant:`outline`,class:`w-full`,onClick:c[5]||(c[5]=e=>n(p).loading=!0)},{default:s(()=>[...c[11]||(c[11]=[t(` 显示加载中 `,-1)])]),_:1})])]),_:1},8,[`modelValue`,`side`,`closable`,`header`,`footer`,`loading`])],64)}}}),b=`<script setup lang="ts">
const drawer = ref(false)

const drawerInfo = ref({
  side: 'right' as const,
  closable: true,
  header: true,
  footer: true,
  loading: false,
})
watch(() => drawerInfo.value.loading, (loading) => {
  if (loading) {
    setTimeout(() => {
      drawerInfo.value.loading = false
    }, 3000)
  }
})
<\/script>

<template>
  <KmButton @click="drawer = true">
    打开
  </KmButton>
  <KmDrawer v-model="drawer" title="标题" description="这里是一段描述介绍" :side="drawerInfo.side" :closable="drawerInfo.closable" :header="drawerInfo.header" :footer="drawerInfo.footer" :loading="drawerInfo.loading">
    <div class="flex-start-center flex-wrap gap-2">
      <KmSelect
        v-model="drawerInfo.side" :options="[
          { label: '左侧', value: 'left' },
          { label: '右侧', value: 'right' },
          { label: '顶部', value: 'top' },
          { label: '底部', value: 'bottom' },
        ]" class="w-full"
      />
      <KmButton :variant="drawerInfo.closable ? 'default' : 'outline'" class="w-full" @click="drawerInfo.closable = !drawerInfo.closable">
        关闭按钮
      </KmButton>
      <KmButton :variant="drawerInfo.header ? 'default' : 'outline'" class="w-full" @click="drawerInfo.header = !drawerInfo.header">
        头部区域
      </KmButton>
      <KmButton :variant="drawerInfo.footer ? 'default' : 'outline'" class="w-full" @click="drawerInfo.footer = !drawerInfo.footer">
        尾部区域
      </KmButton>
      <KmButton variant="outline" class="w-full" @click="drawerInfo.loading = true">
        显示加载中
      </KmButton>
    </div>
  </KmDrawer>
</template>
`,x=c({__name:`index`,setup(e){return(e,t)=>{let r=p,a=_;return u(),d(a,{navbar:``,"navbar-start-side":`back`},{default:s(()=>[i(r,{code:n(b)},{default:s(()=>[i(y)]),_:1},8,[`code`])]),_:1})}}});export{x as default};