import { fetchTags } from '@/api/tags'

export default {
  namespaced: true,
  state: {
    tagsList: []
  },
  getters: {
    getList: state => state.tagsList
  },
  mutations: {
    mutateList: (state, tags) => {
      state.tagsList = tags
    }
  },
  actions: {
    fetch ({ commit }, params) {
      fetchTags(params).then(result => commit('mutateList', result.data))
    }
  }
}
