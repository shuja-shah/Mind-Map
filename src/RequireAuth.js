// import { useSelector } from "react-redux"  ;
import { useSelector } from "react-redux";
import { useLocation, Navigate, Outlet } from "react-router-dom";

const RequireAuth = () => {
  const token = useSelector((state) => state.user.token);
  const location = useLocation();
  return token ? (
    <Outlet />
  ) : (
    <Navigate to={{ pathname: "/Auth", state: { from: location } }} replace />
  );
};

export default RequireAuth;
