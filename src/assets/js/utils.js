import Logline from 'logline'
import axios from 'axios'
import qs from 'qs'
import config from './config'
import Vue from 'vue'

import constans from './constans'

axios.defaults.withCredentials = true;
axios.defaults.baseURL = constans;

const CookieOperate = /** @class */ (function () {
    function cookieOperate() {
    }

    cookieOperate.prototype.getCookie = function (cname) {
        let name = cname + '='
        let ca = document.cookie.split('; ')
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i]
            while (c.charAt(0) === '; ') {
                c = c.substring(1)
            }
            if (c.indexOf(name) !== -1) {
                return c.substring(name.length, c.length)
            }
        }
        return ''
    }
    cookieOperate.prototype.setCookie = function (cname, cvalue, attrs) {
        attrs = attrs || {}

        // 设置cookies
        attrs.expires = attrs.expires ? attrs.expires.toUTCString() : ''
        let stringifiedAttributes = ''
        for (let attributeName in attrs) {
            if (!attrs[attributeName]) {
                continue
            }
            stringifiedAttributes += '; ' + attributeName
            if (attrs[attributeName] === true) {
                continue
            }
            stringifiedAttributes += '=' + attrs[attributeName]
        }
        document.cookie = cname + '=' + cvalue + stringifiedAttributes
    }
    cookieOperate.prototype.delCookie = function (cname, attrs) {
        attrs = attrs || {}

        attrs.expires = 0
        let cval = this.getCookie(cname)
        if (cval != null) {
            this.setCookie(cname, '', attrs)
        }
    }
    return cookieOperate
}())

const cookieOp = new CookieOperate()

const utils = {
    /**
     * 设置页面title
     * **/
    setPageTitle: function (title) {
        if (title) {
            window.document.title = title
        }
    },
    /**
     * 日志工具
     * doc link：https://github.com/latel/logline
     * **/
    Logline: {
        // 设置日志
        setLog: function (modules, logtype, desc, data) {
            Logline.using(Logline.PROTOCOL.INDEXEDDB)
            if (!modules) {
                // 默认是接口请求的错误
                modules = 'api-request'
            }
            let logObj = new Logline(modules)
            switch (logtype) {
                case 'info':
                    logObj.info(desc)
                    break
                case 'error':
                    logObj.error(desc, data)
                    break
                case 'warning':
                    logObj.warning(desc)
                    break
                default:
                    logObj.error(desc, data)
            }
        },
        // 获取日志
        getLog: function (start, end, callback) {
            // start, end的单位为d，例如：1天-1d，半天-.5d，
            if (start && end) {
                // 获取start-end范围内的日志
                Logline.get(start, end, function (logs) {
                    if (callback) {
                        callback(logs)
                    } else {
                        console.log(logs)
                    }
                })
            } else if (start && !end) {
                // 获取start天内的日志
                Logline.get(start, function (logs) {
                    if (callback) {
                        callback(logs)
                    } else {
                        console.log(logs)
                    }
                })
            } else {
                // 获取所有日志
                Logline.all(function (logs) {
                    if (callback) {
                        callback(logs)
                    } else {
                        console.log(logs)
                    }
                })
            }
        },
        // 清除日志
        cleanLog: function () {
            Logline.clean()
        }
    },
    /**
     * 通用请求方法
     * @param params|Object|请求参数|eg: req = {
     *    ctxType: 'json' 请求头部 默认'json',
     *    headers: 头部信息
     *    data: {} 请求数据
     *    success: function () {} 请求成功code=0,
     *    fail: function () {} 请求失败code!=0,
     *    error: function () {} 网络问题请求失败（服务端问题）
     * }
     * **/
    sendReq: function (params) {
        let rConfig
        let data
        switch (params.req.ctxType) {
            case 'json':
                rConfig = config.axiosJsonConfig
                data = params.req.data
                break
            case 'formdata':
                rConfig = config.axiosFormDataConfig
                data = qs.stringify(params.req.data)
                break
            case 'file':
                rConfig = config.axiosMultiFormData
                data = params.req.data
                break
            default:
                rConfig = config.axiosJsonConfig
                data = params.req.data
                break
        }
        let headers = rConfig.headers
        for (let key in params.req.headers) {
            headers[key] = params.req.headers[key]
        }
        // headers['Content-Type'] = 'application/json'
        // headers.Authorization= localStorage.getItem('Authorization')
        rConfig.headers = headers
        function succeed(res) {
            if (res.data.code === 0 || res.data.code || res.data.status) {
                if (params.req.success) {
                    params.req.success(res)
                } else {
                    console.log(res)
                }
            } else {
                utils.Logline.setLog('', 'error', 'api fail', {
                    errMsg: res.data.errors,
                    params: params,
                    res: res.data
                })
                if (params.req.fail) {
                    params.req.fail(res)
                } else {
                    console.log(res)
                }
            }

        }

        function fail(e){
            utils.Logline.setLog('', 'error', 'request fail', {
                errMsg: e.toString(),
                params: params,
                res: null
            })
            if (params.req.error) {
                params.req.error(e)
            } else {
                Vue.prototype.$message.error('请求接口失败，请检查网络')
            }
        }
        if (params.req.method === 'post') {
            axios.post(params.queryUrl, data, rConfig).then(succeed).catch(fail)
        } else if (params.req.method === 'get') {
            axios.get(params.queryUrl, rConfig).then(succeed).catch(fail)
        } else if (params.req.method === 'put') {
            axios.put(params.queryUrl, data, rConfig).then(succeed).catch(fail)
        } else if (params.req.method === 'delete') {
            axios.delete(params.queryUrl, rConfig).then(succeed).catch(fail)
        } else if (params.req.method === 'patch') {
            axios.patch(params.queryUrl, data, rConfig).then(succeed).catch(fail)
        }
    },
    /**
     * 获取设备信息
     * @param query|String|查询类型|eg: 'browser', 'device', 'platform'分别对应查询浏览器类型，设备信息，平台（PC或Mobile）
     * **/
    getDeviceInfo: function (query) {
        let userAgent = navigator.userAgent
        if (query === 'browser') {
            let isOpera = userAgent.indexOf('Opera') > -1
            let isIE = userAgent.indexOf('compatible') > -1 && userAgent.indexOf('MSIE') > -1 && !isOpera
            let isFF = userAgent.indexOf('Firefox') > -1
            let isSafari = userAgent.indexOf('Safari') > -1
            let isChrome = userAgent.indexOf('Chrome') > -1
            let isEdge = userAgent.indexOf('Edge') > -1
            if (isIE) {
                let IE5 = false
                let IE55 = false
                let IE6 = false
                let IE7 = false
                let IE8 = false
                let IE9 = false
                let IE10 = false
                let IE11 = false
                let reIE = new RegExp('MSIE (\\d+\\.\\d+);')
                reIE.test(userAgent)
                let fIEVersion = parseFloat(RegExp['$1'])
                IE5 = fIEVersion === '5'
                IE55 = fIEVersion === '5.5'
                IE6 = fIEVersion === '6.0'
                IE7 = fIEVersion === '7.0'
                IE8 = fIEVersion === '8.0'
                IE9 = fIEVersion === '9.0'
                IE10 = fIEVersion === '10.0'
                IE11 = fIEVersion === '11.0'
                if (IE5) {
                    return 'IE5'
                }
                if (IE55) {
                    return 'IE55'
                } else if (IE6) {
                    return 'IE6'
                } else if (IE7) {
                    return 'IE7'
                } else if (IE8) {
                    return 'IE8'
                } else if (IE9) {
                    return 'IE9'
                } else if (IE10) {
                    return 'IE10'
                } else if (IE11) {
                    return 'IE11'
                }
            } else if (isFF) {
                return 'Firefox'
            } else if (isOpera) {
                return 'Opera'
            } else if (isChrome) {
                return 'Chrome'
            } else if (isEdge) {
                return 'Edge'
            } else if (isSafari) {
                return 'Safari'
            } else {
                return 'Unknown'
            }
        } else if (query === 'device') {
            let isAndroid = userAgent.indexOf('Android') > -1
            let isIphone = userAgent.indexOf('iPhone') > -1
            let isIpad = userAgent.indexOf('iPad') > -1
            if (isAndroid) {
                return 'Android'
            } else if (isIphone) {
                return 'Iphone'
            } else if (isIpad) {
                return 'Ipad'
            } else {
                return 'Unknown'
            }
        } else if (query === 'platform') {
            if (navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i)) {
                return 'MOBILE'
            } else {
                return 'PC'
            }
        }
    },
    /**
     * Cookie相关操作
     * **/
    setCookie: cookieOp.setCookie,
    getCookie: cookieOp.getCookie,
    deleteCookie: cookieOp.delCookie,
    timestampToDateString: function (stamp, gap, isToday, isObj, withoutMinSec) {
        // 时间戳转
        // stamp 统一传秒, isToady 会对字符串进行今天标示
        // 如果stamp是一个日期的话，则进行一次转换
        if (isNaN(stamp * 1)) {
            stamp = new Date(stamp.replace(/-/g, '/')).getTime()
        }

        let date = new Date(stamp)
        let year = date.getFullYear()
        let month = this.formatTwice(date.getMonth() + 1)
        let day = this.formatTwice(date.getDate())
        let hour = this.formatTwice(date.getHours())
        let minutes = this.formatTwice(date.getMinutes())
        let seconds = this.formatTwice(date.getSeconds())

        if (!isToday) {
            if (isObj) {
                return {
                    year: year,
                    month: month,
                    day: day,
                    hour: hour,
                    minutes: minutes,
                    seconds: seconds
                }
            } else {
                if (withoutMinSec) {
                    return [year, month, day].join(gap)
                } else {
                    return [year, month, day].join(gap) + ' ' + [hour, minutes].join(':')
                }
            }
        } else {
            // 获取今天的时间戳范围
            let toady = new Date()
            let toadyStartStamp = new Date(toady.getFullYear() + '/' + (toady.getMonth() + 1) + '/' + toady.getDate() + ' 00:00:00').getTime()
            let toadyEndStamp = toadyStartStamp + 24 * 60 * 60 * 1000

            if (stamp >= toadyStartStamp && stamp <= toadyEndStamp) {
                if (withoutMinSec) {
                    return '今天'
                } else {
                    return '今天 ' + [hour, minutes].join(':')
                }
            } else {
                if (isObj) {
                    return {
                        year: year,
                        month: month,
                        day: day,
                        hour: hour,
                        minutes: minutes,
                        seconds: seconds
                    }
                } else {
                    if (withoutMinSec) {
                        return [year, month, day].join(gap)
                    } else {
                        return [year, month, day].join(gap) + ' ' + [hour, minutes].join(':')
                    }
                }
            }
        }
    },
    formatTwice: function (str) {
        // 对日期等单个时间长度的格式进行处理
        let temStr = str.toString()
        temStr = temStr.length === 2 ? temStr : '0' + temStr
        return temStr
    },
    exportExcel: function (columnList, dataList, fileName) {
        let self = this
        // 导出excel
        let ctx = ''
        columnList.forEach(function (item) {
            ctx = ctx + `<td>${item}</td>`
        })
        ctx = `<tr>${ctx}</tr>`

        dataList.forEach(function (item) {
            ctx += '<tr>'
            for (let key in item) {
                ctx += `<td>${item[key] + '\t'}</td>`
            }
            ctx += '</tr>'
        })

        var worksheet = fileName
        var uri = 'data:application/vnd.ms-excel;base64,'

        let tpl = `<html xmlns:o="urn:schemas-microsoft-com:office:office" 
      xmlns:x="urn:schemas-microsoft-com:office:excel" 
      xmlns="http://www.w3.org/TR/REC-html40">
      <head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet>
        <x:Name>${worksheet}</x:Name>
        <x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet>
        </x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]-->
        </head><body><table>${ctx}</table></body></html>`

        var link = document.createElement('a')
        link.href = uri + self.toBase64(tpl)
        // 对下载的文件命名
        link.download = 'download_' + self.timestampToDateString(new Date().getTime(), '-', false, false) + '_' + fileName + '.xlsx'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    },
    toBase64: function (str) {
        // 转换base64
        return window.btoa(unescape(encodeURIComponent(str)))
    },
    getImgByRichText: function (str) {
        // 从富文本中提取base64数组
        let regx = /"data:image\/.*?"/g
        let temImgList = str.match(regx)
        let imgList = []
        if (temImgList) {
            imgList = temImgList.map(function (item) {
                return item.substring(1, item.length - 1)
            })
        }
        return imgList
    },
    base64ToFormData: function (list) {
        let fd = new FormData()
        list.forEach(function (item, index) {
            let bytes = window.atob(item.split(',')[1])

            let ab = new ArrayBuffer(bytes.length)
            let ia = new Uint8Array(ab)
            for (let i = 0; i < bytes.length; i++) {
                ia[i] = bytes.charCodeAt(i)
            }
            let blob = new Blob([ab], {type: 'image/png'})
            fd.append('files', blob, new Date().getTime().toString() + (Math.random() * 10000).toString() + '.png')
        })
        return fd
    },

    // 地图工具类
    amap: {
        // 高德地图
        initMap: function (id, mapOptions) {
            /**
             * mapOptions 初始化地图的一些参数，与高德地图提供的初始化参数一致
             * 参考地址 https://lbs.amap.com/api/javascript-api/reference/map
             * **/
                // 初始化地图
            let map = new AMap.Map(id, mapOptions)
            return map
        }
    },
    bmap: {
        // 百度地图
        initMap: function (id) {
            /**
             * http://lbsyun.baidu.com/index.php?title=jspopular/guide/show
             **/
                // 初始化地图
            let map = new BMap.Map(id)
            return map
        }
    },
    qmap: {
        // 腾讯地图
    },
    // 获取页面cp-name值
    getName: function (val) {
        if (val == null) {
            return ''
        }
        // 获取当前页面名称
        let self = this
        let cpName = ''
        let params = val.split('@longgap@').length > 1 ? val.split('@longgap@')[1] : undefined
        val = val.split('@longgap@')[0]
        let curItem = document.querySelectorAll('.el-menu li[nav-index="' + val + '"]')
        if (curItem.length) {
            // 属于菜单点击页面
            cpName = curItem[0].getAttribute('cp-name')
        } else if (val !== '-1') {
            let option = val.split('@gap@')
            if (option.length > 1) {
                // 属于newpage出来的页面
                cpName = option[0]
            }
        } else {
            cpName = 'HomePage'
        }
        return cpName
    },
    // 获取页面data-index值
    getIndex: function (val) {
        if (val == null) {
            return 0
        }
        let arr = val.split('-')
        return parseInt(arr.length > 1 ? arr[arr.length - 1] : 0)
    },
    // 获取页面资源编码
    getResourceNo: function (val) {
        if (val == null || val == '') {
            return null
        }
        let curItem = document.querySelectorAll('.el-menu li[nav-index="' + val + '"]')
        if (curItem.length) {
            // 属于菜单点击页面
            return curItem[0].getAttribute('resource-no')
        }else
            return ''
    },
    /*
    * 参数1：当前页面对象
    * 参数2：待清除自定组件的ref集合
    * */
    clearFrosComponentValue: function (self, val) {
        if (val != null && val.length > 0) {
            for (let i = 0; i < val.length; i++) {
                self.$refs[val[i]].clearFormValue() // 调用子组件清空日期控件数据
            }
        }
    },

    // 日期格式化 data: 时间数据 ,fmt:日期翻译类型(yyyy-MM-dd hh:mm:ss)
    frosDateFormatter(date, fmt) {
        let time = new Date(date)
        let o = {
            "M+": time.getMonth() + 1,                 //月份
            "d+": time.getDate(),                    //日
            "h+": time.getHours(),                   //小时
            "m+": time.getMinutes(),                 //分
            "s+": time.getSeconds(),                 //秒
            "q+": Math.floor((time.getMonth() + 3) / 3), //季度
            "S": time.getMilliseconds()             //毫秒
        };
        if (/(y+)/.test(fmt))
            fmt = fmt.replace(RegExp.$1, (time.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o)
            if (new RegExp("(" + k + ")").test(fmt))
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        return fmt;
    },
    /* 数字加减乘除 */
    // +
    math_add(a, b) {
        var c, d, e;
        try {
            c = a.toString().split(".")[1].length;
        } catch (f) {
            c = 0;
        }
        try {
            d = b.toString().split(".")[1].length;
        } catch (f) {
            d = 0;
        }
        return e = Math.pow(10, Math.max(c, d)), (utils.math_multiply(a, e) + utils.math_multiply(b, e)) / e;
    },
    // -
    math_subtract(a, b) {
        var c, d, e;
        try {
            c = a.toString().split(".")[1].length;
        } catch (f) {
            c = 0;
        }
        try {
            d = b.toString().split(".")[1].length;
        } catch (f) {
            d = 0;
        }
        return e = Math.pow(10, Math.max(c, d)), (utils.math_multiply(a, e) - utils.math_multiply(b, e)) / e;
    },
    // *
    math_multiply(a, b) {
        var c = 0,
            d = a.toString(),
            e = b.toString();
        try {
            c += d.split(".")[1].length;
            // eslint-disable-next-line no-empty
        } catch (f) {
        }
        try {
            c += e.split(".")[1].length;
            // eslint-disable-next-line no-empty
        } catch (f) {
        }
        return Number(d.replace(".", "")) * Number(e.replace(".", "")) / Math.pow(10, c);
    },
    // /
    math_divide(a, b) {
        var c, d, e = 0,
            f = 0;
        try {
            e = a.toString().split(".")[1].length;
            // eslint-disable-next-line no-empty
        } catch (g) {
        }
        try {
            f = b.toString().split(".")[1].length;
            // eslint-disable-next-line no-empty
        } catch (g) {
        }
        return c = Number(a.toString().replace(".", "")), d = Number(b.toString().replace(".", "")), utils.math_multiply(c / d, Math.pow(10, f - e));
    },
    // 校验信息提示工具类
    frosValidatorHover() {
        // let elements=document.body
        let frosformvalidator = document.getElementsByClassName('fros-form-validator')
        let title_show = document.getElementById("title_show");
        title_show = document.createElement("div");
        document.getElementsByTagName('body')[0].appendChild(title_show);
        title_show.style.position = 'absolute';
        title_show.style.background = '#f56c6cd6';
        title_show.style.borderRadius = '3px';
        title_show.style.fontSize = '10px';
        title_show.style.color = '#fff';
        title_show.style.display = 'none';
        for (let i = 0; i < frosformvalidator.length; i++) {
            let formItems = frosformvalidator[i].getElementsByClassName('el-form-item')
            for (let j = 0; j < formItems.length; j++) {
                formItems[j].addEventListener('mouseover', function (ev) {
                    var e = ev || event
                    let el = e.currentTarget;
                    let err = el.getElementsByClassName('el-form-item__error')[0]

                    if (err != undefined && e.target.classList.contains('el-input__inner') || err != undefined && e.target.classList.contains('el-textarea__inner')) {
                        let posBox = e.target;
                        let pos = posBox.getBoundingClientRect()
                        title_show.innerHTML = err.innerHTML
                        title_show.style.border = 'solid 1px #f56c6cd6';
                        title_show.style.display = 'block';
                        title_show.style.padding = '3px 10px';
                        // 默认显示在下边
                        let top = (pos.bottom + 3);
                        // 如果元素下面的空间不足以显示 提示信息 就显示在上面
                        if ((top + title_show.offsetHeight) > document.documentElement.clientHeight) {
                            top = pos.top - title_show.offsetHeight - 3
                        }
                        title_show.style.top = top + 'px';
                        title_show.style.left = pos.left + 'px';
                    }
                }, true)
                formItems[j].addEventListener('mouseout', function () {
                    title_show.style.display = 'none';
                }, true)
            }
        }
    },
    // 判断代码所处的环境 驳运系统 重新定义了 css 样式
    isBarge() {
        return window.location.href.indexOf('fcos') > -1
    },
    // 失去焦点 通过创建一个input 使其获取焦点然后 在移除元素的方式 达到页面元素失去焦点的效果
    loseFocus() {
        let input = document.createElement("input");
        input.setAttribute("type", 'text');
        input.setAttribute("id", '__lose_focus__');
        input.setAttribute("value", '__lose_focus__');
        document.body.append(input)
        input.focus()
        document.body.removeChild(input)
    },
    loseFocusTextarea(){
        let hidTxt = document.body;
        hidTxt.dispatchEvent(new Event("mousedown", {"bubbles":true, "cancelable":false}))
        this.loseFocus()
    },
    // 转小写
    toLowerCase(val) {
        return val.toLowerCase()
    },
    // 转大写
    valueToUpper(val) {
        return val.toUpperCase()
    },
    // 全角半角转换
    fullToHalf(val) {
        let retVal = ''
        for (let i = 0; i < val.length; i++) {
            if (val.charCodeAt(i) == 12288) {
                retVal += String.fromCharCode(val.charCodeAt(i) - 12256);
                continue;
            }
            if (val.charCodeAt(i) > 65280 && val.charCodeAt(i) < 65375) {
                retVal += String.fromCharCode(val.charCodeAt(i) - 65248);
            } else {
                retVal += String.fromCharCode(val.charCodeAt(i));
            }
        }
        return retVal
    },
    timeout: function timeout(ms) {
        return new Promise((resolve) => {
            setTimeout(resolve, ms)
        })
    },
    /**
     * 描述：获取URL中指定参数
     * 参数：code URL?号后具体的属性值；例如：http://1.1.1.1/test?ie=UTF-8&name=zhangsan 则code值为ie/name
     * */
    getUrlParam(code){
        let reg = new RegExp("(^|&)" + code + "=([^&]*)(&|$)", "i");
        let r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]);
        return null;
    },
    // 新增页面配置
    addPageConfig(opts, self){
        let {resourceNo,pageCode = '' , pageName = '', dataType = '1', dataValue = 'wanghao', pageJson =''} = opts
        utils.sendReq({
            queryUrl: 'api/bootapp/rest/common/userPageConfig',
            req: {
                method: 'post',
                data: {
                    methodName: "add",
                    model:{
                        resourceNo: resourceNo,
                        pageCode: pageCode,
                        pageName: pageName,
                        dataType: dataType,
                        dataValue: dataValue,
                        pageJson: pageJson
                    }
                },
                success: function (res) {
                    if(res.data.code === 200) {
                        utils.addComponentConfig(opts);
                        self.$message({message: '添加成功',type: 'success'});
                    } else {
                        self.$message.error(res.data.message);
                    }
                }
            }
        })
    },
    // 更新页面配置
    updatePageConfig(opts, self){
        let {resourceNo,pageCode ='' , pageName = '', dataType = '1', dataValue = 'wanghao', pageJson =''} = opts
        utils.sendReq({
            queryUrl: 'api/bootapp/rest/common/userPageConfig',
            req: {
                method: 'post',
                data: {
                    methodName: "updateByPageCode",
                    model:{
                        resourceNo: resourceNo,
                        pageCode: pageCode,
                        pageName: pageName,
                        dataType: dataType,
                        dataValue: dataValue,
                        pageJson: pageJson
                    }
                },
                success: function (res) {
                    if(res.data.code == 500){ // 不存在
                        utils.addPageConfig(opts, self);
                    }else if (res.data.code == 200){
                        utils.addComponentConfig(opts);
                        self.$message({message: '更新成功',type: 'success'});
                    }else{
                        self.$message.error(res.data.message);
                    }
                }
            }
        })
    },
    // 保存或新增 页面配置 同事一会新增 组件配置
    saveOrUpdatePageConfig(opts, self) {
        // let {resourceNo,pageCode ,componentCode, pageName = '', dataType = '1', dataValue = 'wanghao', pageJson =''} = opts
        utils.updatePageConfig(opts, self);
    },
    // 新增组件配置
    addComponentConfig(opts){
        let {resourceNo,componentCode } = opts
        let data = {
            componentCode:componentCode,
            resourceNo: resourceNo,
            componentJson: '[]'
        }
        utils.sendReq({
            queryUrl: 'api/bootapp/rest/common/userPageComponent',
            req: {
                method: 'post',
                data: {
                    methodName: "add",
                    model:data
                },
                success: function (res) {
                }
            }
        })
    },
}
export default utils
