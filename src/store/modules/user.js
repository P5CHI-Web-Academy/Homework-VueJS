import {fetchUsers} from '@/api/users'

export default {
  namespaced: true,
  state: {
    list: [],
    loading: true
  },
  actions: {
    fetch ({ commit }) {
      fetchUsers()
        .then(result => commit('mutateList', result.data))
        .finally(() => commit('mutateLoading'))
    }
  },
  mutations: {
    mutateList: (state, users) => {
      state.list = users
    },
    mutateLoading: (state) => {
      state.loading = false
    }
  },
  getters: {
    getList: (state) => state.list,
    getLoading: (state) => state.loading
  }
}
