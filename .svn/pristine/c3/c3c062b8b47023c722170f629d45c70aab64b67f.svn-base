<template>
    <div class="common-iframe" :class="[isLong ? 'frame-top' : '', hasBread ? 'frame-bread-top' : '']">
      <template v-for="(item, index) in urlList">
        <iframe scrolling :src="item" :key="index" frameborder="0" v-show="index === curFrame"></iframe>
      </template>
    </div>
</template>

<script>
import Base from '@/assets/js/base'

export default {
  name: 'WebView',
  extends: Base,
  props: {
    params: {
      type: Object
    },
    isLong: {
      type: Boolean
    },
    hasBread: {
      type: Boolean
    },
    urlList: {
      type: Array
    }
  },
  data () {
    return {
      curFrame: 0
    }
  },
  created: function () {
    let self = this
    self.urlList.push(self._props.params.webViewUrl)
  },
  watch: {
    params: function (val, oldval) {
      let self = this
      if (val) {
        let idx = self.urlList.indexOf(val.webViewUrl)
        if (idx === -1) {
          self.curFrame = self.urlList.length - 1
        } else {
          self.curFrame = idx
        }
      }
    }
  }
}
</script>
