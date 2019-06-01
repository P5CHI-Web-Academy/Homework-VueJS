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
    },
    resetSearchValue: (state, val) => {
      state.searchPanelValue = val
    }
  },
  actions: {
    resetSearchValue ({ commit }, val) {
      commit('resetSearchValue', '')
    },
    mutateSearchPanelValue ({ commit }, q) {
      commit('mutateSearchPanelValue', q)
    },
    mutateUsersList ({ commit }, params) {
      fetchUsers(params)
        .then(result => {
          const data = result.data.filter(user => user.display_name.toLowerCase().includes(params))
          commit('mutateUsersList', data)
        })
    },
    mutateQuestionsList ({ commit }, params) {
      fetchQuestions(params)
        .then(result => {
          const data = result.data.filter(question => question.title.toLowerCase().includes(params))
          commit('mutateQuestionsList', data)
        })
    },
    mutateTagsList ({ commit }, params) {
      fetchTags(params)
        .then(result => {
          const data = result.data.filter(tag => tag.name.toLowerCase().includes(params))
          commit('mutateTagsList', data)
        })
    }
  }
}
