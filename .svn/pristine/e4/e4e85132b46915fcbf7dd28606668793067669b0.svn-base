<template>
  <div class="com-page-ctx">
    <div class="home-page-intro">
        <template v-if="!isMobile">
          <div class="home-page-header">
            <img :src="intro.logo" alt="">
            <div class="frame-intro">
              <div class="frame-main-title">FROS-UI</div>
              <div class="frame-sub-title">会展物流管理系统</div>
            </div>
          </div>
        </template>
        <template v-else>
          <div class="mhome-page-header">
            <img :src="intro.logo" alt="">
            <div class="frame-intro">
              <div class="frame-main-title">FROS-UI，会展物流管理系统</div>
            </div>
          </div>
        </template>
    </div>
    <div v-if="false" class="com-table mt">
      <div class="s-form">
        <div class="table-header clear">
          <strong>个人常用快捷入口</strong>
          <ul v-if="homeQuickList.homeQuickList.length !== 0">
            <li :class="[index % 2 === 0 ? 'double' : 'single']" v-for="(item, index) in dataOp" :key="index" v-html="item.text" @click="togger(item.method, item.params)">
            </li>
          </ul>
        </div>
        <div class="com-table-detail bdt bg">
          <ul class="home-quick clear" v-if="homeQuickList.homeQuickList.length !== 0">
            <li v-for="(item, index) in homeQuickList.homeQuickList" :key="index" @click="quickTo(item)">
              <span :class="['iconfont', item.icon]"></span>
              <div>{{ item.label }}</div>
            </li>
          </ul>
          <div class="empty-home-quick" v-else>
            暂无设置个人常用快捷入口，<span class="emphasis cp" @click="toSetting">马上设置</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Base from '@js/base'
import { mapGetters } from 'vuex'

export default {
  name: 'HomePage',
  extends: Base,
  data () {
    return {
      // home page demo
      intro: {
        logo: '/static/image/demo/logo.png',
        text: ''
      },
      // 数据操作
      dataOp: [
        {
          text: '<span class="icon-add"></span>设置',
          method: 'toSetting',
          params: false
        }
      ]
    }
  },
  computed: {
    ...mapGetters([
      'homeQuickList',
      'isMobile'
    ])
  },
  methods: {
    toSetting: function () {
      let self = this
      self.$newpage({
        title: '个性化设置',
        path: 'setting/Setting'
      })
    },
    quickTo: function (router) {
      let self = this
      self.$newpage({
        title: router.label,
        path: router.cp
      })
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../../../assets/scss/home/home.scss";
</style>
