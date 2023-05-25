import {createRouter, createWebHistory} from 'vue-router'
import S0417new from "@/views/S0417new.vue";
import S0417Router from "@/views/S0417Router.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/template',
            name: '模板语法',
            component: () => import('../views/S0415TemplateSyntax.vue')
        },
        {
            path: '/todolist',
            name: '待办列表',
            component: () => import('../views/S0416TodoList.vue')
        },
        {
            path: '/todolist2',
            name: '待办列表2',
            component: () => import('../views/S0416TodoList2.vue')
        },
        {
            path: '/todolist3',
            name: '待办列表3',
            component: () => import('../views/S0416TodoList3.vue')
        },
        {
            path: '/router',
            name: '路由',
            component: S0417Router
        },
        {
            path: '/components',
            name: '深入组件',
            component: () => import('../views/S0418Components.vue')
        },
        {
            path: '/fetch2',
            name: 'fetch2',
            component: () => import('../views/S0419Fetch.vue')
        },
        {
            path: '/nodeModules',
            name: 'nodeModules',
            component: () => import('../views/S0420node_modules.vue')
        },
        {
            path: '/new/:id',
            name: '17新页面',
            component: S0417new,
            children: [
                {
                    path: 'Profile',
                    component: () => import('../views/UserProfile.vue')
                },
                {
                    path: 'Posts',
                    component: () => import('../views/UserPosts.vue')
                },
            ]
        },
        {
            path: '/old/:id',
            redirect: to => {
                // 方法接收目标路由作为参数
                // return 重定向的字符串路径/路径对象
                return { path: '/new/' + to.params.id }
            },
        }
    ]
})

export default router
