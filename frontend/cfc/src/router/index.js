import { createRouter, createWebHistory } from 'vue-router'
import Homepage from '../views/Homepage.vue'
import Register from '../views/Register.vue'
import Allstudent from '../views/Allstudents.vue'
import Update from '../views/Update.vue'
import Full from '../views/Full.vue'

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
    path: '/full/:studentId',
    name: 'Full',
    component: Full
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
