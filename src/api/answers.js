import API from './api'

export const fetchAnswers = (params) => API.get('/answers', { params })
