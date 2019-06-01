import { fetchUsers } from '@/api/users'
import { fetchQuestions } from '@/api/questions'
import { fetchTags } from '@/api/tags'

export default {
  namespaced: true,
  state: {
    searchPanelValue: '',
    usersList: [],
    questionsList: [],
    tagsList: []
  },
  getters: {
    getSearchPanelValue: state => state.searchPanelValue,
    getUsersList: state => state.usersList,
    getQuestionsList: state => state.questionsList,
    getTagsList: state => state.tagsList
  },
  mutations: {
    mutateSearchPanelValue: (state, q) => {
      state.searchPanelValue = q
    },
    mutateUsersList: (state, users) => {
      state.usersList = users
    },
    mutateQuestionsList: (state, questions) => {
      state.questionsList = questions
    },
    mutateTagsList: (state, tags) => {
      state.tagsList = tags
    }
  },
  actions: {
    mutateSearchPanelValue ({ commit }, q) {
      commit('mutateSearchPanelValue', q)
    },
    mutateUsersList ({ commit }, params) {
      fetchUsers(params)
        .then(result => {
          const data = result.data.filter(el => el.display_name.indexOf(params) !== -1).slice(0, 3)
          commit('mutateUsersList', data)
        })
    },
    mutateQuestionsList ({ commit }, params) {
      fetchQuestions(params)
        .then(result => {
          const data = result.data.filter(el => el.title.indexOf(params) !== -1).slice(0, 3)
          commit('mutateQuestionsList', data)
        })
    },
    mutateTagsList ({ commit }, params) {
      fetchTags(params)
        .then(result => {
          const data = result.data.filter(el => el.name.indexOf(params) !== -1).slice(0, 3)
          commit('mutateTagsList', data)
        })
    }
  }
}
