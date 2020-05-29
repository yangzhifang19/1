import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '../views/MainPage'

// 懒加载路由
const Login = () => import('../views/Login')

Vue.use(Router)

let routers = new Router({
  mode: 'history',
  base: '/login',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
      meta: {
        title: '管理系统'
      }
    },
    {
      path: '/mainPage',
      name: 'MainPage',
      component: MainPage,
      meta: {
        title: '管理系统'
      }
    }
  ]
})

export default routers
