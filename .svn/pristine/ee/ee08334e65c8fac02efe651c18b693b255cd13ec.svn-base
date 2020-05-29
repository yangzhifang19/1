<template>
  <div class="main-ctx">
    <router-view></router-view>
  </div>
</template>

<script>
import Root from '@js/root'
import utils from '@js/utils'
import "../../assets/font/addicon/iconfont.js"
import "../../assets/font/frosicon/iconfont.js"
import Handsontable from 'handsontable'
import zhCN from 'handsontable/languages/zh-CN'
import {utils as hotUtils} from '@handsontable/vue'
export default {
  name: 'App',
  extends: Root,
  created: function () {
      let self = this;
    window.Logline = utils.Logline

      let dictStr = localStorage.getItem("FrosDictionary");
      if (dictStr) {
          let dictData = JSON.parse(dictStr);
          hotUtils.registDict(dictData, "value", "key");
      }
      let layoutMap= {

      }
      hotUtils.registMethod('getLayoutSettingsList', function (params) {
          console.log('getLayoutSettingsList......')
          let componentCode = params.colSettingsKey
          let dataType = "1"
          let dataValue = "wanghao"
          let pageCode = self.$store.state.global.defaultIndex
          let resourceNo = utils.getResourceNo(pageCode)
          return new Promise(resolve => {
              utils.sendReq({
                  queryUrl: 'validatorApi/bootapp/rest/common/userPageConfig',
                  req: {
                      method: 'post',
                      data: {
                          methodName: 'getModel',
                          model: {
                              dataType: dataType,
                              dataValue: dataValue,
                              resourceNo: resourceNo
                          }
                      },
                      success: function (res) {
                          let array = [];
                          if (res.data.data && res.data.data.componentConfigs.length > 0) {
                              let jsonArray = res.data.data.componentConfigs.find((item) => item.componentCode===componentCode)
                              let arr = jsonArray ? jsonArray.componentJson : '[]'
                              array = JSON.parse(arr)
                              array.map((item) => {
                                  item.content = JSON.stringify(item.content)
                                  return item
                              })
                          }
                          layoutMap[componentCode] = array
                          resolve(array);
                      }
                  }
              })
          });
      });

      function array2Json(componentCode){
          let array = layoutMap[componentCode]
          let jArray = []
          array.forEach((item) => {
              item.content = JSON.parse(item.content)
              jArray.push(JSON.stringify(item))
          })
          let json = "["+jArray.join(',') +"]"
          console.log(json)
          return json
      }

      hotUtils.registMethod('deleteLayoutSettings', function (params) {
          console.log(params);
          let componentCode= params.colSettingsKey
          let layoutName= params.layoutName
          let pageCode = self.$store.state.global.defaultIndex
          layoutMap[componentCode] = layoutMap[componentCode].filter((item)=> item.layoutName!==layoutName)
          let data = {
              componentCode:componentCode,
              resourceNo: utils.getResourceNo(pageCode),
              componentJson: array2Json(componentCode)
          }
          return new Promise(resolve => {
              utils.sendReq({
                  queryUrl: 'validatorApi/bootapp/rest/common/userPageComponent',
                  req: {
                      method: 'post',
                      data: {
                          methodName: "updateComponentCode",
                          model:data
                      },
                      success: function (res) {
                          if(res.data.code == 200){
                              let array = [];
                              if (res.data.data && res.data.data.componentJson) {
                                  let json = res.data.data.componentJson
                                  array = JSON.parse(json)
                                  array.map((item) => {
                                      item.content = JSON.stringify(item.content)
                                      return item
                                  })
                              }
                              layoutMap[componentCode] = array
                              resolve(array);
                          }else{
                              self.$message.error(res.data.message);
                          }
                      }
                  }
              })
          });
      });
      hotUtils.registMethod('saveLayoutSettings', function (params) {
          console.log(params)
          let componentCode = params.colSettingsKey
          let pageCode = self.$store.state.global.defaultIndex
          let dataType = "1"
          let dataValue = "wanghao"
          let componentJson = {
              layoutName: params.layoutName,
              gridLayoutId: Math.random().toString(),
              content: JSON.stringify({
                  t: new Date().getTime(),
                  visibleColumns:params.visibleColumns,
                  columnSorting:params.columnSorting,
                  groupColumns:params.groupColumns,
                  fixedColumnsLeft:params.fixedColumnsLeft,
              })
          }
          layoutMap[componentCode].push(componentJson)
          let data = {
              componentCode:componentCode,
              resourceNo: utils.getResourceNo(pageCode),
              componentJson: array2Json(componentCode)
          }
          return new Promise(resolve => {
              utils.sendReq({
                  queryUrl: 'validatorApi/bootapp/rest/common/userPageComponent',
                  req: {
                      method: 'post',
                      data: {
                          methodName: "updateComponentCode",
                          model:data
                      },
                      success: function (res) {
                          if(res.data.code == 200){
                              let array = [];
                              if (res.data.data && res.data.data.componentJson) {
                                  let json = res.data.data.componentJson
                                  array = JSON.parse(json)
                                  array.map((item) => {
                                      item.content = JSON.stringify(item.content)
                                      return item
                                  })
                              }
                              layoutMap[componentCode] = array
                              resolve(array);
                          }else{
                              self.$message.error(res.data.message);
                          }
                      }
                  }
              })
          });
      });
      hotUtils.registMethod('saveAsLayoutSettings', function (params) {
          console.log(params)
          let componentCode = params.colSettingsKey
          let pageCode = self.$store.state.global.defaultIndex
          let dataType = "1"
          let dataValue = "wanghao"
          let componentJson = {
              layoutName: params.layoutName,
              gridLayoutId: Math.random().toString(),
              content: JSON.stringify({
                  t: new Date().getTime(),
                  visibleColumns:params.visibleColumns,
                  columnSorting:params.columnSorting,
                  groupColumns:params.groupColumns,
                  fixedColumnsLeft:params.fixedColumnsLeft,
              })
          }
          layoutMap[componentCode].push(componentJson)
          let data = {
              componentCode:componentCode,
              resourceNo: utils.getResourceNo(pageCode),
              componentJson: array2Json(componentCode)
          }
          return new Promise(resolve => {
              utils.sendReq({
                  queryUrl: 'validatorApi/bootapp/rest/common/userPageComponent',
                  req: {
                      method: 'post',
                      data: {
                          methodName: "updateComponentCode",
                          model:data
                      },
                      success: function (res) {
                          if(res.data.code == 200){
                              let array = [];
                              if (res.data.data && res.data.data.componentJson) {
                                  let json = res.data.data.componentJson
                                  array = JSON.parse(json)
                                  array.map((item) => {
                                      item.content = JSON.stringify(item.content)
                                      return item
                                  })
                              }
                              layoutMap[componentCode] = array
                              resolve(array);
                          }else{
                              self.$message.error(res.data.message);
                          }
                      }
                  }
              })
          });
      });
  }
}
</script>
<style lang="css">
  @import "../../assets/font/addicon/iconfont.css";
  @import "../../assets/font/frosicon/iconfont.css";
</style>

<style lang="scss">
  @import "../../assets/scss/common";
</style>
