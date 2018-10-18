import Vue from 'vue'
import Vuex from 'vuex'

// 项目级共享 store module
import user from '@store/modules/user'
import todos from '@store/modules/todos'
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
      user,
      todos,
      ...modules
    },
    strict: process.env.NODE_ENV !== 'production'
  })

  if (module.hot) {
    // 使 action 和 mutation 成为可热重载模块
    module.hot.accept(['@store/modules/user', '@store/modules/todos'], () => {
      // 获取更新后的模块
      // 因为 babel 6 的模块编译格式问题，这里需要加上 `.default`
      const user = require('@store/modules/user').default
      const todos = require('@store/modules/todos').default
      // 加载新模块
      store.hotUpdate({
        modules: {
          user,
          todos
        }
      })
    })
  }

  return store
}

export default generateStore
