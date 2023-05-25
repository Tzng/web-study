<script setup lang="ts">
import {RouterLink, RouterView} from 'vue-router'</script>

<template>
    <header>
        <h1>Vue 学习计划</h1>
        <div class="menu">
            <RouterLink to="/template">2023年4月15日模板语法</RouterLink>
            <RouterLink to="/todolist">2023年4月16日待办列表</RouterLink>
            <RouterLink to="/todolist2">2023年4月16日待办列表二</RouterLink>
            <RouterLink to="/todolist3">2023年4月16日待办列表三</RouterLink>
            <RouterLink to="/router">2023年4月17日路由</RouterLink>
            <RouterLink to="/components">2023年4月18日</RouterLink>
            <RouterLink to="/fetch2">2023年4月19日fetch</RouterLink>
            <RouterLink to="/nodeModules">2023年4月20日node_modules</RouterLink>
        </div>
    </header>
    <main>
        <RouterView/>
    </main>
</template>
<style scoped>
header {
    width: 320px;
    height: 100vh;
    background-color: #f0f0f0;
    position: fixed;
    left: 0;
    top: 0;
    padding-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

main {
    margin-left: 320px;
    padding: 50px;
    width: 100%;
    height: 100vh;
}

.menu {
    display: flex;
    flex-direction: column;
}
</style>
