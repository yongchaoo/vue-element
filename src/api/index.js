import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:8000/'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token')

export default {
    setToken: function (token) {
        localStorage.setItem('token', token)
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
    },
    login: function (param) {
        return axios.post('oauth/token', param)
    },

    index: function (params) {
        return axios.get('api/user/list', {
            params: params
        })
    }
}