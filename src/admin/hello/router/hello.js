import Vue from 'vue'
import Router from 'vue-router'

// 懒加载路由
const Hello = () => import('../views/Hello')

Vue.use(Router)

let routers = new Router({
  mode: 'history',
  base: '/hello',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
      meta: {
        title: '管理系统'
      }
    }
  ]
})

export default routers
