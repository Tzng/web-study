<template>
    <div class="about">
        <h1>0417 路由</h1>
    </div>
    <div>
      <RouterLink to="/new" ><button @click="toNew">点击跳转到new页面</button></RouterLink>

    </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import {createRouter, createWebHashHistory} from "vue-router";
import Router from "@/router";

const time = ref();
const toNew = () => {
 time.value= new Date().toLocaleString();
}
//1.定义路由组件
const Time = {template:'<div>Time</div>'}
//2.定义一些路由，每个路由都需要映射到一个组件
const routes = [
  {path:'/new',component:Router}
]
//3.创建router实例，然后传入routes配置
const router = createRouter({
  history: createWebHashHistory(),//4.history模式,hash模式
  routes,//缩写，相当于routes:routes
})
//5.挂载路由
</script>
<style>
h2{
    margin-top: 10px;
}
button {
    margin: 10px;
}
</style>
