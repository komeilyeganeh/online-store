import { Outlet } from "react-router-dom";
import classes from "./layout.module.css";
import { Sidebar, Header, Footer } from "@components";
import { useEffect } from "react";
import i18next from "i18next";

export const Layout = () => {
  // ---- sideEffect ----
  useEffect(() => {
    document.documentElement.lang = i18next.language;
  }, []);
  console.log(i18next.language);

  // ---- jsx return ----
  return (
    <div className={classes.layout}>
      <Sidebar />
      <div className={classes.content__wrapper}>
        <Header />
        <main className={classes.main}>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};
