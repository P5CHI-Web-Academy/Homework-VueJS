import API from './api'

export const fetchUsers = (param) => API.get('/users?_limit=10')
