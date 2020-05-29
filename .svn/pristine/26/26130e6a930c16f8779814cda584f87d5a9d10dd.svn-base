import config from '../../config'

let apiHost = config.apiHost
let publicServiceList = config.publicServerHostList

export default {
  // 获取用户信息和菜单权限
  getMenuInfo: apiHost + '/getMenuInfo',    // mock数据
  // getMenuInfo: 'iam/iam-external-service/system/01301/user/w1000021/union',    // AUC数据（fat环境）
  getMenuInfoByF8: 'froscloud/froscloud-auth/authorization/ticketAuthorization',    // F8认证数据
  getUserInfo: apiHost + '/getUserInfo',
  getFrosEleList: apiHost + '/getFrosEleList', // 元素权限管理
  getFrosCustomLayoutList: apiHost + '/getFrosCustomLayout',  // 页面布局自定义数据
  // 数据字典
  getFrosDictionary: apiHost + '/getFrosDictionary',
  // 单个文件上传
  upLoadImgList: publicServiceList.imgUpload + '/objectstorecloud/files/v2',
  // 上传图片
  // upLoadImgList: publicServiceList.imgUpload + '/objectstorecloud/files/batch/v2',
  // 查询图片
  queryImgList: publicServiceList.imgUpload + '/objectstorecloud/files/v2',
  //  获取PDF文件ID
  queryPDFList: 'http://172.30.254.157:8080' + '/transform/openoffice/server'
}
