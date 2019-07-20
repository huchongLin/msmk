import Vue from 'vue'
import VueRouter from 'vue-router'
import ChooseNav from './components/ChooseNav'
import UserCenter from './components/UserCenter'
import Cart from './components/Cart'
import Home from './components/Home'
import Reg from './components/Reg'
import Detail from './components/Detail'
import Login from './components/Login'
import Search from './components/Search.vue'
import { isLoginIn } from './utils/auth'

Vue.use(VueRouter);
const router = new VueRouter({
  routes:[{
    path: '/',
    name: 'Home',
    component: Home
  },{
    path: '/cart',
    name: 'Cart',
    component: Cart
  },{
    path: '/usercenter',
    name: 'UserCenter',
    component: UserCenter,
    meta: {
      needLogin: true,//需要登录
    }
  },{
    path: '/chooseNav',
    name: 'ChooseNav',
    component: ChooseNav
  },{
    path: '/reg',
    name: 'Reg',
    component: Reg
  },{
    path: '/login',
    name: 'Login',
    component: Login
  },{
    path: '/chooseNav/:id',
    name: 'Detail',
    component: Detail
  },{
    path:'/search',
    name:'Search',
    component:Search
  }]
})

router.beforeEach(function(to, from, next) {
  if (to.meta.needLogin) {//双重判断
    if ( isLoginIn() ) {//判断是否登录
      next();
    } else {
      next({
        name: 'Login' //要跳转的页面
      })
    }
  } else {
    next();
  }
})


export default router;