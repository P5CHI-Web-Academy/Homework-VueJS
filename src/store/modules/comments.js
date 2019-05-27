import { fetchComments } from '@/api/comments'

export default {
  namespaced: true,
  state: {
    commentsList: []
  },
  actions: {
    fetch: ({ commit }) => {
      fetchComments()
        .then(result => commit('mutateCommentsList', result.data))
    }
  },
  mutations: {
    mutateCommentsList: (state, comments) => {
      state.commentsList = comments
    }
  },
  getters: {
    getCommentsList: state => state.commentsList
  }
}
