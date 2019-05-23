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
    mutateLoading: (state, loadingProcess) => {
      state.loading = loadingProcess
    }
  },
  getters: {
    getUserList: state => state.userList,
    getLoading: state => state.loading
  }
}
