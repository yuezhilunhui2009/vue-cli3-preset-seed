import generateStore from '@store'
import actions from './actions'
import mutations from './mutations'

const store = generateStore({
  actions,
  mutations
})

export default store
