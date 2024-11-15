import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import registerView from '../views/users/Register.vue'
import loginView from '../views/users/Login.vue'

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
  {
    path: '/user/Login',
    name: 'Login',
    component: loginView
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
