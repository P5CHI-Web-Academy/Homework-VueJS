import { fetchComments } from '@/api/comments'

export default {
  namespaced: true,
  state: {
    list: [],
    loading: false
  },
  actions: {
    fetch ({ commit }, params) {
      fetchComments(params)
        .then(result => commit('mutateList', result.data))
    }
  },
  mutations: {
    mutateList: (state, comments) => {
      state.list = comments
    }
  },
  getters: {
    getList: (state) => state.list
  }
}
