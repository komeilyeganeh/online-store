import { useEffect, useState } from "react";
import { useAxios } from "../../../hooks/useAxios";
import classes from "./summary-section.module.css";
import { SummaryOneType } from "../../../types/summary.type";

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

  //   ---- jsx return ----
  return (
    <section className={classes.section__summary}>
      {summaryOne &&
        summaryOne.map((summaryItem: SummaryOneType) => (
          <div
            key={summaryItem.id}
            className={classes.section__summary_card}
          >
            <div className={classes.section__summary_card_text}>
                <p>{summaryItem.titleEN}</p>
                <strong>{summaryItem.amount}</strong>
            </div>
            <div>
                CHART
            </div>
          </div>
        ))}
    </section>
  );
};
