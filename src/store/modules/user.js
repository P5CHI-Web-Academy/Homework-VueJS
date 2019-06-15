import { fetchUsers } from '@/api/users'

export default {
  namespaced: true,
  state: {
    allList: [],
    list: [],
    usersList: [],
    profile: [],
    loading: false
  },
  actions: {
    fetch ({ commit }, params) {
      commit('mutateLoading', true)
      fetchUsers(params)
        .then(result => commit('mutateList', result.data))
        .finally(() => commit('mutateLoading', false))
    },
    fetchAll ({ commit }, params) {
      commit('mutateLoading', true)
      fetchUsers(params)
        .then(result => commit('mutateAllList', result.data))
        .finally(() => commit('mutateLoading', false))
    },
    mutateUsersList ({ commit }, params) {
      fetchUsers(params)
        .then(result => {
          const data = result.data.filter(user => user.display_name.toLowerCase().includes(params))
          commit('mutateUsersList', data)
        })
    },
    fetchProfile ({ commit }, params) {
      fetchUsers()
        .then(result => commit('mutateProfile', result.data))
    }
  },
  mutations: {
    mutateList: (state, users) => {
      state.list = users
    },
    mutateAllList: (state, users) => {
      state.allList = users
    },
    mutateUsersList: (state, users) => {
      state.usersList = users
    },
    mutateLoading: (state, loading) => {
      state.loading = loading
    },
    mutateProfile: (state, profile) => {
      state.profile = profile
    }
  },
  getters: {
    getAllList: (state) => state.allList,
    getList: (state) => state.list,
    getUsersList: state => state.usersList,
    getLoading: (state) => state.loading,
    getById: (state) => (id) => state.list.find(element => element.id === id),
    getProfile: (state) => (id) => state.profile.find(profile => profile.id === id)
  }
}
