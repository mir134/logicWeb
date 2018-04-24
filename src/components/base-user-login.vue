<template>
  <el-dialog title="登录" class="login-panel" :visible.sync="dialogTableVisible" :close-on-click-modal="false" width="350px"
             :close-on-press-escape="false" @close="closeDialogEvent">
    <el-form ref="loginForm" :model="loginForm" :rules="rules" onsubmit="function() {return false}" @keyup.enter.native="goLogin" label-width="80px" label-position="top">
      <el-form-item label="手机号：" prop="phone">
        <el-input v-model="loginForm.phone" placeholder="11位手机号码" style="font-size: 12px;">
          <template slot="prepend">+86</template>
        </el-input>
      </el-form-item>
      <el-form-item label="密码：" prop="password">
        <el-input type="password" v-model="loginForm.password" auto-complete="off" placeholder="密码" style="font-size: 12px;">
          <template slot="prepend"><i class="el-icon-view"></i></template>
        </el-input>
      </el-form-item>
      <el-form-item label="验证码:" prop="captcha" v-if="loginForm.captchaId">
        <el-input v-model="loginForm.captcha" auto-complete="off">
          <template slot="append"><img @click="getCaptcha" v-if="captchaImgSrc" :src="captchaImgSrc"></template>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-checkbox v-model="bRemeber">记住我</el-checkbox>
      </el-form-item>
      <el-form-item style="margin-bottom: 5px;">
        <el-button type="primary" @click.native="goLogin" style="width: 100%;">登&nbsp;陆</el-button>
      </el-form-item>
    </el-form>

    <iframe style="display:none" name="a"></iframe>
  </el-dialog>
</template>

<script type="text/ecmascript-6">
import { mapActions } from 'vuex'
import Storage from '../util/storage'
import Config from '../../config/options'

export default {
  data() {
    return {
      bRemeber: true,

      dialogTableVisible: false,
      config: Config,
      loginForm: {
        phone: '',
        password: '',
        captcha: '',
        captchaId: '',
      },
      onClose: '',
      onConfirm: '',
      captchaImgSrc: '',

      rules: {
        phone: [
          { required: true, message: '不能为空', trigger: 'blur' },
          { len: 11, message: '请输入11位手机号码', trigger: 'blur' },
        ],
        password: [
          { required: true, message: '不能为空', trigger: 'blur' },
        ],
        captcha: [
          { required: true, message: '不能为空', trigger: 'blur' },
        ],
      },
    }
  },
  mounted() {
    const phone = Storage.get('login-account', '')
    if (phone) {
      this.loginForm.phone = phone
    }
  },
  methods: {
    ...mapActions('coreLogin', ['signIn', 'getCaptchaId']),

    getCaptcha() {
      this.getCaptchaId().then(({ id, captchaImgSrc }) => {
        this.loginForm.captchaId = id
        this.captchaImgSrc = captchaImgSrc
      })
    },
    closeDialogEvent() {
      this.dialogTableVisible = false
      if (typeof this.onClose === 'function') {
        this.onClose()
      }
    },
    goLogin() {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          this.signIn(this.loginForm).then(() => {
            if (this.bRemeber) {
              Storage.set('login-account', this.loginForm.phone)
            } else {
              Storage.set('login-account', '')
            }
            this.dialogTableVisible = false

            if (typeof this.onConfirm === 'function') {
              this.onConfirm()
            }
          }, () => this.getCaptcha())
        }
      })
    },
  },
}
</script>

<style>
  .login-panel .el-input-group__prepend {
    padding: 0 8px;
  }

  .login-panel .el-form-item__label {
    padding: 0;
  }

  .login-panel .el-input__inner {
    padding: 0 5px;
  }

  .login-panel .el-checkbox__label {
    font-size: 12px;
  }
</style>
