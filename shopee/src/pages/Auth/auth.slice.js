import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import authAPI from 'src/api/auth.api'
import LocalStorage from 'src/constants/localStorage'
import { payloadCreator } from 'src/utils/helper'

export const register = createAsyncThunk(
  'auth/register',
  payloadCreator(authAPI.register)
)

export const login = createAsyncThunk(
  'auth/login',
  payloadCreator(authAPI.login)
)

const handleAuthFulfilled = (state, action) => {
  const { access_token, user } = action.payload.data
  state.profile = user
  localStorage.setItem(LocalStorage.user, JSON.stringify(state.profile))
  localStorage.setItem(LocalStorage.accessToken, JSON.stringify(access_token))
}

const auth = createSlice({
  name: 'auth',
  initialState: {
    profile: JSON.parse(localStorage.getItem(LocalStorage.user)) || {}
  },
  reducers: {
    removeOnLogout: state => {
      window.localStorage.clear()
      state.profile = {}
    }
  },
  extraReducers: {
    [register.fulfilled]: handleAuthFulfilled,
    [login.fulfilled]: handleAuthFulfilled
  }
})

const authReducer = auth.reducer
export const { removeOnLogout } = auth.actions
export default authReducer
