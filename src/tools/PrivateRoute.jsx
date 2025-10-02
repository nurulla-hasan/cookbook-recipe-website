
import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ children }) => {
    const location = useLocation();
    const { accessToken } = useSelector((state) => state.auth);
    
    if (!accessToken) {
        return <Navigate to="/auth/login" state={{ from: location }} replace />;
    }
    
    return children;
};

export default PrivateRoute;