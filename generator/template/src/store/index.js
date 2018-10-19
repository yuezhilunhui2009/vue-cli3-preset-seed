import Vue from 'vue'
import Vuex from 'vuex'

// 项目级共享 store modules
import commonModules from '@store/modules/'
Vue.use(Vuex)

/**
 * 创建 store 函数
 * @param {object} obj
 * @param {object} obj.state     - 页面的 state
 * @param {object} obj.getters   - 页面的 getter
 * @param {object} obj.mutations - 页面的 mutaions
 * @param {object} obj.action    - 页面的 actions
 * @param {object} obj.modules   - 页面的 modules
 */
const generateStore = ({
  state,
  getters,
  mutations,
  actions,
  modules
}) => {
  const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
    modules: {
      ...commonModules,
      ...modules
    },
    strict: process.env.NODE_ENV !== 'production'
  })

  return store
}

export default generateStore
