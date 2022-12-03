import { createRouter, createWebHashHistory } from 'vue-router'
import Homepage from '../views/Homepage.vue'
import Register from '../views/Register.vue'
import Allstudent from '../views/Allstudents.vue'
import Update from '../views/Update.vue'

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
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
