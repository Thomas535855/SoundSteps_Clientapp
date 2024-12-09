import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import registerView from '../views/users/Register.vue'
import SelectInstrument from '@/views/users/SelectInstrument.vue'
import CreateInstrument from '@/views/instruments/Create.vue'

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
    path: '/user/SelectInstrument',
    name: 'SelectInstrument',
    component: SelectInstrument
  },
  {
    path  : '/instruments/Create',
    name  : 'CreateInstrument',
    component : CreateInstrument
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
