import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { path } from 'src/constants/path'
import useAuthenticated from 'src/hooks/useAuthenticated'
import { unauthorize } from 'src/pages/Auth/auth.slice'
import { getCartPurchases } from 'src/pages/Cart/cart.slice'

export default function Authorization() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const status = useSelector(state => state.app.status)
  const authenticated = useAuthenticated()

  useEffect(() => {
    if (status === 401) {
      dispatch(unauthorize())
      navigate(path.login)
    }
  }, [dispatch, navigate, status])

  useEffect(() => {
    if (authenticated) {
      dispatch(getCartPurchases())
    }
  }, [dispatch, authenticated])

  return null
}
