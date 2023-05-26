import React from "react";
import { Navigate } from "react-router-dom";

interface Props {
  isAuthenticated: boolean;
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<Props> = ({ isAuthenticated, children }) => {
  if (!isAuthenticated) {
    return <Navigate to={"/"} replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
