import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import registerView from '../views/users/Register.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/user/Register',
    name: 'Register',
    component: registerView
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
