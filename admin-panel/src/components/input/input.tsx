import classes from "./input.module.css";
import { InputProps } from "./input.type";

export const Input: React.FC<InputProps> = ({
  type,
  placeholder,
  className,
  onChange,
  name
}) => {
  // ---- jsx return ----
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      className={`${classes.input} ${className}`}
      onChange={onChange}
    />
  );
};
