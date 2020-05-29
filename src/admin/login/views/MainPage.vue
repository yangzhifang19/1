<template>
  <div>
    <h3>登录成功！！！</h3>
  </div>
</template>

<script>
export default {
  name: 'mainPage',
  created: function () {
    // 钩子函数，在页面创建前请求加载数据
    console.log('beforeCreate 创建前状态===============》')
  }
}
</script>

<style scoped>
  h3 {
    text-align: center;
    padding-top: 100px;
  }
</style>
