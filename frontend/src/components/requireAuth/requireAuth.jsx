import { Outlet } from "react-router-dom";
import { useAuth } from "../../providers/AuthProvider";
import { Unauthorized } from "../unauthorized/unauthorized";
import { Loading } from "../loading/loading";
export const RequireAuth = () => {
  const { loginData, loading } = useAuth();

  if (loading) {
    return <Loading />;
  }

  if (loginData === null) {
    return <Unauthorized />;
  }

  return <Outlet />;
};
