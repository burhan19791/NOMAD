"use client";

import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

const CustomerGrowthChart = () => {
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
      foreColor: isDark ? "#9ca3af" : "#6b7280", // Tailwind slate-400 / slate-500 colors
      background: "transparent",
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
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    yaxis: {
      labels: {
        offsetX: -10,
        style: {
          fontSize: "12px",
          colors: isDark ? "#9ca3af" : "#6b7280",
        },
        formatter: (value) => value.toLocaleString(),
      },
      min: 0,
      tickAmount: 5,
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
      marker: {
        show: true,
        fillColors: ["#7c3aed"],
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

  const chartSeries = [
    {
      name: "Customers",
      data: [30, 45, 80, 100, 150, 190, 220, 260, 290, 310, 350, 400],
    },
  ];

  return (
    <ReactApexChart
      options={chartOptions}
      series={chartSeries}
      type="area"
      height={300}
      width="100%"
    />
  );
};

export default CustomerGrowthChart;
