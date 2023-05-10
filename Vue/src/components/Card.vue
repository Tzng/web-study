<template>
    <div class="card">
        我是卡片
        <div>{{props.title}}</div>
        <div>{{props.liker}}</div>
        <div>{{props.likerType}}</div>
        <div>{{props.nowTime.toLocaleString()}}</div>
        <div>当前组件的currentCount：{{currentCount}},年份是{{year}}</div>
        <button @click="currentCount++">修改</button>
        <button @click="$emit('someEvent', {a: '111112'})">click me someEvent</button>
    </div>
</template>

<script setup lang="ts">

import {computed, ref} from "vue";

const currentCount = ref(props.liker);

// 定义一个computed，使用props.nowTime中的year
const year = computed(() => {
    return props.nowTime?.getFullYear();
})

// 定义props，传递一个title进来
const props = defineProps({
    title: {
        type: String,
        default: "默认标题"
    },
    liker: {
        type: Number,
        default: 0
    },
    likerType: {
        type: String,
        default: "点赞"
    },
    nowTime: {
        type: Date,
        default: new Date()
    },
    someEvent: {
        type: Function,
        default: () => {}
    }
})

const someEvent1 = () => {
    emit("someEvent");
}

// 定义emit
const emit = defineEmits(["someEvent"]);


</script>

<style scoped>
.card{
    width: 800px;
    height: 300px;
    background-color: #fff;
    border: 1px solid #ccc;
    box-shadow: 0 0 10px #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.card:hover{
    box-shadow: 0 0 10px #aaa;
}
</style>