import { Navigate, Outlet } from "react-router-dom"

function AuthRoute({user}) {
  return (
    user && user.token ? <Navigate to="/"  replace />: <Outlet />
  )
}

export default AuthRoute