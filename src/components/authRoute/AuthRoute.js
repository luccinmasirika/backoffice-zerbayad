import Cookies from 'js-cookie';
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const AuthRoute = () => {
  const jwt = Cookies.get('jwt');
  return !jwt ? <Outlet /> : <Navigate to='/' replace />;
};

export default AuthRoute;
