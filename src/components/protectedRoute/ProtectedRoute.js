import Cookies from "js-cookie";
import React, { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "config/firebase";
import { authenticated } from "redux/actions/authAction";

const ProtectedRoute = () => {
  const dispatch = useDispatch();
  const { isAuth, user } = useSelector((state) => state.auth);

  useEffect(() => {
    onAuthStateChanged(auth, (res) => {
      if (res.uid === user?.uid) dispatch(authenticated(true));
      else dispatch(authenticated(false));
    });
  }, []);

  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
