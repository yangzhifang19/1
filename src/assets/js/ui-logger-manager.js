import utils from "./utils";
let errorList = [];
const UILoggerManager = {
    // init:function() {
    //     errorList = errorList.concat(JSON.parse(localStorage.getItem('fros-ui-error') || '[]'))
    // },
    buildErrorObject:function (error,vm){
        return {
            systemCode: '', //应用编号
            osVersion: utils.getDeviceInfo('os'), // 系统版本号
            msg: error.message, // 错误信息
            osType: error.osVersion, // 系统类型
            errorUrl: location.href, //错误所在的url
            error: vm.$vnode.tag, //具体的error对象
            pageName: utils.getName(vm.$store.state.global.defaultIndex) || '布局页面', // 页面名称
            browser: utils.getDeviceInfo('browser'), // 浏览器类型+版本
            errorTime: new Date().getTime(), //时间戳
            extend: error.stack,
            userAgent: navigator.userAgent //用户代理
        }
    },
    add:function(error,vm){
        let uilog = this.buildErrorObject(error, vm)
        let isInErrorList = true
        for(let i=0;i<errorList.length;i++) {
            let error = JSON.parse(errorList[i]);
            if(error.msg == uilog.msg) {
                isInErrorList = false
            }
        }
        if(isInErrorList) {
            errorList.unshift(JSON.stringify(uilog))
            if(errorList.length > 10) {
                errorList.length = 10
            }
            this.persistenceToLocalStorag(errorList)
        }
    },
    remove:function(error) {
        let list = errorList.filter((item) => {
            let err = JSON.parse(item)
            return err.msg !== error.msg
        })
        this.persistenceToLocalStorag(list)
    },
    persistenceToLocalStorag:function(list){
        localStorage.setItem('fros-ui-error', JSON.stringify(list))
    },
    getAll:function(){
        return errorList.map((item)=> JSON.parse(item))  || JSON.parse(localStorage.getItem('fros-ui-error') || '[]')
    }
}
export default UILoggerManager
