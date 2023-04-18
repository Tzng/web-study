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
    <div class="example3" onmouseover="this.backgroundColor='red'" onmouseout="this.backgroundColor='blue'">鼠标移动:红色or蓝色（错误的）</div>
    <div class="example3" onmouseover="this.style.backgroundColor='red'" onmouseout="this.style.backgroundColor='blue'">鼠标移动:红色or蓝色（正确的）</div>
  <h2>4 Class与Style 绑定1</h2>
  <div :class="{ red: isRed }"
       :style="{ backgroundColor: bgColor}">每秒变化:红色or蓝色</div>
  <div class="example2"></div>
  <h2>5 条件渲染</h2>
  <div v-on:mouseover="changeColor('red')" v-on:mouseout="changeColor('blue')">
    鼠标移动到这里
  </div>
</template>

<script  setup lang="ts">
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

//AI
window.onload = function() {
  var div = document.createElement('div');
  div.style.width = '100%';
  div.style.height = '100%';
  document.body.appendChild(div);
  var colors = ['#FF0000', '#0000FF'];
  var i = 0;
  setInterval(function() {
    div.style.backgroundColor = colors[i];
    i = (i + 1) % colors.length;
  }, 1000);
}
//--------------------- 3 模板语法3代码结束---------------------
//-----------------3 模板语法3的代码开始-----------------
export default {
  methods: {
    changeColor(color) {
      this.$el.style.backgroundColor = color;
    },
  },
};

//--------------------- 3 模板语法3代码结束---------------------
</script>
<style>
h2{
    margin-top: 10px;
}
button {
    margin: 10px;
}
.example3{
  width: 100px;
  height: 50px;
  background: blue;
}

</style>
