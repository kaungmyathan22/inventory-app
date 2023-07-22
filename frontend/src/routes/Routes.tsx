import Login from "@/features/auth/pages/Login/Login";
import ProductList from "@/features/product/pages/ProductList";
import AdminLayout from "@/shared/layout/AdminLayout";
import { useUserStore } from "@/stores/user.store";
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
  const { user } = useUserStore();
  const routes = user?.id ? authRoutes : unAuthRoutes;
  const routesToRedirect = user?.id ? "/admin" : "/auth";
  const router = useRoutes([
    routes,
    { path: "*", element: <Navigate to={routesToRedirect} /> },
  ]);
  return router;
};

export default Routes;
