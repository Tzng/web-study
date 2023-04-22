<template>
    <div class="about">
        <h1>0418-深入组件</h1>
        <p>此章节假设你已经看过了<a href="https://cn.vuejs.org/guide/essentials/component-basics.html">组件基础</a>若你还不了解组件是什么，请先阅读该章节。</p>
        <p>一个 Vue 组件在使用前需要先被“注册”，这样 Vue 才能在渲染模板时找到其对应的实现。组件注册有两种方式：全局注册和局部注册。</p>
    </div>
    <h1>下面开始测验</h1>
    <h2>1. 全局注册</h2>
    <p>新建一个Card组件，并将其注册到全局中，然后在S0418Components.vue中使用Card组件。</p>
    <h2>2. Props声明</h2>
    <p>一个组件需要显式声明它所接受的 props，这样 Vue 才能知道外部传入的哪些是 props，哪些是透传 attribute</p>
    <p>现在。我们需要在Card组件中声明props，它接受一个title属性和liker属性。然后在S0418Components.vue中使用Card组件，并传入title和liker属性。</p>
    <p>其中title属性是一个字符串，liker属性是一个数字，对应的值为“Vue”和“1000”。</p>
</template>

<script setup lang="ts">
</script>
<style>
h2{
    margin-top: 10px;
}
button {
    margin: 10px;
}
</style>

