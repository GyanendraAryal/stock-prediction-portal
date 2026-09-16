import { useContext } from "react";
import { AuthContext } from "./context/AuthProvider";
import { Navigate } from "react-router";

function PublicRoute({ children }) {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  return !isLoggedIn ? children : <Navigate to="/dashboard" />;
}
export default PublicRoute;
