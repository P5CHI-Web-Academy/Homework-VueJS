import { fetchUsers } from '@/api/users'

export default {
  namespaced: true,
  state: {
    userList: [],
    loading: false
  },
  actions: {
    fetch: ({ commit }, params) => {
      commit('mutateLoading', true)
      return fetchUsers(params)
        .then(result => {
          commit('mutateUserList', result.data)
          return result
        })
        .finally(() => commit('mutateLoading', false))
    }
  },
  mutations: {
    mutateUserList: (state, users) => {
      state.userList = users
    },
    mutateLoading: (state, isLoading) => {
      state.loading = isLoading
    }
  },
  getters: {
    getUserList: state => state.userList,
    getLoading: state => state.loading,
    getById: state => id => state.userList.find(obj => obj.id === id)
  }
}
