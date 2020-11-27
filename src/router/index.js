import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'header',
    component: ()=>import('../components/Header.vue')
  },
  {
    path: '/button',
    name: 'Button',
  
    component: () => import( '../components/Button.vue')
  },{
    path:'/Filed',
    name:'Filed',
    component:()=>import('../components/Filed.vue')
  },
  {
    path:'/register',
    name:'Register',
    component:()=>import('../components/Register.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
