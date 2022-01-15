import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import purchaseAPI from 'src/api/purchase.api'
import { payloadCreator } from 'src/utils/helper'
import { logout } from '../Auth/auth.slice'

export const getCartPurchases = createAsyncThunk(
  'cart/getCartPurchases',
  payloadCreator(purchaseAPI.getCartPurchases)
)

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    purchase: []
  },
  extraReducers: {
    [getCartPurchases.fulfilled]: (state, action) => {
      state.purchase = action.payload.data
    },
    [logout.fulfilled]: state => {
      state.purchase = []
    }
  }
})

const cartReducer = cartSlice.reducer
export default cartReducer
