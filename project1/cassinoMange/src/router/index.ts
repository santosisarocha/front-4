import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PlayView from '@/views/PlayView.vue'
import Currency from'@/views/CurrencyView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/moeda',
      name: 'currency',
      component: Currency
    },
    {
      path: '/play',
      name: 'play',
      component: PlayView
    }
    
  ]
})

export default router
