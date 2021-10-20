import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import BuatAPI from '../views/BuatAPI.vue'
import test from '../views/test.vue'
import DetailAPI from '../views/DetailAPI.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/buatapi',
    name: 'buatapi',
    component: BuatAPI
  },
  {
    path: '/test',
    name: 'test',
    component: test
  },
  {
    path: '/DetailAPI/:Id',
    name: 'DetailAPI',
    component: DetailAPI
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
