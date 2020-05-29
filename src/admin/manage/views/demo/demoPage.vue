<template>
    <div style="padding: 20px;">

        <el-card class="demo-block">
            <h1>全局数据</h1>

            <el-button type="primary" size="mini" @click="showRole">角色值</el-button>
            <el-button type="primary" size="mini" @click="showCompany">公司值</el-button>
            <el-button type="primary" size="mini" @click="showCase">展会值</el-button>

        </el-card>

        <el-card class="demo-block">
            <h1>ELM 组件</h1>

            <el-form label-width="120px" :model="form">
                <el-form-item label="公用弹框">
                    <el-input :value="popShow" readonly prefix-icon="el-icon-plus" placeholder="选择..." @focus="openSelector"></el-input>
                </el-form-item>
            </el-form>

        </el-card>

        <data-selector title="展馆" width="800px" height="320px"
                       :show.sync="pop" :multiple="false"
                       :selected="form.pop" :cols="popCol" :data="popData" :pages="popPages"
                        @changed="applySelected" @page="popChangePage">

            <el-form inline size="small" :model="popFrom">
                <el-form-item label="省份">
                    <fros-base-input v-model="popFrom.province"></fros-base-input>
                </el-form-item>
                <el-form-item label="地址">
                    <fros-base-input v-model="popFrom.address"></fros-base-input>
                </el-form-item>
                <el-form-item>
                    <el-button @click="loadElmHall">查询</el-button>
                </el-form-item>
            </el-form>

        </data-selector>
    </div>
</template>

<script>

    import { mapGetters } from 'vuex'
    import Base from '@js/base';
    import Bus from '@js/bus';
    import DataSelector from "../../components/elm/DataSelector";
    import elmApi from '@js/api/elm/apiMethod';

    export default {
        name: "DemoPage",
        components: {
            DataSelector,
        },
        extends: Base,
        data() {
            return {
                pop: false,
                popCol: [
                    {
                        label: '名称',
                        prop: 'name',
                    },
                    {
                        label: '地址',
                        prop: 'address',
                    },
                    {
                        label: '经纬度',
                        prop: '_lng_lat',
                    },
                ],
                popData: [],
                popPages: {
                    total: 0,
                    pageSize: 0,
                    currentPage: 0,
                },
                popFrom: {
                    province: '',
                    address: '',
                    pageNo: 1,
                    pageSize: 10,
                },
                //
                form: {
                    pop: [],
                },
            }
        },
        created() {

            Bus.$off('companyChange').$on('companyChange', res=> {
                this.$message.info('公司监听：' + res);
            });
            Bus.$off('caseChange').$on('caseChange', res=> {
                this.$message.info('展会监听：' + res);
            });
            window.xxx = this;

        },
        computed: {

            ...mapGetters(['elmCompanyKey', 'elmCaseKey']),

            popShow() {
                return this.form.pop.map(n=> n.name).join(', ');
            },

        },
        methods: {

            showRole() {
                this.$message.info('come soon...');
            },

            showCompany() {
                const data = window.localStorage.getItem(this.elmCompanyKey);
                this.$message.info('公司：' + data);
            },

            showCase() {
                const data = window.localStorage.getItem(this.elmCaseKey);
                this.$message.info('展会：' + data);
            },

            openSelector(e) {
                e.currentTarget.blur();
                //
                this.pop = true;
                this.popData = [];
                this.popFrom.pageNo = 1;
                this.popFrom.province = '';
                this.popFrom.address = '';
                this.loadElmHall();
                //
            },

            applySelected(data) {
                console.log(data);
                //
                this.pop = false;
                this.form.pop = data;
            },

            popChangePage(page) {
                this.popFrom.pageNo = page;
                this.loadElmHall();
            },

            //
            loadElmHall() {
                elmApi.getHall({
                    data: this.popFrom,
                    success: res=> {
                        const data = res.data.data;
                        this.popData = data.dataList.map(n=> {
                            return {
                                ...n,
                                _lng_lat: n.longitude +','+ n.latitude,
                            };
                        });
                        this.popPages = data.pagingInfo;
                    }
                })
            },

        },
    }
</script>

<style lang="scss" scoped>

    .demo-block {
        margin-bottom: 20px;

        h1 { margin-bottom: 20px; }
    }

</style>
