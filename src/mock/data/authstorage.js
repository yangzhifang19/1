export const getFrosEleList = req => {
    console.log('@@@Mock请求参数：', req)
    // 获取权限-->元素权限
    return {
        // 返回成功标识
        code: 0,
        message: '',
        // 查询返回列表
        data: {
            '01301-52': [  // 后台接口有页面url修改为页面资源编码
                {
                    'rowState': null,
                    'id': '9eece164-0909-48c0-897f-045243dbaf1d',
                    'resourceName': '用户名',  // 资源名称
                    'resourceNo': '4',	// 资源编码
                    'resourceType': 2,	// 资源类型（功能，API，元素，数据）
                    'functionType': 3,	// 功能类型
                    'status': 1,	//	状态1可用，2不可用
                    'resourceDescr': null,	// 资源描述
                    'url': null,	// URL
                    'params': 'hidden',	// 元素参数 前端用于控制元素的参数,默认含hidden、remove、readonly
                    'icon': null,	// 前端菜单显示用ICON图标
                    'level': 1,	// 菜单层级
                    'sort': 1,	// 菜单排序
                    'parentResourceNo': '3',	// 菜单父级编码
                    'selector': '#userName',	// 选择器
                    'creator': '1',
                    'createTime': '2019-05-24T08:42:39.000+0000',
                    'modifyTime': '2019-05-24T08:42:39.000+0000',
                    'recVer': 0,
                    'modifier': '1',
                    'creatorName': 'admin',
                    'modifierName': 'admin',
                    'createOrgId': '123',
                    'createOrgName': null
                },
                {
                    'rowState': null,
                    'id': 'c6f0f375-6caa-48fa-b945-327ca82df46f',
                    'resourceName': '座机号',
                    'resourceNo': '5',
                    'resourceType': 2,
                    'functionType': 3,
                    'status': 1,
                    'resourceDescr': null,
                    'url': null,
                    'params': 'remove',
                    'icon': null,
                    'level': 1,
                    'sort': 1,
                    'parentResourceNo': '3',
                    'selector': '.telephone',
                    'creator': '1',
                    'createTime': '2019-05-24T08:42:55.000+0000',
                    'modifyTime': '2019-05-24T08:42:55.000+0000',
                    'recVer': 0,
                    'modifier': '1',
                    'creatorName': 'admin',
                    'modifierName': 'admin',
                    'createOrgId': '123',
                    'createOrgName': null
                },
                {
                    'rowState': null,
                    'id': 'c6f0f375-6caa-48fa-b945-327ca82df46f',
                    'resourceName': '排序',
                    'resourceNo': '5',
                    'resourceType': 2,
                    'functionType': 3,
                    'status': 1,
                    'resourceDescr': null,
                    'url': null,
                    'params': 'readonly',
                    'icon': null,
                    'level': 1,
                    'sort': 1,
                    'parentResourceNo': '3',
                    'selector': 'input[frosele=test]',
                    'creator': '1',
                    'createTime': '2019-05-24T08:42:55.000+0000',
                    'modifyTime': '2019-05-24T08:42:55.000+0000',
                    'recVer': 0,
                    'modifier': '1',
                    'creatorName': 'admin',
                    'modifierName': 'admin',
                    'createOrgId': '123',
                    'createOrgName': null
                },
                {
                    'rowState': null,
                    'id': 'c6f0f375-6caa-48fa-b945-327ca82df46f',
                    'resourceName': '描述',
                    'resourceNo': '5',
                    'resourceType': 2,
                    'functionType': 3,
                    'status': 1,
                    'resourceDescr': null,
                    'url': null,
                    'params': 'test',
                    'icon': null,
                    'level': 1,
                    'sort': 1,
                    'parentResourceNo': '3',
                    'selector': 'input[frosele=test]',
                    'creator': '1',
                    'createTime': '2019-05-24T08:42:55.000+0000',
                    'modifyTime': '2019-05-24T08:42:55.000+0000',
                    'recVer': 0,
                    'modifier': '1',
                    'creatorName': 'admin',
                    'modifierName': 'admin',
                    'createOrgId': '123',
                    'createOrgName': null
                }
            ]
        }
    }
}

export const getFrosCustomLayout = req => {
    console.log('@@@Mock请求参数：', req)
    // 获取权限-->元素权限
    return {
        "code": 0,
        "message": "success",
        "data": [
            {
                "pageConfig": {
                    "rowState": null,
                    "id": "53982332-b04a-4147-a96d-7c8aa58f4090",
                    "resourceNo": "01301-54",
                    "pageCode": "demo/authStorage/FrosCustomLayoutDemo",
                    "pageName": "界面自定义",
                    "userCode": "admin",
                    "pageJson": null,
                    "creator": "1",
                    "createTime": "2019-05-21T06:44:39.000+0000",
                    "modifier": "1",
                    "modifyTime": "2019-05-21T06:44:39.000+0000",
                    "recVer": 0,
                    "createOrgName": null,
                    "createOrgId": null,
                    "creatorName": null,
                    "modifierName": null
                },
                "componentConfigs": [
                    {
                        "rowState": null,
                        "id": "88c0eabb-71dd-44f9-976a-52946cde2f3c",
                        "pageId": "53982332-b04a-4147-a96d-7c8aa58f4090",
                        "componentCode": "userFormCode",
                        "componentJson": "{\"code\":[\"name\",\"sex\"]}",
                        "creator": null,
                        "createTime": "2019-07-17T08:46:16.000+0000",
                        "modifier": null,
                        "modifyTime": "2019-07-17T08:46:16.000+0000",
                        "recVer": 0,
                        "createOrgName": null,
                        "createOrgId": null,
                        "creatorName": null,
                        "modifierName": null
                    },
                    {
                        "rowState": null,
                        "id": "929faf25-c59c-4701-a670-8fee84cd8c39",
                        "pageId": "53982332-b04a-4147-a96d-7c8aa58f4090",
                        "componentCode": "component_0041",
                        "componentJson": "123333",
                        "creator": null,
                        "createTime": "2019-07-18T03:29:15.000+0000",
                        "modifier": null,
                        "modifyTime": "2019-07-18T03:29:15.000+0000",
                        "recVer": 0,
                        "createOrgName": null,
                        "createOrgId": null,
                        "creatorName": null,
                        "modifierName": null
                    }
                ]
            },
            {
                "pageConfig": {
                    "rowState": null,
                    "id": "60664522-ffc5-4ca1-b25e-2ea9e2425467",
                    "pageCode": "00003",
                    "pageName": "表单配置测试3",
                    "userCode": "admin",
                    "pageJson": null,
                    "creator": "1",
                    "createTime": "2019-05-21T06:50:14.000+0000",
                    "modifier": "1",
                    "modifyTime": "2019-05-21T06:50:14.000+0000",
                    "recVer": 0,
                    "createOrgName": null,
                    "createOrgId": null,
                    "creatorName": null,
                    "modifierName": null
                },
                "componentConfigs": []
            },
        ]
    }
}

export const saveCustomLayout = req => {
    console.log('@@@Mock请求参数：', req)
    // 获取权限-->元素权限
    return {
        'code': 0,
        'message': '保存自定义布局成功',
        'data': ''
    }
}
