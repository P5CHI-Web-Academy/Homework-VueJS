import {
  fetchUsers
} from '@/api/users'

export default {
  namespaced: true,
  state: {
    list: [],
    loading: false
  },
  getters: {
    getList: (state) => state.list,
    getLoading: (state) => state.loading
  },
  mutations: {
    mutateList: (state, users) => {
      state.list = users
    },
    mutateLoading: (state, loading) => {
      state.loading = loading
    }
  },
  actions: {
    fetch ({ commit }, params) {
      commit('mutateLoading', true)
      fetchUsers(params)
        .then(result => commit('mutateList', result.data))
        .finally(() => commit('mutateLoading', false))
    }
  }
}
