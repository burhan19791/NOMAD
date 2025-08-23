"use client";

import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

const ConversionChart = () => {
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
      colors: ["#22c55e", "#ef4444"], // green & red lines
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "light",
        type: "vertical",
        opacityFrom: isDark ? 0.6 : 0.3, // slightly softer start
        opacityTo: isDark ? 0 : 0.05, // very light fade
        stops: [0, 40, 100], // fade starts sooner → more whitespace
        colorStops: [
          // Green
          [
            { offset: 0, color: "#22c55e", opacity: isDark ? 0.6 : 0.3 },
            { offset: 40, color: "#16a34a", opacity: isDark ? 0.3 : 0.15 },
            { offset: 100, color: "#16a34a", opacity: 0 },
          ],
          // Red
          [
            { offset: 0, color: "#ef4444", opacity: isDark ? 0.6 : 0.3 },
            { offset: 40, color: "#dc2626", opacity: isDark ? 0.3 : 0.15 },
            { offset: 100, color: "#dc2626", opacity: 0 },
          ],
        ],
      },
    },
    xaxis: {
      categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
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
    markers: {
      size: 0,
      colors: ["#22c55e", "#ef4444"], // match series colors
      strokeColors: ["#22c55e", "#ef4444"],
      strokeWidth: 2,
      hover: {
        size: 6,
      },
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
        fillColors: ["#22c55e", "#ef4444"],
      },
    },
    legend: { show: false },
  };

  const chartSeries = [
    {
      name: "Purchases",
      data: [120, 150, 100, 170, 140, 180, 200],
    },
    {
      name: "Abandoned Carts",
      data: [80, 90, 70, 120, 100, 110, 130],
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

export default ConversionChart;
