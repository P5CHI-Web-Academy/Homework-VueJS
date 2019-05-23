import fetchAnswers from '@/api/answers'

export default {
  namespaced: true,
  state: {
    answersList: []
  },
  actions: {
    fetch: ({ commit }) => {
      fetchAnswers()
        .then(result => commit('mutateAnswersList', result.data))
    }
  },
  mutations: {
    mutateAnswersList: (state, answers) => {
      state.answersList = answers
    }
  },
  getters: {
    getAnswersList: state => state.answersList
  }
}
