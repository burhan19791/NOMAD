import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

interface NewCustomerChartProps {
  data: number[];
}

const NewCustomerChart: React.FC<NewCustomerChartProps> = ({ data }) => {
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
      sparkline: { enabled: true },
    },
    stroke: {
      curve: "smooth",
      width: 2,
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
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    yaxis: {
      show: false,
    },
    dataLabels: { enabled: false },
    grid: {
      show: false,
    },
    tooltip: {
      enabled: true,
      theme: isDark ? "dark" : "light",
      style: {
        fontSize: "12px",
        fontFamily: "'Outfit', sans-serif",
      },
      x: { show: false },
      y: {
        formatter: (val: number) => `${val} signups`,
        title: { formatter: () => "Daily Signups" },
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

  const chartSeries = [{ name: "New Customers", data }];

  return (
    <ReactApexChart
      options={chartOptions}
      series={chartSeries}
      type="area"
      height={110}
      width="100%"
    />
  );
};

export default NewCustomerChart;
