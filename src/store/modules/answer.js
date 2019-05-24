import { fetchAnswers } from '@/api/answers'

export default {
  namespaced: true,
  state: {
    list: [],
    loading: false
  },
  actions: {
    fetch ({ commit }) {
      fetchAnswers()
        .then(result => commit('mutateList', result.data))
    }
  },
  mutations: {
    mutateList: (state, answers) => {
      state.list = answers
    }
  },
  getters: {
    getList: (state) => state.list
  }
}
