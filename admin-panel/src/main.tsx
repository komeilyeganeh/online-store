import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { Routes } from "./routes/routes";
import "./locales/i18n"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={Routes} />
  </StrictMode>
);