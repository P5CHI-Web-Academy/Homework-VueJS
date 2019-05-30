import API from './axios'

// export const fetchQuestions = (param) => API.get('/questions?_limit=10')
export const fetchQuestions = (params) => API.get('/questions', { params })
