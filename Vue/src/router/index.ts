import {createRouter, createWebHistory} from 'vue-router'

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
      path: '/router',
      name: '路由',
      component: () => import('../views/S0417Router.vue')
    },
    {
      path: '/components',
      name: '深入组件',
      component: () => import('../views/S0418Components.vue')
    },
  ]
})

export default router
