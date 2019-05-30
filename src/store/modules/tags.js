import { fetchTags } from '@/api/tags'

export default {
  namespaced: true,
  state: {
    tagsList: [],
  },
  actions: {
    fetch: ({ commit }, params) => {
      return fetchTags(params)
        .then(result => {
          commit('mutateTagsList', result.data)
          return result
      })
    }
  },
  mutations: {
    mutateTagsList: (state, tags) => {
      state.tagsList = tags
    }
  },
  getters: {
    getTagsList: state => state.tagsList
  }
}
