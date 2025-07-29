// components/ProtectedRoute.js
import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const ProtectedRoute = () => {
    const { isLoggedIn, isLoading } = useContext(AuthContext);

    if (isLoading) {
        return <div>Loading...</div>; // Veya bir loading spinner
    }

    if (!isLoggedIn) {
        return <Navigate to="/login" replace />;
    }

    return <Outlet />;
};

export default ProtectedRoute;
