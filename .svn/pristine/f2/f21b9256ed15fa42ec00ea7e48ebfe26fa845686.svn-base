import api from '../common/apiUrl'
import utils from '../../utils'

let common = {
  getMenuInfo: function (req) {
    // 请求方式
    req.method = 'post'
    // req.headers = {Authorization: utils.getCookie('token')}
    req.headers = { "auc_app_key": "f6e8cdd4-9984-11e9-aa09-005056802619", "auc_system_code": "01301"}
    // 获取用户信息和菜单权限
    let queryUrl = api.getMenuInfo
    if(utils.getUrlParam('ticketId') != null ){
        req.method = 'get'
        queryUrl = api.getMenuInfoByF8 + "?ticketId=" + utils.getUrlParam('ticketId')
    }
    utils.sendReq({
      queryUrl: queryUrl,
      req: req
    })
  },
  getUserInfo: function (req) {
    // 请求方式
    req.method = 'post'
    // 获取用户信息和菜单权限
    let queryUrl = api.getUserInfo
    utils.sendReq({
      queryUrl: queryUrl,
      req: req
    })
  },
  // 元素权限管理
  getFrosEleList: function (req) {
    // 请求方式
    req.method = 'post'
    // 获取用户信息和菜单权限
    let queryUrl = api.getFrosEleList
    utils.sendReq({
      queryUrl: queryUrl,
      req: req
    })
  },
  // 页面布局Form自定义数据
  getFrosCustomLayoutList: function (req) {
    // 请求方式
    req.method = 'post'
    // 获取用户信息和菜单权限
    let queryUrl = api.getFrosCustomLayoutList
    utils.sendReq({
      queryUrl: queryUrl,
      req: req
    })
  },
  // 数据字典
  getFrosDictionary: function (req) {
    // 请求方式
    req.method = 'post'
    // 获取用户信息和菜单权限
    let queryUrl = api.getFrosDictionary
    utils.sendReq({
      queryUrl: queryUrl,
      req: req
    })
  },
  upLoadImgList: function (req) {
    req.method = 'post'
    req.ctxType = 'file'
    let queryUrl = api.upLoadImgList
    utils.sendReq({
      queryUrl: queryUrl,
      req: req
    })
  },
  queryImgByCode: function (req) {
    req.method = 'get'
    req.ctxType = 'flie'
    let queryUrl = api.queryImgList
    utils.sendReq({
      queryUrl: queryUrl,
      req: req
    })
  },
  convertPDF: function (req) {
    req.method = 'post'
    req.ctxType = 'file'
    let queryUrl = api.queryPDFList
    utils.sendReq({
      queryUrl: queryUrl,
      req: req
    })
  }
}

export default common
