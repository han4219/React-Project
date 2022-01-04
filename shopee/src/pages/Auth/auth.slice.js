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
  state.auth.profile = user
  localStorage.setItem(LocalStorage.user, JSON.stringify(user))
  localStorage.setItem(LocalStorage.accessToken, JSON.stringify(access_token))
}

const auth = createSlice({
  name: 'auth',
  initialState: {
    profile: localStorage.getItem(LocalStorage.user) || {}
  },
  extraReducers: {
    [register.fulfilled]: handleAuthFulfilled,
    [login.fulfilled]: handleAuthFulfilled
  }
})

const authReducer = auth.reducer

export default authReducer
