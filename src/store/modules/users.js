import { fetchUsers } from '@/api/users'

export default {
  namespaced: true,
  state: {
    userList: [],
    loading: false
  },
  actions: {
    fetch: ({ commit }) => {
      commit('mutateLoading', true);
      fetchUsers()
        .then(result => commit('mutateUserList', result.data))
        .then(() => commit('mutateLoading', false))
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
    getById: state => id => {
      console.log(state.userList)
      console.log(state.userList.find(obj => obj.id === id))
      return state.userList.find(obj => obj.id === id)
    }
  }
}
