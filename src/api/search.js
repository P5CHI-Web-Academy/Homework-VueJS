import API from './axios'

export const fetchQuestionsSearchResults = (param) => API.get('/questions?q='+ param)
export const fetchUsersSearchResults = (param) => API.get('/users?q='+ param)
export const fetchTagsSearchResults = (param) => API.get('/tags?q='+ param)
