import { fetchUsers } from '@/api/users'
import { fetchQuestions } from '@/api/questions'
import { fetchTags } from '@/api/tags'

export default {
  namespaced: true,
  state: {
    searchPanelValue: '',
    display: false,
    usersList: [],
    questionsList: [],
    tagsList: []
  },
  getters: {
    getSearchPanelValue: state => state.searchPanelValue,
    getUsersList: state => state.usersList,
    getQuestionsList: state => state.questionsList,
    getTagsList: state => state.tagsList,
    getDisplay: state => state.display
  },
  mutations: {
    mutateSearchPanelValue: (state, q) => {
      state.searchPanelValue = q
      state.display = true
    },
    resetSearchPanelValue: state => {
      state.searchPanelValue = ''
      state.display = false
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
    resetSearchPanelValue ({ commit }) {
      commit('resetSearchPanelValue')
    },
    mutateUsersList ({ commit }, params) {
      fetchUsers(params)
        .then(result => {
          const data = result.data.filter(el => el.display_name.toLowerCase().indexOf(params) !== -1).slice(0, 3)
          commit('mutateUsersList', data)
        })
    },
    mutateQuestionsList ({ commit }, params) {
      fetchQuestions(params)
        .then(result => {
          const data = result.data.filter(el => el.title.toLowerCase().indexOf(params) !== -1).slice(0, 3)
          commit('mutateQuestionsList', data)
        })
    },
    mutateTagsList ({ commit }, params) {
      fetchTags(params)
        .then(result => {
          const data = result.data.filter(el => el.name.toLowerCase().indexOf(params) !== -1).slice(0, 3)
          commit('mutateTagsList', data)
        })
    }
  }
}
