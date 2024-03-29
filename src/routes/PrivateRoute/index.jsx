import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { UserContext } from "../../providers/index";

export const PrivateRoute = () =>{
    const {user} = useContext(UserContext)

    return user? <Outlet/>: <Navigate to="/" />
}