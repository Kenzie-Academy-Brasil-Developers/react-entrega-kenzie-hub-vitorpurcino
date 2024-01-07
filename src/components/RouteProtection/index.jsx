import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { LoginContext } from "../../providers/LoginContext";

export const RouteProtection = () =>{
    const {user} = useContext(LoginContext)

    return user? <Outlet/>: <Navigate to="/" />
}