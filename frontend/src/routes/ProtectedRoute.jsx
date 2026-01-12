import { Navigate } from "react-router-dom";
import { getUser, isAuthenticated } from "../auth/auth";

const ProtectedRoute = ({ children, role }) => {
  if (!isAuthenticated()) {
    return <Navigate to="/" replace />;
  }

  const user = getUser();

  if (role && user?.role !== role) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;