<template>
    <div class="about">
        <h1>0417 路由</h1>
    </div>
    <div>
        <p>
            <RouterLink to="/new/12/张三?fileId=474e7d33859ba76d3651d6b7da7951c1&a=1&b=1">
                点击跳转到new页面
            </RouterLink>
        </p>
        <p>
            <RouterLink to="/old/12">
                点击跳转到old页面
            </RouterLink>
        </p>
        <p>
            <RouterLink to="/new/12/Profile">
                UserProfile
            </RouterLink>
        </p>
        <p>
            <RouterLink to="/new/12/Posts">
                UserPosts
            </RouterLink>
        </p>
        <button @click="toNew">点击跳转到new页面</button>
    </div>
</template>

<script setup lang="ts">
import {useRouter} from "vue-router";

const router = useRouter();

const toNew = () => {
    const date = new Date().toLocaleString();
    console.log(date);
    router.push("/new?date=" + date);
}
</script>
<style>
h2 {
    margin-top: 10px;
}

button {
    margin: 10px;
}

p {
    margin-bottom: 10px;
}
</style>
