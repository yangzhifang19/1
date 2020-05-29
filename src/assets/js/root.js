import api from './api/common/apiMethod'
import config from './config'
import utils from "./utils";
export default {
  name: 'Root',
  data () {
    return {}
  },
    created: function () {
        let self = this
        self.getMenuInfo()
        self.getUserInfo()
        self.getAppLang()
        self.getObjConfig()
        // todo temp
        // self.getFrosEleList() // 获取工程中元素权限所有数据
        // self.getFrosCustomLayoutList() // 获取工程中页面布局所有数据
        //
        self.getFrosDictionary() // 数据字典
    },
  methods: {
    getMenuInfo: function () {
      let self = this
      // 获取用户信息及菜单权限
      api.getMenuInfo({
        data: {
            "queryInfo":{
                "pagingInfo":{
                    "currentPage":1,
                    "pageSize":10
                },
                "queryFields":[
                    {
                        "fieldValue":"100000",
                        "fieldName":"orgCode",
                        "operator":"="
                    }
                ]
            }
        },
        success: function (res) {
          // 获取当前的用户信息
          let ablePick = []
          // 如果是通过F8接入的则存储token
          if(utils.getUrlParam('ticketId') != null ){
              if(res.data.code == '401'){
                  alert(res.data.message)
              }
              self.$store.commit('setToken', res.data.token)
              console.log("通过F8获取ticketId。")
          }
          let menuList = res.data.data.menuList // mock数据
          // let menuList = res.data.data.orgRole[0].roles[0].menuList // AUC数据
          for (let i = 0; i < menuList.length; i++) {
            let thisModule = menuList[i]
            for (let m = 0; m < thisModule.children.length; m++) {
              let thisItem = thisModule.children[m]
              if (thisItem.url) {
                ablePick.push(thisItem)
                continue
              } else {
                for (let j = 0; j < thisItem.children.length; j++) {
                  let thisSubItem = thisItem.children[j]
                   // functionType(1:MODULE 2:MENU 3:wnode)
                  if(thisSubItem.functionType != 3){
                      if (thisSubItem.url) {
                        ablePick.push(thisSubItem)
                        continue
                      } else {
                        for (let l = 0; l < thisSubItem.children.length; l++) {
                          let thisSubSubItem = thisSubItem.children[l]
                          ablePick.push(thisSubSubItem)
                        }
                    }
                  }else{
                    for (let k = 0; k < thisSubItem.children.length; k++) {
                      let thisSubSubItem = thisSubItem.children[k]
                      if (thisSubSubItem.url) {
                        ablePick.push(thisSubSubItem)
                        continue
                      } else {
                        for (let l = 0; l < thisSubSubItem.children.length; l++) {
                          let thisSubSubSubItem = thisSubSubItem.children[l]
                          ablePick.push(thisSubSubSubItem)
                        }
                      }
                    }
                  }

                }
              }
            }
          }
          // localStorage.setItem('Authorization','eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiIxIiwiaWF0IjoxNTc2NzQyODI0LCJzdWIiOiJ7XCJhY2NvdW50Tm9uRXhwaXJlZFwiOnRydWUsXCJhY2NvdW50Tm9uTG9ja2VkXCI6dHJ1ZSxcImF1dGhvcml0aWVzXCI6W10sXCJjcmVkZW50aWFsc05vbkV4cGlyZWRcIjp0cnVlLFwiZW5hYmxlZFwiOnRydWUsXCJncmFudGVkQXV0aG9yaXR5XCI6W10sXCJwYXNzd29yZFwiOlwiYWRtaW5cIixcInN1cGVyUm9sZVwiOmZhbHNlLFwidXNlcklkXCI6XCIxXCIsXCJ1c2VybmFtZVwiOlwiYWRtaW5cIn0iLCJleHAiOjE1NzkzMzQ4MjR9.Qnstea5pzZagUqfs2wrrdKPottmB2uktFGnFjXv0Tnc')
          self.$store.commit('setMenuInfo', res.data.data)
          // self.$store.commit('setMenuInfo', res.data.data.orgRole[0].roles[0]) // AUC数据
          // 将菜单写入路由表
          let router = self.$router;
          let mainRoute = router.options.routes.find(i => i.main)
          if (mainRoute) {
            if(!mainRoute.children) mainRoute.children = []
            let base = router.options.base;
            if (base[0] === '/') base = base.substr(1);
            let routes = ablePick.map(i => ({
              path: i.url,
              component: () => import(`@/admin/${base}/views/${i.url}`),
              meta: {
                title: i.resourceName
              }
            }));
            mainRoute.children = mainRoute.children.concat(routes)
            router.addRoutes([ mainRoute ]);
          }

          ablePick = ablePick.map(i => i.url)
          self.$store.commit('setRightPathInfo', ablePick)
        }
      })
    },
    getUserInfo: function () {
      let self = this
      api.getUserInfo({
        data: {},
        success: function (res) {
          self.$store.commit('setUserInfo', res.data.data)
        }
      })
    },
    getAppLang: function () {
      let self = this
      let lang = localStorage.getItem('lang') ? localStorage.getItem('lang') : 'zh'
      // 获取当前选择系统语言
      self.$store.commit('setAppLang', lang)
    },
    getObjConfig: function () {
      let self = this
      self.$store.commit('setObjConfig', config)
    },
    getFrosEleList: function () {
      let self = this
      api.getFrosEleList({
        data: {},
        success: function (res) {
          self.$store.commit('setFrosEleList', res.data.data)
        }
      })
    },
    getFrosCustomLayoutList: function () {
      let self = this
      api.getFrosCustomLayoutList({
        data: {},
        success: function (res) {
          self.$store.commit('setFrosCustomLayoutList', res.data.data)
        }
      })
    },
    // 数据字典
    getFrosDictionary: function () {
      let self = this
      api.getFrosDictionary({
        data: {},
        success: function (res) {
          self.$store.commit('setFrosDictionary', res.data.data)
            // 写入本地缓存
            localStorage.setItem('FrosDictionary', JSON.stringify(res.data.data))
        }
      })
    }
  }
}
