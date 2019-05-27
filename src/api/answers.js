import API from './axios'

export const fetchAnswers = (param) => API.get('/answers')
