import Login from "@/features/auth/pages/Login";
import ProductList from "@/features/product/pages/ProductList";
import AdminLayout from "@/shared/layout/AdminLayout";
import { Navigate, useRoutes } from "react-router";

const routes = [
  {
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
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      { index: true, element: <ProductList /> },
      {
        path: "*",
        element: <Navigate to="/admin" />,
      },
    ],
  },
];
const Routes = () => {
  const router = useRoutes(routes);
  return router;
};

export default Routes;
