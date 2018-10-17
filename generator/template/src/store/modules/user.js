import apis from '@apis'

export const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST'
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS'
export const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE'

export default {
  state: {
    nickname: '',
    headimgurl: '',
    inited: false,
    fetching: false,
    code: 0,
    msg: ''
  },
  mutations: {
    [FETCH_USER_REQUEST] (state, payload) {
      state.fetching = true
    },
    [FETCH_USER_SUCCESS] (state, payload) {
      state = {
        ...state,
        ...payload,
        inited: true,
        fetching: false
      }

      console.log('state', { ...state })
    },
    [FETCH_USER_FAILURE] (state, payload) {
      state = {
        ...state,
        ...payload,
        fetching: false
      }
    }
  },
  actions: {
    fetchUser ({ commit, state }) {
      commit(FETCH_USER_REQUEST)
      apis.user
        .fetchInfo()
        .then(({ data, code, msg }) => {
          if (code === 0 && data) {
            commit(FETCH_USER_SUCCESS, { ...data })
          } else {
            commit(FETCH_USER_FAILURE, { code, msg })
          }
        })
        .catch(err => commit(FETCH_USER_FAILURE, { code: 999, msg: err.message }))
    }
  }
}
