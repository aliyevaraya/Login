import { Navigate, Outlet } from 'react-router-dom'

function PrivateRoute({user}) {
  return (
    user?.token ? <Outlet /> : <Navigate to="/login" replace/>
  )
}

export default PrivateRoute