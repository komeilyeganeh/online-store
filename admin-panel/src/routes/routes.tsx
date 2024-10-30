import { createBrowserRouter } from "react-router-dom";

import { Layout } from "../layout/layout";
import { lazy } from "react";

const Dashboard = lazy(() => import("../pages/dashboard/dashboard"));

export const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
    ],
  },
]);
