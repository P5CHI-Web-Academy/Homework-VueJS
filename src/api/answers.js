import API from './api'

export const fetchAnswers = (param) => API.get('/answers?_limit=3')
