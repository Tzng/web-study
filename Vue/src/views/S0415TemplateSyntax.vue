<template>
    <h1>0415-模板基础</h1>
    <h3>详细内容阅读0415.md</h3>
    <h2>1 模板语法1</h2>
    <button @click="button1">按钮1</button>
    <span>{{temp1}}</span>
    <h2>2 模板语法2</h2>
    <button @click="button2">按钮2</button>
    <span>{{temp2}}</span>
    <h2>3 模板语法3</h2>
    <div class="example2" onmouseover="this.backgroundColor='red'" onmouseout="this.backgroundColor='blue'">鼠标移动:红色or蓝色</div>
  <h2>4 Class与Style 绑定1</h2>
  <div class="example2"></div>
</template>

<script setup lang="ts">
import {ref} from 'vue';

//-----------------1 模板语法1的代码开始-----------------
const temp1 = ref()
const button1 = () => {
    temp1.value = new Date().toLocaleString();
}
//--------------------- 1 模板语法1代码结束---------------------
//-----------------2 模板语法2的代码开始-----------------
const temp2 = ref()
let a=0
const button2 = () => {
  a++;
  temp2.value = a;
}
//--------------------- 2 模板语法2代码结束---------------------
//-----------------3 模板语法3的代码开始-----------------

//--------------------- 3 模板语法3代码结束---------------------
//-----------------3 模板语法3的代码开始-----------------

//--------------------- 3 模板语法3代码结束---------------------
</script>
<style>
h2{
    margin-top: 10px;
}
button {
    margin: 10px;
}
.example2{
  width: 100px;
  height: 50px;
  background: blue;
}
</style>
