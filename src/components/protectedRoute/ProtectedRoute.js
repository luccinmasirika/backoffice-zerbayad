import Cookies from 'js-cookie';
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  const jwt = Cookies.get('jwt');
  return jwt ? <Outlet /> : <Navigate to='/login' />;
};

export default ProtectedRoute;
