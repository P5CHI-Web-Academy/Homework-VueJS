import {
  fetchUsers
} from '@/api/users'

export default {
  namespaced: true,
  state: {
    searchPanelValue: '',
    usersList: []
  },
  getters: {
    getSearchPanelValue: state => state.searchPanelValue,
    getSearchPanelList: state => state.usersList
  },
  mutations: {
    mutateList: (state, users) => {
      state.usersList = users
    },
    mutateSearchPanelValue: (state, q) => {
      state.searchPanelValue = q
    }
  },
  actions: {
    mutateUsersList ({ commit }, params) {
      fetchUsers(params)
        .then(result => {
          const data = result.data.filter(el => el.display_name.indexOf(params) !== -1).slice(0, 5)
          commit('mutateList', data)
        })
    },
    mutateSearchPanelValue ({ commit }, q) {
      commit('mutateSearchPanelValue', q)
    }
  }
}
