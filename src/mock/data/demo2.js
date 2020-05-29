export const editTableRules = req => {
    console.log('@@@Mock请求参数：', req)
    // 获取用户信息
    return {
        'code': 0,
        'message': 'success',
        'data': [
            {
                'validateField': {
                    'rowState': null,
                    'id': '1',
                    'configId': '1',
                    'fieldCode': 'name',
                    'name': '姓名',
                    'databaseFieldName': 'dept_name',
                    'type': 'String',
                    'length': 20,
                    'typeErrorMessage': '姓名不能为空',
                    'creator': null,
                    'createTime': null,
                    'modifier': null,
                    'modifyTime': null,
                    'recVer': null
                },
                'validateRules': [
                    {
                        'rowState': null,
                        'id': '10',
                        'fieldId': '1',
                        'sceId': '1',
                        'valType': 2,
                        'fieldValueType': 'String',
                        'mainFeildId': '1',
                        'valRule': '2',
                        'valErrorMessage': '字符串长度不能低于最小值4',
                        'creator': null,
                        'createTime': null,
                        'modifier': null,
                        'modifyTime': null,
                        'recVer': 0,
                        'valCodes': null
                    },
                    {
                        'rowState': null,
                        'id': '11',
                        'fieldId': '2',
                        'sceId': '1',
                        'valType': 3,
                        'fieldValueType': 'String',
                        'mainFeildId': '2',
                        'valRule': '20',
                        'valErrorMessage': '字符串长度不能超过最大值20',
                        'creator': null,
                        'createTime': null,
                        'modifier': null,
                        'modifyTime': null,
                        'recVer': 0,
                        'valCodes': null
                    }
                ]
            },
            {
                'validateField': {
                    'rowState': null,
                    'id': '2',
                    'configId': '1',
                    'fieldCode': 'province',
                    'name': '标签',
                    'databaseFieldName': 'province',
                    'type': 'String',
                    'length': 10,
                    'typeErrorMessage': '密码不能为空',
                    'creator': null,
                    'createTime': null,
                    'modifier': null,
                    'modifyTime': null,
                    'recVer': null
                },
                'validateRules': [
                    {
                        'rowState': null,
                        'id': '1',
                        'fieldId': '1',
                        'sceId': '1',
                        'valType': 1,
                        'fieldValueType': 'string',
                        'mainFeildId': '1',
                        'valRule': '',
                        'valErrorMessage': '不能为空',
                        'creator': null,
                        'createTime': null,
                        'modifier': null,
                        'modifyTime': null,
                        'recVer': 0,
                        'valCodes': null
                    },
                    {
                        'rowState': null,
                        'id': '10',
                        'fieldId': '1',
                        'sceId': '1',
                        'valType': 2,
                        'fieldValueType': 'String',
                        'mainFeildId': '1',
                        'valRule': '3',
                        'valErrorMessage': '字符串长度不能低于最小值3',
                        'creator': null,
                        'createTime': null,
                        'modifier': null,
                        'modifyTime': null,
                        'recVer': 0,
                        'valCodes': null
                    },
                    {
                        'rowState': null,
                        'id': '11',
                        'fieldId': '2',
                        'sceId': '1',
                        'valType': 3,
                        'fieldValueType': 'String',
                        'mainFeildId': '2',
                        'valRule': '20',
                        'valErrorMessage': '字符串长度不能超过最大值20',
                        'creator': null,
                        'createTime': null,
                        'modifier': null,
                        'modifyTime': null,
                        'recVer': 0,
                        'valCodes': null
                    }
                ]
            },
            {
                'validateField': {
                    'rowState': null,
                    'id': '3',
                    'configId': '1',
                    'fieldCode': 'address',
                    'name': '确认密码',
                    'databaseFieldName': 'establish_time',
                    'type': 'Date',
                    'length': null,
                    'typeErrorMessage': '确认密码不能为空',
                    'creator': null,
                    'createTime': null,
                    'modifier': null,
                    'modifyTime': null,
                    'recVer': null
                },
                'validateRules': [{
                    'rowState': null,
                    'id': '1',
                    'fieldId': '1',
                    'sceId': '1',
                    'valType': 1,
                    'fieldValueType': 'string',
                    'mainFeildId': '1',
                    'valRule': '',
                    'valErrorMessage': '不能为空',
                    'creator': null,
                    'createTime': null,
                    'modifier': null,
                    'modifyTime': null,
                    'recVer': 0,
                    'valCodes': null
                },
                    {
                        'rowState': null,
                        'id': '10',
                        'fieldId': '1',
                        'sceId': '1',
                        'valType': 2,
                        'fieldValueType': 'String',
                        'mainFeildId': '1',
                        'valRule': '6',
                        'valErrorMessage': '字符串长度不能低于最小值6',
                        'creator': null,
                        'createTime': null,
                        'modifier': null,
                        'modifyTime': null,
                        'recVer': 0,
                        'valCodes': null
                    },
                    {
                        'rowState': null,
                        'id': '11',
                        'fieldId': '2',
                        'sceId': '1',
                        'valType': 3,
                        'fieldValueType': 'String',
                        'mainFeildId': '2',
                        'valRule': '20',
                        'valErrorMessage': '字符串长度不能超过最大值20',
                        'creator': null,
                        'createTime': null,
                        'modifier': null,
                        'modifyTime': null,
                        'recVer': 0,
                        'valCodes': null
                    }
                ]
            },
            {
                'validateField': {
                    'rowState': null,
                    'id': '4',
                    'configId': '1',
                    'fieldCode': 'city',
                    'name': '城市',
                    'databaseFieldName': 'city',
                    'type': 'String',
                    'length': 11,
                    'typeErrorMessage': '电话号码类型不匹配',
                    'creator': null,
                    'createTime': null,
                    'modifier': null,
                    'modifyTime': null,
                    'recVer': null
                },
                'validateRules': [
                    {
                        'rowState': null,
                        'id': '10',
                        'fieldId': '1',
                        'sceId': '1',
                        'valType': 2,
                        'fieldValueType': 'String',
                        'mainFeildId': '1',
                        'valRule': '6',
                        'valErrorMessage': '字符串长度不能低于最小值6',
                        'creator': null,
                        'createTime': null,
                        'modifier': null,
                        'modifyTime': null,
                        'recVer': 0,
                        'valCodes': null
                    },
                    {
                        'rowState': null,
                        'id': '11',
                        'fieldId': '2',
                        'sceId': '1',
                        'valType': 3,
                        'fieldValueType': 'String',
                        'mainFeildId': '2',
                        'valRule': '20',
                        'valErrorMessage': '字符串长度不能超过最大值20',
                        'creator': null,
                        'createTime': null,
                        'modifier': null,
                        'modifyTime': null,
                        'recVer': 0,
                        'valCodes': null
                    }
                ]
            },
            {
                'validateField': {
                    'rowState': null,
                    'id': '5',
                    'configId': '1',
                    'fieldCode': 'zip',
                    'name': '邮编',
                    'databaseFieldName': 'zip',
                    'type': 'String',
                    'length': null,
                    'typeErrorMessage': '邮箱类型不匹配',
                    'creator': null,
                    'createTime': null,
                    'modifier': null,
                    'modifyTime': null,
                    'recVer': null
                },
                'validateRules': [{
                    'rowState': null,
                    'id': '1',
                    'fieldId': '1',
                    'sceId': '1',
                    'valType': 1,
                    'fieldValueType': 'string',
                    'mainFeildId': '1',
                    'valRule': '',
                    'valErrorMessage': '不能为空',
                    'creator': null,
                    'createTime': null,
                    'modifier': null,
                    'modifyTime': null,
                    'recVer': 0,
                    'valCodes': null
                },
                    {
                        'rowState': null,
                        'id': '10',
                        'fieldId': '1',
                        'sceId': '1',
                        'valType': 2,
                        'fieldValueType': 'String',
                        'mainFeildId': '1',
                        'valRule': '5',
                        'valErrorMessage': '字符串长度不能低于最小值5',
                        'creator': null,
                        'createTime': null,
                        'modifier': null,
                        'modifyTime': null,
                        'recVer': 0,
                        'valCodes': null
                    },
                    {
                        'rowState': null,
                        'id': '11',
                        'fieldId': '2',
                        'sceId': '1',
                        'valType': 3,
                        'fieldValueType': 'String',
                        'mainFeildId': '2',
                        'valRule': '20',
                        'valErrorMessage': '字符串长度不能超过最大值20',
                        'creator': null,
                        'createTime': null,
                        'modifier': null,
                        'modifyTime': null,
                        'recVer': 0,
                        'valCodes': null
                    }
                ]
            }
        ]
    }
}

export const getLinkinfo = req => {
    console.log('@@@Mock请求参数：', req)
    return {
        // 返回成功标识
        code: 0,
        // 查询返回列表
        data: {
            linkList: [
                {
                    "id": "0",
                    "name": "小sss李",
                    "Quantity": "334057",
                    "orgName": "W22Y",
                    "Remark": "stock"
                },
                {
                    "id": "1",
                    "name": "小11王",
                    "Quantity": "43057",
                    "orgName": "W2ssY",
                    "Remark": "stock"
                },
                {
                    "id": "2",
                    "name": "小111黑",
                    "Quantity": "632057",
                    "orgName": "Wss2Y",
                    "Remark": "stock"
                },
                {
                    "id": "3",
                    "name": "小白",
                    "Quantity": "132057",
                    "orgName": "Wrr2Y",
                    "Remark": "stock"
                },
                {
                    "id": "0",
                    "name": "小李",
                    "Quantity": "334057",
                    "orgName": "W22Y",
                    "Remark": "stock"
                },
                {
                    "id": "1",
                    "name": "小王",
                    "Quantity": "43057",
                    "orgName": "W2ssY",
                    "Remark": "stock"
                },
                {
                    "id": "2",
                    "name": "小黑",
                    "Quantity": "632057",
                    "orgName": "Wss2Y",
                    "Remark": "stock"
                },
                {
                    "id": "3",
                    "name": "小白",
                    "Quantity": "132057",
                    "orgName": "Wrr2Y",
                    "Remark": "stock"
                },
                {
                    "id": "0",
                    "name": "小李",
                    "Quantity": "334057",
                    "orgName": "W22Y",
                    "Remark": "stock"
                },
                {
                    "id": "1",
                    "name": "小王",
                    "Quantity": "43057",
                    "orgName": "W2ssY",
                    "Remark": "stock"
                },
                {
                    "id": "2",
                    "name": "小黑",
                    "Quantity": "632057",
                    "orgName": "Wss2Y",
                    "Remark": "stock"
                },
                {
                    "id": "3",
                    "name": "小白",
                    "Quantity": "132057",
                    "orgName": "Wrr2Y",
                    "Remark": "stock"
                }

            ]
        }
    }
}
