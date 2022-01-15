import { createSlice } from '@reduxjs/toolkit'

const appSlice = createSlice({
  name: 'app',
  initialState: {
    status: 200
  },
  extraReducers: builder => {
    builder.addMatcher(
      action =>
        action.type.endsWith('/fulfilled') || action.type.endsWith('/rejected'),
      (state, action) => {
        console.log(action)
        state.status = action.payload.status
      }
    )
  }
})
const appReducer = appSlice.reducer
export default appReducer
