import { useContext } from "react"
import { AuthContext } from "../../../Context/AuthProvider"
import { Navigate } from "react-router-dom"

export default function PrivateRoute({ children }) {
  const { user } = useContext(AuthContext)

  if (user) {
    return children
  }
  return <Navigate to="/login" />
}
