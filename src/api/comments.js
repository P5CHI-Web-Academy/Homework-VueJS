import API from './axios'

export const fetchComments = (param) => API.get('/comments')
