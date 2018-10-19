import generateStore from '@store'
import actions from './actions'
import mutations from './mutations'
import modules from './modules'

const store = generateStore({
  actions,
  mutations,
  modules
})

export default store
