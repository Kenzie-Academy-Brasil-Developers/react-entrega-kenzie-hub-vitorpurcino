import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { UserContext } from "../../providers/index";

export const PublicRoute = () => {
  const { user } = useContext(UserContext);
  return user ? <Navigate to="/dashboard" /> : <Outlet />;
};
