import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/Howto.vue'
import Word from '../views/Word.vue'
import Impressum from '../views/Impressum.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/word',
    name: 'Word',
    component: Word
  },
  {
    path: '/impressum',
    name: 'Impressum',
    component: Impressum
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  linkActiveClass: 'active',
  routes
})

export default router
