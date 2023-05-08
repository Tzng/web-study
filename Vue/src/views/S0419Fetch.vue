<template>
    <div class="about">
        <h1>0419-网络基础</h1>
        <h3>1. 获取地区数据{{areaList.length}}个</h3>
        <div style="height: 100px; overflow-y: auto">
            <div v-for="item in areaList" :key="item.id" @click="showSubAreaList(item.id)">
                {{item.text}}
            </div>
        </div>
        <h3>3. 点击地区的子地区有{{subAreaList.length}}个</h3>
        <div style="height: 100px; overflow-y: auto">
            <div v-for="item in subAreaList" :key="item.id">
                {{item.text}}
            </div>
        </div>
        <h3>2. 获取主题数据{{themeList.length}}个</h3>
        <div style="height: 100px; overflow-y: auto">
            <div v-for="item in themeList" :key="item.id">
                {{item.name}}
            </div>
        </div>
        <h3>4. 获取条目数据{{itemRecords.length}}个</h3>
        <input v-model="keyword" >
        <button @click="searchItem">搜索</button>
        <div style="height: 100px; overflow-y: auto">
            <div v-for="item in itemRecords" :key="item.scopeId">
                {{item.standardItem}}
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">

import {onMounted, ref} from "vue";
import CommService from "@/service/CommService";

const areaList = ref([]);
// 子地区数据
const subAreaList = ref([]);

const themeList = ref([]);

const itemRecords = ref([]);

// 搜索的关键词
const keyword = ref('');

onMounted(() => {
    initData();
    initTheme();
    searchItem();
})

const initData = async () => {
    areaList.value = await CommService.areaList();
}

const initTheme = async () => {
    const result = await CommService.themeList();
    themeList.value = result.result;
}

const showSubAreaList =async (id) => {
    const result = await CommService.areaList(id);
    subAreaList.value = result;
}

const searchItem = async () => {
    const result = await CommService.search({
        "s": "1681786960136",
        "searchType": "item",
        "pageNum": 1,
        "busiCombosObj": {},
        "pageSize": 5,
        "searchSchema": "nlp",
        "ac": "210000",
        "industryTypes": [],
        keyword: keyword.value
    });
    console.log('searchItem', result);
    itemRecords.value = result.data.records;
}

</script>

<style>
h3 {
    margin: 10px;
}
</style>
