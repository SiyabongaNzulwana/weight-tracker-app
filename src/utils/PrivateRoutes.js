import { Navigate, Outlet } from 'react-router-dom'

export const PrivateRoutes = (props) => {
  const user = localStorage.getItem('user')
  const data = JSON.parse(user)

  return data && !data.data?.token ? (
    <Navigate to='/sign_up' />
  ) : data && data.data?.token ? (
    <Outlet />
  ) : (
    <Navigate to='/login' />
  )
}
