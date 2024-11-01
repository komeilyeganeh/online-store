import { useTranslation } from "react-i18next";
import classes from "./footer.module.css"

export const Footer: React.FC = () => {
  // ---- hooks ----
  const { t } = useTranslation();
  // ---- jsx return ----
  return (
    <footer className={classes.footer}>
      <div>
        <p>© 2023 SuperMart</p>
      </div>
      <div>
        <p>{t("footer.content")}</p>
      </div>
    </footer>
  );
};
