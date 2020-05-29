<template>
    <div class="Table">
        <el-table :data="clonetableData"
                  ref="multipleTable"
                  :height="height"
                  :width="width"
                  :subtotalType="subtotalType"
                  border
                  row-key="id"
                  align="left"
                  @selection-change="handleSelectionChange"
                  highlight-current-row
                  id="multipleTable"
                  style="width: 100%">
            <slot name="footer"></slot>
            <el-table-column v-for="(item, index) in tableHead" label-class-name="use"
                             :key="index"
                             :width="item.width"
                             :prop="item.prop"
                             :label="item.label"
                             :fixed="item.fixed"
                             :sortable="item.sortable">
                <template slot-scope="scope" >
                    <div v-show="showAll" >
                        <!--{{scope.row[item.prop]}}-->
                        <span v-html="statusFormatter(item.prop,scope.row[item.prop])"></span>
                       <!-- <span v-html="state"></span>-->
                    </div>
                    <div v-show="showPart">
                        <i v-show="scope.row[item.prop]" :class="changeClass(scope.row.frosClass)"
                           @click="cell(scope,scope.$index,item.prop)"></i>
                        <span v-html="statusFormatter(item.prop,scope.row[item.prop])"></span>
                    </div>
                </template>
                <!-- 过滤方法 -->
                <template slot="header" slot-scope="{ column }">
                    <span>{{ column.label }}</span>
                    <el-popover
                            placement="bottom-start"
                            width="400"
                            trigger="manual"
                            :ref="item.prop">
                        <!--search-data是筛选出来的过滤条件，search-data是过滤条件对应的key-->
                        <FrosSortHeader :search-data="item.filterData" :prop-data="item.prop"
                                        v-on:childByValue="submitData"
                                        v-on:pClose="pClose">
                        </FrosSortHeader>
                        <i slot="reference" @click="popover($event,item.prop)" v-show="item.filterShow" class="iconfont fros-icon-shaixuanguolv"></i>
                    </el-popover>
                </template>
                <!-- 过滤end-->
            </el-table-column>
            <!--自定义添加列的内容-->
            <slot name="header"></slot>
        </el-table>
        <!--分页-->
        <div class="pagebox">
            <span class="btn_left">
                <i v-show="cutShow" title="剪切列" class="el-icon-menu"
                   style="color:#2B579A;font-size: 16px"
                   @click="show()"></i>
                <i v-show="itemShow" title="分组" class="el-icon-star-on" style="color:#2B579A;font-size: 16px" @click="showItem()"></i>
                <i title="刷新" class="el-icon-refresh" style="color:#2B579A;font-size: 16px" @click="refresh"></i>
            </span>
            <div class="pagelist">
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
                :visible.sync="dialogVisible"
                width="550px">
            <div v-show="fixedColumn" style="display: inline-block;margin-right: 20px;margin-bottom: 20px">
                固定列数：
                <div style="width:60px" class="el-input">
                    <el-input
                            v-model="num"
                            clearable>
                    </el-input>
                </div>
                <!-- <el-button size="small" type="primary" @click="combinNum">确定</el-button>-->
            </div>
            <div id="fros_transfer">
                <el-transfer
                        :titles="['未显示列', '已显示列']"
                        v-model="value2"
                        :data="data2"
                        filterable
                        target-order="push"
                        @right-check-change="rightChange">
                    <ul id="frosTransfer" class="transfer-footer" slot="right-footer" style="position: static;height:20px">
                        <li @click="stickTop"><i class="el-icon-upload2"></i></li>
                        <li @click="stickBottom"><i class="el-icon-download"></i></li>
                        <li @click="upLevel"><i class="el-icon-caret-top"></i></li>
                        <li @click="downLevel"><i class="el-icon-caret-bottom"></i></li>
                    </ul>
                </el-transfer>
                <!-- <div><el-button @click="transferSumit" type="primary" size="mini">确定</el-button></div>-->
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button size="mini" @click="dialogVisible = false">取 消</el-button>
                <el-button size="mini" type="primary" @click="transferSumit" >确 定</el-button>
            </span>
        </el-dialog>
        <!--弹框 分组-->
        <el-dialog
                title="分组"
                :visible.sync="itemVisible"
                width="550px" style="">
            <el-transfer
                    :titles="['未分組', '已分組']"
                    v-model="value3"
                    :data="data3"
                    filterable
                    target-order="push">
            </el-transfer>
            <span slot="footer" class="dialog-footer">
                <el-button size="mini" @click="itemVisible = false">取 消</el-button>
                <el-button size="mini" type="primary" @click="handleChangeitem" >确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<script>
    let time = null;  //  在这里定义time 为null
    export default {
        watch: {
            tableData (val, oldVal) {
                if (val !== oldVal) {
                    this.clonetableData = val
                    this.elasticList()
                }
            },
            dropCol (val, oldVal) {
                if (val !== oldVal) {
                    this.tableHead = val
                }
            }
        },
        props:{
            // 基础数据
            width: Number,
            height: Number,
            cutShow: Boolean,
            itemShow: Boolean,
            fixedColumn: Boolean,
            addSubtotal: Boolean,
            subtotalType: Object,
            // 表格
            col: Array,
            dropCol: Array,
            tableData: Array,
            // 分页
            currentPage: Number,
            pageSize: Number,
            total: Number,
            pageTotal: Array
        },
        data() {
            return {
                showAll:true,
                showPart:false,
                isNum: '',
                headList:[],
                // 表头过滤
                searchInfo: {}, // 表头搜索提交数据
                // 分组筛选
                clonedropCol:[], // 本地存储数据
                clonetableData:[], // 本地存储数据
                tableOne:[], // 第一遍筛选出来表头数据
                tableTwo:[], // 第一遍筛选出来的表格数据
                changeTable: [], // 每次存取的数据
                // 点击单元格事件
                cellIndex: null, // 获取当前行index
                cellProp: '', // 获取当前text
                cellText: '', // 当前文本
                filDate: [], // 每次过滤后的数据
                condition: {}, // 过滤条件集合
                // 添加汇总功能
                subList: {}, // 存汇总类型
                allCountList: {}, // 设置汇总初始化
                typeList: [], // 判断汇总类型
                // 剪切列弹框
                num: 0,
                data2:[],
                value2: [],
                tableHead:[],
                dialogVisible:false,
                // 分组弹框
                itemVisible:false,
                data3:[],
                value3:[],
                // 分页
               /* currentPage: 1,
                pageSize:1,*/
            }
        },
        mounted() {
            this.initData()
            this.headTable()
            this.judgeTypeList()
            this.elasticList()
            // 拖动更改复选框状态
            var ckbSelf = this
            document.getElementById("multipleTable").querySelector('.el-table__body-wrapper tbody').onmousedown = function(ev){
                var ev = ev || event
                const oTable = document.getElementById("multipleTable")
                const asideWidth = document.getElementsByTagName("aside")[0].offsetWidth
                const tHeadHeight = oTable.querySelector('.el-table__header-wrapper thead').rows[0].offsetHeight
                const headerHeight = document.getElementsByTagName("header")[0].offsetHeight
                const checkboxWidth = oTable.querySelector('.el-table__body-wrapper tbody').rows[0].cells[0].offsetWidth
                let disX = ev.clientX - oTable.offsetLeft- asideWidth;
                let disY = ev.clientY - oTable.offsetTop - headerHeight - tHeadHeight;
                if(disX <= checkboxWidth){
                    localStorage.setItem("startY", disY);
                }
                document.onmouseup = function(ev){
                    disX = ev.clientX - oTable.offsetLeft- asideWidth;
                    disY = ev.clientY - oTable.offsetTop - headerHeight - tHeadHeight;
                    if(disX <= checkboxWidth){
                        const scrollT = oTable.querySelector('.el-table__body-wrapper').scrollTop
                        const rowLength = oTable.querySelector('.el-table__body-wrapper tbody').rows
                        let rowsHeight = 0
                        let start = 0
                        let end = 0
                        let boolStart = true
                        let boolEnd = true
                        for(let i=0; i<rowLength.length; i++){
                            rowsHeight += rowLength[i].offsetHeight
                            if((rowsHeight - scrollT) > localStorage.getItem("startY")  && boolStart === true) {
                                start = i
                                boolStart = false
                            }
                            if((rowsHeight - scrollT) > disY && boolEnd === true) {
                                end = i
                                let rows = []
                                if(start !== end){
                                    for(let i=start;i<end+1;i++){
                                        rows.push(ckbSelf.clonetableData[i])
                                    }
                                    ckbSelf.toggleSelection(rows)
                                }
                                boolEnd = false
                            }
                        }
                    }
                }
            }
        },
        methods: {
            // 手动触发popover弹框
            popover(ev,prop) {
                for(let i=0; i<this.tableHead.length; i++){
                    if(this.tableHead[i].filterShow === true){
                        if (this.tableHead[i].prop != prop) {
                            this.$refs[this.tableHead[i].prop][0].doClose()
                        }
                    }
                }
                this.$refs[prop][0].doToggle()
                ev.stopPropagation()
            },
            // 关闭表头筛选框
            pClose(prop) {
                this.$refs[prop][0].doClose()
            },
            // 拖拽时复选框选中与取消选中
            toggleSelection(rows) {
                if (rows) {
                    rows.forEach(row => {
                        this.$refs.multipleTable.toggleRowSelection(row);
                    });
                }
            },
            // 表头数据筛选
            doFilter(array, filters) {
                const filterKeys = Object.keys(filters)
                return array.filter((item) => {
                    return filterKeys.every(key => {
                        if(!filters[key].length) return true
                        return !!~filters[key].indexOf(item[key])
                    })
                })
            },
            // 过滤筛选列表数据
            unique(_this, arr, strArr) {
                strArr.map(function(str){ // 筛选对象名称
                    let getArr = []
                    let dataArr = []
                    _this[arr[0]][str] = []
                    _this[arr[1]].map(function (item) { // 从arr对象中筛选对象
                        dataArr.push(item[str])
                    })
                    dataArr = Array.from(new Set(dataArr)) // 去重
                    dataArr.map(function (item, index) {
                        getArr.push({'name':item,'value':index})
                    })
                    _this[str] = getArr
                })
            },
            // 获取表头搜索数据和列表数据
            elasticList: function () {
                let self = this
                let arr = []
                for(let i=0; i<self.tableHead.length; i++){
                    arr.push(self.tableHead[i].prop)
                }
                // 用于筛选列表，1、对象，2、[搜索条件，搜索原始列表]，3、[每个搜索条件](与数据库对应属性名称一致)
                self.unique(self, ['searchInfo', 'tableData'],
                    arr)
                for(let i=0; i<arr.length; i++){
                    self.tableHead[i]['filterData'] = this[arr[i]]
                }
            },
            // 提交表头筛选数据
            submitData (data) {
                let self = this
                if (data !== null) {
                    let name = Object.keys(data)
                    self.searchInfo[name] = data[name]
                    self.clonetableData = self.doFilter(self.tableData, self.searchInfo)
                }
            },


            // 数据初始化
            initData(){
                localStorage.setItem("orData",JSON.stringify(this.tableData))
                this.clonedropCol = this.dropCol
                this.clonetableData = this.tableData
            },
            // 改变分组按钮样式
            changeClass(val){
                if(val==true){
                    return 'el-icon el-icon-circle-plus'
                }else if(val==false){
                    return 'el-icon el-icon-remove'
                }else{
                    return ''
                }
            },
            // 改变状态
            statusFormatter(prop, value){
                let tableHead = this.tableHead
                for(let i=0; i<tableHead.length; i++){
                    let item = tableHead[i]
                    if(prop == item.prop){
                        if(item.formatterType == undefined){
                            return value
                        }else{
                            let list = item.formatterType
                            for(let j=0; j<list.length; j++){
                                if(value == list[j].value){
                                    return list[j].key
                                }
                            }
                        }
                    }
                }
            },

            // 剪切列弹框初始化
            headTable(){
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
            // 显示剪切列弹框
            show(){
                this.dialogVisible = true
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
            // 固定列
            combinNum () {
                let num = parseInt(this.num)
                this.num = num
                if(isNaN(this.num)){
                    this.num =0
                    this.$message.error('请输入正确的数字')
                }else{
                    for (let i = 0; i < this.tableHead.length; i++) {
                        if (this.tableHead[i].fixed != 'right') {
                            this.tableHead[i].fixed = false
                            if (i < this.num) {
                                this.tableHead[i].fixed = true
                            }
                        }
                    }
                }
            },
            // 获取排序的选项
            rightChange(key) {
                this.sortData=key
            },
            // 排序置顶
            stickTop() {
                // 改变剪切列顺序
                if(this.sortData.length == 1){
                    for(let i=0; i<this.value2.length; i++){
                        for(let j=0; j<this.sortData.length; j++){
                            if(this.value2[i] == this.sortData[j]){
                                let item = this.value2[i]
                                this.value2.splice(i,1)
                                this.value2.unshift(item)
                            }
                        }
                    }
                }else if(this.sortData.length==0){
                    this.$message.error('请选择一条数据')
                }else{
                    this.$message.error('只能选择一条数据排序')
                }

                // 改变表头数据
                // this.sortThead()
            },
            // 排序置底
            stickBottom() {
                // 改变剪切列顺序
                if(this.sortData.length == 1){
                    for(let i=0; i<this.value2.length; i++){
                        for(let j=0; j<this.sortData.length; j++){
                            if(this.value2[i] == this.sortData[j]){
                                let item = this.value2[i]
                                this.value2.splice(i,1)
                                this.value2.push(item)
                            }
                        }
                    }
                }else if(this.sortData.length==0){
                    this.$message.error('请选择一条数据')
                }else{
                    this.$message.error('只能选择一条数据排序')
                }
            },
            // 上一级
            upLevel() {
                // 改变剪切列顺序
                if(this.sortData.length == 1){
                    for(let i=0; i<this.value2.length; i++){
                        for(let j=0; j<this.sortData.length; j++){
                            if(this.value2[i] == this.sortData[j]){
                                let item = this.value2[i]
                                this.value2.splice(i,1)
                                if(i-1 <= 0){
                                    this.value2.splice(0,0,item)
                                }else{
                                    this.value2.splice(i-1,0,item)
                                }
                            }
                        }
                    }
                }else if(this.sortData.length==0){
                    this.$message.error('请选择一条数据')
                }else{
                    this.$message.error('只能选择一条数据排序')
                }
            },
            // 下一级
            downLevel() {
                // 改变剪切列顺序
                if(this.sortData.length == 1){
                    let tempList = JSON.parse(JSON.stringify(this.value2))
                    for(let i=0; i<this.value2.length; i++){
                        let val = this.value2[i]
                        for(let j=0; j<this.sortData.length; j++){
                            let sor = this.sortData[j]
                            if(val == sor){
                                let item = tempList[i]
                                tempList.splice(i,1)
                                if(Number(i)+1 >= Number(tempList.length)){
                                    tempList.splice(Number(tempList.length),0,item)
                                }else{
                                    tempList.splice(Number(i)+1,0,item)
                                }
                            }
                        }
                    }
                    this.value2 = tempList // 数据置换
                }else if(this.sortData.length==0){
                    this.$message.error('请选择一条数据')
                }else{
                    this.$message.error('只能选择一条数据排序')
                }
            },
            // 表头排序
            sortThead() {
                this.tableHead = []
                for (let i = 0; i < this.value2.length; i++) {
                    for (let j = 0; j < this.dropCol.length; j++) {
                        if (this.value2[i] === this.dropCol[j].prop) {
                            this.tableHead.push(this.dropCol[j])
                        }
                    }
                }
            },
            // 剪切确定按钮
            transferSumit() {
                // 修改列排序
                this.sortThead()
                // 固定列
                this.combinNum()
                this.dialogVisible = false
            },

            // 分组弹框
            showItem(){
                this.itemVisible = true
                let items = this.tableHead
                this.data3 = []
               // console.log(items)
                items.forEach((item,index) => {
                    this.data3.push({
                        label: item.label,
                        // prop: item.prop,
                        // filter:item.filter,
                        key: item.prop,
                        disabled: false
                    })
                })

                // 判断是否开启汇总开关
                if(this.addSubtotal == true){
                    // 数组对比值
                    let typeList = this.typeList
                    for(let i=0;i<typeList.length;i++){
                        for(let j=0;j<this.data3.length;j++){
                            if(typeList[i] == this.data3[j].key){
                                this.data3[j].disabled = true
                            }
                        }
                    }
                }

            },
            // 判断汇总类型
            judgeTypeList(){
                this.typeList = []
                for(let key in this.subtotalType){
                    this.typeList.push(key)
                }
            },
            // 确定分组筛选
            handleChangeitem() {
                if(this.value3.length !=0){
                    // 根据选项表头数据重新排序
                    let newHead = []
                    for (let i=0;i<this.value3.length;i++){
                        for (let n =0;n<this.tableHead.length;n++){
                            if(this.value3[i] === this.tableHead[n].prop){
                                newHead.push(this.tableHead[n])
                                this.tableHead.splice(n,1)
                            }
                        }
                    }
                    for (let j=newHead.length-1;j>=0; j--) {
                        this.tableHead.unshift(newHead[j])
                    }
                   this.groupFilter(0)
                }else{
                    this.tableHead = this.clonedropCol
                    this.clonetableData = JSON.parse(localStorage.getItem('orData'))
                    this.tableOne = []
                    this.showAll=true
                    this.showPart=false
                }
                this.itemVisible = false
            },
            // 隐藏汇总按钮
            btnDel(){
                let typeList = this.typeList
                // 获取长度
                let listNum = []
                for(let i=0;i<this.tableHead.length;i++){
                    for(let j=0;j<typeList.length;j++){
                        if(typeList[j] == this.tableHead[i].prop){
                            listNum.push(i+1)
                        }
                    }
                }
                // 获取表头 单元格class集合
                let tbHead = document.getElementsByTagName('thead')[0]
                this.$nextTick(function () {
                    let trCell = tbHead.children[0]
                    let thList = trCell.children
                    let nameList = []
                    for(let i=0;i<listNum.length;i++){
                        nameList.push(thList[listNum[i]].classList[0])
                    }
                    // 循环class集合 去掉按钮
                    for(let i=0; i<nameList.length;i++){
                        let tbody = document.getElementsByTagName('tbody')[0]
                        let btnParent = tbody.getElementsByClassName(nameList[i])
                        for(let m=0;m<btnParent.length;m++){
                            let btn = btnParent[m].lastChild
                            let ibtn = btn.getElementsByTagName('i')[0]
                            ibtn.style.display = 'none'
                        }
                    }
                })
            },
            // 点击切换样式
            cell (scope,index,prop){
                let el = window.event.currentTarget
                this.cellText = el.offsetParent.innerText
                this.cellIndex = null
                this.cellIndex = index
                this.cellProp = prop
                if(scope.row.frosClass == true){
                    // 点击加号方法
                    scope.row.frosClass = false
                    for(let i=0;i<this.value3.length;i++){
                        if(prop==this.value3[i]){
                            let num = i+1
                            // 查找层级数据
                            if (this.value3[num] != undefined) {
                                let group = JSON.parse(JSON.stringify(this.clonetableData[this.cellIndex].frosGroup))
                                this.ChangeFormatter(prop)
                                group.push(this.cellText)
                                this.condition = {}
                                for(let n=0;n<group.length;n++){
                                    this.condition[this.value3[n]] = group[n]
                                }
                                this.dataFilter (num)
                                this.groupFilter (num)
                            }else{
                                // 查找详细数据
                                let group = JSON.parse(JSON.stringify(this.clonetableData[this.cellIndex].frosGroup))
                                this.ChangeFormatter(prop)
                                group.push(this.cellText)
                                this.condition = {}
                                for(let n=0;n<group.length;n++){
                                    this.condition[this.value3[n]] = group[n]
                                }
                                this. dataFinal()
                            }
                        }
                    }
                }else{
                    // 点击减号方法
                    scope.row.frosClass = true
                    el.className = 'el-icon el-icon-circle-plus'
                    let itemNum = []
                    this.ChangeFormatter(prop)
                    for (let i=0;i<this.clonetableData.length;i++){
                        if(this.clonetableData[i].frosGroup.indexOf(this.cellText) > -1){
                            itemNum.push(i)
                        }
                    }
                    this.clonetableData.splice(itemNum[0], itemNum.length);
                }
            },
            // 点击加号转换状态值
            ChangeFormatter(prop){
                let tableHead = this.tableHead
                for(let i=0; i<tableHead.length; i++){
                    let item = tableHead[i]
                    if(prop == item.prop){
                        if(item.formatterType == undefined){
                            return this.cellText
                        }else{
                            let list = item.formatterType
                            for(let j=0; j<list.length; j++){
                                if(this.cellText == list[j].key){
                                    this.cellText = list[j].value
                                    //return list[j].val
                                }
                            }
                        }
                    }
                }
            },
            // 分组筛选
            groupFilter(index){
                let label = this.value3[index]
                this.tableOne = []
                if(index==0){
                    this.clonetableData = JSON.parse(localStorage.getItem('orData'))
                    this.tableOne = this.clonetableData.map(function (item) {
                        return item[label]
                    })
                    this.tableOne = Array.from(new Set(this.tableOne))
                    // 判断是否开启汇总方法
                    if(this.addSubtotal==true){
                        this.dataFilter(index)
                    }
                }else{
                    this.clonetableData = this.filDate
                    let propList = this.filDate.map(function (item) {
                        return item[label]
                    })
                    propList = Array.from(new Set(propList)) // 去重
                    this.tableOne = propList
                }
                this.tableTwo = []
                for(let i=0;i<this.tableOne.length;i++) {
                    let item = {
                        [label]: this.tableOne[i],
                        frosGroup : [],
                        frosClass :true
                    }
                    this.tableTwo.push(item)
                }
                this.showAll=false
                this.showPart=true
                if(index==0){
                    // 判断是否开启汇总方法
                    if(this.addSubtotal==true){
                        let typeList = this.typeList
                        for(let i=0;i<typeList.length;i++){
                            let item = typeList[i]
                            let vList = this.allCountList[item]
                            for (let v=0;v<this.tableTwo.length;v++){
                                this.tableTwo[v][item] = vList[v]
                            }
                        }
                        this.btnDel()
                    }
                    this.clonetableData = this.tableTwo
                    this.changeTable = this.clonetableData
                }
                else{
                    // 表格改变成上一次数据
                    this.clonetableData = this.changeTable
                    let group = Array.from(new Set(this.clonetableData[this.cellIndex].frosGroup))
                    let grouplist = JSON.parse(JSON.stringify(group))
                    grouplist.push(this.cellText)
                    // 判断是否汇总
                    if(this.addSubtotal==true){
                        // 获取计算类型的key
                        let typeList = this.typeList
                        // 新增属性
                        for(let i=0;i<typeList.length;i++){
                            let item = typeList[i]
                            let vList = this.allCountList[item]
                            for (let v=0;v<this.tableTwo.length;v++){
                                this.tableTwo[v].frosGroup = Array.from(new Set(grouplist))
                                this.tableTwo[v][item] = vList[v]
                            }
                        }
                        for(let m=0; m<this.tableTwo.length;m++){
                            this.clonetableData.splice(this.cellIndex+m+1,0,this.tableTwo[m])
                        }
                        this.changeTable = this.clonetableData
                        this.btnDel()
                    }else{
                        for (let v=0;v<this.tableTwo.length;v++){
                            this.tableTwo[v].frosGroup = Array.from(new Set(grouplist))
                        }
                        // 把新数据添加进表格里
                        for(let m=0; m<this.tableTwo.length;m++){
                            this.clonetableData.splice(this.cellIndex+m+1,0,this.tableTwo[m])
                        }
                        this.changeTable = this.clonetableData
                    }
                }
            },
            // 层级数据过滤
            dataFilter(num){
                let data = JSON.parse(localStorage.getItem('orData'))
                let filter=(condition,data)=>{
                    return data.filter( item => {
                        return Object.keys( condition ).every( key => {
                            return String( item[ key ] ).toLowerCase().includes(
                                String( condition[ key ] ).trim().toLowerCase() )
                        } )
                    } )
                }
                this.filDate = []
                this.filDate = filter(this.condition,data)

                // 计算数据值
                // 判断是否开启汇总方法
                if(this.addSubtotal==true){
                    let prop = this.value3[num] // 计算的属性只

                    let allList = {} // 总的变量
                    // 获取到下一级别的具体的属性值
                    let propList = this.filDate.map(function (item) {
                        return item[prop]
                    })
                    propList = Array.from(new Set(propList)) // 去重
                    // 获取计算类型的key
                    let typeList = this.typeList
                    let filterData = JSON.parse(JSON.stringify(this.filDate))
                    // 添加所有的数据变量添加
                    for(let i=0;i<propList.length;i++){
                        let itemList = propList[i]
                        let list = allList[itemList]={}
                        for(let n=0;n<typeList.length; n++){
                            let item = typeList[n]
                            list[item] = []
                            for(let j=0; j<filterData.length;j++){
                                if(itemList == filterData[j][prop]){
                                    list[item].push(filterData[j][item])
                                }
                            }
                        }
                    }
                    // set计算初始化
                    for(let key in this.subtotalType){
                        this.allCountList[key] = []
                    }
                    // 判断计算类型
                    for(let i=0; i<propList.length;i++){
                        let item =  allList[propList[i]]
                        for(let key in this.subtotalType){
                            let val = this.subtotalType[key]
                            if(val == 'count'){
                                this.totalCount(key,item)
                            }else if(val == 'sum'){
                                this.totalSum(key,item)
                            }else if(val == 'min'){
                                this.totalMin(key,item)
                            }else if(val == 'max'){
                                this.totalMax(key,item)
                            }else if(val == 'ave'){
                                this.totalAverage(key,item)
                            }
                        }
                    }
                }
            },
            // 计算条数
            totalCount(key,item){
                let listItem = item[key]
                let list = this.allCountList[key]
                list.push('count:'+listItem.length)
               // this.delBtn()
            },
            // 计算总和
            totalSum(key,item){
                let listItem = item[key]
                let list = this.allCountList[key]
                let sum = null
                for(let i=0;i<listItem.length;i++){
                    sum = sum +listItem[i]
                }
                list.push('sum:'+sum)
            },
            // 计算最小值
            totalMin(key,item){
                let listItem = item[key]
                let list = this.allCountList[key]
                let minVal = null
                minVal = Math.min.apply(null, listItem)
                list.push('min:'+minVal)
            },
            // 计算最大值
            totalMax(key,item){
                let listItem = item[key]
                let list = this.allCountList[key]
                let maxVal = null
                maxVal = Math.max.apply(null, listItem)
                list.push('max:'+maxVal)
            },
            // 计算平均值
            totalAverage(key,item){
                let listItem = item[key]
                let list = this.allCountList[key]
                let sum = null
                let ave = null
                for(let i=0;i<listItem.length;i++){
                    sum = sum +listItem[i]
                }
                ave = sum / listItem.length
                let final = 'average:'+(ave.toFixed(2))
                list.push(final)
            },
            // 最终的过滤信息
            dataFinal(){
                let data = JSON.parse(localStorage.getItem('orData'))
                let filter=(condition,data)=>{
                    return data.filter( item => {
                        return Object.keys( condition ).every( key => {
                            return String( item[ key ] ).toLowerCase().includes(
                                String( condition[ key ] ).trim().toLowerCase() )
                        } )
                    } )
                }
                // 过滤最终的数据
                let listData = []
                listData = filter(this.condition,data)  // 过滤结果
                let tempLastGrop = JSON.parse(JSON.stringify(this.clonetableData[this.cellIndex].frosGroup))
                tempLastGrop.push(this.cellText)
                for(let i=0; i <listData.length; i++){
                    listData[i].frosGroup = tempLastGrop
                }
                for(let j=0; j <listData.length; j++){
                    this.clonetableData.splice(this.cellIndex+1,0,listData[j])
                }
            },

            // 单击
            singleClick(row,column,event,cell){
                clearTimeout(time)
                time = setTimeout(() => {
                    console.log('单击'+column.id)
                }, 300)
            },
            // 双击
            doubleClick(row,column,event,cell){
                clearTimeout(time);
                console.log('双击'+column.id)
            },

            // 全选
            handleSelectionChange(val){
                this.$emit('handleSelectionChange',val)
            },
            // 表格刷新
            refresh() {
                this.$emit('reFresh');
            },
            // 分页
            handleSizeChange (val) {
                this.$emit("getPagesize",val)
                //console.log(`每页 ${val} 条`)
            },
            handleCurrentChange (val) {
                this.$emit("getCurrentpage",val)
                // console.log(`当前页: ${val}`)
            }
        }
    }
</script>
<style>
    #fros_transfer .el-transfer-panel{padding-bottom: 40px;}
    #frosTransfer li{display: inline-block;padding: 8px 5px;margin: 0 3px}
    .element_none{display: none}
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
