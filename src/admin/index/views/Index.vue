<template>
    <div class="com-page-ctx">
        <div class="home-page-intro">
            <div class="home-page-header">
                <img :src="intro.logo" alt="">
                <div class="frame-intro">
                    <div class="frame-main-title">FROS-UI</div>
                    <div class="frame-sub-title">管理系统快速开发前端框架</div>
                </div>
            </div>
            <el-row :gutter="12" style="padding-top: 50px;">
                <el-col :span="6" :offset="2">
                    <el-card shadow="always">
                        <el-button type="text" class="button" @click="changeUrl('login')">登录界面</el-button>
                    </el-card>
                </el-col>
                <el-col :span="8">
                    <el-card shadow="always">
                        <el-button type="text" class="button" @click="changeUrl('manage')">管理界面</el-button>
                    </el-card>
                </el-col>
                <el-col :span="6">
                    <el-card shadow="always">
                        <el-button type="text" class="button" @click="changeUrl('welcome')">欢迎界面</el-button>
                    </el-card>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
    import Base from '@js/base'
    import { mapGetters } from 'vuex'
    console.log("idnex....")
    export default {
        name: 'Index',
        extends: Base,
        data () {
            return {
                // home page demo
                intro: {
                    logo: '/static/image/demo/logo.png',
                    text: ''
                }
            }
        },
        computed: {
        },
        methods: {
            changeUrl(item){
                switch (item) {
                    case "login":
                        window.location.href = '/login'
                        break;
                    case "manage":
                        window.location.href = '/manage'
                        break;
                    case "welcome":
                        window.location.href = '/hello'
                        break;
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../../../assets/scss/home/home.scss";
</style>
