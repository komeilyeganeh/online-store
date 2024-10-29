import { Link } from "react-router-dom";
import { ButtonPropsType } from "./button.type";
import classes from "./button.module.css";

export const Button: React.FC<ButtonPropsType> = ({
  as,
  href,
  className,
  children,
}) => {
  // ---- jsx return ----
  return as === "link" ? (
    <Link to={href} className={`${classes.btn} ${className}`}>
      {children}
    </Link>
  ) : (
    <button type={as} className={`${classes.btn} ${className}`}>
      {children}
    </button>
  );
};
