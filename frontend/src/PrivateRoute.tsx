import { useContext } from "react";
import { AuthContext } from "./context/AuthProvider";
import { Navigate } from "react-router";

const PrivateRoute = ({ children }) => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  return isLoggedIn ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
