import {
  fetchQuestions
} from '@/api/questions'

export default {
  namespaced: true,
  state: {
    questionList: [],
    loading: false
  },
  actions: {
    fetch ({ commit }) {
      fetchQuestions()
        .then(result => commit('mutateQuestionList', result.data))
    }
  },
  mutations: {
    mutateQuestionList: (state, questions) => {
      state.questionList = questions
    }
  },
  getters: {
    getQuestionList: (state) => state.questionList
  }
}
