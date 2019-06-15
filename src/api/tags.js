import API from './axios'

export const fetchTags = (params) => API.get('/tags', { params })
