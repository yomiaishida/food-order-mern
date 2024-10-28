import { useAuth0 } from "@auth0/auth0-react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return (
      <h1 className="h-screen flex justify-center items-center text-4xl text-orange-500">
        Loading...
      </h1>
    );
  }

  if (isAuthenticated) {
    return <Outlet />;
  }

  return <Navigate to="/" replace />;
};

export default ProtectedRoutes;
