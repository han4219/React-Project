import { useSelector } from 'react-redux'

export default function useAuthenticated() {
  return useSelector(state => state.auth.profile._id)
}
