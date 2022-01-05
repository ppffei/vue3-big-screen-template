/*
 * @Descripttion: 路由
 * @Author: pangpf
 * @Date: 2022-01-04 10:23:03
 * @LastEditors: pangpf
 */
import { createWebHistory, createRouter } from 'vue-router'

// 公共路由
export const constantRoutes = [
  {
    path: '/',
    component: () => import('@/views/dashboards/index.vue'),
    name: 'Index'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: constantRoutes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router
