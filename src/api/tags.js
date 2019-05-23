import API from './axios'

export const fetchTags = (param) => API.get('/tags')
