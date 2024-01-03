import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";
import { Dashboard } from "../pages/Dashboard";
import { useState } from "react";

export const RoutesMain = () => {
  const [user, setUser] = useState();
  return (
    <Routes>
      <Route path="/" element={<LoginPage setUser={setUser} />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route
        path="/dashboard"
        element={<Dashboard user={user} setUser={setUser} />}
      />
    </Routes>
  );
};
