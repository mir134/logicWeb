import Vue from 'vue'
import { sync } from 'vuex-router-sync'
import App from './App.vue'
import createStore from './store'
import createRouter from './router'
import titleMixin from '../../util/title'
import * as filters from '../../util/filters'
import elUi from './plugins/install-plugin-ui'

Vue.use(elUi)
Vue.mixin(titleMixin)

Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key])
})

export default function createApp() {
  const store = createStore()
  const router = createRouter()

  sync(store, router)

  const app = new Vue({
    router,
    store,
    render: h => h(App),
  })

  return { app, router, store }
}
