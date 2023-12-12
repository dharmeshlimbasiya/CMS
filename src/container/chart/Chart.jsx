import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import ReactApexChart from "react-apexcharts";

const options = {
  chart: {
    id: "basic-line",
    height: 150,
    type: "area",
    toolbar: {
      show: false,
    },
  },

  // grid: {
  //   xaxis: { lines: { show: false } },
  //   yaxis: {
  //     lines: {
  //       show: false,
  //     },
  //   },
  // },
  dataLabels: {
    enabled: false,
  },
  xaxis: {
    categories: [],
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
  labels: {
    show: false, // Hide x-axis labels
  },
  yaxis: {
    labels: {
      show: false, // Hide x-axis labels
    },

    // max: 100,
  },
  title: {
    text: "Bajaj Finery",
    align: "left",
  },
  subtitle: {
    text: "10% Profits",
    align: "left",
  },
  colors: ["#sd853c"],
};

const series = [
  {
    name: "PV",
    data: [
      2400, 1398, 9800, 3908, 4800, 3800, 4300, 1398, 9800, 3800, 4300, 1398,
      9800, 3908,
    ],
  },
];

const Chart = () => {
  return (
    <div>
      <ReactApexChart
        options={options}
        series={series}
        type="area"
        // height={150}
      />
    </div>
  );
};

export default Chart;
