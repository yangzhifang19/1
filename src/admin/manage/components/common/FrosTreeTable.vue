<template>
    <div>
        <el-table
                :data="tableData"
                style="width: 100%"
                @expand-change="exchange"
                highlight-current-row
        >
            <slot name="header"></slot>
            <el-table-column type="expand">
                <template slot-scope="props">
                    <el-table
                            :data="childDate"
                            align="center" >
                        <el-table-column v-for="(item, index) in childHead" label-class-name="use"
                                         :key="index"
                                         :width="item.width"
                                         :prop="item.prop"
                                         :label="item.label">
                        </el-table-column>
                    </el-table>
                    <div class="pagebox">
                        <span class="btn_left">
                            <i v-show="childCutShow" title="剪切列" class="el-icon-menu"
                               style="color:#2B579A;font-size: 16px"
                               @click="childShow()"></i>
                            <i v-show="childFreshShow" title="刷新" class="el-icon-refresh" style="color:#2B579A" @click="refreshChild"></i>
                        </span>
                        <div v-show="childPageShow" class="pagelist">
                            <el-pagination
                                    @size-change="childHandleSizeChange"
                                    @current-change="childHandleCurrentChange"
                                    :current-page="childCurrentPage"
                                    :page-sizes="childPageTotal"
                                    :page-size="childPageSize"
                                    layout="total, sizes, prev, pager, next, jumper"
                                    :total="childTotal">
                            </el-pagination>
                        </div>
                    </div>
                    <!--弹框 剪切列-->
                    <el-dialog
                            title="剪切列"
                            :visible.sync="childColFilterDlgVisible"
                            width="40%" style="">
                        <div v-show="childFixedColumn" style="display: inline-block;margin-right: 20px;margin-bottom: 20px">
                            固定列数：
                            <div style="width:60px;height:32px;margin-right: 5px" class="el-input">
                                <el-input
                                        v-model="childNum"
                                        clearable>
                                </el-input>
                            </div>
                            <el-button size="small" type="primary" @click="childCombinNum">确定</el-button>
                        </div>
                        <el-transfer
                                :titles="['未显示列', '已显示列']"
                                v-model="childValue2"
                                :data="childData2"
                                filterable
                                @change="childHandleChange" @right-check-change="">
                        </el-transfer>
                    </el-dialog>
                </template>
            </el-table-column>
            <el-table-column v-for="(item, index) in tableHead" label-class-name="use"
                             :key="index"
                             :width="item.width"
                             :prop="item.prop"
                             :label="item.label">
            </el-table-column>
            <slot name="footer"></slot>
        </el-table>
        <div class="pagebox">
            <span class="btn_left">
                <i v-show="cutShow" title="剪切列" class="el-icon-menu"
                   style="color:#2B579A;font-size: 16px"
                   @click="show()"></i>
                <i v-show="freshShow" title="刷新" class="el-icon-refresh" style="color:#2B579A" @click="refresh"></i>
            </span>
            <div class="pagelist" v-show="pageShow">
                <el-pagination
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :current-page="currentPage"
                        :page-sizes="pageTotal"
                        :page-size="pageSize"
                        layout="total, sizes, prev, pager, next, jumper"
                        :total="total">
                </el-pagination>
            </div>
        </div>
        <!--弹框 剪切列-->
        <el-dialog
                title="剪切列"
                :visible.sync="colFilterDlgVisible"
                width="40%" style="">
            <div v-show="fixedColumn" style="display: inline-block;margin-right: 20px;margin-bottom: 20px">
                固定列数：
                <div style="width:60px;height:32px;margin-right: 5px" class="el-input">
                    <el-input
                            v-model="num"
                            clearable>
                    </el-input>
                </div>
                <el-button size="small" type="primary" @click="combinNum">确定</el-button>
            </div>
            <el-transfer
                    :titles="['未显示列', '已显示列']"
                    v-model="value2"
                    :data="data2"
                    filterable
                    @change="handleChange">
            </el-transfer>
        </el-dialog>
    </div>

</template>
<script>
    export default {
        props: {
            // 父表格数据
            tableData: Array,
            dropCol: Array,
            total: Number,
            cutShow: Boolean,
            itemShow:Boolean,
            fixedColumn:Boolean,
            freshShow: Boolean,
            pageShow: Boolean,
            // 子表格数据
            childDate: Array,
            childCol: Array,
            childTotal: Number,
            childCutShow: Boolean,
            childItemShow:Boolean,
            childFixedColumn:Boolean,
            childFreshShow: Boolean,
            childPageShow: Boolean
        },
        data () {
            return {
                // 父表数据
                num: 0,
                data2:[],
                value2: [],
                tableHead:[],
                colFilterDlgVisible:false,
                currentPage: 1,
                pageTotal: [1,2,3,4],
                pageSize: 1,
                // 子表数据
                childNum: 0,
                childData2:[],
                childValue2: [],
                childHead:[],
                childColFilterDlgVisible:false,
                childCurrentPage: 1,
                childPageTotal: [1,2,3,4],
                childPageSize: 1
            }
        },
        mounted () {
            this.headTable()
            this.childHeadTable ()
        },
        methods:{
            // 点击展开子表格
            exchange (row, expandedRows) {
                this.$emit('exchange',row,expandedRows)
            },
            // 父表方法
            refresh () {
                this.$emit('reFresh');
            },
            // 剪切列弹框初始化
            headTable (){
                for(let i=0;i<this.dropCol.length;i++){
                    this.data2.push(this.dropCol[i]);
                    this.value2.push(this.dropCol[i].prop)
                }
                for (let i=0;i<this.value2.length;i++){
                    for(let j=0;j<this.dropCol.length;j++){
                        if(this.value2[i] == this.dropCol[j].prop){
                            this.tableHead.push(this.dropCol[j])
                        }
                    }
                }
                // 初始化num值
                let numItem = []
                for(let i=0;i<this.dropCol.length;i++){
                    if(this.dropCol[i].fixed === true){
                        numItem.push(this.dropCol[i].fixed)
                    }
                }
                this.num = numItem.length
            },
            // 显示弹框
            show(){
                this.colFilterDlgVisible = true
                let cities = this.dropCol
                this.data2=[]
                cities.forEach((city) => {
                    this.data2.push({
                        label: city.label,
                        prop: city.prop,
                        filter:city.filter,
                        key: city.prop
                    });
                });
            },
            // transfer点击事件
            handleChange(value, direction, movedKeys) {
                this.tableHead=[]
                for (let i=0;i<this.value2.length;i++){
                    for(let j=0;j<this.dropCol.length;j++){
                        if(this.value2[i] == this.dropCol[j].prop){
                            this.tableHead.push(this.dropCol[j])
                        }
                    }
                }
                // console.log(value, direction, movedKeys);
            },
            // 固定列
            combinNum(){
                for (let i=0; i<this.tableHead.length; i++){
                    if (this.tableHead[i].fixed != 'right'){
                        this.tableHead[i].fixed = false
                        if(i<this.num){
                            this.tableHead[i].fixed = true
                        }
                    }
                }
            },
            // 分页
            handleSizeChange (val) {
                this.$emit("getPagesize",val)
                //console.log(`每页 ${val} 条`)
            },
            handleCurrentChange (val) {
                this.$emit("getCurrentpage",val)
                // console.log(`当前页: ${val}`)
            },
            // 子表方法
            refreshChild(){
                this.$emit('refreshChild');
            },
            childHeadTable (){
                for(let i=0;i<this.childCol.length;i++){
                    this.childData2.push(this.childCol[i]);
                    this.childValue2.push(this.childCol[i].prop)
                }
                for (let i=0;i<this.childValue2.length;i++){
                    for(let j=0;j<this.childCol.length;j++){
                        if(this.childValue2[i] == this.childCol[j].prop){
                            this.childHead.push(this.childCol[j])
                        }
                    }
                }
                // 初始化num值
                let numItem = []
                for(let i=0;i<this.childCol.length;i++){
                    if(this.childCol[i].fixed === true){
                        numItem.push(this.childCol[i].fixed)
                    }
                }
                this.childNum = numItem.length
            },
            // 显示弹框
            childShow(){
                this.childColFilterDlgVisible = true
                let cities = this.childCol
                this.childData2=[]
                cities.forEach((city) => {
                    this.childData2.push({
                        label: city.label,
                        prop: city.prop,
                        filter:city.filter,
                        key: city.prop
                    });
                });
            },
            // transfer点击事件
            childHandleChange(value, direction, movedKeys) {
                this.childHead=[]
                for (let i=0;i<this.childValue2.length;i++){
                    for(let j=0;j<this.childCol.length;j++){
                        if(this.childValue2[i] == this.childCol[j].prop){
                            this.childHead.push(this.childCol[j])
                        }
                    }
                }
                // console.log(value, direction, movedKeys);
            },
            // 固定列
            childCombinNum(){
                for (let i=0; i<this.childHead.length; i++){
                    if (this.childHead[i].fixed != 'right'){
                        this.childHead[i].fixed = false
                        if(i<this.childNum){
                            this.childHead[i].fixed = true
                        }
                    }
                }
            },
            // 分页
            childHandleSizeChange (val) {
                this.$emit("getChildPagesize",val)
                //console.log(`每页 ${val} 条`)
            },
            childHandleCurrentChange (val) {
                this.$emit("getChildCurrentpage",val)
                // console.log(`当前页: ${val}`)
            },
        }
    }
</script>
<style scoped>
    .pagebox{
        margin-top: 20px;
        clear: both;
    }
    .pagelist{
        display: inline-block;
        float:right
    }
    .el-checkbox + .el-checkbox {
        margin-left:0px;
    }
    .btn_left i{
        font-size: 18px;
        margin-right: 10px
    }
</style>
