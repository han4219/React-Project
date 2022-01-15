import purchaseStatus from 'src/constants/statusPurchase'
import http from 'src/utils/http'

const URL = 'purchases'

const purchaseAPI = {
  addToCart(data) {
    return http.post(`${URL}/add-to-cart`, data)
  },
  getCartPurchases() {
    return http.get(`${URL}`, {
      params: {
        status: purchaseStatus.inCart
      }
    })
  }
}

export default purchaseAPI
