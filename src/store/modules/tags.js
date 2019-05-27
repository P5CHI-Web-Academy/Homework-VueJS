import { fetchTags } from '@/api/tags'

export default {
  namespaced: true,
  state: {
    tagsList: [],
  },
  actions: {
    fetch: ({ commit }) => {
      fetchTags()
        .then(result => commit('mutateTagsList', result.data))
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
