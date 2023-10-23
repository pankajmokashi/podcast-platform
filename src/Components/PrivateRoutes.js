import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import { Navigate, Outlet } from "react-router-dom";
import Loader from "./Loader";

function PrivateRoutes() {
  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return <Loader />;
  } else if (!user || error) {
    return <Navigate to="/" replace />;
  } else {
    return <Outlet />;
  }
}

export default PrivateRoutes;
