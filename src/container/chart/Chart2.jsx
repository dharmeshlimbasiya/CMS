import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";

const XAXISRANGE = 6500; // Adjust as needed
const MAX_DATA_POINTS = 200; // Adjust the maximum number of data points displayed

const Chart2 = () => {
  const [series, setSeries] = useState([{ data: [] }]);
  const lastDate = new Date().getTime();

  const options = {
    chart: {
      id: "realtime-line",
      height: 150,
      type: "line",
      animations: {
        enabled: true,
        easing: "linear",
        dynamicAnimation: {
          speed: 1000,
        },
      },
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
      background: "across",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      colors: ["#281f1f"],
    },
    title: {
      // text: "Real-time Line Chart",
      align: "left",
    },
    grid: {
      show: false, // Hide grid lines
    },
    markers: {
      size: 0.9,
    },
    xaxis: {
      labels: {
        show: false, // Hide x-axis labels
      },
      type: "datetime",
      range: XAXISRANGE,
    },
    yaxis: {
      labels: {
        show: false, // Hide x-axis labels
      },
      max: 100,
    },
    legend: {
      show: false,
    },
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const newData = generateNewData();
      setSeries([{ data: newData }]);
      ApexCharts.exec("realtime-line", "updateSeries", [
        {
          data: newData,
        },
      ]);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const generateNewData = () => {
    const newDataPoint = {
      x: new Date().getTime(),
      y: Math.floor(Math.random() * 150),
    };

    const updatedData = [
      newDataPoint,
      ...series[0].data.slice(0, MAX_DATA_POINTS - 1),
    ];

    return updatedData;
  };

  return (
    <div id="realtime-line-chart">
      <ReactApexChart
        options={options}
        series={series}
        type="line"
        height={150}
      />
    </div>
  );
};

export default Chart2;
