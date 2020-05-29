import Vue from 'vue'
import Router from 'vue-router'

import Demo from './demo'

// 懒加载路由
const Manage = () => import('../views/Manage')
const HomePage = () => import('../views/HomePage')
const NotFound = () => import('../components/common/NotFound')
const NotRoot = () => import('../components/common/NotRoot')
const WebView = () => import('../components/common/WebView')

Vue.use(Router)

let routerOpt = {
    mode: 'history',
    base: '/manage',
    routes: [
        {
            path: '/',
            name: 'Manage',
            component: Manage,
            redirect: 'HomePage',
            main: true,
            children: [
                {
                    path: 'HomePage',
                    name: 'HomePage',
                    component: HomePage
                },
                {
                    path: 'notRoot',
                    name: 'NotRoot',
                    component: NotRoot
                },
                {
                    path: 'notFound',
                    name: 'NotFound',
                    component: NotFound
                },
                {
                    path: 'webView',
                    name: 'WebView',
                    component: WebView
                },
                ...Demo,
            ]
        },
    ]
}

// 获取本地存储的异步路由
let routesList = localStorage.getItem('asyncRoute')
try {
  routesList = JSON.parse(routesList)
  if (!Array.isArray(routesList)) {
    routesList = []
  }
} catch (e) {
  routesList = []
}

routesList.forEach(function (item, index) {
  item.component = () => import(`../views/${item.componentPath}`)
})

routerOpt.routes = routerOpt.routes.concat(routesList)

let routers = new Router(routerOpt)

export default routers
