import { SearchBox, FullScreen, ToggleTheme } from "@components";
import classes from "./header.module.css";

export const Header: React.FC = () => {
  // ---- hooks ----
  // ---- jsx return ----
  return (
    <header className={classes.header}>
      <div>
        <SearchBox />
      </div>
      <div className={classes.header__items}>
       <FullScreen />
       <ToggleTheme />
      </div>
    </header>
  );
};
