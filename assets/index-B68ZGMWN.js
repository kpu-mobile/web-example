
/**
 * 由 Kpu-mobile 提供技术支持
 * Powered by Kpu-mobile
 * https://kpu-mobile.kpui.top/
 */
    
import{_ as i}from"./index-CPokHgEa.js";import{_}from"./index.vue_vue_type_script_setup_true_lang-yVcVFY2c.js";import{d as l,k as f,o as r,r as B,b as o,w as a,e as p,_ as y,i as g,u as m,F as w,c as x}from"./index-DYOJpx7Z.js";import"./index.vue_vue_type_script_setup_true_lang-BJ4zJUgu.js";const C=l({name:"KmModal",__name:"index",props:{modelValue:{type:Boolean,default:!1},title:{},description:{},icon:{},loading:{type:Boolean,default:!1},closable:{type:Boolean,default:!0},maximize:{type:Boolean},maximizable:{type:Boolean},draggable:{type:Boolean},center:{type:Boolean,default:!1},border:{type:Boolean,default:!0},alignCenter:{type:Boolean},overlay:{type:Boolean,default:!0},overlayBlur:{type:Boolean,default:!1},showConfirmButton:{type:Boolean,default:!0},showCancelButton:{type:Boolean,default:!1},confirmButtonText:{default:"确定"},cancelButtonText:{default:"取消"},confirmButtonDisabled:{type:Boolean,default:!1},confirmButtonLoading:{type:Boolean,default:!1},header:{type:Boolean,default:!0},footer:{type:Boolean,default:!0},closeOnClickOverlay:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},class:{},headerClass:{},contentClass:{},footerClass:{}},setup(s){return(t,u)=>(r(),f("div",null," test "))}}),v=l({__name:"_demo1",setup(s){const t=B(!1);return(u,e)=>{const n=y,c=C;return r(),f(w,null,[o(n,{onClick:e[0]||(e[0]=d=>t.value=!0)},{default:a(()=>e[2]||(e[2]=[p(" 打开 ")])),_:1}),o(c,{modelValue:m(t),"onUpdate:modelValue":e[1]||(e[1]=d=>g(t)?t.value=d:null),title:"标题"},{default:a(()=>e[3]||(e[3]=[p(" 这里是弹簧抽屉内容 ")])),_:1},8,["modelValue"])],64)}}}),b=`<script setup lang="ts">
const drawer = ref(false)
// TODO 未实现
<\/script>

<template>
  <KmButton @click="drawer = true">
    打开
  </KmButton>
  <KmSpringDrawer v-model="drawer" title="标题">
    这里是弹簧抽屉内容
  </KmSpringDrawer>
</template>
`,O=l({__name:"index",setup(s){return(t,u)=>{const e=_,n=i;return r(),x(n,{navbar:"","navbar-start-side":"back"},{default:a(()=>[o(e,{code:m(b)},{default:a(()=>[o(v)]),_:1},8,["code"])]),_:1})}}});export{O as default};
