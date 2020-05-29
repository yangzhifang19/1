export const getQueryList = req => {
    console.log('@@@Mock请求参数：', req)
    let dataList = []
    let model = {
        c_001: '',
        c_012: '',
        c_004: '',
        c_005: ''
    }
    for(let i=0; i < 50; i++){
        let temp = JSON.parse(JSON.stringify(model))
        temp.c_001 = "001" + i
        temp.c_012 = "012" + i
        temp.c_004 = "004" + i
        temp.c_005 = "005" + i
        dataList.push(temp)
    }
    // 获取用户信息
    return {
        // 返回成功标识
        code: 0,
        // 查询返回列表
        data: {
            dataList: dataList,
            totalRows: 200
        }
    }
}


/*import Mock from 'mockjs';

const Random = Mock.Random
/!* handson-table 合并表头数据 *!/
export const getQueryList = (len = 20) => {
    const list = []
    while (len > 0) {
        list.push(
            Mock.mock({
                c_001: Random.guid(),
                c_012: Random.date(),
                c_004: Random.name(),
                c_005: Random.province(),
                city: Random.city(),
                address: Random.county(true)
            })
        )
        len--
    }
    return list;
}*/
