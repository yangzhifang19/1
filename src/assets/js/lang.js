import VueI18n from 'vue-i18n'
import en from '../js/locale/lang/en'
import zhCN from '../js/locale/lang/zh-CN'
import ja from '../js/locale/lang/ja'
import ru from '../js/locale/lang/ru'
import kr from '../js/locale/lang/kr'
import elZhCN from 'element-ui/lib/locale/lang/zh-CN'
import elEn from 'element-ui/lib/locale/lang/en'
import elJa from 'element-ui/lib/locale/lang/ja'
import elRu from 'element-ui/lib/locale/lang/ru-RU'
import elKr from 'element-ui/lib/locale/lang/ko'
import utils from '@js/utils'
import config from './config'

import Vue from 'vue'

Vue.use(VueI18n)

let lang = localStorage.getItem('lang') ? localStorage.getItem('lang') : 'zh'

// 国际化options
let options = {
    locale: lang,
    messages: {
        'zh': {
            ...zhCN,
            ...elZhCN,
            name: '中',
            text: '中文'
        },
        'en': {
            ...en,
            ...elEn,
            name: 'En',
            text: '英文'
        },
        'ru': {
            ...ru,
            ...elRu,
            name: 'Ru',
            text: '俄文'
        },
        'ja': {
            ...ja,
            ...elJa,
            name: 'あ',
            text: '日文'
        },
        'kr': {
            ...kr,
            ...elKr,
            name: '한',
            text: '韩文'
        }
    },
    silentFallbackWarn: true
}

// 国际化
const i18n = new VueI18n(options)

// 如果开启菜单翻译则请求后台获取菜单字典数据
if(config.isI18n){
    utils.sendReq({
        queryUrl: config.i18nConfig.url,
        req: {
            method: config.i18nConfig.method,
            data: config.i18nConfig.data,
            success: function (res) {
                let data = res.data.data
                if(data != null){
                    let languageClassNmae = ''  // 语言分类名称
                    for(let key in data){
                        languageClassNmae = key // 获取语言分类
                        switch(key) {
                            case 'zh':
                                var zh_temp = {
                                    ...zhCN,
                                    ...elZhCN,
                                    name: '中',
                                    text: '中文'
                                }
                                for(let content in data[key]){
                                    zh_temp[content] = data[key][content]
                                }
                                i18n.setLocaleMessage('zh', zh_temp)
                                break;
                            case 'en':
                                var en_temp = {
                                    ...en,
                                    ...elEn,
                                    name: 'En',
                                    text: '英文'
                                }
                                for(let content in data[key]){
                                    en_temp[content] = data[key][content]
                                }
                                i18n.setLocaleMessage('en', en_temp)
                                break;
                            case 'ru':
                                var ru_temp = {
                                    ...ru,
                                    ...elRu,
                                    name: 'Ru',
                                    text: '俄文'
                                }
                                for(let content in data[key]){
                                    ru_temp[content] = data[key][content]
                                }
                                i18n.setLocaleMessage('ru', ru_temp)
                                break;
                            case 'ja':
                                var ja_temp = {
                                    ...ja,
                                    ...elJa,
                                    name: 'あ',
                                    text: '日文'
                                }
                                for(let content in data[key]){
                                    ja_temp[content] = data[key][content]
                                }
                                i18n.setLocaleMessage('ja', ja_temp)
                                break;
                            case 'kr':
                                var kr_temp = {
                                    ...kr,
                                    ...elKr,
                                    name: '한',
                                    text: '韩文'
                                }
                                for(let content in data[key]){
                                    kr_temp[content] = data[key][content]
                                }
                                i18n.setLocaleMessage('kr', kr_temp)
                                break;
                            default:
                            // 默认代码块
                        }
                    }
                }
            }
        }
    })
}
export default {
    options,
    i18n
}
