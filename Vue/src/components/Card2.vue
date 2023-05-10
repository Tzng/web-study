<template>
    <div class="card">
        <div class="title">
            <slot name="header"></slot>
        </div>
        <div class="content">
            <slot name="body"></slot>
        </div>
        <div class="footer">
            <slot name="footer"></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
// Card组件中添加一个slot，然后传入一个button，让Card组件中的button可以被替换。

</script>

<style scoped>
.card{
    width: 200px;
    height: 200px;
    background-color: red;
    border: 1px solid #ccc;
    box-shadow: 0 0 10px #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
}
.card:hover{
    box-shadow: 0 0 10px #aaa;
}

.title {
    font-size: 20px;
    color: #fff;
    background-color: #000;
}
.content{
    height: 40px;
    background-color: #00bd7e;
}
.footer{
    height: 40px;
    background-color: #ff00d5;
}
</style>