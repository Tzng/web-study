<template>
    <div class="about">
        <h1>0416-待办列表第三版</h1>
        <h3>详细内容阅读0416.md</h3>
        <h3>请在下方的容器中实现你的代码</h3>
        <div class="todoList">
            <input
                    class="addTodo"
                    type="text"
                    placeholder="请输入您的任务名称"
                    @keyup.enter="add($event)"
                    v-model="inputValue"
            >
            <div class="todoListContent">
                <div
                        v-for="(item, index) in todos"
                        @mouseenter="item.mouse = true"
                        @mouseleave="item.mouse = false"
                        class="todoListItem"
                        @click="itemClick(index)"
                >
                    <label v-if="!item.edit" :for="item.key" @click="itemClick(index, $event)">
                        <input type="checkbox" v-model="item.check">
                        <span>{{ item.lab }}</span>
                    </label>
                    <input v-if="item.edit">
                    <div class="right" v-show="item.mouse">
                        <button style="margin-right: 4px" @click="editItem(index, $event)">编辑</button>
                        <button @click="removeItem(index, $event)">删除</button>
                    </div>
                </div>
            </div>
            <div class="todoAction">
                <div class="todoSuccess">
                    <input type="checkbox">&nbsp;
                    <div>已完成&nbsp;{{successNum}}&nbsp;/&nbsp;全部&nbsp;{{ todos.length }}
                    </div>
                </div>
                <div class="todoClear">
                    <button @click="">清除已完成任务</button>
                    <button @click=";(show = !show)" v-if="show">隐藏已完成</button>
                    <button @click="" v-else>显示已完成</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import {ref} from "vue";

type IItemType = {
    key: number,
    lab: string,
    // 是否已完成
    check: boolean,
    // 是否显示
    show: boolean,
    // 是否鼠标移入
    mouse: boolean,
    // 编辑状态
    edit: boolean
}

// 输入框
const inputValue = ref('')
// 待办事项列表
const todos = ref<IItemType[]>([]);
// 已完成事项的数量
const successNum = ref(0)

const show = ref(true)
const edit = ref(false)

const itemClick = (index: number, e?: any) => {
    if(e){
        // 阻止冒泡
        e.stopPropagation()
    }
    console.log('点击',todos.value[index]);
    // 对todos.value[index]的check取反
    todos.value[index].check = !todos.value[index].check;
    // 取出check的数量
    successNum.value = todos.value.filter(item => item.check).length
}

//添加任务
const add = (e: any) => {
    const newItem = {
        key: new Date().getTime(),
        // 显示的文字
        lab: e.target.value,
        check: false,
        show: true,
        mouse: false,
        edit: false
    }
    const newList = [newItem, ...todos.value]
    todos.value = [...newList];
    // 清除输入框的内容
    inputValue.value = ''
}
// 删除任务
const removeItem = (index: number,e: any) => {
    // 阻止冒泡
    e.stopPropagation()
    // 根据下标删除
    const list = [...todos.value]
    list.splice(index, 1)
    todos.value = list;
    // 重新计算已完成的数量
    successNum.value = todos.value.filter(item => item.check).length
}

// 编辑任务
const editItem = (index: number, e: any) => {
    // 阻止冒泡
    e.stopPropagation()
    const list = [...todos.value]
    // 设置数据为编辑砖头
    list[index].edit = true;
    todos.value = list;
}
</script>
<style>
.todoList {
    background-color: #f0f0f0;
    margin-top: 16px;
    padding: 20px;
    border-radius: 4px;
}

.addTodo {
    height: 40px;
    width: 100%;
    font-size: 20px;
}

.todoListContent {
    margin-top: 20px;
    margin-bottom: 20px;
    height: 400px;
    overflow-y: scroll;
    position: relative;
    border: 1px solid #e5e5e5;
    border-radius: 4px;
    .todoListItem {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 4px 10px;
        &:hover {
            background-color: #ffffff;
        }
        > label {
            font-size: 20px;
            > span {
                margin-left: 8px;
            }
            > input {
                transform: scale(1.5);
            }
        }
    }

}
.todoAction {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.todoSuccess {
    display: flex;
    align-items: center;
    > input {
        transform: scale(1.5);
    }
    > div {
        margin-left: 4px;
        text-align: center;
        height: 24px;
        line-height: 24px;
    }
}

.todoClear {
    > button {
        margin-left: 4px;
    }
}
</style>