import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/flow'
  },
  {
    path: '/flow',
    name: 'Flow',
    component: () => import('../views/Flow.vue')
  },
  {
    path: '/sku-choose',
    name: 'SkuChoose',
    component: () => import('../views/SkuChoose.vue')
  },
  {
    path: '/pin-input',
    name: 'PinInput',
    component: () => import('../views/PinInput.vue')
  },
  {
    path: '/spotlight',
    name: 'Spotlight',
    component: () => import('../views/Spotlight.vue')
  },
  {
    path: '/bulb-switch',
    name: 'BulbSwitch',
    component: () => import('../views/BulbSwitch.vue')
  },
  {
    path: '/angle-slider',
    name: 'AngleSlider',
    component: () => import('../views/AngleSlider.vue')
  },
  {
    path: '/multi-donut-chart',
    name: 'MultiDonutChart',
    component: () => import('../views/MultiDonutChart.vue')
  },
  {
    path: '/signature-pad',
    name: 'SignaturePad',
    component: () => import('../views/SignaturePad.vue')
  },
  {
    path: '/screenshots',
    name: 'Screenshots',
    component: () => import('../views/Screenshots.vue')
  },
  {
    path: '/number-roll',
    name: 'NumberRoll',
    component: () => import('../views/NumberRoll.vue')
  },
  {
    path: '/marquee',
    name: 'Marquee',
    component: () => import('../views/Marquee.vue')
  },
  {
    path: '/skeleton',
    name: 'Skeleton',
    component: () => import('../views/Skeleton.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
