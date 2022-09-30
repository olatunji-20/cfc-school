import { createRouter, createWebHashHistory } from 'vue-router'
import Homepage from '../views/Homepage.vue'
import Register from '../views/Register.vue'

const routes = [
  {
    path: '/',
    name: 'Homepage',
    component: Homepage
  },
  {
    path: '/signup',
    name: 'Register',
    component: Register
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
