import Vue from 'vue'
import 'es6-promise/auto'
import createApp from './modules/logis-web/app'
import ProgressBar from './components/tool-progress-bar.vue'
import layer from 'vue-layer'
Vue.prototype.$layer = layer(Vue)

Vue.prototype.$bar = new Vue(ProgressBar).$mount()// eslint-disable-line no-param-reassign
const bar = Vue.prototype.$bar
document.body.appendChild(bar.$el)

Vue.mixin({
  beforeRouteUpdate(to, from, next) {
    const { asyncData } = this.$options
    if (asyncData) {
      asyncData({
        store: this.$store,
        route: to,
      }).then(next).catch(next)
    } else {
      next()
    }
  },
})

const { app, router, store } = createApp()

/**
 * 服务器端渲染的页面，会将状态回写给页面，将客户端的状态进行替换
 */
if (window.__INITIAL_STATE__) {
  store.replaceState(window.__INITIAL_STATE__)
}

router.onReady(() => {
  router.beforeResolve((to, from, next) => {
    const matched = router.getMatchedComponents(to)
    const prevMatched = router.getMatchedComponents(from)
    let diffed = false
    const activated = matched.filter((c, i) => {
      const result = diffed || (diffed = (prevMatched[i] !== c))
      return result
    })
    const asyncDataHooks = activated.map(c => c.asyncData).filter(_ => _)
    if (!asyncDataHooks.length) {
      return next()
    }

    bar.start()
    Promise.all(asyncDataHooks.map(hook => hook({ store, route: to })))
      .then(() => {
        bar.finish()
        next()
      })
      .catch(next)
    return undefined
  })

  app.$mount('#app')
})

if (window.location.protocol && navigator.serviceWorker === 'https:') {
  navigator.serviceWorker.register('/service-worker.js')
}
