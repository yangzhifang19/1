import Mock from 'mockjs'
import {getMenuInfo, getUserInfo} from './data/common'   // 基础类型菜单数据
// import {getMenuInfo, getUserInfo} from './data/common_i18n' // 多语言模拟菜单数据
import {
    getInfo,
    postInfo,
    putInfo,
    deleteInfo,
    userList,
    apiList,
    uniqueness
} from './data/demo'
import {getFrosEleList, getFrosCustomLayout, saveCustomLayout} from './data/authstorage'
import {getFrosDictionary} from './data/dictionary' // 数据字典
import {handsonTable, checkPoint, handsonTableValidator} from './data/handsonTable' // handson-table数据
import {getFrosTable} from './data/tableData' // table数据
import {getRightMenu} from './data/tableRightMenu' // table右键菜单数据
import {editTableRules, getLinkinfo} from './data/demo2'
import {rules, rules2} from './data/validator'
import {getFrosDynamicFilterCond} from './data/dynamicFilterCond'
import {getI18nData} from './data/i18n'
import {getQueryList} from './data/mdmSearch'
import config from '@js/config'
import elm from './data/elm';

if (config.isMock) {
    // 是否使用Mock数据
    Mock.mock(/\/getMenuInfo/, getMenuInfo);
    Mock.mock(/\/getUserInfo/, getUserInfo);
    //
    Mock.mock(/\getCompany/, elm.companyList);
    Mock.mock(/\getCase/, elm.caseList);
    Mock.mock(/\hallList/, elm.hallList);
    // todo temp
    // Mock.mock(/\/getInfo/, getInfo)
    // Mock.mock(/\/postInfo/, postInfo)
    // Mock.mock(/\/putInfo/, putInfo)
    // Mock.mock(/\/deleteInfo/, deleteInfo)
    // Mock.mock(/\/CommonQuery-AuthUserModel/, userList)
    // Mock.mock(/\/CommonQuery-AuthApiModel/, apiList)
    // Mock.mock(/\/uniqueness/, uniqueness)
    // Mock.mock(/\/rules/, rules)
    // Mock.mock(/\/jioayan2/, rules2)
    // // 权限存储
    // Mock.mock(/\/getFrosEleList/, getFrosEleList)
    // Mock.mock(/\/getFrosCustomLayout/, getFrosCustomLayout)
    // Mock.mock(/\/saveCustomLayout/, saveCustomLayout)
    //
    // Mock.mock(/\/getLinkinfo/, getLinkinfo)
    // Mock.mock(/\/editTableRules/, editTableRules)
    //
    // // 数据字典
    Mock.mock(/\/getFrosDictionary/, getFrosDictionary)
    // // 表格数据
    // Mock.mock(/\/getFrosTable/, getFrosTable)
    // // 表格右键菜单
    // Mock.mock(/\/getRightMenu/, getRightMenu)
    // Mock.mock(/\/getFrosTable/, getFrosTable)
    // Mock.mock(/\/getHandsonTable/, handsonTable)
    // Mock.mock(/\/gethandsonValidator/, handsonTableValidator)
    // Mock.mock(/\/handsonStore/, checkPoint)
    //
    // // 动态表单数据
    // Mock.mock(/\/getFrosDynamicFilterCond/, getFrosDynamicFilterCond)
    //
    // // 主数据模拟
    // // Mock.mock(/\/mdmSearch\/query/, getQueryList)
    //
    // // i18n数据模拟
    // Mock.mock(/\/getI18nData/, getI18nData)
}

export default Mock
