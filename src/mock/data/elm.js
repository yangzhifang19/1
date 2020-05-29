
import Mock from 'mockjs';

const companyList = {
    code: 200,
    message: 'success',
    data: {
        'dataList|3': [
            {
                key: '@cword(5,10)公司',
                value: '@id',
            }
        ],
        selectCodeValues: {},
        pagingInfo: {
            pageSize: 5,
            currentPage: 1,
            totalRows: 3,
            currentRow: 0,
            pageLastRow: 5,
            totalPages: 1
        }
    }
};

const caseList = {
    code: 200,
    message: 'success',
    data: {
        'dataList|5': [
            {
                key: '@cword(5,10)展会',
                value: '@id',
            }
        ],
        selectCodeValues: {},
        pagingInfo: {
            pageSize: 5,
            currentPage: 1,
            totalRows: 3,
            currentRow: 0,
            pageLastRow: 5,
            totalPages: 1
        }
    }
};

function hallList(req) {

    const body = JSON.parse(req.body);
    console.log('@Mock: Hall', body);

    const data = {
        selectCodeValues: {},
        pagingInfo: {
            pageSize: body.pageSize,
            currentPage: body.pageNo,
            totalRows: 15,
            currentRow: 0,
            pageLastRow: 0,
            totalPages: 1
        }
    };

    data['dataList|'+(body.pageNo>1? 5:10)] = [
        {
            id: '@id',
            address: '@city(true)@csentence(5,10)',
            code: '@string(10)',
            deleted: '@boolean',
            latitude: '@float(-90, 90, 6, 6)',
            longitude: '@float(-180, 180, 6, 6)',
            managerId: '@id(5)',
            name: '@ctitle(3, 10)',
            provinceId: '@natural(1, 100)',
            subType: '',
            type: '@natural(1, 10)',
        }
    ];

    return Mock.mock({
        code: 200,
        message: 'success',
        data,
    });
}

export default {
    companyList,
    caseList,
    hallList,
}
