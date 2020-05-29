import Vue from 'vue'
import Router from 'vue-router'

// 懒加载路由
const Index = () => import('../views/Index')

Vue.use(Router)

let routers = new Router({
  mode: 'history',
  base: '/index',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      meta: {
        title: 'Fros-UI引导页'
      }
    }
  ]
})

export default routers
