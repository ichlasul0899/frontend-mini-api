import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import BuatAPI from '../views/BuatAPI.vue'
import DetailAPI from '../views/DetailAPI.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
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
    path: '/DetailAPI/:Id',
    name: 'DetailAPI',
    component: DetailAPI,
    props: true
  },
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
