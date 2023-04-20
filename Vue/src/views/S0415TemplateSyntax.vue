<template>
  <h1>0415-模板基础</h1>
  <h3>详细内容阅读0415.md</h3>
  <h2>1 模板语法1</h2>
  <button @click="button1">按钮1</button>
  <span>{{ temp1 }}</span>
  <h2>2 模板语法2</h2>
  <button @click="button2">按钮2</button>
  <span>{{ temp2 }}</span>
  <h2>3 模板语法3</h2>
  <div class="example3" v-bind:style="{backgroundColor:backgroudclor3}" @mouseenter="()=>{
    backgroudclor3='red'
  }" @mouseleave="()=>{backgroudclor3='blue'}">
    鼠标移动:红色or蓝色
  </div>
  <h2>4 模板语法4</h2>
  <div class="example3" v-bind:style="{backgroundColor:backgroudcolor4}">
    1秒一变:红色or蓝色
  </div>
  <h2 >5 条件渲染</h2>
  <button @click="red5 = ! red5">点击切换div</button>
  <div v-if="red5" class="example3" style="background-color: red">red</div>
  <div v-else class="example3" style="background-color: blue">blue</div>
  <h2 >6 列表渲染1</h2>
  <div v-for="a6 in arr6"  >
    <li v-if="a6%2" style="color: red">
      {{a6}}
    </li>
    <li v-else style="color: blue">
      {{a6}}
    </li>
  </div>
  <h2>7 事件处理</h2>
  <div>
    <li @click"p7">1</li>
    <li>2</li>
    <li>3</li>
  </div>
</template>

<script lang="ts" setup>
import {ref} from 'vue';

//-----------------1 模板语法1的代码开始-----------------
const temp1 = ref()
const button1 = () => {
  temp1.value = new Date().toLocaleString();
}
//--------------------- 1 模板语法1代码结束---------------------
//-----------------2 模板语法2的代码开始-----------------
const temp2 = ref()
let a = 0
const button2 = () => {
  a++;
  temp2.value = a;
}
//--------------------- 2 模板语法2代码结束---------------------
//-----------------3 模板语法3的代码开始-----------------
const backgroudclor3 = ref("red")
//--------------------- 3 模板语法3代码结束---------------------
//-----------------4 Class与Style 绑定1的代码开始-----------------
const backgroudcolor4 = ref("red")
setInterval(() => {
  if (backgroudcolor4.value === "red") {
    backgroudcolor4.value = "blue"
  } else {
    backgroudcolor4.value = "red"
  }
}, 1000)
//--------------------- 4 Class与Style 绑定1代码结束---------------------
//-----------------5 条件渲染的代码开始-----------------
const red5 = ref(true)
//--------------------- 5 条件渲染代码结束---------------------
//-----------------6 列表渲染1的代码开始-----------------
const arr6 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
//--------------------- 6 列表渲染1代码结束---------------------
//-----------------7 事件处理的代码开始-----------------

const print7 = {
  methods: {
    p7(n) {
      alert(n)
    }
  }
};

//--------------------- 7 事件处理代码结束---------------------

</script>
<style>
h2 {
  margin-top: 10px;
}

button {
  margin: 10px;
}

.example3 {
  width: 100px;
  height: 50px;
  background: blue;
}

</style>
