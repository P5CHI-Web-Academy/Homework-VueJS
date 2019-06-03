import { fetchUsers } from '@/api/users'

export default {
  namespaced: true,
  state: {
    allList: [],
    list: [],
    loading: false,
    loadingAll: false
  },
  actions: {
    fetch ({ commit }, params) {
      commit('mutateLoading', true)
      fetchUsers(params)
        .then(result => commit('mutateList', result.data))
        .finally(() => commit('mutateLoading', false))
    },
    fetchAll ({ commit }, params) {
      commit('mutateLoadingAll', true)
      fetchUsers(params)
        .then(result => commit('mutateAllList', result.data))
        .finally(() => commit('mutateLoadingAll', false))
    }
  },
  mutations: {
    mutateList: (state, users) => {
      state.list = users
    },
    mutateAllList: (state, users) => {
      state.allList = users
    },
    mutateLoadingAll: (state, loading) => {
      state.loadingAll = loading
    },
    mutateLoading: (state, loading) => {
      state.loading = loading
    }
  },
  getters: {
    getAllList: (state) => state.allList,
    getLoadingAll: (state) => state.loadingAll,
    getList: (state) => state.list,
    getLoading: (state) => state.loading,
    getById: (state) => (id) => state.list.find(element => element.id === id)
  }
}
