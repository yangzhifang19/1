import Vue from 'vue'
import App from './App'
import axios from 'axios'
import router from './router/login'
import utils from '../../assets/js/utils'
import ElementUI from 'element-ui'
import store from '../../store/index'
import i18n from '../../assets/js/lang'
import config from '../../assets/js/config'

if (config.isMock) {
  let mockPlugin = require('../../mock/index')
  Vue.use(mockPlugin)
}

let i18nObj = i18n.i18n

Vue.use(ElementUI, {
  i18n: (key, value) => i18nObj.t(key, value)
})

/* 使用axios插件 */
axios.defaults.withCredentials = true // 开启全局携带cookie信息
Vue.prototype.$axios = axios

// 进入路由前的处理
router.beforeEach((to, from, next) => {
  let title = to.meta.title
  if (to.meta.title) {
    utils.setPageTitle(title)
  } else {
    utils.setPageTitle('')
  }
  next()
})

const login = new Vue({
  router,
  store,
  i18n: i18nObj,
  axios,
  el: '#app',
  template: '<App/>',
  components: { App }
})

export default login
