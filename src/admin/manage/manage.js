import Vue from 'vue'
import App from './App'
import axios from 'axios'
import router from './router/manage'
import utils from '../../assets/js/utils'
import ElementUI from 'element-ui'
import store from '../../store/index'
import plugins from '../../assets/js/plugins'
import i18n from '../../assets/js/lang'
import VueCodemirror from 'vue-codemirror'
import VueQuillEditor from 'vue-quill-editor'
import directives from '../../assets/js/directives'
import MavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import config from '../../assets/js/config'
import AsyncComputed from 'vue-async-computed'
import JsonViewer from 'vue-json-viewer'
import VueContextMenu from 'vue-contextmenu' // 右键操作
import constans from '../../assets/js/constans' // 打包环境配置
import UILoggerManager from '../../assets/js/ui-logger-manager' // ui日志
// import VueClipboard from 'vue-clipboard2'
import frosui from 'fros-ui'
Vue.use(frosui)
if (config.isMock) {
  let mockPlugin = require('../../mock/index')
  Vue.use(mockPlugin)
}

let i18nObj = i18n.i18n

Vue.use(ElementUI, {
  i18n: (key, value) => i18nObj.t(key, value)
})
Vue.use(plugins)
Vue.use(VueCodemirror)
Vue.use(VueQuillEditor)
Vue.use(MavonEditor)
Vue.use(AsyncComputed)
Vue.use(VueContextMenu)
Vue.use(JsonViewer)

// Vue.use(VueClipboard)
/* 使用axios插件 */
axios.defaults.withCredentials = true // 开启全局携带cookie信息
Vue.prototype.$axios = axios
axios.defaults.baseURL = constans; // 配置环境路径-2019-10-11

// 注册全局指令
Object.keys(directives).forEach(function (item) {
  Vue.directive(item, directives[item])
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
Vue.config.errorHandler = function (err, vm, info) {
    UILoggerManager.add(err,vm)
}

const manage = new Vue({
  router,
  store,
  i18n: i18nObj,
  axios,
  el: '#app',
  template: '<App/>',
  components: { App },
  errorCaptured(err, vm, info){
    console.log(err, vm, info)
      UILoggerManager.add(err,vm)
  }
})

export default manage
