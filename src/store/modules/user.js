import { fetchUsers } from '@/api/users'

export default {
  namespaced: true,
  state: {
    list: [],
    loading: false
  },
  actions: {
    fetch ({ commit }) {
      commit('mutateLoading', true)
      fetchUsers()
        .then(result => commit('mutateList', result.data))
        .finally(() => commit('mutateLoading', false))
    }
  },
  mutations: {
    mutateList: (state, users) => {
      state.list = users
    },
    mutateLoading: (state, loading) => {
      state.loading = loading
    }
  },
  getters: {
    getList: (state) => state.list,
    getLoading: (state) => state.loading
  }
}
