import API from './axios'

export const fetchQuestions = (param) => API.get('/questions?_limit=10')
