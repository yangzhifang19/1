import Vue from 'vue'
import App from './App'
import router from './router/hello'
import utils from '@js/utils'
import store from '@store/index'
import config from '../../assets/js/config'

if (config.isMock) {
  let mockPlugin = require('../../mock/index')
  Vue.use(mockPlugin)
}

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

const hello = new Vue({
  router,
  store,
  el: '#app',
  template: '<App/>',
  components: { App }
})

export default hello
