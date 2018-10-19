import apis from '@apis'

export const FETCH_ARTICLE_REQUEST = 'FETCH_ARTICLE_REQUEST'
export const FETCH_ARTICLE_SUCCESS = 'FETCH_ARTICLE_SUCCESS'
export const FETCH_ARTICLE_FAILURE = 'FETCH_ARTICLE_FAILURE'

export default {
  state: {
    list: [],
    inited: false,
    fetching: false,
    code: 0,
    msg: ''
  },
  mutations: {
    [FETCH_ARTICLE_REQUEST] (state, payload) {
      state.fetching = true
    },
    [FETCH_ARTICLE_SUCCESS] (state, payload) {
      const { list, code } = payload

      state.list = list
      state.code = code
      state.inited = true
      state.fetching = false
    },
    [FETCH_ARTICLE_FAILURE] (state, payload) {
      const { code, msg } = payload

      state.code = code
      state.msg = msg
      state.fetching = false
    }
  },
  actions: {
    fetchArticleList ({ commit, state }) {
      commit(FETCH_ARTICLE_REQUEST)
      apis.article
        .fetchList()
        .then(({ data, code, msg }) => {
          if (code === 0 && data) {
            commit(FETCH_ARTICLE_SUCCESS, { ...data, code })
          } else {
            commit(FETCH_ARTICLE_FAILURE, { code, msg })
          }
        })
        .catch(err => commit(FETCH_ARTICLE_FAILURE, { code: 999, msg: err.message }))
    }
  }
}
