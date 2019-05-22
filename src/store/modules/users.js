import {
  fetchUsers
} from '@/api/users'

export default {
  namespaced: true,
  state: {
    userList: [],
    loading: false
  },
  actions: {
    fetch ({ commit }) {
      fetchUsers()
        .then(result => commit('mutateUserList', result.data))
    }
  },
  mutations: {
    mutateUserList: (state, users) => {
      state.userList = users
    }
  },
  getters: {
    getUserList: state => state.userList
  }
}
