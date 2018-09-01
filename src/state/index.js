import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './mutation_types' // 导入对象
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    footerVisible: true,
    selectedTab: 'home'
  },
  mutations: {
    [types.TOGGLE_FOOTER] (state) {
      state.footerVisible = !state.footerVisible
    },
    [types.SELECT_TAB] (state, val) {
      state.selectedTab = val
    }
  }
})
