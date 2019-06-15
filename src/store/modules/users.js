import { fetchUsers } from '@/api/users'

export default {
  namespaced: true,
  state: {
    list: []
  },
  getters: {
    getList: (state) => state.list,
    getById: (state) => (id) => state.list.filter(el => el.id === id)
  },
  mutations: {
    mutateList: (state, users) => {
      state.list = users
    }
  },
  actions: {
    fetch ({ commit }, params) {
      fetchUsers(params)
        .then(result => commit('mutateList', result.data))
    }
  }
}
