import Vue from 'vue'
import App from './App.vue'
import {store} from './store/store.js'
import {router} from './store/router.js'

Vue.config.productionTip = false

new Vue({
  store,
  router,
  el: '#app',
  render: h => h(App)
})

