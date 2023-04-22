<template>
    <div class="about">
        <h1>0416-待办列表-第一版</h1>
        <h3>详细内容阅读0416.md</h3>
        <h3>请在下方的容器中实现你的代码</h3>
        <div class="todoList">
          <input type="text" placeholder="请输入您的任务名称"  @keyup.enter="add($event)" v-model="inputValue" >
          <div v-for="item in todos" @mouseenter="item.mouse = !item.mouse" @mouseleave="item.mouse = !item.mouse">
            <label :for="item.key">
              <input type="checkbox"  v-model="item.check" >
              <span :class="{completed:item.check}" >{{item.lab}}</span>
              <button v-if="item.mouse" @click="inputChange(item)">删除</button>
            </label>
          </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import {ref} from "vue";

const inputValue=ref('')
var todos =ref([])
const del=ref()
const inputChange = (item) => {
  const index=todos.value.findIndex((value)=>value.key===item.key)//找到用户点击的那条数据在数组中的下标
  const selectItem = todos.value[index]
  if(selectItem.check){
    selectItem.check=false
  }else {
    selectItem.check=true
  }
  todos.value[index]=selectItem
  console.log(todos.value)
}
const add = (e) => {
  const newItem = {
    key:new Date().getTime(),
    lab:e.target.value,
    check:false,
    exist:true,
    mouse:false
  }
  const newList=[newItem,...todos.value]
  todos.value=[...newList]
}


</script>
<style>
.todoList{
    background-color: #f0f0f0;
    margin-top: 16px;
    height: 450px;
}
h2{
    margin-top: 10px;
}
button {
    margin: 10px;
}
.completed{
  text-decoration: line-through;
}
</style>
<script setup lang="ts">
</script>
