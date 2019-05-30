import API from './axios'

export const fetchUsers = (params) => API.get('/users', { params })
