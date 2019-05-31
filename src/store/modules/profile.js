import { fetchUsers } from '@/api/users'

export default {
  namespaced: true,
  state: {
    profile: []
  },
  actions: {
    fetch ({ commit }, params) {
      fetchUsers()
        .then(result => commit('mutateProfile', result.data))
    }
  },
  mutations: {
    mutateProfile: (state, profile) => {
      state.profile = profile
    }
  },
  getters: {
    getProfile: (state) => (id) => state.profile.find(profile => profile.id === id)
  }
}
