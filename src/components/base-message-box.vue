<template>
  <login ref="login"></login>
</template>

<script type="text/ecmascript-6">
import { mapGetters, mapActions } from 'vuex'
import login from './base-user-login.vue'

export default {
  components: { login },
  computed: {
    ...mapGetters('componentMessageBox', ['count', 'message']),
  },
  watch: {
    count() {
      this.show(this.message)
    },
  },
  methods: {
    ...mapActions('componentMessageBox', ['hide']),

    show({ title, message, type = 'success', duration = 3000, onClose, onConfirm, onCancel, confirmButtonText, cancelButtonText, alertType, confirmType, customClass }) {
      let messageObj = null
      let timer = null

      if (type === 'success') {
        messageObj = this.$message({
          type: 'success',
          duration,
          message,
          onClose: () => {
            window.clearTimeout(timer)
            if (typeof onClose === 'function') {
              onClose()
            }
          },
        })
      } else if (type === 'warning') {
        messageObj = this.$message({
          type: 'warning',
          duration,
          message,
          onClose: () => {
            window.clearTimeout(timer)
            if (typeof onClose === 'function') {
              onClose()
            }
          },
        })
      } else if (type === 'tips') {
        messageObj = this.$message({
          type: 'info',
          duration,
          message,
          onClose: () => {
            window.clearTimeout(timer)
            if (typeof onClose === 'function') {
              onClose()
            }
          },
        })
      } else if (type === 'false' || type === 'error') {
        messageObj = this.$message({
          type: 'error',
          duration,
          message,
          onClose: () => {
            window.clearTimeout(timer)
            if (typeof onClose === 'function') {
              onClose()
            }
          },
        })
      } else if (type === 'alert') {
        this.$alert(message, title, {
          confirmButtonText,
          customClass,
          type: alertType,
          callback: (type) => {
            if (type) {
              if (type === 'confirm' && typeof onConfirm === 'function') {
                onConfirm()
              } else if (type === 'cancel' && typeof onCancel === 'function') {
                onCancel()
              }
            }
          },
        })
      } else if (type === 'confirm') {
        this.$confirm(message, title || '提示', {
          confirmButtonText,
          cancelButtonText,
          type: confirmType,
          callback: (type) => {
            if (type) {
              if (type === 'confirm') {
                onConfirm()
              } else if (type === 'cancel' && typeof onCancel === 'function') {
                onCancel()
              }
            }
          },
        })
      } else if (type === 'notify') {
        this.$notify({
          title,
          message,
          type: 'success',
        })
      } else if (type === 'login') {
        this.$refs.login.dialogTableVisible = true
        if (typeof onClose === 'function') {
          this.$refs.login.onClose = onClose
        }
        if (typeof onConfirm === 'function') {
          this.$refs.login.onConfirm = onConfirm
        }
      } else {
        messageObj = this.$message({
          duration,
          message,
          onClose: () => {
            window.clearTimeout(timer)
            if (typeof onClose === 'function') {
              onClose()
            }
          },
        })
      }

      if (messageObj && messageObj.close && duration !== 0) {
        timer = window.setTimeout(() => {
          messageObj.close()
        }, duration || 3000)
      }
    },
  },
}
</script>

<style>

</style>
