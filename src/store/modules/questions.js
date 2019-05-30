import { fetchQuestions } from '@/api/questions'

export default {
  namespaced: true,
  state: {
    questionList: [],
    loading: false
  },
  actions: {
    fetch: ({ commit }, params) => {
      commit('mutateLoading', true)
      return fetchQuestions(params)
        .then(result => {
          commit('mutateQuestionList', result.data)
          return result
        })
        .catch(error => {
          alert(error)
        })
        .then(() => commit('mutateLoading', false))
    }
  },
  mutations: {
    mutateQuestionList: (state, questions) => {
      state.questionList = questions
    },
    mutateLoading: (state, isLoading) => {
      state.loading = isLoading
    }
  },
  getters: {
    getQuestionList: state => state.questionList,
    getLoading: state => state.loading,
    getById: state => id => state.questionList.find(obj => obj.id === id)
  }
}
