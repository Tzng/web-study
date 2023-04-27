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
                        :key="item.key"
                        @click="itemClick(index)"
                        @mouseenter="itemOnMouse(true, index)"
                >
                    <div
                            class="todoListItem"
                            v-show="item.show"
                    >
                        <div class="checkbox" v-if="!item.edit" :for="item.key" @click="itemClick(index, $event)">
                            <input type="checkbox" v-model="item.check">
                            <span :style="item.check && {textDecoration: 'line-through', color: '#777777'}">{{ item.lab }}</span>
                        </div>
                        <div class="editItem">
                            <input ref="myInput" v-model="newValue" id="editInput" v-if="item.edit" type="text">
                        </div>
                        <div class="right" v-show="!item.edit">
                            <button style="margin-right: 4px" @click="editItem(index, $event)">编辑</button>
                            <button @click="removeItem(index, $event)">删除</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="todoAction">
                <div class="todoSuccess">
                    <input type="checkbox" @click="successAll($event)">&nbsp;
                    <div>已完成&nbsp;{{ successNum }}&nbsp;/&nbsp;全部&nbsp;{{ todos.length }}
                    </div>
                </div>
                <div class="todoClear">
                    <button @click="removeSuccess">清除已完成任务</button>
                    <button @click="hideSuccess(true)" v-if="show">隐藏已完成</button>
                    <button @click="hideSuccess(false)" v-else>显示已完成</button>
                </div>
            </div>
        </div>
    </div>
    <div class="lineThrough"></div>
</template>
<script lang="ts" setup>
import {nextTick, onMounted, ref, watch} from "vue";

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

const newValue = ref('')

// 当前操作的对象
const activeItem = ref<IItemType>()

const myInput = ref(null)

onMounted(() => {
    initData();
})

const initData = () => {
    // 从缓存获取数据
    const cacheData = localStorage.getItem('todos')
    if (cacheData) {
        todos.value = JSON.parse(cacheData)
    }
}

const itemClick = (index: number, e?: any) => {
    if (e) {
        // 阻止冒泡
        e.stopPropagation()
    }
    console.log('点击', todos.value[index]);
    // 对todos.value[index]的check取反
    todos.value[index].check = !todos.value[index].check;
    // 取出check的数量
    successNum.value = todos.value.filter(item => item.check).length
}

//添加任务
const add = (e: any) => {
    if(!e.target.value){
        return;
    }
    // 判断之前是否添加过
    const index = todos.value.findIndex(item => item.lab === e.target.value)
    if(index >= 0){
        return;
    }
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
    updateCache();
    // 清除输入框的内容
    inputValue.value = ''
}
// 删除任务
const removeItem = (index: number, e: any) => {
    // 阻止冒泡
    e.stopPropagation()
    // 根据下标删除
    const list = [...todos.value]
    list.splice(index, 1)
    todos.value = list;
    updateCache();
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
    updateCache();
    activeItem.value = list[index]
    newValue.value = list[index].lab
}

watch(activeItem, (newValue) => {
    if (activeItem.value?.edit) {
        nextTick(() => {
            myInput.value[0].focus()
        })
    }
})

const updateCache = () => {
    // 存储最新的数据到本地
    localStorage.setItem('todos', JSON.stringify(todos.value))
}

// 鼠标移入后的事件
const itemOnMouse = (isEnter: boolean, index: number) => {
    const nowItem = todos.value[index]
    // 如果当前的数据的操作的数据不一致，那么就之前的数据的edit设置为false
    if (isEnter && nowItem.key != activeItem.value?.key && activeItem.value?.key) {
        const newList = [...todos.value]
        const activeIndex = newList.findIndex(item => item.key == activeItem.value?.key);
        // 修改数据
        newList[activeIndex] = {...newList[activeIndex], edit: false, lab: newValue.value};
        todos.value = newList;
        updateCache();
    }
}

// 完成全部
const successAll = (e: any) => {
    // 阻止冒泡
    e.stopPropagation()
    todos.value.forEach(item => item.check = e.target.checked)
    successNum.value = todos.value.filter(item => item.check).length
}

const removeSuccess = () => {
    // 移除全部已完成的
    todos.value = todos.value.filter(item => !item.check)
    successNum.value = todos.value.filter(item => item.check).length
    updateCache();
}

const hideSuccess = (hide: boolean) => {
    show.value = !show.value
    if (hide) {
        // 隐藏已完成
        todos.value.forEach(item => item.show = !item.check)
    } else {
        // 显示已完成
        todos.value.forEach(item => item.show = true)
    }
}
</script>
<style>
.todoList {
    background-color: #f0f0f0;
    margin-top: 16px;
    padding: 20px;
    border-radius: 4px;
    width: 500px;
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

        .checkbox {
            display: flex;
            align-items: center;
            font-size: 20px;

            > span {
                margin-left: 8px;
                max-width: 310px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }

            > input {
                transform: scale(1.5);
            }
        }

        .editItem {
            > input {
                height: 34px;
                width: 426px;
                font-size: 20px;
            }
        }
    }
}

.todoListItem:hover .right {
    visibility: visible;
}

.right {
    visibility: hidden;
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

// 删除线
.lineThrough {
    text-decoration: line-through;
}
</style>