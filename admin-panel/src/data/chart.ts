import { ApexOptions } from "apexcharts";

export const seriesRange = [
  {
    data: [
      {
        x: "2008",
        y: [2800, 4500],
      },
      {
        x: "2009",
        y: [3200, 4100],
      },
      {
        x: "2010",
        y: [2950, 7800],
      },
      {
        x: "2011",
        y: [3000, 4600],
      },
      {
        x: "2012",
        y: [3500, 4100],
      },
      {
        x: "2013",
        y: [4500, 6500],
      },
      {
        x: "2014",
        y: [4100, 5600],
      },
    ],
  },
];
export const optionRange: ApexOptions = {
  chart: {
    height: 350,
    type: "rangeBar",
    zoom: {
      enabled: false,
    },
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      isDumbbell: true,
      columnWidth: 3,
      dumbbellColors: [["#008FFB", "#00E396"]],
    },
  },
  legend: {
    show: true,
    showForSingleSeries: true,
    position: "top",
    horizontalAlign: "left",
    customLegendItems: ["Product A", "Product B"],
  },
  fill: {
    type: "gradient",
    gradient: {
      type: "vertical",
      gradientToColors: ["#00E396"],
      inverseColors: true,
      stops: [0, 100],
    },
  },
  grid: {
    xaxis: {
      lines: {
        show: true,
      },
    },
    yaxis: {
      lines: {
        show: false,
      },
    },
  },
  xaxis: {
    tickPlacement: "on",
  },
};
export const seriesBar = [
  {
    name: "Net Profit",
    data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
  },
  {
    name: "Revenue",
    data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
  },
  {
    name: "Free Cash Flow",
    data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
  },
];
export const optionBar: ApexOptions = {
  chart: {
    type: "bar",
    height: 350,
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "55%",
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: true,
    width: 2,
    colors: ["transparent"],
  },
  xaxis: {
    categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
  },
  yaxis: {
    title: {
      text: "$ (thousands)",
    },
  },
  fill: {
    opacity: 1,
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return "$ " + val + " thousands";
      },
    },
  },
};

export const optionArea: ApexOptions = {
  chart: {
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
    width: 4,
  },
  xaxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
  },
};
export const seriesArea = [
  {
    name: "sales rise",
    data: [60, 90, 45, 80, 49, 110, 69, 91, 100],
  },
  {
    name: "sales drop",
    data: [95, 120, 80, 100, 65, 139, 90, 110, 80],
  },
];
export const optionPIE: ApexOptions = {
  chart: {
    type: "donut",
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
        },
        legend: {
          position: "bottom",
        },
      },
    },
  ],
};
export const seriesPIE = [44, 55, 41, 17, 15];
