import Login from "@/features/auth/pages/Login/Login";
import ProductList from "@/features/product/pages/ProductList";
import { AuthApiService } from "@/services/Auth.service";
import AdminLayout from "@/shared/layout/AdminLayout";
import { Loader } from "@/shared/Loader";
import { useUserStore } from "@/stores/user.store";
import { TOKEN } from "@/utils/constants";
import { getDataFromLocalStorage } from "@/utils/localStorage";
import { useQuery } from "react-query";
import { Navigate, useRoutes } from "react-router";

const unAuthRoutes = {
  path: "auth",
  children: [
    { index: true, element: <Login /> },
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "*",
      element: <Navigate to="/auth" />,
    },
  ],
};
const authRoutes = {
  path: "/admin",
  element: <AdminLayout />,
  children: [
    { index: true, element: <ProductList /> },
    {
      path: "*",
      element: <Navigate to="/admin" />,
    },
  ],
};
const Routes = () => {
  const { user, login } = useUserStore();
  const token = getDataFromLocalStorage({ key: TOKEN });
  const profileQuery = useQuery(["me"], AuthApiService.profile, {
    enabled: !!token,
    onSuccess: (data) => {
      login(data.user);
    },
  });
  const routes = user?.id ? authRoutes : unAuthRoutes;
  const routesToRedirect = user?.id ? "/admin" : "/auth";
  const router = useRoutes([
    routes,
    { path: "*", element: <Navigate to={routesToRedirect} /> },
  ]);
  if (profileQuery.isLoading) {
    return (
      <div className="w-screen h-screen flex items-center justify-center">
        <Loader className="h-[40px] w-[40px] border-black" />
      </div>
    );
  }
  return router;
};

export default Routes;
