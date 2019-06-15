import { fetchUsers } from '@/api/users'

export default {
  namespaced: true,
  state: {
    userList: [],
    userSearchResults: [],
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
        .catch(error => {
          alert(error)
        })
        .then(() => commit('mutateLoading', false))
    },
    fetchUserSearchResults: ({ commit }, query) => {
      return fetchUsers(query)
        .then(result => {
          commit('mutateUsersSearchResults', result.data)
          return result
        })
        .catch(error => {
          alert(error)
        })
    }
  },
  mutations: {
    mutateUserList: (state, users) => {
      state.userList = users
    },
    mutateLoading: (state, isLoading) => {
      state.loading = isLoading
    },
    mutateUsersSearchResults: (state, results) => {
      state.userSearchResults = results
    }
  },
  getters: {
    getUserList: state => state.userList,
    getUsersSearchResults: state => state.userSearchResults,
    getLoading: state => state.loading,
    getById: state => id => state.userList.find(obj => obj.id === id)
  }
}
