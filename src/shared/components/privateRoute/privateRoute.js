import { useAuth } from "../../../context/auth/authContext"
import { Navigate } from "react-router-dom";


export const PrivateRoute = ({children}) =>{
    const {isUserloggedIn} = useAuth();
  
   return isUserloggedIn ? children : <Navigate to="/login"/>
}