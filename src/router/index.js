import { createRouter, createWebHistory } from 'vue-router'
import { ROUTES_PATH } from '@/constants/router'
import Home from '../pages/Home.vue'
import Coctail from '../pages/Coctail.vue'
import CoctailRandom from '../pages/CoctailRandom.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: ROUTES_PATH.HOME,
      name: ROUTES_PATH.HOME,
      component: Home
    },
    {
      path: ROUTES_PATH.COCTAIL,
      name: ROUTES_PATH.COCTAIL,
      component: Coctail
    },
    {
      path: ROUTES_PATH.COCTAIL_RANDOM,
      name: ROUTES_PATH.COCTAIL_RANDOM,
      component: CoctailRandom
    },
  ],
})

export default router
