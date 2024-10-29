import { Logo, Navbar } from "@components";
import classes from "./sidebar.module.css";

export const Sidebar: React.FC = () => {
  
  // ---- jsx return ---
  return (
    <div className={classes.sidebar}>
      <Logo />
      <Navbar />
    </div>
  );
};
