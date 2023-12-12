import React from "react";
import ReactApexChart from "react-apexcharts";

const ColumnGarph = () => {
  const options = {
    chart: {
      stacked: true,
    },
    colors: ["#e3cf34", "#d13838", "#7dd138"],
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
      ],
    },
  };

  const series = [
    {
      name: "Investment",
      data: [30, 40, 45, 50, 49, 60, 70, 91, 125, 105],
    },
    {
      name: "Loss",
      data: [23, 55, 40, 65, 63, 75, 89, 105, 85, 95],
    },
    {
      name: "Profit",
      data: [11, 20, 30, 10, 23, 45, 67, 89, 90, 80],
    },
  ];

  return (
    <div className="stacked-columns-chart">
      <ReactApexChart
        options={options}
        series={series}
        type="bar"
        height={350}
      />
    </div>
  );
};

export default ColumnGarph;
