export const getMenuInfo = req => {
    console.log('@@@Mock请求参数：', req)
    return {
        'code': 200,
        'message': 'success',
        'data': {
            "menuList": [
                {
                    "url": "",
                    "resourceName": "菜单",
                    "resourceNo": "01301-531",
                    "parentResourceNo": "0",
                    "icon": null,
                    "level": "1",
                    "sort": "3",
                    "selector": null,
                    "functionType": "2",
                    "params": {
                        "checkSave": true
                    },
                    "children": [
                        {
                            "url": "demo/demoPage",
                            "resourceName": "Demo",
                            "resourceNo": "01301-func-qkwxFT",
                            "parentResourceNo": "01301-531",
                            "icon": 'icontijikongjian-xianxing',
                            "level": "2",
                            "sort": "0",
                            "selector": null,
                            "functionType": "3",
                            "params": null,
                            "children": []
                        },
                        {
                            "url": "baseview/list",
                            "resourceName": "数据看板",
                            "resourceNo": "01301-func-qkwxFT1",
                            "parentResourceNo": "01301-531",
                            "icon": 'icontijikongjian-xianxing',
                            "level": "2",
                            "sort": "0",
                            "selector": null,
                            "functionType": "3",
                            "params": null,
                            "children": []
                        },
                        {
                            "url": "manifest/list",
                            "resourceName": "manifest",
                            "resourceNo": "01301-func-qkwxFT2",
                            "parentResourceNo": "01301-531",
                            "icon": 'icontijikongjian-xianxing',
                            "level": "2",
                            "sort": "0",
                            "selector": null,
                            "functionType": "3",
                            "params": null,
                            "children": []
                        },
                        {
                            "url": "exhibition/list",
                            "resourceName": "展会管理",
                            "resourceNo": "01301-func-qkwxFT3",
                            "parentResourceNo": "01301-531",
                            "icon": 'icontijikongjian-xianxing',
                            "level": "2",
                            "sort": "0",
                            "selector": null,
                            "functionType": "3",
                            "params": null,
                            "children": []
                        },
                        {
                            "url": "exhibitor/list",
                            "resourceName": "客户管理",
                            "resourceNo": "01301-func-qkwxFT4",
                            "parentResourceNo": "01301-531",
                            "icon": 'icontijikongjian-xianxing',
                            "level": "2",
                            "sort": "0",
                            "selector": null,
                            "functionType": "3",
                            "params": null,
                            "children": []
                        },
                        {
                            "url": "externaluser/list",
                            "resourceName": "外部用户管理",
                            "resourceNo": "01301-func-qkwxFT5",
                            "parentResourceNo": "01301-531",
                            "icon": 'icontijikongjian-xianxing',
                            "level": "2",
                            "sort": "0",
                            "selector": null,
                            "functionType": "3",
                            "params": null,
                            "children": []
                        },
                        {
                            "url": "purchase/list",
                            "resourceName": "预约单管理",
                            "resourceNo": "01301-func-qkwxFT6",
                            "parentResourceNo": "01301-531",
                            "icon": 'icontijikongjian-xianxing',
                            "level": "2",
                            "sort": "0",
                            "selector": null,
                            "functionType": "3",
                            "params": null,
                            "children": []
                        },
                        {
                            "url": "order/list",
                            "resourceName": "订单管理",
                            "resourceNo": "01301-func-qkwxFT7",
                            "parentResourceNo": "01301-531",
                            "icon": 'icontijikongjian-xianxing',
                            "level": "2",
                            "sort": "0",
                            "selector": null,
                            "functionType": "3",
                            "params": null,
                            "children": []
                        },
                        {
                            "url": "exhibits/list",
                            "resourceName": "展品管理",
                            "resourceNo": "01301-func-qkwxFT8",
                            "parentResourceNo": "01301-531",
                            "icon": 'icontijikongjian-xianxing',
                            "level": "2",
                            "sort": "0",
                            "selector": null,
                            "functionType": "3",
                            "params": null,
                            "children": []
                        },
                        {
                            "url": "operation/list",
                            "resourceName": "作业单管理",
                            "resourceNo": "01301-func-qkwxFT9",
                            "parentResourceNo": "01301-531",
                            "icon": 'icontijikongjian-xianxing',
                            "level": "2",
                            "sort": "0",
                            "selector": null,
                            "functionType": "3",
                            "params": null,
                            "children": []
                        },
                        {
                            "url": "transport/list",
                            "resourceName": "运输管理",
                            "resourceNo": "01301-func-qkwxFT10",
                            "parentResourceNo": "01301-531",
                            "icon": 'icontijikongjian-xianxing',
                            "level": "2",
                            "sort": "0",
                            "selector": null,
                            "functionType": "3",
                            "params": null,
                            "children": []
                        },
                        {
                            "url": "stockin/list",
                            "resourceName": "入库管理",
                            "resourceNo": "01301-func-qkwxFT11",
                            "parentResourceNo": "01301-531",
                            "icon": 'icontijikongjian-xianxing',
                            "level": "2",
                            "sort": "0",
                            "selector": null,
                            "functionType": "3",
                            "params": null,
                            "children": []
                        },
                        {
                            "url": "stockout/list",
                            "resourceName": "出库管理",
                            "resourceNo": "01301-func-qkwxFT12",
                            "parentResourceNo": "01301-531",
                            "icon": 'icontijikongjian-xianxing',
                            "level": "2",
                            "sort": "0",
                            "selector": null,
                            "functionType": "3",
                            "params": null,
                            "children": []
                        },
                        {
                            "url": "measurements/list",
                            "resourceName": "现场测量管理",
                            "resourceNo": "01301-func-qkwxFT13",
                            "parentResourceNo": "01301-531",
                            "icon": 'icontijikongjian-xianxing',
                            "level": "2",
                            "sort": "0",
                            "selector": null,
                            "functionType": "3",
                            "params": null,
                            "children": []
                        },
                        {
                            "url": "fieldservice/list",
                            "resourceName": "现场服务管理",
                            "resourceNo": "01301-func-qkwxFT14",
                            "parentResourceNo": "01301-531",
                            "icon": 'icontijikongjian-xianxing',
                            "level": "2",
                            "sort": "0",
                            "selector": null,
                            "functionType": "3",
                            "params": null,
                            "children": []
                        },
                        {
                            "url": "bill/list",
                            "resourceName": "费用管理",
                            "resourceNo": "01301-func-qkwxFT15",
                            "parentResourceNo": "01301-531",
                            "icon": 'icontijikongjian-xianxing',
                            "level": "2",
                            "sort": "0",
                            "selector": null,
                            "functionType": "3",
                            "params": null,
                            "children": []
                        },
                        {
                            "url": "notice/list",
                            "resourceName": "通知管理",
                            "resourceNo": "01301-func-qkwxFT16",
                            "parentResourceNo": "01301-531",
                            "icon": 'icontijikongjian-xianxing',
                            "level": "2",
                            "sort": "0",
                            "selector": null,
                            "functionType": "3",
                            "params": null,
                            "children": []
                        },
                        {
                            "url": "feedback/list",
                            "resourceName": "用户反馈",
                            "resourceNo": "01301-func-qkwxFT17",
                            "parentResourceNo": "01301-531",
                            "icon": 'icontijikongjian-xianxing',
                            "level": "2",
                            "sort": "0",
                            "selector": null,
                            "functionType": "3",
                            "params": null,
                            "children": []
                        },
                    ]
                }
            ],
            "menuList_": [
                {
                    "url":"",
                    "resourceName":"demo",
                    "resourceNo":"01301-1",
                    "parentResourceNo":"0",
                    "icon":null,
                    "level":"1",
                    "sort":"1",
                    "selector":null,
                    "functionType":"1",
                    "params":{
                        "checkSave":true
                    },
                    "children":[
                        {
                            "url":"",
                            "resourceName":"基础能力",
                            "resourceNo":"01301-3",
                            "parentResourceNo":"01301-1",
                            "icon":"iconjichunengli",
                            "level":"2",
                            "sort":"1",
                            "selector":null,
                            "functionType":"2",
                            "params":null,
                            "children":[
                                {
                                    "url":"",
                                    "resourceName":"框架功能",
                                    "resourceNo":"01301-10",
                                    "parentResourceNo":"01301-3",
                                    "icon":null,
                                    "level":"3",
                                    "sort":"1",
                                    "selector":null,
                                    "functionType":"3",
                                    "params":null,
                                    "children":[
                                        {
                                            "url":"demo/base/objconfig/ObjConfig",
                                            "resourceName":"项目配置",
                                            "resourceNo":"01301-14",
                                            "parentResourceNo":"01301-10",
                                            "icon":null,
                                            "level":"12",
                                            "sort":"1",
                                            "selector":null,
                                            "functionType":"2",
                                            "params":null,
                                            "children":[

                                            ]
                                        },
                                        {
                                            "url":"demo/base/mock/Mock",
                                            "resourceName":"MOCK数据",
                                            "resourceNo":"01301-15",
                                            "parentResourceNo":"01301-10",
                                            "icon":null,
                                            "level":"6",
                                            "sort":"2",
                                            "selector":null,
                                            "functionType":"2",
                                            "params":null,
                                            "children":[

                                            ]
                                        },
                                        {
                                            "url":"demo/base/dict/Dict",
                                            "resourceName":"数据字典",
                                            "resourceNo":"01301-16",
                                            "parentResourceNo":"01301-10",
                                            "icon":null,
                                            "level":"6",
                                            "sort":"3",
                                            "selector":null,
                                            "functionType":"2",
                                            "params":null,
                                            "children":[

                                            ]
                                        },
                                        {
                                            "url":"demo/base/eventbus/EventBus",
                                            "resourceName":"EventBus",
                                            "resourceNo":"01301-17",
                                            "parentResourceNo":"01301-10",
                                            "icon":null,
                                            "level":"6",
                                            "sort":"4",
                                            "selector":null,
                                            "functionType":"2",
                                            "params":null,
                                            "children":[

                                            ]
                                        },
                                        {
                                            "url":"demo/base/utils/Utils",
                                            "resourceName":"工具集",
                                            "resourceNo":"01301-18",
                                            "parentResourceNo":"01301-10",
                                            "icon":null,
                                            "level":"6",
                                            "sort":"5",
                                            "selector":null,
                                            "functionType":"2",
                                            "params":null,
                                            "children":[

                                            ]
                                        },
                                        {
                                            "url":"",
                                            "resourceName":"权限控制",
                                            "resourceNo":"01301-559",
                                            "parentResourceNo":"01301-10",
                                            "icon":null,
                                            "level":"13",
                                            "sort":"6",
                                            "selector":null,
                                            "functionType":"1",
                                            "params":null,
                                            "children":[
                                                /*{
                                                    "url":"demo/base/noright/NoRight",
                                                    "resourceName":"无权限页",
                                                    "resourceNo":"01301-560",
                                                    "parentResourceNo":"01301-559",
                                                    "icon":null,
                                                    "level":"6",
                                                    "sort":"1",
                                                    "selector":null,
                                                    "functionType":"1",
                                                    "params":null,
                                                    "children":[

                                                    ]
                                                },*/
                                                {
                                                    "url":"demo/base/noright/NoRigthDirectives",
                                                    "resourceName":"权限指令",
                                                    "resourceNo":"01301-561",
                                                    "parentResourceNo":"01301-559",
                                                    "icon":null,
                                                    "level":"5",
                                                    "sort":"2",
                                                    "selector":null,
                                                    "functionType":"1",
                                                    "params":null,
                                                    "children":[

                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "url":"demo/base/quick/Quick",
                                            "resourceName":"快捷键",
                                            "resourceNo":"01301-22",
                                            "parentResourceNo":"01301-10",
                                            "icon":null,
                                            "level":"6",
                                            "sort":"7",
                                            "selector":null,
                                            "functionType":"2",
                                            "params":null,
                                            "children":[

                                            ]
                                        },
                                        {
                                            "url":"demo/base/utils/SendPost",
                                            "resourceName":"发送请求",
                                            "resourceNo":"01301-23",
                                            "parentResourceNo":"01301-10",
                                            "icon":null,
                                            "level":"6",
                                            "sort":"8",
                                            "selector":null,
                                            "functionType":"2",
                                            "params":null,
                                            "children":[

                                            ]
                                        }
                                    ]
                                },
                                {
                                    "url":"",
                                    "resourceName":"菜单功能",
                                    "resourceNo":"01301-11",
                                    "parentResourceNo":"01301-3",
                                    "icon":null,
                                    "level":"4",
                                    "sort":"2",
                                    "selector":null,
                                    "functionType":"2",
                                    "params":null,
                                    "children":[
                                        {
                                            "url":"demo/base/cpmenu/CpMenu",
                                            "resourceName":"组件页面",
                                            "resourceNo":"01301-24",
                                            "parentResourceNo":"01301-11",
                                            "icon":null,
                                            "level":"5",
                                            "sort":"1",
                                            "selector":null,
                                            "functionType":"1",
                                            "params":null,
                                            "children":[

                                            ]
                                        },
                                        {
                                            "url":"http://www.sinotrans.com",
                                            "resourceName":"URL页面",
                                            "resourceNo":"01301-25",
                                            "parentResourceNo":"01301-11",
                                            "icon":null,
                                            "level":"5",
                                            "sort":"2",
                                            "selector":null,
                                            "functionType":"1",
                                            "params":null,
                                            "children":[

                                            ]
                                        }
                                    ]
                                },
                                {
                                    "url":"",
                                    "resourceName":"欢迎页",
                                    "resourceNo":"01301-12",
                                    "parentResourceNo":"01301-3",
                                    "icon":null,
                                    "level":"4",
                                    "sort":"3",
                                    "selector":null,
                                    "functionType":"2",
                                    "params":null,
                                    "children":[
                                        {
                                            "url":"demo/element/basic/Icon",
                                            "resourceName":"图标",
                                            "resourceNo":"01301-26",
                                            "parentResourceNo":"01301-12",
                                            "icon":null,
                                            "level":"5",
                                            "sort":"1",
                                            "selector":null,
                                            "functionType":"1",
                                            "params":null,
                                            "children":[

                                            ]
                                        },
                                        /*{
                                            "url":"null",
                                            "resourceName":"快捷入口",
                                            "resourceNo":"01301-27",
                                            "parentResourceNo":"01301-12",
                                            "icon":null,
                                            "level":"5",
                                            "sort":"2",
                                            "selector":null,
                                            "functionType":"2",
                                            "params":null,
                                            "children":[

                                            ]
                                        }*/
                                    ]
                                },
                                {
                                    "url":"",
                                    "resourceName":"头部组件",
                                    "resourceNo":"01301-13",
                                    "parentResourceNo":"01301-3",
                                    "icon":null,
                                    "level":"4",
                                    "sort":"4",
                                    "selector":null,
                                    "functionType":"1",
                                    "params":null,
                                    "children":[
                                        /*{
                                            "url":"null",
                                            "resourceName":"个性化设置",
                                            "resourceNo":"01301-28",
                                            "parentResourceNo":"01301-13",
                                            "icon":null,
                                            "level":"5",
                                            "sort":"1",
                                            "selector":null,
                                            "functionType":"1",
                                            "params":null,
                                            "children":[

                                            ]
                                        },*/
                                        {
                                            "url":"demo/base/international/International",
                                            "resourceName":"国际化",
                                            "resourceNo":"01301-29",
                                            "parentResourceNo":"01301-13",
                                            "icon":null,
                                            "level":"5",
                                            "sort":"2",
                                            "selector":null,
                                            "functionType":"1",
                                            "params":null,
                                            "children":[

                                            ]
                                        },
                                        {
                                            "url":"demo/base/logline/Logline",
                                            "resourceName":"前端日志",
                                            "resourceNo":"01301-30",
                                            "parentResourceNo":"01301-13",
                                            "icon":null,
                                            "level":"5",
                                            "sort":"3",
                                            "selector":null,
                                            "functionType":"1",
                                            "params":null,
                                            "children":[

                                            ]
                                        },
                                        /*{
                                            "url":"null",
                                            "resourceName":"全屏切换",
                                            "resourceNo":"01301-31",
                                            "parentResourceNo":"01301-13",
                                            "icon":null,
                                            "level":"5",
                                            "sort":"4",
                                            "selector":null,
                                            "functionType":"1",
                                            "params":null,
                                            "children":[

                                            ]
                                        },*/
                                        /*{
                                            "url":"null",
                                            "resourceName":"用户信息",
                                            "resourceNo":"01301-32",
                                            "parentResourceNo":"01301-13",
                                            "icon":null,
                                            "level":"5",
                                            "sort":"5",
                                            "selector":null,
                                            "functionType":"1",
                                            "params":null,
                                            "children":[

                                            ]
                                        }*/
                                    ]
                                }
                            ]
                        },
                        {
                            "url":"",
                            "resourceName":"组件异步加载",
                            "resourceNo":"01301-527",
                            "parentResourceNo":"01301-1",
                            "icon":'iconzujianyibujiazai',
                            "level":"2",
                            "sort":"10",
                            "selector":null,
                            "functionType":"1",
                            "params":null,
                            "children":[
                                {
                                    "url":"demo/async/lazyLoadCom/DelayComponent",
                                    "resourceName":"延迟加载组件",
                                    "resourceNo":"01301-528",
                                    "parentResourceNo":"01301-527",
                                    "icon":null,
                                    "level":"4",
                                    "sort":"1",
                                    "selector":null,
                                    "functionType":"1",
                                    "params":null,
                                    "children":[

                                    ]
                                },
                                {
                                    "url":"demo/async/frosTabDemo",
                                    "resourceName":"Element-tab页组件异步加载",
                                    "resourceNo":"01301-529",
                                    "parentResourceNo":"01301-527",
                                    "icon":null,
                                    "level":"4",
                                    "sort":"2",
                                    "selector":null,
                                    "functionType":"1",
                                    "params":null,
                                    "children":[

                                    ]
                                },
                                {
                                    "url":"demo/async/frosSelfTabDemo",
                                    "resourceName":"Tab页组件异步加载",
                                    "resourceNo":"01301-530",
                                    "parentResourceNo":"01301-527",
                                    "icon":null,
                                    "level":"5",
                                    "sort":"3",
                                    "selector":null,
                                    "functionType":"1",
                                    "params":null,
                                    "children":[

                                    ]
                                }
                            ]
                        },
                        /*{
                            "url":"",
                            "resourceName":"Element组件",
                            "resourceNo":"01301-4",
                            "parentResourceNo":"01301-1",
                            "icon":'iconElementzujian',
                            "level":"2",
                            "sort":"2",
                            "selector":null,
                            "functionType":"2",
                            "params":null,
                            "children":[

                            ]
                        },*/
                        {
                            "url":"",
                            "resourceName":"Fros-Form",
                            "resourceNo":"01301-5",
                            "parentResourceNo":"01301-1",
                            "icon":'iconForm',
                            "level":"2",
                            "sort":"3",
                            "selector":null,
                            "functionType":"2",
                            "params":null,
                            "children":[
                                {
                                    "url":"demo/frosForm/validator/FrosValidatorSendTest",
                                    "resourceName":"表单示例页",
                                    "resourceNo":"01301-43",
                                    "parentResourceNo":"01301-5",
                                    "icon":null,
                                    "level":"4",
                                    "sort":"1",
                                    "selector":null,
                                    "functionType":"2",
                                    "params":null,
                                    "children":[

                                    ]
                                },
                                {
                                    "url":"demo/frosForm/authStorage/FrosEleStorageDemo",
                                    "resourceName":"元素权限",
                                    "resourceNo":"01301-52",
                                    "parentResourceNo":"01301-5",
                                    "icon":null,
                                    "level":"5",
                                    "sort":"10",
                                    "selector":null,
                                    "functionType":"2",
                                    "params":null,
                                    "children":[

                                    ]
                                },
                                {
                                    "url":"demo/frosForm/frosDynamicFilterCond/FrosDynamicFilterCondDemo",
                                    "resourceName":"自定义表单",
                                    "resourceNo":"01301-53",
                                    "parentResourceNo":"01301-5",
                                    "icon":null,
                                    "level":"5",
                                    "sort":"11",
                                    "selector":null,
                                    "functionType":"2",
                                    "params":null,
                                    "children":[

                                    ]
                                },
                                {
                                    "url":"demo/frosForm/authStorage/FrosCustomLayoutDemo",
                                    "resourceName":"自定义布局",
                                    "resourceNo":"01301-54",
                                    "parentResourceNo":"01301-5",
                                    "icon":null,
                                    "level":"5",
                                    "sort":"12",
                                    "selector":null,
                                    "functionType":"2",
                                    "params":null,
                                    "children":[

                                    ]
                                },
                                {
                                    "url":"demo/frosForm/validator/FrosValidatorDemo",
                                    "resourceName":"表单校验",
                                    "resourceNo":"01301-512",
                                    "parentResourceNo":"01301-5",
                                    "icon":null,
                                    "level":"5",
                                    "sort":"13",
                                    "selector":null,
                                    "functionType":"1",
                                    "params":null,
                                    "children":[

                                    ]
                                },
                                {
                                    "url":"demo/frosForm/validator/FrosValidatorDemo_new",
                                    "resourceName":"表单校验（新）",
                                    "resourceNo":"01301-513",
                                    "parentResourceNo":"01301-5",
                                    "icon":null,
                                    "level":"5",
                                    "sort":"14",
                                    "selector":null,
                                    "functionType":"1",
                                    "params":null,
                                    "children":[

                                    ]
                                },
                                {
                                    "url":"demo/frosForm/inputdemo/FrosInputDemo",
                                    "resourceName":"文本框",
                                    "resourceNo":"01301-44",
                                    "parentResourceNo":"01301-5",
                                    "icon":null,
                                    "level":"4",
                                    "sort":"2",
                                    "selector":null,
                                    "functionType":"2",
                                    "params":null,
                                    "children":[

                                    ]
                                },
                                {
                                    "url":"demo/frosForm/frosSelect/frosSelectDemo",
                                    "resourceName":"下拉框组件",
                                    "resourceNo":"01301-46",
                                    "parentResourceNo":"01301-5",
                                    "icon":null,
                                    "level":"4",
                                    "sort":"4",
                                    "selector":null,
                                    "functionType":"2",
                                    "params":null,
                                    "children":[

                                    ]
                                },
                                {
                                    "url":"demo/frosForm/autoCompleteInput/FrosAutoCompleteDemo",
                                    "resourceName":"联想控件",
                                    "resourceNo":"01301-47",
                                    "parentResourceNo":"01301-5",
                                    "icon":null,
                                    "level":"5",
                                    "sort":"5",
                                    "selector":null,
                                    "functionType":"2",
                                    "params":null,
                                    "children":[

                                    ]
                                },
                                {
                                    "url":"demo/frosForm/frosDatePicker/FrosDatePickerDemo",
                                    "resourceName":"日期控件",
                                    "resourceNo":"01301-48",
                                    "parentResourceNo":"01301-5",
                                    "icon":null,
                                    "level":"5",
                                    "sort":"6",
                                    "selector":null,
                                    "functionType":"2",
                                    "params":null,
                                    "children":[

                                    ]
                                },
                                {
                                    "url":"demo/frosForm/vuetable/testDemo",
                                    "resourceName":"上传文件",
                                    "resourceNo":"01301-49",
                                    "parentResourceNo":"01301-5",
                                    "icon":null,
                                    "level":"5",
                                    "sort":"7",
                                    "selector":null,
                                    "functionType":"2",
                                    "params":null,
                                    "children":[

                                    ]
                                },
                                {
                                    "url":"demo/frosForm/validator/FrosDictDemo",
                                    "resourceName":"数据字典",
                                    "resourceNo":"01301-50",
                                    "parentResourceNo":"01301-5",
                                    "icon":null,
                                    "level":"5",
                                    "sort":"8",
                                    "selector":null,
                                    "functionType":"2",
                                    "params":null,
                                    "children":[

                                    ]
                                }
                            ]
                        },
                        {
                            "url":"",
                            "resourceName":"Fros-Table",
                            "resourceNo":"01301-6",
                            "parentResourceNo":"01301-1",
                            "icon":'iconTable',
                            "level":"2",
                            "sort":"4",
                            "selector":null,
                            "functionType":"2",
                            "params":null,
                            "children":[
                                {
                                    "url":"demo/frosTable/FrosTableDemo",
                                    "resourceName":"普通表格案例",
                                    "resourceNo":"01301-55",
                                    "parentResourceNo":"01301-6",
                                    "icon":null,
                                    "level":"4",
                                    "sort":"1",
                                    "selector":null,
                                    "functionType":"2",
                                    "params":null,
                                    "children":[

                                    ]
                                },
                                {
                                    "url":"demo/frosTable/FrosTableEditDemo",
                                    "resourceName":"可编辑表格案例",
                                    "resourceNo":"01301-56",
                                    "parentResourceNo":"01301-6",
                                    "icon":null,
                                    "level":"4",
                                    "sort":"2",
                                    "selector":null,
                                    "functionType":"2",
                                    "params":null,
                                    "children":[

                                    ]
                                },
                                {
                                    "url":"demo/frosTable/FrpsTitleTableDemo",
                                    "resourceName":"表头合并表格",
                                    "resourceNo":"01301-57",
                                    "parentResourceNo":"01301-6",
                                    "icon":null,
                                    "level":"4",
                                    "sort":"3",
                                    "selector":null,
                                    "functionType":"2",
                                    "params":null,
                                    "children":[

                                    ]
                                },
                                {
                                    "url":"demo/frosTable/FrosTableRelativedDemo",
                                    "resourceName":"主子表关联",
                                    "resourceNo":"01301-58",
                                    "parentResourceNo":"01301-6",
                                    "icon":null,
                                    "level":"4",
                                    "sort":"4",
                                    "selector":null,
                                    "functionType":"2",
                                    "params":null,
                                    "children":[

                                    ]
                                },
                                {
                                    "url":"demo/frosTable/FrosTreeTableDemo",
                                    "resourceName":"树Table",
                                    "resourceNo":"01301-59",
                                    "parentResourceNo":"01301-6",
                                    "icon":null,
                                    "level":"4",
                                    "sort":"5",
                                    "selector":null,
                                    "functionType":"2",
                                    "params":null,
                                    "children":[

                                    ]
                                },
                                {
                                    "url":"demo/frosTable/FrosTableDragDemo",
                                    "resourceName":"可拖动表格",
                                    "resourceNo":"01301-514",
                                    "parentResourceNo":"01301-6",
                                    "icon":null,
                                    "level":"5",
                                    "sort":"7",
                                    "selector":null,
                                    "functionType":"1",
                                    "params":null,
                                    "children":[

                                    ]
                                }
                            ]
                        },
                        {
                            "url": "",
                            "resourceName": "Fros-Handsontable",
                            "resourceNo": "01301-7",
                            "parentResourceNo": "01301-1",
                            "icon": 'iconTable',
                            "level": "2",
                            "sort": "4",
                            "selector": null,
                            "functionType": "2",
                            "params": null,
                            "children": [
                                {
                                    "url": "demo/frosHandsontable/HandsontableDemo",
                                    "resourceName": "Handson基础案例",
                                    "resourceNo": "01301-71",
                                    "parentResourceNo": "01301-7",
                                    "icon": null,
                                    "level": "3",
                                    "sort": "1",
                                    "selector": null,
                                    "functionType": "2",
                                    "params": null,
                                    "children": []
                                },
                                {
                                    "url": "demo/frosHandsontable/HandsonEditDemo",
                                    "resourceName": "Handson编辑案例",
                                    "resourceNo": "01301-72",
                                    "parentResourceNo": "01301-7",
                                    "icon": null,
                                    "level": "3",
                                    "sort": "2",
                                    "selector": null,
                                    "functionType": "2",
                                    "params": null,
                                    "children": []
                                },{
                                    "url": "demo/frosHandsontable/HandsonValidatorDemo",
                                    "resourceName": "Handson验证案例",
                                    "resourceNo": "01301-5777",
                                    "parentResourceNo": "01301-6",
                                    "icon": null,
                                    "level": "3",
                                    "sort": "2",
                                    "selector": null,
                                    "functionType": "2",
                                    "params": null,
                                    "children": []
                                },
                                {
                                    "url": "demo/frosHandsontable/HandsontableDragDemo",
                                    "resourceName": "Handson左右拖拽案例",
                                    "resourceNo": "01301-7123",
                                    "parentResourceNo": "0130112-7",
                                    "icon": null,
                                    "level": "3",
                                    "sort": "2",
                                    "selector": null,
                                    "functionType": "2",
                                    "params": null,
                                    "children": []
                                },
                                {
                                    "url": "demo/frosHandsontable/HandsontableDragLMRDemo",
                                    "resourceName": "Handson左中右拖拽案例",
                                    "resourceNo": "01301-71111123",
                                    "parentResourceNo": "0130112-11117",
                                    "icon": null,
                                    "level": "3",
                                    "sort": "2",
                                    "selector": null,
                                    "functionType": "2",
                                    "params": null,
                                    "children": []
                                },
                                {
                                    "url": "demo/frosHandsontable/ScenarioOne",
                                    "resourceName": "Handson场景一",
                                    "resourceNo": "01301-73",
                                    "parentResourceNo": "01301-7",
                                    "icon": null,
                                    "level": "3",
                                    "sort": "2",
                                    "selector": null,
                                    "functionType": "2",
                                    "params": null,
                                    "children": []
                                },
                                {
                                    "url": "demo/frosHandsontable/HandsonNestedHeadersDemo",
                                    "resourceName": "合并表头Handson案例",
                                    "resourceNo": "01301-74",
                                    "parentResourceNo": "01301-7",
                                    "icon": null,
                                    "level": "3",
                                    "sort": "2",
                                    "selector": null,
                                    "functionType": "2",
                                    "params": null,
                                    "children": []
                                },
                                {
                                    "url": "demo/frosHandsontable/HandsontableTreeDemo",
                                    "resourceName": "Handson树表格案例",
                                    "resourceNo": "01301-75",
                                    "parentResourceNo": "01301-7",
                                    "icon": null,
                                    "level": "3",
                                    "sort": "2",
                                    "selector": null,
                                    "functionType": "2",
                                    "params": null,
                                    "children": []
                                },{
                                    "url": "demo/frosHandsontable/HandsontableSpecifyColorDemo",
                                    "resourceName": "Handson指定背景色案例",
                                    "resourceNo": "01301-723",
                                    "parentResourceNo": "01311-8",
                                    "icon": null,
                                    "level": "3",
                                    "sort": "2",
                                    "selector": null,
                                    "functionType": "2",
                                    "params": null,
                                    "children": []
                                }
                            ]
                        },
                        {
                            "url":"",
                            "resourceName":"Fros-Navigation",
                            "resourceNo":"01301-7",
                            "parentResourceNo":"01301-1",
                            "icon":'iconNavigation',
                            "level":"2",
                            "sort":"5",
                            "selector":null,
                            "functionType":"2",
                            "params":null,
                            "children":[
                                {
                                    "url":"demo/navigation/frosDropdown/FrosDropdownDemo",
                                    "resourceName":"下拉按钮",
                                    "resourceNo":"01301-61",
                                    "parentResourceNo":"01301-7",
                                    "icon":null,
                                    "level":"4",
                                    "sort":"1",
                                    "selector":null,
                                    "functionType":"2",
                                    "params":null,
                                    "children":[

                                    ]
                                },
                                {
                                    "url":"demo/navigation/dragDemo/FrosDragDemo",
                                    "resourceName":"左右拖动Div",
                                    "resourceNo":"01301-62",
                                    "parentResourceNo":"01301-7",
                                    "icon":null,
                                    "level":"4",
                                    "sort":"2",
                                    "selector":null,
                                    "functionType":"2",
                                    "params":null,
                                    "children":[

                                    ]
                                },
                                {
                                    "url":"demo/navigation/scroll/ScrollImgLeftDemo",
                                    "resourceName":"滚动效果",
                                    "resourceNo":"01301-515",
                                    "parentResourceNo":"01301-7",
                                    "icon":null,
                                    "level":"4",
                                    "sort":"3",
                                    "selector":null,
                                    "functionType":"1",
                                    "params":null,
                                    "children":[

                                    ]
                                },
                                {
                                    "url":"demo/navigation/frosTagsInput/FrosTagsInputDemo",
                                    "resourceName":"动态标签案列",
                                    "resourceNo":"01301-662",
                                    "parentResourceNo":"01301-7",
                                    "icon":null,
                                    "level":"4",
                                    "sort":"6",
                                    "selector":null,
                                    "functionType":"6",
                                    "params":null,
                                    "children":[

                                    ]
                                },
                                /*{
                                    "url":"demo/navigation/frosDetailViewerDemo/FrosDetailViewerDemo",
                                    "resourceName":"详情查看器",
                                    "resourceNo":"01301-152",
                                    "parentResourceNo":"01301-15",
                                    "icon":null,
                                    "level":"5",
                                    "sort":"10",
                                    "selector":null,
                                    "functionType":"2",
                                    "params":null,
                                    "children":[

                                    ]
                                }*/
                            ]
                        },
                        {
                            "url":"demo/validate/CheckManage",
                            "resourceName":"校验管理",
                            "resourceNo":"01301-8",
                            "parentResourceNo":"01301-1",
                            "icon":'iconxiaoyanguanli1',
                            "level":"2",
                            "sort":"6",
                            "selector":null,
                            "functionType":"2",
                            "params":null,
                            "children":[

                            ]
                        },
                        {
                            "url":"",
                            "resourceName":"其他组件",
                            "resourceNo":"01301-9",
                            "parentResourceNo":"01301-1",
                            "icon":'iconqitazujian',
                            "level":"2",
                            "sort":"7",
                            "selector":null,
                            "functionType":"2",
                            "params":null,
                            "children":[
                                {
                                    "url":"",
                                    "resourceName":"编辑器",
                                    "resourceNo":"01301-33",
                                    "parentResourceNo":"01301-9",
                                    "icon":null,
                                    "level":"3",
                                    "sort":"1",
                                    "selector":null,
                                    "functionType":"2",
                                    "params":null,
                                    "children":[
                                        {
                                            "url":"demo/others/richtext/RichText",
                                            "resourceName":"富文本编辑器",
                                            "resourceNo":"01301-35",
                                            "parentResourceNo":"01301-33",
                                            "icon":null,
                                            "level":"5",
                                            "sort":"1",
                                            "selector":null,
                                            "functionType":"2",
                                            "params":null,
                                            "children":[

                                            ]
                                        },
                                        {
                                            "url":"demo/others/markdown/MarkDown",
                                            "resourceName":"markdown编辑器",
                                            "resourceNo":"01301-36",
                                            "parentResourceNo":"01301-33",
                                            "icon":null,
                                            "level":"5",
                                            "sort":"2",
                                            "selector":null,
                                            "functionType":"2",
                                            "params":null,
                                            "children":[

                                            ]
                                        },
                                        {
                                            "url":"demo/others/codemirror/CodeMirror",
                                            "resourceName":"codemirror编辑器",
                                            "resourceNo":"01301-37",
                                            "parentResourceNo":"01301-33",
                                            "icon":null,
                                            "level":"5",
                                            "sort":"3",
                                            "selector":null,
                                            "functionType":"2",
                                            "params":null,
                                            "children":[

                                            ]
                                        }
                                    ]
                                },
                                {
                                    "url":"demo/others/tree/FrosTreeDemo",
                                    "resourceName":"FrosTree",
                                    "resourceNo":"0130231-4312",
                                    "parentResourceNo":"01312301-5",
                                    "icon":null,
                                    "level":"4",
                                    "sort":"1",
                                    "selector":null,
                                    "functionType":"2",
                                    "params":null,
                                    "children":[

                                    ]
                                },
                                {
                                    "url":"demo/others/avatar/AvatarUpload",
                                    "resourceName":"图片剪裁",
                                    "resourceNo":"01301-38",
                                    "parentResourceNo":"01301-9",
                                    "icon":null,
                                    "level":"4",
                                    "sort":"2",
                                    "selector":null,
                                    "functionType":"2",
                                    "params":null,
                                    "children":[

                                    ]
                                },
                                {
                                    "url":"demo/others/viewer/Pdf",
                                    "resourceName":"阅读器",
                                    "resourceNo":"01301-39",
                                    "parentResourceNo":"01301-9",
                                    "icon":null,
                                    "level":"5",
                                    "sort":"3",
                                    "selector":null,
                                    "functionType":"2",
                                    "params":null,
                                    "children":[

                                    ]
                                },
                                {
                                    "url":"",
                                    "resourceName":"地图",
                                    "resourceNo":"01301-34",
                                    "parentResourceNo":"01301-9",
                                    "icon":null,
                                    "level":"3",
                                    "sort":"4",
                                    "selector":null,
                                    "functionType":"2",
                                    "params":null,
                                    "children":[
                                        {
                                            "url":"demo/others/map/Amap",
                                            "resourceName":"高德地图",
                                            "resourceNo":"01301-40",
                                            "parentResourceNo":"01301-34",
                                            "icon":null,
                                            "level":"5",
                                            "sort":"1",
                                            "selector":null,
                                            "functionType":"2",
                                            "params":null,
                                            "children":[

                                            ]
                                        },
                                        {
                                            "url":"demo/others/map/Bmap",
                                            "resourceName":"百度地图",
                                            "resourceNo":"01301-41",
                                            "parentResourceNo":"01301-34",
                                            "icon":null,
                                            "level":"5",
                                            "sort":"2",
                                            "selector":null,
                                            "functionType":"2",
                                            "params":null,
                                            "children":[

                                            ]
                                        },
                                       /* {
                                            "url":"demo/others/map/Qmap",
                                            "resourceName":"腾讯地图",
                                            "resourceNo":"01301-42",
                                            "parentResourceNo":"01301-34",
                                            "icon":null,
                                            "level":"6",
                                            "sort":"3",
                                            "selector":null,
                                            "functionType":"2",
                                            "params":null,
                                            "children":[

                                            ]
                                        }*/
                                    ]
                                }
                            ]
                        },
                        {
                            "url":"",
                            "resourceName":"业务示例",
                            "resourceNo":"01301-516",
                            "parentResourceNo":"01301-1",
                            "icon":'iconyewushili',
                            "level":"2",
                            "sort":"9",
                            "selector":null,
                            "functionType":"1",
                            "params":null,
                            "children":[
                                {
                                    "url":"demo/realCase/harbour/HarbourDemo",
                                    "resourceName":"港口业务",
                                    "resourceNo":"01301-525",
                                    "parentResourceNo":"01301-516",
                                    "icon":null,
                                    "level":"4",
                                    "sort":"1",
                                    "selector":null,
                                    "functionType":"1",
                                    "params":null,
                                    "children":[

                                    ]
                                },
                                {
                                    "url":"demo/realCase/projectManage/ProjectManageDemo",
                                    "resourceName":"项目管理",
                                    "resourceNo":"01301-526",
                                    "parentResourceNo":"01301-516",
                                    "icon":null,
                                    "level":"4",
                                    "sort":"2",
                                    "selector":null,
                                    "functionType":"1",
                                    "params":null,
                                    "children":[

                                    ]
                                },
                                {
                                    "url":"demo/realCase/billLoading/BillLoading",
                                    "resourceName":"运单信息",
                                    "resourceNo":"01301-536",
                                    "parentResourceNo":"01301-516",
                                    "icon":null,
                                    "level":"4",
                                    "sort":"3",
                                    "selector":null,
                                    "functionType":"1",
                                    "params":null,
                                    "children":[

                                    ]
                                }
                            ]
                        },
                        {
                            "url":"",
                            "resourceName":"FROS规范",
                            "resourceNo":"01301-516",
                            "parentResourceNo":"01301-1",
                            "icon":'iconFrosguifan',
                            "level":"2",
                            "sort":"9",
                            "selector":null,
                            "functionType":"1",
                            "params":null,
                            "children":[
                                {
                                    "url":"demo/uiSpecification/SystemSpecification",
                                    "resourceName":"UI规范",
                                    "resourceNo":"01301-5256",
                                    "parentResourceNo":"01301-5166",
                                    "icon":'iconFrosguifan',
                                    "level":"4",
                                    "sort":"1",
                                    "selector":null,
                                    "functionType":"1",
                                    "params":null,
                                    "children":[]
                                },
                                {
                                    "url":"demo/uiSpecification/SystemUserExperience",
                                    "resourceName":"UE方案",
                                    "resourceNo":"01301-5257",
                                    "parentResourceNo":"01301-5166",
                                    "icon":null,
                                    "level":"4",
                                    "sort":"2",
                                    "selector":null,
                                    "functionType":"1",
                                    "params":null,
                                    "children":[]
                                },
                            ]
                        },

                    ]
                },
                {
                    "url":"",
                    "resourceName":"文档",
                    "resourceNo":"01301-2",
                    "parentResourceNo":"0",
                    "icon":null,
                    "level":"1",
                    "sort":"2",
                    "selector":null,
                    "functionType":"1",
                    "params":{
                        "checkSave":true
                    },
                    "children":[
                        {
                            "url":"",
                            "resourceName":"基础能力",
                            "resourceNo":"01301-63",
                            "parentResourceNo":"01301-2",
                            "icon":'iconjichunengli',
                            "level":"2",
                            "sort":"1",
                            "selector":null,
                            "functionType":"2",
                            "params":null,
                            "children":[
                                {
                                    "url":"",
                                    "resourceName":"框架功能",
                                    "resourceNo":"01301-70",
                                    "parentResourceNo":"01301-63",
                                    "icon":null,
                                    "level":"3",
                                    "sort":"1",
                                    "selector":null,
                                    "functionType":"3",
                                    "params":null,
                                    "children":[
                                        {
                                            "url":"doc/configdoc/ConfigDoc",
                                            "resourceName":"项目配置",
                                            "resourceNo":"01301-74",
                                            "parentResourceNo":"01301-70",
                                            "icon":null,
                                            "level":"4",
                                            "sort":"1",
                                            "selector":null,
                                            "functionType":"2",
                                            "params":null,
                                            "children":[

                                            ]
                                        },
                                        {
                                            "url":"doc/mockdoc/MockDoc",
                                            "resourceName":"MOCK数据",
                                            "resourceNo":"01301-75",
                                            "parentResourceNo":"01301-70",
                                            "icon":null,
                                            "level":"4",
                                            "sort":"2",
                                            "selector":null,
                                            "functionType":"2",
                                            "params":null,
                                            "children":[

                                            ]
                                        },
                                        {
                                            "url":"doc/dictdoc/DictDoc",
                                            "resourceName":"数据字典",
                                            "resourceNo":"01301-76",
                                            "parentResourceNo":"01301-70",
                                            "icon":null,
                                            "level":"4",
                                            "sort":"3",
                                            "selector":null,
                                            "functionType":"2",
                                            "params":null,
                                            "children":[

                                            ]
                                        },
                                        {
                                            "url":"doc/eventbusdoc/EventBusDoc",
                                            "resourceName":"EventBus",
                                            "resourceNo":"01301-77",
                                            "parentResourceNo":"01301-70",
                                            "icon":null,
                                            "level":"4",
                                            "sort":"4",
                                            "selector":null,
                                            "functionType":"2",
                                            "params":null,
                                            "children":[

                                            ]
                                        },
                                        {
                                            "url":"doc/utilsdoc/UtilsDoc",
                                            "resourceName":"工具集",
                                            "resourceNo":"01301-78",
                                            "parentResourceNo":"01301-70",
                                            "icon":null,
                                            "level":"4",
                                            "sort":"5",
                                            "selector":null,
                                            "functionType":"2",
                                            "params":null,
                                            "children":[

                                            ]
                                        },
                                        {
                                            "url":"",
                                            "resourceName":"权限控制",
                                            "resourceNo":"01301-79",
                                            "parentResourceNo":"01301-70",
                                            "icon":null,
                                            "level":"4",
                                            "sort":"6",
                                            "selector":null,
                                            "functionType":"2",
                                            "params":null,
                                            "children":[
                                                /*{
                                                    "url":"doc/rightdoc/PathRight",
                                                    "resourceName":"无权限页",
                                                    "resourceNo":"01301-80",
                                                    "parentResourceNo":"01301-79",
                                                    "icon":null,
                                                    "level":"5",
                                                    "sort":"1",
                                                    "selector":null,
                                                    "functionType":"2",
                                                    "params":null,
                                                    "children":[

                                                    ]
                                                },*/
                                                {
                                                    "url":"doc/rightdoc/PathRight",
                                                    "resourceName":"权限指令",
                                                    "resourceNo":"01301-81",
                                                    "parentResourceNo":"01301-79",
                                                    "icon":null,
                                                    "level":"5",
                                                    "sort":"2",
                                                    "selector":null,
                                                    "functionType":"2",
                                                    "params":null,
                                                    "children":[

                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "url":"doc/quickdoc/QuickDoc",
                                            "resourceName":"快捷键",
                                            "resourceNo":"01301-82",
                                            "parentResourceNo":"01301-70",
                                            "icon":null,
                                            "level":"4",
                                            "sort":"7",
                                            "selector":null,
                                            "functionType":"2",
                                            "params":null,
                                            "children":[

                                            ]
                                        },
                                        {
                                            "url":"",
                                            "resourceName":"发送请求",
                                            "resourceNo":"01301-83",
                                            "parentResourceNo":"01301-70",
                                            "icon":null,
                                            "level":"4",
                                            "sort":"8",
                                            "selector":null,
                                            "functionType":"2",
                                            "params":null,
                                            "children":[

                                            ]
                                        }
                                    ]
                                },
                                {
                                    "url":"",
                                    "resourceName":"菜单功能",
                                    "resourceNo":"01301-71",
                                    "parentResourceNo":"01301-63",
                                    "icon":null,
                                    "level":"3",
                                    "sort":"2",
                                    "selector":null,
                                    "functionType":"3",
                                    "params":null,
                                    "children":[
                                        {
                                            "url":"",
                                            "resourceName":"组件页面",
                                            "resourceNo":"01301-84",
                                            "parentResourceNo":"01301-71",
                                            "icon":null,
                                            "level":"4",
                                            "sort":"1",
                                            "selector":null,
                                            "functionType":"2",
                                            "params":null,
                                            "children":[

                                            ]
                                        },
                                        {
                                            "url":"",
                                            "resourceName":"URL页面",
                                            "resourceNo":"01301-85",
                                            "parentResourceNo":"01301-71",
                                            "icon":null,
                                            "level":"4",
                                            "sort":"2",
                                            "selector":null,
                                            "functionType":"2",
                                            "params":null,
                                            "children":[

                                            ]
                                        }
                                    ]
                                },
                                {
                                    "url":"",
                                    "resourceName":"欢迎页",
                                    "resourceNo":"01301-72",
                                    "parentResourceNo":"01301-63",
                                    "icon":null,
                                    "level":"3",
                                    "sort":"3",
                                    "selector":null,
                                    "functionType":"3",
                                    "params":null,
                                    "children":[
                                        {
                                            "url":"doc/icondoc/IconDoc",
                                            "resourceName":"图标",
                                            "resourceNo":"01301-86",
                                            "parentResourceNo":"01301-72",
                                            "icon":null,
                                            "level":"4",
                                            "sort":"1",
                                            "selector":null,
                                            "functionType":"2",
                                            "params":null,
                                            "children":[

                                            ]
                                        },
                                       /* {
                                            "url":"",
                                            "resourceName":"快捷入口",
                                            "resourceNo":"01301-87",
                                            "parentResourceNo":"01301-72",
                                            "icon":null,
                                            "level":"4",
                                            "sort":"2",
                                            "selector":null,
                                            "functionType":"2",
                                            "params":null,
                                            "children":[

                                            ]
                                        }*/
                                    ]
                                },
                                {
                                    "url":"",
                                    "resourceName":"头部组件",
                                    "resourceNo":"01301-73",
                                    "parentResourceNo":"01301-63",
                                    "icon":null,
                                    "level":"3",
                                    "sort":"4",
                                    "selector":null,
                                    "functionType":"3",
                                    "params":null,
                                    "children":[
                                        {
                                            "url":"doc/internationaldoc/InternationalDoc",
                                            "resourceName":"国际化",
                                            "resourceNo":"01301-88",
                                            "parentResourceNo":"01301-73",
                                            "icon":null,
                                            "level":"4",
                                            "sort":"1",
                                            "selector":null,
                                            "functionType":"2",
                                            "params":null,
                                            "children":[

                                            ]
                                        },
                                        {
                                            "url":"doc/logline/LoglineDoc",
                                            "resourceName":"前端日志",
                                            "resourceNo":"01301-89",
                                            "parentResourceNo":"01301-73",
                                            "icon":null,
                                            "level":"4",
                                            "sort":"2",
                                            "selector":null,
                                            "functionType":"2",
                                            "params":null,
                                            "children":[

                                            ]
                                        },
                                        /*{
                                            "url":"",
                                            "resourceName":"个性化设置",
                                            "resourceNo":"01301-90",
                                            "parentResourceNo":"01301-73",
                                            "icon":null,
                                            "level":"4",
                                            "sort":"3",
                                            "selector":null,
                                            "functionType":"2",
                                            "params":null,
                                            "children":[

                                            ]
                                        },*/
                                        /*{
                                            "url":"",
                                            "resourceName":"全屏切换",
                                            "resourceNo":"01301-91",
                                            "parentResourceNo":"01301-73",
                                            "icon":null,
                                            "level":"4",
                                            "sort":"4",
                                            "selector":null,
                                            "functionType":"2",
                                            "params":null,
                                            "children":[

                                            ]
                                        },*/
                                        /*{
                                            "url":"",
                                            "resourceName":"用户信息",
                                            "resourceNo":"01301-92",
                                            "parentResourceNo":"01301-73",
                                            "icon":null,
                                            "level":"4",
                                            "sort":"5",
                                            "selector":null,
                                            "functionType":"2",
                                            "params":null,
                                            "children":[

                                            ]
                                        }*/
                                    ]
                                }
                            ]
                        },
                        /*{
                            "url":"",
                            "resourceName":"Element组件",
                            "resourceNo":"01301-64",
                            "parentResourceNo":"01301-2",
                            "icon":'iconElementzujian',
                            "level":"2",
                            "sort":"2",
                            "selector":null,
                            "functionType":"2",
                            "params":null,
                            "children":[

                            ]
                        },*/
                        {
                            "url":"",
                            "resourceName":"Fros-Form",
                            "resourceNo":"01301-65",
                            "parentResourceNo":"01301-2",
                            "icon":'iconForm',
                            "level":"2",
                            "sort":"3",
                            "selector":null,
                            "functionType":"2",
                            "params":null,
                            "children":[
                                {
                                    "url":"",
                                    "resourceName":"表单示例页",
                                    "resourceNo":"01301-103",
                                    "parentResourceNo":"01301-65",
                                    "icon":null,
                                    "level":"3",
                                    "sort":"1",
                                    "selector":null,
                                    "functionType":"2",
                                    "params":null,
                                    "children":[

                                    ]
                                },
                                {
                                    "url":"",
                                    "resourceName":"元素权限",
                                    "resourceNo":"01301-112",
                                    "parentResourceNo":"01301-65",
                                    "icon":null,
                                    "level":"3",
                                    "sort":"10",
                                    "selector":null,
                                    "functionType":"2",
                                    "params":null,
                                    "children":[

                                    ]
                                },
                                {
                                    "url":"doc/frosdoc/FrosDynamicFilterCondDoc",
                                    "resourceName":"自定义表单",
                                    "resourceNo":"01301-113",
                                    "parentResourceNo":"01301-65",
                                    "icon":null,
                                    "level":"3",
                                    "sort":"11",
                                    "selector":null,
                                    "functionType":"2",
                                    "params":null,
                                    "children":[

                                    ]
                                },
                                {
                                    "url":"",
                                    "resourceName":"自定义布局",
                                    "resourceNo":"01301-114",
                                    "parentResourceNo":"01301-65",
                                    "icon":null,
                                    "level":"3",
                                    "sort":"12",
                                    "selector":null,
                                    "functionType":"2",
                                    "params":null,
                                    "children":[

                                    ]
                                },
                                {
                                    "url":"doc/frosdoc/BaseInputDoc",
                                    "resourceName":"文本输入框",
                                    "resourceNo":"01301-104",
                                    "parentResourceNo":"01301-65",
                                    "icon":null,
                                    "level":"3",
                                    "sort":"2",
                                    "selector":null,
                                    "functionType":"2",
                                    "params":null,
                                    "children":[

                                    ]
                                },
                                {
                                    "url":"doc/frosdoc/NumInputDoc",
                                    "resourceName":"数字输入框",
                                    "resourceNo":"01301-105",
                                    "parentResourceNo":"01301-65",
                                    "icon":null,
                                    "level":"3",
                                    "sort":"3",
                                    "selector":null,
                                    "functionType":"2",
                                    "params":null,
                                    "children":[

                                    ]
                                },
                                {
                                    "url":"doc/frosdoc/FrosSelectDoc",
                                    "resourceName":"下拉框组件",
                                    "resourceNo":"01301-106",
                                    "parentResourceNo":"01301-65",
                                    "icon":null,
                                    "level":"3",
                                    "sort":"4",
                                    "selector":null,
                                    "functionType":"2",
                                    "params":null,
                                    "children":[

                                    ]
                                },
                                {
                                    "url":"doc/frosdoc/FrosAutoCompleteDoc",
                                    "resourceName":"联想控件",
                                    "resourceNo":"01301-107",
                                    "parentResourceNo":"01301-65",
                                    "icon":null,
                                    "level":"3",
                                    "sort":"5",
                                    "selector":null,
                                    "functionType":"2",
                                    "params":null,
                                    "children":[

                                    ]
                                },
                                {
                                    "url":"doc/frosdoc/FrosDatePickerDoc",
                                    "resourceName":"日期控件",
                                    "resourceNo":"01301-108",
                                    "parentResourceNo":"01301-65",
                                    "icon":null,
                                    "level":"3",
                                    "sort":"6",
                                    "selector":null,
                                    "functionType":"2",
                                    "params":null,
                                    "children":[

                                    ]
                                },
                                {
                                    "url":"",
                                    "resourceName":"上传文件",
                                    "resourceNo":"01301-109",
                                    "parentResourceNo":"01301-65",
                                    "icon":null,
                                    "level":"3",
                                    "sort":"7",
                                    "selector":null,
                                    "functionType":"2",
                                    "params":null,
                                    "children":[

                                    ]
                                },
                                {
                                    "url":"doc/frosdoc/FrosDictDoc",
                                    "resourceName":"数据字典",
                                    "resourceNo":"01301-110",
                                    "parentResourceNo":"01301-65",
                                    "icon":null,
                                    "level":"3",
                                    "sort":"8",
                                    "selector":null,
                                    "functionType":"2",
                                    "params":null,
                                    "children":[

                                    ]
                                },
                                {
                                    "url":"doc/frosdoc/FrosValidatorDoc",
                                    "resourceName":"表单校验",
                                    "resourceNo":"01301-111",
                                    "parentResourceNo":"01301-65",
                                    "icon":null,
                                    "level":"3",
                                    "sort":"9",
                                    "selector":null,
                                    "functionType":"2",
                                    "params":null,
                                    "children":[

                                    ]
                                }
                            ]
                        },
                        {
                            "url":"doc/frosdoc/FrosTableDoc",
                            "resourceName":"Fros-Table",
                            "resourceNo":"01301-66",
                            "parentResourceNo":"01301-2",
                            "icon":'iconTable',
                            "level":"2",
                            "sort":"4",
                            "selector":null,
                            "functionType":"2",
                            "params":null,
                            "children":[

                            ]
                        },
                        {
                            "url":"",
                            "resourceName":"Fros-Navigation",
                            "resourceNo":"01301-67",
                            "parentResourceNo":"01301-2",
                            "icon":'iconNavigation',
                            "level":"2",
                            "sort":"5",
                            "selector":null,
                            "functionType":"2",
                            "params":null,
                            "children":[
                                {
                                    "url":"doc/frosdoc/FrosDropdownDoc",
                                    "resourceName":"下拉按钮",
                                    "resourceNo":"01301-121",
                                    "parentResourceNo":"01301-67",
                                    "icon":null,
                                    "level":"3",
                                    "sort":"1",
                                    "selector":null,
                                    "functionType":"2",
                                    "params":null,
                                    "children":[

                                    ]
                                },
                                {
                                    "url":"",
                                    "resourceName":"左右拖动Div",
                                    "resourceNo":"01301-122",
                                    "parentResourceNo":"01301-67",
                                    "icon":null,
                                    "level":"3",
                                    "sort":"2",
                                    "selector":null,
                                    "functionType":"2",
                                    "params":null,
                                    "children":[

                                    ]
                                },
                                {
                                    "url":"doc/frosdoc/FrosTagsInputDoc",
                                    "resourceName":"动态标签",
                                    "resourceNo":"01301-123",
                                    "parentResourceNo":"01301-67",
                                    "icon":null,
                                    "level":"3",
                                    "sort":"2",
                                    "selector":null,
                                    "functionType":"2",
                                    "params":null,
                                    "children":[

                                    ]
                                }
                            ]
                        },
                        {
                            "url":"doc/checkdoc/CheckDoc",
                            "resourceName":"校验管理",
                            "resourceNo":"01301-68",
                            "parentResourceNo":"01301-2",
                            "icon":'iconxiaoyanguanli1',
                            "level":"2",
                            "sort":"6",
                            "selector":null,
                            "functionType":"2",
                            "params":null,
                            "children":[

                            ]
                        },
                        {
                            "url":"doc/frosui/FrosUi",
                            "resourceName":"UI规范",
                            "resourceNo":"01301-5366",
                            "parentResourceNo":"01301-777",
                            "icon":'iconFrosguifan',
                            "level":"2",
                            "sort":"6",
                            "selector":null,
                            "functionType":"1",
                            "params":null,
                            "children":[

                            ]
                        },
                        {
                            "url":"doc/frosdoc/FrosPackerDoc",
                            "resourceName":"打包环境配置",
                            "resourceNo":"01301-535",
                            "parentResourceNo":"01301-2",
                            "icon":'icondabaohuanjingpeizhi',
                            "level":"2",
                            "sort":"6",
                            "selector":null,
                            "functionType":"1",
                            "params":null,
                            "children":[

                            ]
                        },
                        {
                            "url":"",
                            "resourceName":"其他组件",
                            "resourceNo":"01301-69",
                            "parentResourceNo":"01301-2",
                            "icon":'iconqitazujian',
                            "level":"2",
                            "sort":"7",
                            "selector":null,
                            "functionType":"2",
                            "params":null,
                            "children":[
                                {
                                    "url":"",
                                    "resourceName":"编辑器",
                                    "resourceNo":"01301-93",
                                    "parentResourceNo":"01301-69",
                                    "icon":null,
                                    "level":"3",
                                    "sort":"1",
                                    "selector":null,
                                    "functionType":"2",
                                    "params":null,
                                    "children":[
                                        {
                                            "url":"doc/richtextdoc/RichTextDoc",
                                            "resourceName":"富文本编辑器",
                                            "resourceNo":"01301-95",
                                            "parentResourceNo":"01301-93",
                                            "icon":null,
                                            "level":"4",
                                            "sort":"1",
                                            "selector":null,
                                            "functionType":"2",
                                            "params":null,
                                            "children":[

                                            ]
                                        },
                                        {
                                            "url":"doc/markdowndoc/MarkDownDoc",
                                            "resourceName":"markdown编辑器",
                                            "resourceNo":"01301-96",
                                            "parentResourceNo":"01301-93",
                                            "icon":null,
                                            "level":"4",
                                            "sort":"2",
                                            "selector":null,
                                            "functionType":"2",
                                            "params":null,
                                            "children":[

                                            ]
                                        },
                                        {
                                            "url":"doc/codemirrordoc/CodeMirrorDoc",
                                            "resourceName":"codemirror编辑器",
                                            "resourceNo":"01301-97",
                                            "parentResourceNo":"01301-93",
                                            "icon":null,
                                            "level":"4",
                                            "sort":"3",
                                            "selector":null,
                                            "functionType":"2",
                                            "params":null,
                                            "children":[

                                            ]
                                        }
                                    ]
                                },
                                {
                                    "url":"",
                                    "resourceName":"地图",
                                    "resourceNo":"01301-94",
                                    "parentResourceNo":"01301-69",
                                    "icon":null,
                                    "level":"3",
                                    "sort":"2",
                                    "selector":null,
                                    "functionType":"2",
                                    "params":null,
                                    "children":[
                                        {
                                            "url":"demo/others/map/Amap",
                                            "resourceName":"高德地图",
                                            "resourceNo":"01301-100",
                                            "parentResourceNo":"01301-94",
                                            "icon":null,
                                            "level":"4",
                                            "sort":"1",
                                            "selector":null,
                                            "functionType":"2",
                                            "params":null,
                                            "children":[

                                            ]
                                        },
                                        {
                                            "url":"demo/others/map/Bmap",
                                            "resourceName":"百度地图",
                                            "resourceNo":"01301-101",
                                            "parentResourceNo":"01301-94",
                                            "icon":null,
                                            "level":"4",
                                            "sort":"2",
                                            "selector":null,
                                            "functionType":"2",
                                            "params":null,
                                            "children":[

                                            ]
                                        },
                                        {
                                            "url":"",
                                            "resourceName":"腾讯地图",
                                            "resourceNo":"01301-102",
                                            "parentResourceNo":"01301-94",
                                            "icon":null,
                                            "level":"4",
                                            "sort":"3",
                                            "selector":null,
                                            "functionType":"2",
                                            "params":null,
                                            "children":[

                                            ]
                                        }
                                    ]
                                },
                                {
                                    "url":"",
                                    "resourceName":"图片剪裁",
                                    "resourceNo":"01301-98",
                                    "parentResourceNo":"01301-69",
                                    "icon":null,
                                    "level":"3",
                                    "sort":"3",
                                    "selector":null,
                                    "functionType":"2",
                                    "params":null,
                                    "children":[

                                    ]
                                },
                                {
                                    "url":"doc/pdfdoc/PdfDoc",
                                    "resourceName":"阅读器",
                                    "resourceNo":"01301-99",
                                    "parentResourceNo":"01301-69",
                                    "icon":null,
                                    "level":"3",
                                    "sort":"4",
                                    "selector":null,
                                    "functionType":"2",
                                    "params":null,
                                    "children":[

                                    ]
                                },
                                {
                                    "url":"doc/treedoc/TreeDoc",
                                    "resourceName":"zTree",
                                    "resourceNo":"01301-99",
                                    "parentResourceNo":"01301-69",
                                    "icon":null,
                                    "level":"3",
                                    "sort":"4",
                                    "selector":null,
                                    "functionType":"2",
                                    "params":null,
                                    "children":[

                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "url": "",
                    "resourceName": "系统管理",
                    "resourceNo": "01301-531",
                    "parentResourceNo": "0",
                    "icon": null,
                    "level": "1",
                    "sort": "3",
                    "selector": null,
                    "functionType": "2",
                    "params": {
                        "checkSave": true
                    },
                    "children": [
                        {
                            "url": "",
                            "resourceName": "认证管理",
                            "resourceNo": "01301-func-qkwxFT",
                            "parentResourceNo": "01301-531",
                            "icon": 'iconrenzhengguanli',
                            "level": "2",
                            "sort": "0",
                            "selector": null,
                            "functionType": "3",
                            "params": null,
                            "children": [
                                {
                                    "url": "system/token/TokenManagement",
                                    "resourceName": "Token管理",
                                    "resourceNo": "01301-func-k3v7f8",
                                    "parentResourceNo": "01301-func-qkwxFT",
                                    "icon": null,
                                    "level": "3",
                                    "sort": "1",
                                    "selector": null,
                                    "functionType": "1",
                                    "params": null,
                                    "children": []
                                }
                            ]
                        },
                        {
                            "url": "",
                            "resourceName": "日志管理",
                            "resourceNo": "01301-func-sDpkUv",
                            "parentResourceNo": "01301-531",
                            "icon": 'iconrizhiguanli',
                            "level": "2",
                            "sort": "1",
                            "selector": null,
                            "functionType": "3",
                            "params": null,
                            "children": [
                                {
                                    "url": "system/monitor/ApiLog",
                                    "resourceName": "API日志",
                                    "resourceNo": "01301-532",
                                    "parentResourceNo": "01301-func-sDpkUv",
                                    "icon": null,
                                    "level": "3",
                                    "sort": "1",
                                    "selector": null,
                                    "functionType": "1",
                                    "params": null,
                                    "children": []
                                },
                                {
                                    "url": "system/monitor/SqlLog",
                                    "resourceName": "Sql日志",
                                    "resourceNo": "01301-533",
                                    "parentResourceNo": "01301-func-sDpkUv",
                                    "icon": null,
                                    "level": "3",
                                    "sort": "2",
                                    "selector": null,
                                    "functionType": "1",
                                    "params": null,
                                    "children": []
                                },
                                {
                                    "url": "system/monitor/BackendLog",
                                    "resourceName": "后台异常日志",
                                    "resourceNo": "01301-func-eiwhnC",
                                    "parentResourceNo": "01301-func-sDpkUv",
                                    "icon": null,
                                    "level": "3",
                                    "sort": "3",
                                    "selector": null,
                                    "functionType": "1",
                                    "params": null,
                                    "children": []
                                },
                                {
                                    "url": "system/monitor/ReportUILog",
                                    "resourceName": "UI异常日志",
                                    "resourceNo": "01301-func-sJKzoC",
                                    "parentResourceNo": "01301-func-sDpkUv",
                                    "icon": null,
                                    "level": "3",
                                    "sort": "4",
                                    "selector": null,
                                    "functionType": "1",
                                    "params": null,
                                    "children": []
                                }
                            ]
                        },
                        {
                            "url": "",
                            "resourceName": "系统监控",
                            "resourceNo": "01301-func-M5bCqP",
                            "parentResourceNo": "01301-531",
                            "icon": 'iconxitongjiankong',
                            "level": "2",
                            "sort": "1",
                            "selector": null,
                            "functionType": "3",
                            "params": null,
                            "children": [
                                {
                                    "url": "",
                                    "resourceName": "应用监控",
                                    "resourceNo": "01301-func-NdFf9J",
                                    "parentResourceNo": "01301-func-M5bCqP",
                                    "icon": null,
                                    "level": "3",
                                    "sort": "1",
                                    "selector": null,
                                    "functionType": "1",
                                    "params": null,
                                    "children": []
                                },
                                {
                                    "url": "",
                                    "resourceName": "链路监控",
                                    "resourceNo": "01301-func-Litu0l",
                                    "parentResourceNo": "01301-func-M5bCqP",
                                    "icon": null,
                                    "level": "3",
                                    "sort": "2",
                                    "selector": null,
                                    "functionType": "1",
                                    "params": null,
                                    "children": []
                                }
                            ]
                        },
                        {
                            "url": "",
                            "resourceName": "研发工具",
                            "resourceNo": "01301-func-HMpnwm",
                            "parentResourceNo": "01301-531",
                            "icon": 'iconyanfagongju',
                            "level": "2",
                            "sort": "5",
                            "selector": null,
                            "functionType": "3",
                            "params": null,
                            "children": [
                                {
                                    "url": "",
                                    "resourceName": "代码生成",
                                    "resourceNo": "01301-func-vTm9S7",
                                    "parentResourceNo": "01301-func-HMpnwm",
                                    "icon": null,
                                    "level": "3",
                                    "sort": "1",
                                    "selector": null,
                                    "functionType": "1",
                                    "params": null,
                                    "children": []
                                },
                                {
                                    "url": "",
                                    "resourceName": "API文档",
                                    "resourceNo": "01301-func-6iGNkq",
                                    "parentResourceNo": "01301-func-HMpnwm",
                                    "icon": null,
                                    "level": "3",
                                    "sort": "2",
                                    "selector": null,
                                    "functionType": "1",
                                    "params": null,
                                    "children": []
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    }
}

export const getUserInfo = req => {
    console.log('@@@Mock请求参数：', req)
    // 获取用户信息
    return {
        // 返回成功标识
        code: 0,
        // 查询返回列表
        data: {
            avatar: '/static/image/manage/default_handsome.jpg',
            username: 'wadaxiwanear',
            root: 'admin',
            rootName: '管理员',
            sex: 1
        }
    }
}
