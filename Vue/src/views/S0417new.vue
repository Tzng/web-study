<template>
  <div>这是一个新的页面</div>
  <div>{{$route.query.date}}</div>
  <button @click="router.back()">返回</button>
    <p>
        <RouterLink to="/new/12/Profile">
            UserProfile
        </RouterLink>
    </p>
    <p>
        <RouterLink to="/new/12/Posts">
            UserPosts
        </RouterLink>
    </p>
    <h3>1. 获取地区数据{{areaList.length}}个</h3>
    <div style="height: 100px; overflow-y: auto">
        <div v-for="item in areaList" :key="item.id" @click="showSubAreaList(item.id)">
            {{item.text}}
        </div>
    </div>
    <h3>2. 获取主题数据{{themeList.length}}个</h3>
    <div style="height: 100px; overflow-y: auto">
        <div v-for="item in themeList" :key="item.id">
            {{item.name}}
        </div>
    </div>
    <div>{{JSON.stringify(routeInfo)}}</div>
  <RouterView />
</template>

<script setup lang="ts">

import {onMounted, ref} from "vue";
import {RouterView, useRoute, useRouter} from 'vue-router'
import CommService from "@/service/CommService";

const router = useRouter();

const route = useRoute();

const routeInfo = ref({});

const themeList = ref([]);
const areaList= ref([]);

onMounted(() => {
    document.title = '新页面';
    console.log('query', route.query)
    console.log('params', route.params)
    console.log('path', route.path)
    initData(route.params.id as string)
    routeInfo.value = route;
})

const initData = (id: string) => {
    if(id ==='1'){
        // 获取主题列表
        getThemeList();
    }else {
        // 获取地区列表
        getAreaList();
    }
}

const getThemeList = async () => {
    // 获取主题列表
    const data = await CommService.themeList();
    themeList.value = data.result;
}

const getAreaList = async () => {
    // 获取地区列表
    const data = await CommService.areaList();
    areaList.value = data;
}

</script>

<style scoped>

</style>