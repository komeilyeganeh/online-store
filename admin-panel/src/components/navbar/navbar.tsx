import { NavLinkData } from "../../types/nav-link";
import { useAxios } from "../../hooks/useAxios";
import { Link, useLocation } from "react-router-dom";
import i18n from "../../locales/i18n";
import classes from "./navbar.module.css";

export const Navbar: React.FC = () => {
  // ---- hooks ----
  const { response } = useAxios({
    url: "navbar-links",
    method: "get",
  });
  const location = useLocation();
  

  // ---- variables ----
  const currentLng = i18n.language;

  // ---- jsx return ----
  return (
    <nav className={classes.nav}>
      <ul className={classes.nav__link_wrapper}>
        {response &&
          response?.map((navLink: NavLinkData) => (
            <li key={navLink.id}>
              <Link to={navLink.url} className={`${classes.nav__link} ${location.pathname === navLink.url && classes.nav__link_active}`}>
                {currentLng === "en" ? navLink.titleEN : navLink.titleFA}
              </Link>
            </li>
          ))}
      </ul>
    </nav>
  );
};
