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
          console.log(result.data)
          commit('mutateResultQuestionsList', result.data)
        })
    },
    fetchUsers: ({ commit }, query) => {
      fetchUsersSearchResults(query)
        .then(result => {
          console.log(result.data)
          commit('mutateResultUsersList', result.data)
        })
    },
    fetchTags: ({ commit }, query) => {
      fetchTagsSearchResults(query)
        .then(result => {
          console.log(result.data)
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
