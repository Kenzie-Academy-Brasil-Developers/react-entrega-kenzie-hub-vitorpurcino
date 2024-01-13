import { Dashboard, LoginPage, RegisterPage } from "../pages/index";
import { Route, Routes } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import { TechProvider } from "../providers";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route element={<PublicRoute />}>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>

      <Route element={<PrivateRoute />}>
        <Route
          path="/dashboard"
          element={
            <TechProvider>
              <Dashboard />
            </TechProvider>
          }
        />
      </Route>
    </Routes>
  );
};
