<template>
  <div class="about">
    <h1>0416-待办列表二第版</h1>
    <h3>详细内容阅读0416.md</h3>
    <h3>请在下方的容器中实现你的代码</h3>
    <div class="todoList">
      <input type="text" placeholder="请输入您的任务名称"  @keyup.enter="add($event)" v-model="inputValue" >
      <div v-for="item in todos" @mouseenter="item.mouse = !item.mouse" @mouseleave="item.mouse = !item.mouse">
        <div :style="{backgroundColor:backGroundColor}"
             @mouseenter="()=>{backGroundColor='white'}"
             @mouseleave="()=>{backGroundColor=''}"
             v-if="item.mouse">
          <div >
            <label :for="item.key">
              <input type="text" @keyup.enter="add($event);(edit = !edit)" v-model="inputValue" v-if="edit" >
              <input type="checkbox"  v-model="item.check" @click="addAllCheck(item)" v-else >
              <span :class="{completed:item.check }">{{item.lab}}</span>
            </label>

          </div>
          <div class="right">
            <button v-if="item.mouse" @click="editChange(item);(edit = !edit)" >编辑</button>
            <button v-if="item.mouse" @click="inputChange(item)">删除</button>
          </div>
        </div>
        <div v-else>
          <div >
            <label :for="item.key">
              <input type="checkbox"  v-model="item.check" >
              <span :class="{completed:item.check}">{{item.lab}}</span>
            </label>
          </div>
          <div class="right">
            <button v-if="item.mouse" @click="editChange(item);(edit = !edit)" >编辑</button>
            <button v-if="item.mouse" @click="inputChange(item)">删除</button>
          </div>
        </div>
      </div>
      <div class="allCompleted">
        <label @click="allCheck(item)">
          <input type="checkbox" >
          已完成{{allcheck.length+1}}/全部 {{todos.length}}
        </label>
      </div>
      <div v-for="item in todos" class="allCompletedBu">
        <button @click="deletAllCheck(item)">清除已完成任务</button>
        <button @click="hideAllCheck(item);(show = !show)" v-if="show">隐藏已完成</button>
        <button @click="(show = !show) ; showAllCheck(item)" v-else>显示已完成</button>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import {ref} from "vue";

const inputValue=ref('')
const todos = ref([]);
const backGroundColor = ref()
const show = ref(true)
const allcheck = ref([])
const edit = ref(false)

const inputChange = (item) => {
  const index=todos.value.findIndex((value)=>value.key===item.key)//找到用户点击的那条数据在数组中的下标
  const selectItem = todos.value[index]
  if(selectItem.check){
    selectItem.check=false
  }else {
    selectItem.check=true
  }
  todos.value[index]=selectItem
  //如果用户点击的那套数据的exist为true，那么就将这条数据从数组中删除
  if(selectItem.exist){
    todos.value.splice(index,1)
  }
  console.log(todos.value)
}
//编辑用户选中的数据
const editChange = (item) => {
  const index=todos.value.findIndex((value)=>value.key===item.key)//找到用户点击的那条数据在数组中的下标
  const selectItem = todos.value[index]
  selectItem.lab=inputValue.value
  todos.value[index]=selectItem
  console.log(todos.value)
}
//添加任务
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
const addAllCheck = (e) => {
  //将所有check为true的数据另存到新的数组中
  allcheck.value= todos.value.filter((value)=>value.check)
}
//全选
const allCheck = (e) => {
  todos.value.forEach((value)=>{
    value.check=true})
}
//清除已完成任务
const deletAllCheck = (e) => {
  //将check为true的数据从数组中删除
  todos.value=todos.value.filter((value)=>!value.check)
}
//隐藏已完成
const hideAllCheck = (e) => {
  todos.value=todos.value.filter((value)=>!value.check)
}
//显示已完成
const showAllCheck = (e) => {
  todos.value=[...todos.value,...allcheck.value]
}
//背景色  是否可以这样用  感觉上面太冗余了
const color = () => {
  if(todos.value.mouse) {
    backGroundColor.value = 'white'
  }}
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
.allCompleted{
  left:0;
  bottom:0;
  position: absolute;
  padding: 10px;
  margin-left: 5px;
}
.allCompletedBu{
  right:0;
  bottom:0;
  position: absolute
}

.right{
  right:0;
  bottom:0;
  position: absolute;
  margin-top: 5px;

}

</style>
<script setup lang="ts">
</script>
