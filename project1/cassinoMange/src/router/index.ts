import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PlayView from '@/views/PlayView.vue'
import Currency from'@/views/CurrencyView.vue'
import Currency2 from'@/views/CurrencyView2.vue'
import Currency3 from'@/views/CurrencyView3.vue'


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
      path: '/moeda2',
      name: 'currency2',
      component: Currency2
    },
    {
      path: '/moeda3',
      name: 'currency3',
      component: Currency3
    },
    {
      path: '/play',
      name: 'play',
      component: PlayView
    }
    
  ]
})

export default router
