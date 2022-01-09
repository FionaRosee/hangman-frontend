import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Instructions from '../views/Instructions.vue'
import WordList from '../views/WordList.vue'
import Game from '@/views/Game'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/instructions',
    name: 'Instructions',
    component: Instructions
  },
  {
    path: '/word-list',
    name: 'WordList',
    component: WordList
  },
  {
    path: '/game',
    name: 'Game',
    component: Game
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  linkActiveClass: 'active',
  routes
})

export default router
