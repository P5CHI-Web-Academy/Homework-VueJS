import API from './axios'

export const fetchUsers = (param) => API.get('/users?_limit=20')
