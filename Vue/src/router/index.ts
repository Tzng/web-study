import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/template',
      name: '模板语法',
      component: () => import('../views/S0415TemplateSyntax.vue')
    },
  ]
})

export default router
