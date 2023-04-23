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

const time = ref();
const toNew = () => {
 time.value= new Date().toLocaleString();
}

</script>
<style>
h2{
    margin-top: 10px;
}
button {
    margin: 10px;
}
</style>
