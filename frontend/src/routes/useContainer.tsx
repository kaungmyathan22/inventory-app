import Login from "@/features/auth/pages/Login/Login";
import ProductList from "@/features/product/pages/ProductList/ProductList";
import { AuthApiService } from "@/services/Auth.service";
import AdminLayout from "@/shared/layout/AdminLayout";
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

const useContainer = () => {
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
  return {
    isLoading: profileQuery.isLoading,
    router,
  };
};

export default useContainer;
