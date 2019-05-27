import { fetchQuestionsSearchResults, fetchUsersSearchResults, fetchTagsSearchResults } from '@/api/search'

export default {
  namespaced: true,
  state: {
    resultQuestionsList: [],
    resultUsersList: [],
    resultTagsList: []
  },
  actions: {
    fetchQuestions: ({ commit }, query) => {
      fetchQuestionsSearchResults(query)
        .then(result => {
          commit('mutateResultQuestionsList', result.data)
        })
    },
    fetchUsers: ({ commit }, query) => {
      fetchUsersSearchResults(query)
        .then(result => {
          commit('mutateResultUsersList', result.data)
        })
    },
    fetchTags: ({ commit }, query) => {
      fetchTagsSearchResults(query)
        .then(result => {
          commit('mutateResultTagsList', result.data)
        })
    }
  },
  mutations: {
    mutateResultQuestionsList: (state, results) => {
      state.resultQuestionsList = results
    },
    mutateResultUsersList: (state, results) => {
      state.resultUsersList = results
    },
    mutateResultTagsList: (state, results) => {
      state.resultTagsList = results
    }
  },
  getters: {
    getResultQuestionsList: state => state.resultQuestionsList,
    getResultUsersList: state => state.resultUsersList,
    getResultTagsList: state => state.resultTagsList
  }
}
