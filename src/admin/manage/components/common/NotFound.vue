<template>
  <div class="com-page">
    <div class="not-found-wrp">
      <fros-table
        ref="unitMultipleTable"
        :tableData="tableData"
        :dropCol="dropCol"
        :indexShow="true"
        indexLabel="序号"
        indexWidth="50"
        :selectionShow="true"
        :buttonListShow="true"
        :addBtnList="addBtnList"
      ></fros-table>
      <!-- <img class="not-found-img" :src="notFoundImg" alt="">
      <div class="not-found-text">该页面组件不存在</div>-->
    </div>
  </div>
</template>

<script>
import Base from "@/assets/js/base";

export default {
  name: "NotFound",
  extends: Base,
  data() {
    return {
      notFoundImg: "/static/image/manage/404.png",
      // 表头数据
      // 表头数据
      dropCol: [
        {
          width: 150,
          label: "日期",
          prop: "date"
        },
        {
          width: 150,
          label: "姓名",
          prop: "name"
        }
      ],
      // 表格基础数据
      tableData: [
        {
          id: "1",
          date: "1990-01-15",
          name: "王小虎"
        }
      ],
      // 自定义操作列数据
      addBtnList: {
        label: "操作",
        width: 200,
        list: [
          {
            title: "查看",
            icon: "el-icon-circle-plus-outline",
            methods: "addItem",
            showBtn: true
          },
          {
            title: "编辑",
            icon: "el-icon-edit",
            methods: "addItem2",
            showBtn: true
          },
          {
            title: "删除",
            icon: "el-icon-delete",
            methods: "addItem3",
            showBtn: true

            // showBtn: "scope.row.IsAudit==1?true:false"
          }
        ]
      }
    };
  },
  methods: {
    // 操作列按钮方法
    listenCall(methodsWords, scope, el) {
      console.log("methodsWords", methodsWords, scope, el);
      this[methodsWords](scope, el);
    },
    addItem(scope, el) {
      console.log(scope, el);
      alert("查看");
    }
    // addItem2(scope, el) {
    //   console.log(scope, el);
    //   alert("编辑");
    // },
    // addItem3(scope, el) {
    //   console.log(scope, el);
    //   alert("删除");
    // }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../../assets/scss/component/notfound.scss";
</style>
