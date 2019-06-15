import { fetchQuestions } from '@/api/questions'

export const formatRow = (row) => ({
  ...row,
  shortBody: row.body.replace(/<[^>]+>/g, '').substr(0, 200)
})
export default {
  namespaced: true,
  state: {
    list: [],
    questionsList: [],
    loading: false
  },
  actions: {
    fetch ({ commit }, params) {
      commit('mutateLoading', true)
      fetchQuestions(params)
        .then(result => commit('mutateList', result.data.map(row => formatRow(row))))
        .finally(() => commit('mutateLoading', false))
    },
    mutateQuestionsList ({ commit }, params) {
      fetchQuestions(params)
        .then(result => {
          const data = result.data.filter(question => question.title.toLowerCase().includes(params))
          commit('mutateQuestionsList', data)
        })
    }
  },
  mutations: {
    mutateList: (state, questions) => {
      state.list = questions
    },
    mutateQuestionsList: (state, questions) => {
      state.questionsList = questions
    },
    mutateLoading: (state, loading) => {
      state.loading = loading
    }
  },
  getters: {
    getById: (state) => (id) => state.list.find(element => element.id === id),
    getList: (state) => state.list,
    getQuestionsList: state => state.questionsList,
    getLoading: (state) => state.loading
  }
}
