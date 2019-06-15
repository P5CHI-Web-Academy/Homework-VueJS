import API from './api'

export const fetchComments = (param) => API.get('/comments?_limit=10')
