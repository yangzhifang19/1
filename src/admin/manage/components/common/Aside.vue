<template>
    <el-aside class="b-aside" width="230">
        <div class="collapse-btn" @click="changeCollapse">
            <span
                :class="['iconfont', isCollapse ? 'fros-icon-HAMBURGERMENU rotate' : 'fros-icon-HAMBURGERMENU']"></span>
        </div>
        <div class="hover-mask" v-if="isMobile" v-show="!isCollapse" @click.stop="changeCollapse">
            <el-menu
                :default-active="menuActiveIndex"
                :active="menuActiveIndex"
                class="el-menu-vertical"
                @select="handleSelect"
                :collapse="isCollapse"
                background-color="#2a5799"
                text-color="#fff"
                active-text-color="#0099cc"
                @click.native="stopEvent"
            >
                <template
                    v-for="(item, index) in (menuInfo && menuInfo.menuList ? menuInfo.menuList[childSysIndex].children : [])">
                    <!-- 二级标题（左侧标题） -->
                    <template v-if="item.children && item.children.length">
                        <el-submenu class="aside-item" :cp-name="item.url" :resource-no="item.resourceNo"
                                    :params-detail="encodeParams(item.params)"
                                    :nav-index="childSysIndex + '-' + (index + 1).toString()" :key="index"
                                    :index="childSysIndex + '-' + (index + 1).toString()">
                            <template slot="title">
                                <i :class="'iconfont '+item.icon"></i>
                                <span class="aside-detail" slot="title">
                                    <span v-if="objConfig.isI18n" :title="$t(item.resourceName)" class="aside-title">{{ $t(item.resourceName) }}</span>
                                    <span v-else :title="item.resourceName" class="aside-title">{{ item.resourceName }}</span>
                                </span>
                            </template>
                            <!--  三级标题 -->
                            <template v-for="(item2, index2) in item.children">
                                <template v-if="item2.resourceName && item2.functionType == 3">
                                    <el-menu-item-group :cp-name="item2.url" :resource-no="item2.resourceNo"
                                                        :params-detail="encodeParams(item2.params)"
                                                        :nav-index="childSysIndex + '-' + (index + 1) + '-' + (index2 + 1)"
                                                        :key="index2"
                                                        :index="childSysIndex + '-' + (index + 1) + '-' + (index2 + 1)">
                                        <span slot="title">
                                            <span v-if="objConfig.isI18n" :title="$t(item2.resourceName)" class="aside-title">{{ $t(item2.resourceName) }}</span>
                                            <span v-else :title="item2.resourceName" class="aside-title">{{ item2.resourceName }}</span>
                                        </span>
                                        <template v-if="item2.children && item2.children.length">
                                            <template v-for="(item3, index3) in item2.children">
                                                <template v-if="item3.children && item3.children.length">
                                                    <el-submenu :cp-name="item3.url" :resource-no="item3.resourceNo"
                                                                :params-detail="encodeParams(item3.params)"
                                                                :nav-index="childSysIndex + '-' + (index + 1) + '-' + (index2 + 1) + '-' + (index3 + 1)"
                                                                :index="childSysIndex + '-' + (index + 1) + '-' + (index2 + 1) + '-' + (index3 + 1)"
                                                                :key="index3">
                                                        <span slot="title">
                                                            <span v-if="objConfig.isI18n" :title="$t(item3.resourceName)" class="aside-title">{{ $t(item3.resourceName) }}</span>
                                                            <span v-else :title="item3.resourceName" class="aside-title">{{ item3.resourceName }}</span>
                                                        </span>
                                                        <template v-for="(item4, index4) in item3.children">
                                                            <el-menu-item :cp-name="item4.url"
                                                                          :resource-no="item4.resourceNo"
                                                                          :params-detail="encodeParams(item4.params)"
                                                                          :nav-index="childSysIndex + '-' + (index + 1) + '-' + (index2 + 1) + '-' + (index3 + 1) + '-' + (index4 + 1)"
                                                                          :index="childSysIndex + '-' + (index + 1) + '-' + (index2 + 1) + '-' + (index3 + 1) + '-' + (index4 + 1)"
                                                                          :key="index4">
                                                                <span v-if="objConfig.isI18n" :title="$t(item4.resourceName)" class="aside-title">{{ $t(item4.resourceName) }}</span>
                                                                <span v-else :title="item4.resourceName" class="aside-title">{{ item4.resourceName }}</span>
                                                            </el-menu-item>
                                                        </template>
                                                    </el-submenu>
                                                </template>
                                                <template v-else>
                                                    <el-menu-item :cp-name="item3.url" :resource-no="item3.resourceNo"
                                                                  :key="index3"
                                                                  :params-detail="encodeParams(item3.params)"
                                                                  :nav-index="childSysIndex + '-' + (index + 1) + '-' + (index2 + 1) + '-' + (index3 + 1)"
                                                                  :index="childSysIndex + '-' + (index + 1) + '-' + (index2 + 1) + '-' + (index3 + 1)">
                                                        <span v-if="objConfig.isI18n" :title="$t(item3.resourceName)" class="aside-title">{{ $t(item3.resourceName) }}</span>
                                                        <span v-else :title="item3.resourceName" class="aside-title">{{ item3.resourceName }}</span>
                                                    </el-menu-item>
                                                </template>
                                            </template>
                                        </template>
                                    </el-menu-item-group>
                                </template>
                                <template v-else>
                                    <!--<template v-for="(item3, index3) in item2.children">-->
                                    <template v-if="item2.children && item2.children.length">
                                        <el-submenu :cp-name="item2.url" :resource-no="item2.resourceNo"
                                                    :params-detail="encodeParams(item2.params)"
                                                    :nav-index="childSysIndex + '-' + (index + 1) + '-' + (index2 + 1)"
                                                    :index="childSysIndex + '-' + (index + 1) + '-' + (index2 + 1)"
                                                    :key="index2">
                                            <span slot="title">
                                                <span v-if="objConfig.isI18n" :title="$t(item2.resourceName)" class="aside-title">{{ $t(item2.resourceName) }}</span>
                                                <span v-else :title="item2.resourceName" class="aside-title">{{ item2.resourceName }}</span>
                                            </span>
                                            <template v-for="(item3, index3) in item2.children">
                                                <el-menu-item :cp-name="item3.url" :resource-no="item3.resourceNo"
                                                              :params-detail="encodeParams(item3.params)"
                                                              :nav-index="childSysIndex + '-' + (index + 1) + '-' + (index2 + 1) + '-' + (index3 + 1)"
                                                              :index="childSysIndex + '-' + (index + 1) + '-' + (index2 + 1) + '-' + (index3 + 1)"
                                                              :key="index3">
                                                    <span v-if="objConfig.isI18n" :title="$t(item3.resourceName)" class="aside-title">{{ $t(item3.resourceName) }}</span>
                                                    <span v-else :title="item3.resourceName" class="aside-title">{{ item3.resourceName }}</span>
                                                </el-menu-item>
                                            </template>
                                        </el-submenu>
                                    </template>
                                    <template v-else>
                                        <el-menu-item :cp-name="item2.url" :resource-no="item2.resourceNo" :key="index2"
                                                      :params-detail="encodeParams(item2.params)"
                                                      :nav-index="childSysIndex + '-' + (index + 1) + '-' + (index2 + 1)"
                                                      :index="childSysIndex + '-' + (index + 1) + '-' + (index2 + 1)">
                                            <span v-if="objConfig.isI18n" :title="$t(item2.resourceName)" class="aside-title">{{ $t(item2.resourceName) }}</span>
                                            <span v-else :title="item2.resourceName" class="aside-title">{{ item2.resourceName }}</span>
                                        </el-menu-item>
                                    </template>
                                    <!--</template>-->
                                </template>
                            </template>
                        </el-submenu>
                    </template>
                    <template v-else>
                        <el-menu-item class="aside-item" :cp-name="item.url" :resource-no="item.resourceNo"
                                      :params-detail="encodeParams(item.params)"
                                      :nav-index="childSysIndex + '-' + (index + 1).toString()" :key="index"
                                      :index="childSysIndex + '-' + (index + 1).toString()">
                            <i :class="'iconfont '+item.icon"></i>
                            <span class="aside-detail" slot="title">
                                <span v-if="objConfig.isI18n" :title="$t(item.resourceName)" class="aside-title">{{ $t(item.resourceName) }}</span>
                                <span v-else :title="item.resourceName" class="aside-title">{{ item.resourceName }}</span>
                            </span>
                        </el-menu-item>
                    </template>
                </template>
            </el-menu>
        </div>
        <el-menu
            :default-active="menuActiveIndex"
            :active="menuActiveIndex"
            class="el-menu-vertical"
            @select="handleSelect"
            :collapse="isCollapse"
            background-color="#2a5799"
            text-color="#fff"
            active-text-color="#0099cc"
            v-else
        >
            <template
                v-for="(item, index) in (menuInfo && menuInfo.menuList ? menuInfo.menuList[childSysIndex].children : [])">
                <template v-if="item.children && item.children.length">
                    <el-submenu class="aside-item" :cp-name="item.url" :resource-no="item.resourceNo"
                                :params-detail="encodeParams(item.params)"
                                :nav-index="childSysIndex + '-' + (index + 1).toString()" :key="index"
                                :index="childSysIndex + '-' + (index + 1).toString()">
                        <template slot="title">
                            <i :class="['iconfont icon', item.icon]"></i>
                            <span class="aside-detail" slot="title">
                               <span v-if="objConfig.isI18n" :title="$t(item.resourceName)" class="aside-title">{{ $t(item.resourceName) }}</span>
                               <span v-else :title="item.resourceName" class="aside-title">{{ item.resourceName }}</span>
                            </span>
                        </template>
                        <template v-for="(item2, index2) in item.children">
                            <template v-if="item2.resourceName && item2.functionType == 3">
                                <el-menu-item-group :cp-name="item2.url" :resource-no="item2.resourceNo"
                                                    :params-detail="encodeParams(item2.params)"
                                                    :nav-index="childSysIndex + '-' + (index + 1) + '-' + (index2 + 1)"
                                                    :key="index2"
                                                    :index="childSysIndex + '-' + (index + 1) + '-' + (index2 + 1)">
                                      <span slot="title">
                                        <span v-if="objConfig.isI18n" :title="$t(item2.resourceName)" class="aside-title">{{ $t(item2.resourceName) }}</span>
                                        <span v-else :title="item2.resourceName" class="aside-title">{{ item2.resourceName }}</span>
                                      </span>
                                    <template v-if="item2.children && item2.children.length">
                                        <template v-for="(item3, index3) in item2.children">
                                            <template v-if="item3.children && item3.children.length">
                                                <el-submenu :cp-name="item3.url" :resource-no="item3.resourceNo"
                                                            :params-detail="encodeParams(item3.params)"
                                                            :nav-index="childSysIndex + '-' + (index + 1) + '-' + (index2 + 1) + '-' + (index3 + 1)"
                                                            :index="childSysIndex + '-' + (index + 1) + '-' + (index2 + 1) + '-' + (index3 + 1)"
                                                            :key="index3">
                                                      <span slot="title">
                                                        <span v-if="objConfig.isI18n" :title="$t(item3.resourceName)" class="aside-title">{{ $t(item3.resourceName) }}</span>
                                                        <span v-else :title="item3.resourceName" class="aside-title">{{ item3.resourceName }}</span>
                                                      </span>
                                                    <template v-for="(item4, index4) in item3.children">
                                                        <el-menu-item :cp-name="item4.url"
                                                                      :resource-no="item4.resourceNo"
                                                                      :params-detail="encodeParams(item4.params)"
                                                                      :nav-index="childSysIndex + '-' + (index + 1) + '-' + (index2 + 1) + '-' + (index3 + 1) + '-' + (index4 + 1)"
                                                                      :index="childSysIndex + '-' + (index + 1) + '-' + (index2 + 1) + '-' + (index3 + 1) + '-' + (index4 + 1)"
                                                                      :key="index4">
                                                            <span v-if="objConfig.isI18n" :title="$t(item4.resourceName)" class="aside-title">{{ $t(item4.resourceName) }}</span>
                                                            <span v-else :title="item4.resourceName" class="aside-title">{{ item4.resourceName }}</span>
                                                        </el-menu-item>
                                                    </template>
                                                </el-submenu>
                                            </template>
                                            <template v-else>
                                                <el-menu-item :cp-name="item3.url" :resource-no="item3.resourceNo"
                                                              :key="index3" :params-detail="encodeParams(item3.params)"
                                                              :nav-index="childSysIndex + '-' + (index + 1) + '-' + (index2 + 1) + '-' + (index3 + 1)"
                                                              :index="childSysIndex + '-' + (index + 1) + '-' + (index2 + 1) + '-' + (index3 + 1)">
                                                    <span v-if="objConfig.isI18n" :title="$t(item3.resourceName)" class="aside-title">{{ $t(item3.resourceName) }}</span>
                                                    <span v-else :title="item3.resourceName" class="aside-title">{{ item3.resourceName }}</span>
                                                </el-menu-item>
                                            </template>
                                        </template>
                                    </template>
                                </el-menu-item-group>
                            </template>
                            <template v-else>
                                <!--<template v-for="(item3, index3) in item2.children">-->
                                <template v-if="item2.children && item2.children.length">
                                    <el-submenu :cp-name="item2.url" :resource-no="item2.resourceNo"
                                                :params-detail="encodeParams(item2.params)"
                                                :nav-index="childSysIndex + '-' + (index + 1) + '-' + (index2 + 1)"
                                                :index="childSysIndex + '-' + (index + 1) + '-' + (index2 + 1)"
                                                :key="index2">
                                        <span slot="title">
                                            <span v-if="objConfig.isI18n" :title="$t(item2.resourceName)" class="aside-title">{{ $t(item2.resourceName) }}</span>
                                            <span v-else :title="item2.resourceName" class="aside-title">{{ item2.resourceName }}</span>
                                        </span>
                                        <template v-for="(item3, index3) in item2.children">
                                            <el-menu-item :cp-name="item3.url" :resource-no="item3.resourceNo"
                                                          :params-detail="encodeParams(item3.params)"
                                                          :nav-index="childSysIndex + '-' + (index + 1) + '-' + (index2 + 1) + '-' + (index3 + 1)"
                                                          :index="childSysIndex + '-' + (index + 1) + '-' + (index2 + 1) + '-' + (index3 + 1)"
                                                          :key="index3">
                                                <span v-if="objConfig.isI18n" :title="$t(item3.resourceName)" class="aside-title">{{ $t(item3.resourceName) }}</span>
                                                <span v-else :title="item3.resourceName" class="aside-title">{{ item3.resourceName }}</span>
                                            </el-menu-item>
                                        </template>
                                    </el-submenu>
                                </template>
                                <template v-else>
                                    <el-menu-item :cp-name="item2.url" :resource-no="item2.resourceNo" :key="index2"
                                                  :params-detail="encodeParams(item2.params)"
                                                  :nav-index="childSysIndex + '-' + (index + 1) + '-' + (index2 + 1)"
                                                  :index="childSysIndex + '-' + (index + 1) + '-' + (index2 + 1)">
                                        <span v-if="objConfig.isI18n" :title="$t(item2.resourceName)" class="aside-title">{{ $t(item2.resourceName) }}</span>
                                        <span v-else :title="item2.resourceName" class="aside-title">{{ item2.resourceName }}</span>
                                    </el-menu-item>
                                </template>
                                <!--</template>-->
                            </template>
                        </template>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item class="aside-item" :cp-name="item.url" :resource-no="item.resourceNo"
                                  :params-detail="encodeParams(item.params)"
                                  :nav-index="childSysIndex + '-' + (index + 1).toString()" :key="index"
                                  :index="childSysIndex + '-' + (index + 1).toString()">
                        <i :class="['iconfont icon', item.icon]"></i>
                        <span class="aside-detail" slot="title">
                          <span v-if="objConfig.isI18n" :title="$t(item.resourceName)" class="aside-title">{{ $t(item.resourceName) }}</span>
                          <span v-else :title="item.resourceName" class="aside-title">{{ item.resourceName }}</span>
                        </span>
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </el-aside>
</template>

<script>
    import {mapGetters} from 'vuex'
    import Bus from '@js/bus'

    export default {
        name: 'Aside',
        props: {
            menuInfo: {
                type: Object
            }
        },
        data() {
            return {
                isCollapse: false,
                menuActiveIndex: ''
            }
        },
        created: function () {
            let self = this
            Bus.$off('collapseChange').$on('collapseChange', function (res) {
                if (res.forCp === 'aside') {
                    self.isCollapse = res.value
                }
            })
            // 判断是不是移动端，移动端默认是true
            if (self.isMobile) {
                self.isCollapse = true
            }
            // 获取默认的defaultIndex
            self.menuActiveIndex = self.defaultIndex
        },
        methods: {
            handleSelect(key) {
                let self = this
                self.$store.commit('setDefaultIndex', key.toString())
            },
            changeCollapse() {
                let self = this
                self.isCollapse = !self.isCollapse
                Bus.$emit('collapseChange', {
                    forCp: 'header',
                    value: self.isCollapse
                })
            },
            stopEvent: function (e) {
                e.stopPropagation()
            },
            encodeParams: function (obj) {
                if (obj) {
                    return encodeURIComponent(JSON.stringify(obj))
                } else {
                    return ''
                }
            }
        },
        computed: {
            ...mapGetters([
                'defaultIndex',
                'childSysIndex',
                'objConfig',
                'isMobile'
            ])
        },
        watch: {
            // 监听目录的变化，加载对应的组件/iframe
            defaultIndex: function (val) {
                let self = this
                let params = val.split('@longgap@').length > 1 ? val.split('@longgap@')[1] : undefined
                val = val.split('@longgap@')[0]
                self.menuActiveIndex = val
                let curItem = document.querySelectorAll('.el-menu li[nav-index="' + val + '"]')
                if (curItem.length) {
                    // 属于菜单点击页面
                    let cpName = curItem[0].getAttribute('cp-name')
                    let cpTitle = curItem[0].innerText
                    let cpParams = curItem[0].getAttribute('params-detail')
                    let resourceNo = curItem[0].getAttribute('resource-no')
                    self.$emit('changeCp', {
                        component: cpName,
                        title: cpTitle,
                        navIndex: val,
                        props: cpParams ? JSON.parse(decodeURIComponent(cpParams)) : null,
                        resourceNo: resourceNo
                    })
                } else if (val !== '-1') {
                    let option = val.split('@gap@')
                    // console.log(params, '###')
                    if (option.length > 1) {
                        // 属于newpage出来的页面
                        self.$emit('changeCp', {
                            component: option[0],
                            title: option[1],
                            navIndex: val,
                            props: params ? JSON.parse(params) : null
                        })
                    }
                } else {
                    self.$emit('changeCp', {
                        component: 'HomePage',
                        title: '首页',
                        navIndex: -1
                    })
                }
            }
        }
    }
</script>

<style lang="scss">
    @import "../../../../assets/scss/manage/comaside";
</style>
