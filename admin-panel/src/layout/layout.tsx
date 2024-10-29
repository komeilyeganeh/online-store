import { Outlet } from "react-router-dom";
import classes from "./layout.module.css";
import { Sidebar, Header } from "@components";

export const Layout = () => {
  // ---- jsx return ----
  return (
    <div className={classes.layout}>
      <Sidebar />
      <div>
        <Header />
        <main>
          <Outlet />
        </main>
        FOOTER
      </div>
    </div>
  );
};
