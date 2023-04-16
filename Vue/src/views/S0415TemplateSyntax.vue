<template>
    <h1>0415-模板基础</h1>
    <h3>详细内容阅读0415.md</h3>
    <h2>1 模板语法1</h2>
    <button @click="button1">按钮1</button>
    <span>{{temp1}}</span>
</template>

<script setup lang="ts">
import {ref} from 'vue';

//-----------------1 模板语法1的代码开始-----------------
const temp1 = ref()
const button1 = () => {
    temp1.value = new Date().toLocaleDateString();
}
//--------------------- 1 模板语法1代码结束---------------------
</script>
<style>
</style>
