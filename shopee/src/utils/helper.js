export const isEmail = value => /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(value)
export const payloadCreator = asyncFunc => async (arg, thunkAPI) => {
  try {
    const res = await asyncFunc(arg)
    return res
  } catch (error) {
    return thunkAPI.rejectWithValue(error)
  }
}

export const generateNameId = ({ name, _id }) =>
  encodeURI(`${name.replace(/\s/g, '-').replace(/'%'/g, '')}-i.${_id}`)

export const formatMoney = value =>
  String(value).replace(/\B(?=(\d{3})+(?!\d))/g, '.')

export const formatSold = value => {
  const price = Number((Number(value) / 1000).toFixed(2))
  if (price > 1) {
    return price + 'k'
  }
  return value
}

export const getProductId = id => {
  const arr = id.split('-i.')
  return arr[arr.length - 1]
}

export const percentSale = (origin, sale) => {
  return (100 - (sale / origin) * 100).toFixed(0)
}
