import { fetchTags } from '@/api/tags'

export default {
  namespaced: true,
  state: {
    list: [],
    tagsList: [],
    loading: false
  },
  actions: {
    fetch ({ commit }, params) {
      commit('mutateLoading', true)
      fetchTags(params)
        .then(result => commit('mutateList', result.data))
        .finally(() => commit('mutateLoading', false))
    },
    mutateTagsList ({ commit }, params) {
      fetchTags(params)
        .then(result => {
          const data = result.data.filter(tag => tag.name.toLowerCase().includes(params))
          commit('mutateTagsList', data)
        })
    }
  },
  mutations: {
    mutateList: (state, tags) => {
      state.list = tags
    },
    mutateTagsList: (state, tags) => {
      state.tagsList = tags
    },
    mutateLoading: (state, loading) => {
      state.loading = loading
    }
  },
  getters: {
    getList: (state) => state.list,
    getTagsList: state => state.tagsList,
    getLoading: (state) => state.loading,
    getByCount: (state) => (count) => state.list.find(element => element.count === count)
  }
}
