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

const auth = createSlice({
  name: 'auth',
  initialState: {
    profile: localStorage.getItem(LocalStorage.user) || {}
  },
  extraReducers: {
    [register.fulfilled]: (state, { payload }) => {
      state.profile = payload.data
      localStorage.setItem(LocalStorage.user, JSON.stringify(state.profile))
    },
    [login.fulfilled]: (state, { payload }) => {
      state.profile = payload.data
      localStorage.setItem(LocalStorage.user, JSON.stringify(state.profile))
    }
  }
})

const authReducer = auth.reducer

export default authReducer
