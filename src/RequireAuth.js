// import { useSelector } from "react-redux";
import { useLocation, Navigate, Outlet } from "react-router-dom";

const RequireAuth = () => {
  const token = true;
  const location = useLocation();
  return token ? (
    <Outlet />
  ) : (
    <Navigate to={{ pathname: "/Login", state: { from: location } }} replace />
  );
};

export default RequireAuth;
