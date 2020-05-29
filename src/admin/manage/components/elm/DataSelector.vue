<template>

    <el-dialog custom-class="elm-selector"
               :visible="show" :title="showTitle" :width="width" :append-to-body="true" :close-on-click-modal="false"
               @close="close" @opened="open">

        <div slot="title" class="el-dialog__title">{{showTitle}}
            <small class="mode">（{{multiple? '多选':'单选'}}）</small>
        </div>

        <el-card shadow="never" class="filter">
            <slot></slot>
        </el-card>

        <el-row type="flex">
            <div class="p_l">
                <fros-table ref="table" :height="height" indexLabel="#" indexWidth="50" indexShow
                            :class="multiple? '':'single'" :stripe="true"
                            :dropCol="cols" :tableData="data" :selectionShow="true"
                            :pageShow="true" :pgconfig="pageConfig"
                            @rowClick="selectRow" @select="updateSelected" @getCurrentpage="updatePage">
                </fros-table>
            </div>
            <div class="p_r" v-show="multiple">
                <el-card shadow="never" class="selected" :body-style="'padding: 5px; height: '+height+';'">
                    <template v-if="selected_.length">
                        <el-tag v-for="(n,i) in selected_" :key="i" closable disable-transitions @close="remove(n.id)">
                            {{n.name}}
                        </el-tag>
                    </template>
                    <template v-else>
                        <el-link type="info" disabled>- 无选择</el-link>
                    </template>
                </el-card>
            </div>
        </el-row>

        <div slot="footer" class="buttons">
            <div class="status" v-show="!multiple">已选：
                <template v-if="selected_.length">
                    <el-tag v-for="(n,i) in selected_" :key="i" size="mini" closable disable-transitions @close="remove(n.id)">
                        {{n.name}}
                    </el-tag>
                </template>
                <template v-else>无</template>
            </div>
            <el-button type="primary" size="small" @click="apply">确 定</el-button>
            <el-button size="small" @click="close">取 消</el-button>
        </div>
    </el-dialog>

</template>

<script>

    const EVENTS = {
        SWITCH: 'update:show',
        CHANGE: 'changed',
        PAGE: 'page',
    };

    export default {
        name: "DataSelepctor",

        data() {
            return {
                selected_: [],
                pages_: {
                    disabled: true,
                    background: true,
                    smallSize: true,
                    total: 0,
                    pageSize: 0,
                    currentPage: 0,
                }
            }
        },

        props: {
            show: Boolean,
            title: String,
            width: String,
            height: String,
            multiple: Boolean,
            selected: Array,
            cols: Array,
            data: Array,
            pages: Object,
        },

        computed: {

            showTitle() {
                return (this.title||'') +'选择';
            },

            pageConfig() {
                return {
                    ...this.pages_,
                    disabled: this.pages.totalRows < 2,
                    total: this.pages.totalRows,
                    pageSize: this.pages.pageSize,
                    currentPage: this.pages.currentPage,
                };
            }

        },

        methods: {

            temp(data) {
                console.log('temp...');
            },

            selectRow(row, event) {
                // fix Fros.
                event.currentTarget.classList.remove('current-row');
                //
            },

            updateSelected(data) {
                if (this.multiple) {
                    this.selected_ = data;
                } else {
                    this.selected_ = data.slice(-1);
                    //
                    if (data.length > 1) this.updateRow();
                }
            },

            updateRow() {
                this.$refs.table.clearSelection();
                this.$refs.table.selectionData(this.selected_);
            },

            updatePage(page) {
                this.$emit(EVENTS.PAGE, page);
            },

            close() {
                this.selected_ = [];
                this.$refs.table.clearSelection();
                this.$emit(EVENTS.SWITCH, false);
            },

            open() {
                this.selected_ = this.selected.map(n=> {
                    return this.data.find(nn=> nn.id===n.id) || n;
                });
                this.$refs.table.selectionData(this.selected_);
            },

            remove(val) {
                this.selected_ = this.selected_.filter(n=> n.id!==val);
                this.$refs.table.clearSelection();
                this.$refs.table.selectionData(this.selected_);
            },

            apply() {
                const data = this.selected_.map(n=> ({...n}));
                this.$emit(EVENTS.CHANGE, data);
            },

        },

        watch: {
            data() {
                this.$nextTick(()=> this.updateRow());
            },
        },

    }
</script>

<style scoped>

</style>
