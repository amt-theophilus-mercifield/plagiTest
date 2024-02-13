import { PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";

const DashboardProtectedRoute = ({ children }: PropsWithChildren) => {
  const token = localStorage.getItem("accessToken");

  if (!token) {
    return <Navigate to="/" />;
  }

  return <>{children}</>;
};

export default DashboardProtectedRoute;
