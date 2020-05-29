export const getFrosTable = req => {
    console.log('@@@Mock请求参数：', req)
    let nPage = JSON.parse(req.body).pageSize
    let aa = 10;
    if(nPage>1){
        aa = nPage
    }
    let tableData = []
    for(let i = 1;i<=aa;i++){
        tableData.push(
            {
                id: i,
                IsAudit: 1,
                date: '1519913' + i%10 + '23600',
                name: '王小虎A' + i,
                province: 50,
                city: '普陀区',
                address: '上海市普陀区金沙江路 1512',
                zip: 200,
                uploadId: '43285723' + i,
            }
        )
    }
    return {
        'code': 0,
        'message': '操作成功!',
        'data': {
            // 普通表格数据
            'total':500,
            'tableData': tableData,
            'childTableData': [
                {
                    id: 1,
                    IsAudit: 1,
                    date: '2016-05-01',
                    name: '王小虎A111',
                    province: 50,
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1512 弄上海市普陀区金沙江路 1512 弄',
                    zip: 200,
                    uploadId:''
                },
                {
                    id: 2,
                    IsAudit: 3,
                    date: '2016-05-01',
                    name: '王小虎a111',
                    province: 80,
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1512 弄',
                    zip: 206,
                    uploadId:''
                },
                {
                    id: 3,
                    IsAudit: 2,
                    date: '2016-05-03',
                    name: '王小虎c11',
                    province: 96,
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1512 弄',
                    zip: 223,
                    uploadId:''
                },
                {
                    id: 4,
                    IsAudit: 1,
                    date: '2016-05-01',
                    name: '王小虎d11',
                    province: 36,
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1512 弄',
                    zip: 195,
                    uploadId:''
                },
                {
                    id: 5,
                    IsAudit: 1,
                    date: '2016-05-01',
                    name: '王小虎A',
                    province: 50,
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1512 弄上海市普陀区金沙江路 1512 弄',
                    zip: 200,
                    uploadId:''
                },
                {
                    id: 6,
                    IsAudit: 3,
                    date: '2016-05-01',
                    name: '王小虎a',
                    province: 80,
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1512 弄',
                    zip: 206,
                    uploadId:''
                },
                {
                    id: 7,
                    IsAudit: 2,
                    date: '2016-05-03',
                    name: '王小虎c',
                    province: 96,
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1512 弄',
                    zip: 223,
                    uploadId:''
                },
                {
                    id: 8,
                    IsAudit: 1,
                    date: '2016-05-01',
                    name: '王小虎d',
                    province: 36,
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1512 弄',
                    zip: 195,
                    uploadId:''
                },
                {
                    id: 9,
                    IsAudit: 2,
                    date: '2016-05-03',
                    name: '王小虎c',
                    province: 96,
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1512 弄',
                    zip: 223,
                    uploadId:''
                },
                {
                    id: 10,
                    IsAudit: 1,
                    date: '2016-05-01',
                    name: '王小虎d',
                    province: 36,
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1512 弄',
                    zip: 195,
                    uploadId:''
                }
            ],
            // 编辑表格数据
            'edittableData': [
                {
                    id: 1,
                    date: '2016-05-03',
                    name: '',
                    yRn:'',
                    numinput: 1,
                    IsAudit: '1',
                    address: '上海市普陀111111弄',
                    province: 'SZ',
                    city: '普陀区',
                    zip: '200333',
                    uploadId:'c3ab20a1-ac51-4c19-8623-2fbb92683610'
                }, {
                    id: 2,
                    date: '2016-05-03',
                    IsAudit: '2',
                    name: '王小虎',
                    yRn:'y',
                    numinput: 2,
                    address: '上海市普陀111111弄',
                    province:'SZ',
                    city: '普陀区',
                    zip: '200333',
                    uploadId:''
                }, {
                    id: 3,
                    date: '2016-05-03',
                    IsAudit: '3',
                    numinput: 3,
                    name: '王小虎',
                    yRn:'',
                    address: '上海市普陀111111弄',
                    province: 'APPLE',
                    city: '普陀区',
                    zip: '200333',
                    uploadId:''
                }, {
                    id:4,
                    IsAudit: '1',
                    date: '2016-05-02',
                    name: '王小虎',
                    yRn:'',
                    numinput: 4,
                    address: '上海市普陀2222222 1518 弄',
                    province: 'BANANA',
                    city: '普陀区',
                    zip: '200333',
                    uploadId:''
                }, {
                    id: 5,
                    IsAudit: '2',
                    date: '2016-05-04',
                    name: '王小虎',
                    yRn:'',
                    numinput: 5,
                    address: '上海市普陀333333 弄',
                    province: 'APPLE',
                    city: '普陀区',
                    zip: '200333',
                    uploadId:''
                }],
        }
    }
}
