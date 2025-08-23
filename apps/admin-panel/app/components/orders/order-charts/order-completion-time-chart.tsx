"use client";

import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

const OrderCompletionTimeChart = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));

    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  const chartOptions: ApexOptions = {
    chart: {
      type: "area",
      toolbar: { show: false },
      zoom: { enabled: false },
      foreColor: isDark ? "#9ca3af" : "#6b7280", // text color for axes
    },
    stroke: {
      curve: "smooth",
      width: 3,
      colors: ["#7c3aed"], // purple line
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "light",
        type: "vertical",
        opacityFrom: isDark ? 0.7 : 0.4,
        opacityTo: isDark ? 0 : 0.1,
        stops: [0, 50, 100],
        colorStops: [
          { offset: 0, color: "#7c3aed", opacity: isDark ? 0.7 : 0.4 },
          { offset: 50, color: "#6b46c1", opacity: isDark ? 0.4 : 0.2 },
          { offset: 100, color: "#6b46c1", opacity: 0 },
        ],
      },
    },
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
        "Nov",
        "Dec",
      ],
      labels: {
        style: {
          colors: isDark ? "#9ca3af" : "#6b7280",
        },
      },
      title: {
        style: {
          color: isDark ? "#9ca3af" : "#6b7280",
          fontWeight: "bold",
        },
      },
    },
    yaxis: {
      labels: {
        offsetX: -10,
        style: {
          fontSize: "12px",
          colors: isDark ? "#9ca3af" : "#6b7280",
        },
        formatter: (value) => `${value.toFixed(1)} d`, // showing days with 1 decimal
      },
      title: {
        style: {
          color: isDark ? "#9ca3af" : "#6b7280",
          fontWeight: "bold",
        },
      },
      min: 0,
      // You can adjust max dynamically based on data later if you want
    },
    dataLabels: { enabled: false },
    grid: {
      borderColor: isDark ? "#334155" : "#e5e7eb",
      strokeDashArray: 4,
    },
    tooltip: {
      enabled: true,
      theme: isDark ? "dark" : "light",
      style: {
        fontSize: "14px",
        fontFamily: "'Outfit', sans-serif",
      },
      y: {
        formatter: (val: number) => `${val.toFixed(2)} days`,
      },
      marker: {
        show: true,
        fillColors: ["#7c6bff"],
      },
    },
    markers: {
      size: 0,
      colors: ["#7c3aed"],
      strokeColors: ["#7c3aed"],
      strokeWidth: 2,
      hover: {
        size: 6,
      },
    },
  };

  // Replace this sample data with your real avg completion time data from backend
  const chartSeries = [
    {
      name: "Avg Completion Time",
      data: [1.2, 1.1, 1.5, 1.3, 1.8, 1.6, 1.4, 1.7, 1.9, 1.5, 1.3, 1.2],
    },
  ];

  return (
    <ReactApexChart
      options={chartOptions}
      series={chartSeries}
      type="area"
      height={340}
      width="100%"
    />
  );
};

export default OrderCompletionTimeChart;
