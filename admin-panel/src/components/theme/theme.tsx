import { MdSunny } from "react-icons/md";
import { IoMoon } from "react-icons/io5";
import classes from "./theme.module.css"

export const ToggleTheme: React.FC = () => {
    // ---- hooks ----
    
    // ---- jsx return ----
    return <IoMoon size={23} className={classes.theme__icon}/>
}