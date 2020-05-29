import Vue from 'vue'
import App from './App'
import router from './router/index'
import utils from '@js/utils'
import store from '@store/index'
import ElementUI from 'element-ui'
import config from '../../assets/js/config'
import i18n from "../../assets/js/lang";

if (config.isMock) {
  let mockPlugin = require('../../mock/index')
  Vue.use(mockPlugin)
}

let i18nObj = i18n.i18n

Vue.use(ElementUI, {
    i18n: (key, value) => i18nObj.t(key, value)
})

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

const index = new Vue({
  router,
  store,
  el: '#app',
  template: '<App/>',
  components: { App }
})

export default index
