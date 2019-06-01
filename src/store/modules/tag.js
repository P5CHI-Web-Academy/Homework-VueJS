import { fetchTags } from '@/api/tags'

export default {
  namespaced: true,
  state: {
    list: [],
    loading: false
  },
  actions: {
    fetch ({ commit }, params) {
      commit('mutateLoading',true)
      fetchTags(params)
        .then(result => commit('mutateList', result.data))
        .finally(() => commit('mutateLoading', false))
    }
  },
  mutations: {
    mutateList: (state, tags) => {
      state.list = tags
    },
    mutateLoading: (state, loading) => {
      state.loading = loading
    }
  },
  getters: {
    getList: (state) => state.list,
    getLoading: (state) => state.loading,
    getByCount: (state) => (count) => state.list.find(element => element.count === count)
  }
}
