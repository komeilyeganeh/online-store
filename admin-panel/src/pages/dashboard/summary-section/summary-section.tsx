import { useEffect, useState } from "react";
import Charts from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { useAxios } from "../../../hooks/useAxios";
import { SummaryOneType } from "../../../types/summary.type";
import classes from "./summary-section.module.css";

export const SummarySection = () => {
  // ---- hooks ----
  const [summaryOne, setSummaryOne] = useState<SummaryOneType[]>();
  const { response } = useAxios({
    url: "summary",
    method: "get",
  });
  //   ---- sideEffect ----
  useEffect(() => {
    setSummaryOne(response?.summary_one);
  }, [response]);

  // ---- apexCharts option ----
  const options: ApexOptions = {
    chart: {
      height: 130,
      type: "area",
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 2
    },
    grid: {
      show: false,
    },
    xaxis: {
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      }
    },
    yaxis: {
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
  };

  //   ---- jsx return ----
  return (
    <section className={classes.section__summary}>
      {summaryOne &&
        summaryOne.map((summaryItem: SummaryOneType) => (
          <div key={summaryItem.id} className={classes.section__summary_card}>
            <div className={classes.section__summary_card_text}>
              <p>{summaryItem.titleEN}</p>
              <strong>{summaryItem.amount}</strong>
            </div>
            <div className={classes.section__summary_chart}>
              <Charts options={options} series={[summaryItem.chart]} />
            </div>
          </div>
        ))}
    </section>
  );
};
