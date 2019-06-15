import API from './api'

export const fetchComments = (params) => API.get('/comments', { params })
