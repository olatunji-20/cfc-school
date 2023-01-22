import { createRouter, createWebHistory } from 'vue-router'
import Homepage from '../views/Homepage.vue'
import Register from '../views/Register.vue'
import Allstudent from '../views/Allstudents.vue'
import Update from '../views/Update.vue'
import Login from '../views/Login.vue'

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
  },
  {
    path: '/allstudents',
    name: 'Allstudents',
    component: Allstudent
  },
  {
    path: '/update-student',
    name: 'updatestudent',
    component: Update
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(stand, homepage, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    return {
      left: 0, top: 0
    }
  }
})


export default router