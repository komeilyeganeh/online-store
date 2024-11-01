import { SalesSection } from "./sales-section/sales-section";
import { SummarySection } from "./summary-section/summary-section";
import Charts from "react-apexcharts";
import {
  optionRange,
  seriesRange,
  optionBar,
  seriesBar,
} from "../../data/chart";
import classes from "./dashboard.module.css";

const Dashboard = () => {
  // ---- jsx return ----
  return (
    <div className={classes.dashboard__wrapper}>
      <SummarySection />
      {/* ---- sales summary */}
      <section>
        <SalesSection />
        <div className={classes.dashboard__summary}>
          <div
            className={`${classes.dashboard__chart_range} ${classes.dashboard__chart_div}`}
          >
            <Charts
              options={optionRange}
              series={seriesRange}
              type="rangeBar"
            />
          </div>
          <div
            className={`${classes.dashboard__chart_bar} ${classes.dashboard__chart_div}`}
          >
            <Charts options={optionBar} series={seriesBar} type="bar" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
