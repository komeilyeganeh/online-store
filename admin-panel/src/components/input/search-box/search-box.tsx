import { Input } from "@components";
import { t } from "i18next";
import { FiSearch } from "react-icons/fi";
import classes from "./search-box.module.css";

export const SearchBox: React.FC = () => {
  // ---- jsx return ----
  return (
    <div className={classes.search__box_wrapper}>
      <Input type="text" placeholder={t("input.search")} name="search" className={classes.search__box_input}/>
      <FiSearch size={23} className={classes.search__box_icon} color="#aaa"/>
    </div>
  );
};
