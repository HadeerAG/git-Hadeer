import { useContext } from "react"
import { authContext } from "../../Context/AuthContext"
import Login from "../../Pages/Login/Login"
import { Navigate } from "react-router"


export default function ProtectedRoute({children}) {
 
    const {userToken} = useContext(authContext)
    
    if (userToken == null) {
      return <Navigate to="/login" />
    }
 
    return (
    <div>
      {children}
    </div>
  )
}
