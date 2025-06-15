// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home.vue'
import CategoryPage from '@/views/CategoryPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/beneficios/:slug',
    name: 'CategoryPage',
    component: CategoryPage,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
