<template>
    <div class="about">
        <h1>0418-深入组件</h1>
        <p>此章节假设你已经看过了<a href="https://cn.vuejs.org/guide/essentials/component-basics.html">组件基础</a>若你还不了解组件是什么，请先阅读该章节。</p>
        <p>一个 Vue 组件在使用前需要先被“注册”，这样 Vue 才能在渲染模板时找到其对应的实现。组件注册有两种方式：全局注册和局部注册。</p>
    </div>
    <h1>组件基础</h1>
    <QuanJuCountButton />
    <QuanJuCountButton />
    <h1>下面开始测验</h1>
    <h2>1. 全局注册</h2>
    <p>新建一个Card组件，并将其注册到全局中，然后在S0418Components.vue中使用Card组件。</p>
    <Card title="你好" :liker="520" />
    <h2>2. 局部注册</h2>
    <Card2>
        <template v-slot:header>
            <h1>这里是标题</h1>
        </template>

        <template v-slot:body>
            <p>这里是内容</p>
        </template>

        <template v-slot:footer>
            <p>这里是底部</p>
        </template>
    </Card2>
    <card2>
        <button>我是card2的{{ message }}</button>
    </card2>
    <SubmitButton>修改</SubmitButton>
    <count-button />
    <h2>2. Props声明</h2>
    <p>一个组件需要显式声明它所接受的 props，这样 Vue 才能知道外部传入的哪些是 props，哪些是透传 attribute</p>
    <p>现在。我们需要在Card组件中声明props，它接受一个title属性和liker属性。然后在S0418Components.vue中使用Card组件，并传入title和liker属性。</p>
    <p>其中title属性是一个字符串，liker属性是一个数字，对应的值为“Vue”和“1000”。</p>
    <Card title="我可以被点击" :liker="520" liker-type="小学校" :now-time="time" @some-event="someEvent" />
    <h2>使用一个对象绑定多个 prop</h2>
    <Card v-bind="post" />
    <h2>4. 组件 v-model</h2>
    <CustomInput v-model="message" /> {{ message }}
</template>

<script setup lang="ts">
import Card2 from "@/components/Card2.vue";
import CountButton from "@/components/CountButton.vue";
import {onMounted, ref, watch} from "vue";
import CustomInput from "@/components/CustomInput.vue";
import SubmitButton from "@/components/SubmitButton.vue";

const time = ref();

const message = ref('Hello!')

const someEvent = (e) => {
    console.log("someEvent", e);
}

const post = ref({
    liker: 12,
    title: 'My Journey with Vue'
})

onMounted(() => {
    // 设置定时器
    setInterval(() => {
        time.value = new Date();
    }, 1000);
})

watch(message, (newVal, oldVal) => {
    console.log("修改前", oldVal);
    console.log("修改后", newVal);
})

</script>
<style>
h2{
    margin-top: 10px;
}
button {
    margin: 10px;
}
</style>

