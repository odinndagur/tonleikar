import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/artists',
    name: 'Artists',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Artists.vue')
  },
  {
    path: '/venues',
    name:'Venues',
    component: () => import('../views/Venues.vue')
  },
  {
    path: '/urls',
    name:'Urls',
    component: () => import('../views/Urls.vue')
  },
  {
    path: '/import',
    name:'ImportSet',
    component: () => import('../views/ImportSet.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
