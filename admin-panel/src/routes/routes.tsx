import { createBrowserRouter } from "react-router-dom"

import { Layout } from "../layout/layout"

export const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Layout />
    }
])