// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import '../static/mui/css/mui.min.css'
import Vue from 'vue'
import App from './App'
import router from './router'
import 'mint-ui/lib/style.min.css'
import mintUi from 'mint-ui'
import './axios'
import Api from './api/index'
Vue.prototype.api = Api

Vue.use(mintUi)
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  components: {
    App
  },
  template: '<App/>'
})
