import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const AuthRoute = () => {
  const { isAuth } = useSelector((state) => state.auth);
  return isAuth ? <Navigate to="/" replace /> : <Outlet />;
};

export default AuthRoute;
