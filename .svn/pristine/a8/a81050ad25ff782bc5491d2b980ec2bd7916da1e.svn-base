import utils from '../utils'
import Vue from 'vue'

const frosEleStorage = {
    getElement: function (self) {
        let untreated = [] // 未包含情况
        let frosEleList = self.$store.state.global.frosEleList
        /*
        * 说明：需要后台将返回数据key值由之前的页面url值修改为资源编码值，然后获取当前页元素权限时则根据当前页资源编码获取对应数据。
        * */
        // let pageName = utils.getName(self.$store.state.global.defaultIndex)
        let resourceNo = utils.getResourceNo(self.$store.state.global.defaultIndex) // 后台接口key值转换为页面资源编码
        let pageEle = frosEleList[resourceNo]
        if (pageEle.length > 0) {
            // alert("获取元素列表成功！")
            for (let i = 0; i < pageEle.length; i++) {
                if (!frosEleStorage.execute(pageEle[i])) {
                    untreated.push(pageEle[i])
                }
            }
        } else {
            Vue.prototype.$message.error('该页面没有可控制元素信息，请核对后重试。')
        }
        return untreated
    },
    execute: function (ele) {
        if (ele.resourceType == 2) {
            let selectList = document.querySelectorAll(ele.selector)
            if (selectList.length > 0) {
                if (ele.params.toLowerCase() == 'hidden') {
                    frosEleStorage.eleHidden(selectList)
                    return true
                } else if (ele.params.toLowerCase() == 'remove') {
                    frosEleStorage.eleRemove(selectList)
                    return true
                } else if (ele.params.toLowerCase() == 'readonly') {
                    frosEleStorage.eleReadonly(selectList)
                    return true
                } else {
                    return false
                }
            }
        }
    },
    eleHidden: function (selectList) {
        for (let i = 0; i < selectList.length; i++) {
            selectList[i].setAttribute("hidden", true) // 隐藏指定元素
        }
    },
    eleRemove: function (selectList) {
        for (let i = 0; i < selectList.length; i++) {
            selectList[i].parentNode.removeChild(selectList[i]) // 删除指定元素
        }
    },
    eleReadonly: function (selectList) {
        for (let i = 0; i < selectList.length; i++) {
            selectList[i].readOnly = true
        }
    }
}
export default frosEleStorage
