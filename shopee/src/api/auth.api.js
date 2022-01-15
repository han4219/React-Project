import http from 'src/utils/http'
const authAPI = {
  register(data) {
    return http.post('register', data)
  },
  login(data) {
    return http.post('login', data)
  },
  logout() {
    return http.post('logout')
  }
}
export default authAPI
