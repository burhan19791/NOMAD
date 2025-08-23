"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";

// Dynamically import ReactApexChart with SSR disabled
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const RevenueChart = () => {
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
      foreColor: isDark ? "#9ca3af" : "#6b7280",
    },
    stroke: {
      curve: "smooth",
      width: 3,
      colors: ["#7c3aed"],
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

  const chartSeries = [
    {
      name: "Revenue",
      data: [
        120000, 190000, 250000, 200000, 270000, 310000, 290000, 330000, 300000,
        360000, 340000, 400000,
      ],
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

export default RevenueChart;
