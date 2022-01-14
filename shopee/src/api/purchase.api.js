import http from 'src/utils/http'

const URL = 'purchases'

const purchaseAPI = {
  addToCart(data) {
    return http.post(`${URL}/add-to-cart`, data)
  }
}

export default purchaseAPI
