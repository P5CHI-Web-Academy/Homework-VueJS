import API from './api'

export const fetchTags = (params) => API.get('/tags', { params })
