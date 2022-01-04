export const isEmail = value => /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(value)
export const payloadCreator = asyncFunc => async (arg, thunkAPI) => {
  try {
    const res = await asyncFunc(arg)
    return res
  } catch (error) {
    return thunkAPI.rejectWithValue(error)
  }
}
