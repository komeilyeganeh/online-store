import { useTranslation } from "react-i18next";
import Charts from "react-apexcharts";
import {
  optionArea,
  seriesArea,
  optionPIE,
  seriesPIE,
} from "../../../data/chart";
import classes from "./sales-section.module.css";

export const SalesSection = () => {
  // ---- hooks ----
  const { t } = useTranslation();

  // ---- jsx return ----
  return (
    <div className={classes.sales__section}>
      <div
        className={`${classes.sales__section_left} ${classes.sales__section_div}`}
      >
        <h3>{t("dashboard.title_card.sales_growth_chart")}</h3>
        <Charts options={optionArea} series={seriesArea} type="area" />
      </div>
      <div
        className={`${classes.sales__section_right} ${classes.sales__section_div}`}
      >
        <h3>{t("dashboard.title_card.sales_trafic_source")}</h3>
        <Charts options={optionPIE} series={seriesPIE} type="donut" />
      </div>
    </div>
  );
};
