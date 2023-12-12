import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

const staticYearData = [
  { x: "Jan", y: 10 },
  { x: "Feb", y: 25 },
  { x: "Mar", y: 18 },
  // ... Other months
];

const staticMonthData = [
  { x: "Week 1", y: 5 },
  { x: "Week 2", y: 15 },
  { x: "Week 3", y: 8 },
  // ... Other weeks
];

const StaticGraph = () => {
  const [chartData, setChartData] = useState(staticYearData);

  const toggleYearData = () => {
    setChartData(staticYearData);
  };

  const toggleMonthData = () => {
    setChartData(staticMonthData);
  };

  const options = {
    chart: {
      id: "static-line",
      height: 350,
      type: "line",
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    title: {
      text: "Static Line Chart",
      align: "left",
    },
    markers: {
      size: 0,
    },
    xaxis: {
      labels: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        show: false,
      },
    },
    grid: {
      show: false,
    },
    legend: {
      show: false,
    },
  };

  return (
    <Paper
      elevation={3}
      sx={{
        padding: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <Button variant="contained" color="primary" onClick={toggleYearData}>
            Year
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary" onClick={toggleMonthData}>
            Month
          </Button>
        </Grid>
      </Grid>
      <div id="static-line-chart" style={{ marginTop: "20px" }}>
        <ReactApexChart
          options={options}
          series={[{ data: chartData }]}
          type="line"
          height={350}
        />
      </div>
    </Paper>
  );
};

export default StaticGraph;
