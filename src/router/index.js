import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/pagar',
    name: 'pagar',
    component: () => import(/* webpackChunkName: "about" */ '../views/PagarView.vue')
  },
  {
    path: '/todos',
    name: 'todos',
    component: () => import(/* webpackChunkName: "about" */ '../views/RegistrosView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
