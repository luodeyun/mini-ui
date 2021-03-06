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
  },
  {
    path:'/Navbar',
    name:'Navbar',
    component:()=>import('../components/Navbar.vue')
  },
  {
    path:'/index',
    name:'Index',
    component:()=>import('../components/Index.vue')
  },
  {
    path:'/article/:id',
    name:'article',
    component:()=>import('../components/Article.vue')
  },
  {
    path:'/infinite',
    name:'infinite',
    component:()=>import('../components/Infinite.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
