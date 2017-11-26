import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
    count: '我是vuex'
}
const mutations = {
	increment (state, val) {
	  // 变更状态
	  state.count = val
	}
}
export default new Vuex.Store({
    state,
    mutations
});