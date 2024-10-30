import { Input } from "@components";
import { FiSearch } from "react-icons/fi";
import classes from "./search-box.module.css";
import { useTranslation } from "react-i18next";

export const SearchBox: React.FC = () => {
  // ---- hooks ----
  const { t } = useTranslation();
  // ---- jsx return ----
  return (
    <div className={classes.search__box_wrapper}>
      <Input type="text" placeholder={t("input.search")} name="search" className={classes.search__box_input}/>
      <FiSearch size={23} className={classes.search__box_icon} color="#aaa"/>
    </div>
  );
};
