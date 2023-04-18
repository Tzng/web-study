<template>
    <div class="about">
        <h1>0419-网络基础</h1>
        <h3>1. 获取地区数据{{areaList.length}}个</h3>
        <div style="height: 100px; overflow-y: auto">
            <div v-for="item in areaList" :key="item.id">
                {{item.text}}
            </div>
        </div>
        <h3>2. 获取主题数据0个</h3>
        <div style="height: 100px; overflow-y: auto">

        </div>
    </div>
</template>
<script setup lang="ts">

import {onMounted, ref} from "vue";
import CommService from "@/service/CommService";

const areaList = ref([]);

onMounted(() => {
    initData();
})

const initData = async () => {
    areaList.value = await CommService.areaList();
}

</script>

<style>
h3 {
    margin: 10px;
}
</style>
