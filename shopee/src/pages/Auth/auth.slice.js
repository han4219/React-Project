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

export const logout = createAsyncThunk(
  'auth/logout',
  payloadCreator(authAPI.logout)
)

const handleAuthFulfilled = (state, action) => {
  const { access_token, user } = action.payload.data
  state.profile = user
  localStorage.setItem(LocalStorage.user, JSON.stringify(state.profile))
  localStorage.setItem(LocalStorage.accessToken, access_token)
}

const handleUnauthorize = state => {
  state.profile = {}
  window.localStorage.clear()
}

const auth = createSlice({
  name: 'auth',
  initialState: {
    profile: JSON.parse(localStorage.getItem(LocalStorage.user)) || {}
  },
  reducers: {
    unauthorize: handleUnauthorize
  },
  extraReducers: {
    [register.fulfilled]: handleAuthFulfilled,
    [login.fulfilled]: handleAuthFulfilled,
    [logout.fulfilled]: handleUnauthorize
  }
})

const authReducer = auth.reducer
export const unauthorize = auth.actions.unauthorize
export default authReducer
