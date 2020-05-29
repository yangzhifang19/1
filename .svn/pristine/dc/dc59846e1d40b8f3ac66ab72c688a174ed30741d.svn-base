<template>
  <div class="login-ctx">
    <el-container class="login-wrp">
      <el-header height="100px" class="login-banner">
        <span class="icon icon-logo"></span>
        <div v-if="false" class="lang-pick">
          <el-dropdown>
            <span :class="['iconfont', 'fros-icon-language']">
              <span class="lang-text">{{ langIconDict[curLang].name }}</span>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item :class="[curLang === index ? 'cur' : '']" v-for="(item, index) in langIconDict" :lang-name="index" @click.native="changeLang" :key="index">{{ item.text }}</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-header>
      <el-main class="login-pannel-wrp">
        <div class="login-main">
          <div class="login-pannel">
            <div class="login-title">{{ $t('login.loginTitle') }}</div>
            <el-form label-position="left" ref="loginForm" :model="loginForm" :rules="loginForm.rules">
              <el-form-item prop="username.value">
                <span class="icon icon-user"></span>
                <el-input v-model="usernameValue" :placeholder="$t(loginForm.username.placeholder)">
                </el-input>
              </el-form-item>
              <el-form-item  prop="pwd.value">
                <span class="icon icon-password"></span>
                <el-input type="password" v-model="loginForm.pwd.value" :placeholder="$t(loginForm.pwd.placeholder)">
                </el-input>
              </el-form-item>

              <el-form-item >
                <el-col :span="11">
                  <el-form-item prop="vcode.value">
                    <span class="icon icon-password"></span>
                    <el-input v-model="loginForm.vcode.value" :placeholder="$t(loginForm.vcode.placeholder)">
                    </el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="2">&nbsp;</el-col>
                <el-col :span="11">
                  <img src="/frosapis/bootapp/kaptcha.jpg" class="image" />
                  <!--<img src="/frosapis/bootapp/abc.htm" class="image" />-->
                </el-col>
              </el-form-item>

            </el-form>
            <el-checkbox-group v-model="loginForm.isRemeber">
              <el-checkbox :label="$t('login.keepLogin')" name="isRemeber"></el-checkbox>
            </el-checkbox-group>
            <el-button type="primary" class="login-button" @click="toLogin" :disabled="!loginForm.isAble">{{ $t('login.loginBtn') }}</el-button>
            <div class="login-op">
              <!--<a href="#">{{ $t('login.registerBtn') }}</a>-->
              <a href="#">{{ $t('login.forgotPwd') }}</a>
            </div>
          </div>
        </div>
      </el-main>
      <div class="login-footer">
        <div class="login-friend-link">
          <a :href="item.url" v-for="(item, index) in footData.friendLink" :key="index">
            {{ item.text }}
          </a>
        </div>
      </div>
      <div class="company-info" v-html="footData.companyInfo">
      </div>
    </el-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import i18n from '@/assets/js/lang'

export default {
  name: 'Login',
  data () {
    return {
      langIconDict: i18n.options.messages,
      loginForm: {
        username: {
          placeholder: 'login.userName',
          value: ''
        },
        pwd: {
          placeholder: 'login.userPwd',
          value: ''
        },
        vcode: {
          placeholder: 'login.vcode',
          value: ''
        },
        isRemeber: false,
        isAble: true,
        rules: {
          'username.value': [
            {required: true, message: '请输入用户名', trigger: 'blur'}
          ],
          'pwd.value': [
            {required: true, message: '请输入密码', trigger: 'blur'}
          ],
          'vcode.value': [
            {required: true, message: '请输入验证码', trigger: 'blur'}
          ]
        }
      },
      footData: {
        friendLink: [
          {
            text: '关于我们',
            url: ''
          },
          {
            text: '联系我们',
            url: ''
          },
          {
            text: '免责条款',
            url: ''
          }
        ],
        companyInfo: '版权所用©2018 <a href="#">FrosUI</a> All Rights Reserved FrosUI'
      }
    }
  },
  computed: {
    ...mapGetters(['curLang']),
    usernameValue: {
      get: function () {
        let self = this
        return self.loginForm.username.value
      },
      set: function (value) {
        let self = this
        // self.loginForm.username.value = (value || '').toUpperCase()
        self.loginForm.username.value = (value || '')
      }
    }
  },
  methods: {
    toLogin: function () {
      let self = this
      if (!self.validateFormData() || !self.loginForm.isAble) {
        return false
      }
      let data = self.loginForm
      self.loginForm.isAble = false
      console.log(data)
      console.log('cookies is=' + document.cookie)
      // 请求后台获取数据
      this.$axios.post('/frosapis/bootapp/login?username=' + data.username.value + '&password=' + data.pwd.value + '&kaptcha=' + data.vcode.value, {'username': data.username.value},
        {
          withCredentials: true
        })
        .then(function (response) {
          if (response.data.code === 200) {
            console.log(response)
            console.log(response.data.message)
            console.log(response.data.code)
            console.log('this.token' + response.data.token)
            window.location.href = 'http://localhost:8081/admin/manage'
            // self.$router.push({path: '/mainPage'})
          } else {
            alert(response.data.message)
            return false
          }
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    changeLang: function (e) {
      let self = this
      let lang = e.currentTarget.getAttribute('lang-name')
      localStorage.setItem('lang', lang)
      self.$i18n.locale = lang
      self.$store.commit('setAppLang', lang)
    },
    validateFormData: function () {
      let self = this
      let result = false

      self.$refs['loginForm'].validate((valid) => {
        if (!valid) {
          self.$message.error('请完善登录信息')
        }
        result = valid
      })

      return result
    }
  }
}
</script>

<style lang="scss">
  @import "../../../assets/scss/login/login.scss";
  .image{
    height: 40px;
    line-height: 40px;
    width: 100%;
    border-radius: 5px;
  }
</style>
