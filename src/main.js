// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './state/index.js'// 引入vuex
import 'mint-ui/lib/style.min.css'
import './axios'
import Utils from './utils/utils'
import { Header, Swipe, SwipeItem, Tabbar, TabItem } from 'mint-ui'
import VideoPlayer from 'vue-video-player'
Vue.use(VideoPlayer)
Vue.prototype.$utils = Utils
Vue.config.productionTip = false
// mint-ui按需加载组件
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Tabbar.name, Tabbar)
Vue.component(TabItem.name, TabItem)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  store: store,
  components: {
    App
  },
  template: '<App/>'
})
