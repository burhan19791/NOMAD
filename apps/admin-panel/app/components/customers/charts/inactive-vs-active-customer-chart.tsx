"use client";

import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import type { ApexOptions } from "apexcharts";

const ActiveInactiveChart: React.FC = () => {
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

  type ColorStop = { offset: string; color: string; opacity: string };

  // w is typed as any because ApexCharts types don't export this
  // eslint-disable-next-line
  function createGradient(w: any, id: string, colors: ColorStop[]) {
    const svg = w.globals.dom.baseEl?.querySelector("svg");
    if (!svg) return "";
    let defs = svg.querySelector("defs");
    if (!defs) {
      defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
      svg.prepend(defs);
    }
    let gradient = defs.querySelector(`#${id}`);
    if (!gradient) {
      gradient = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "linearGradient"
      );
      gradient.setAttribute("id", id);
      gradient.setAttribute("x1", "0");
      gradient.setAttribute("y1", "0");
      gradient.setAttribute("x2", "0");
      gradient.setAttribute("y2", "1");

      colors.forEach(({ offset, color, opacity }) => {
        const stop = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "stop"
        );
        stop.setAttribute("offset", offset);
        stop.setAttribute("stop-color", color);
        stop.setAttribute("stop-opacity", opacity);
        gradient.appendChild(stop);
      });

      defs.appendChild(gradient);
    }
    return `url(#${id})`;
  }

  const options: ApexOptions = {
    chart: {
      type: "bar",
      toolbar: { show: false },
      height: 370,
      foreColor: isDark ? "#9ca3af" : "#6b7280",
    },
    legend: { show: false },
    plotOptions: {
      bar: {
        borderRadius: 3,
        columnWidth: "45%",
        colors: {
          backgroundBarColors: isDark
            ? Array(7).fill("#2c2c2c")
            : Array(7).fill("#f3f4f6"),
          backgroundBarOpacity: 1,
          backgroundBarRadius: 4,
        },
      },
    },
    dataLabels: { enabled: false },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May"],
      labels: {
        style: {
          fontSize: "12px",
          colors: Array(7).fill(isDark ? "#9ca3af" : "#6b7280"),
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          fontSize: "12px",
          colors: Array(7).fill(isDark ? "#9ca3af" : "#6b7280"),
        },
      },
    },
    grid: {
      strokeDashArray: 4,
      borderColor: isDark ? "#334155" : "#e5e7eb",
    },
    colors: [
      // eslint-disable-next-line
      (opts: { w: any }) =>
        createGradient(opts.w, "grad-active", [
          { offset: "0%", color: "#7c3aed", opacity: isDark ? "0.95" : "0.8" },
          { offset: "70%", color: "#6b46c1", opacity: isDark ? "0.5" : "0.3" },
          { offset: "100%", color: "#6b46c1", opacity: "0.1" },
        ]),
        // eslint-disable-next-line
      (opts: { w: any }) =>
        createGradient(opts.w, "grad-inactive", [
          { offset: "0%", color: "#dc2626", opacity: isDark ? "0.95" : "0.8" },
          { offset: "70%", color: "#991b1b", opacity: isDark ? "0.5" : "0.3" },
          { offset: "100%", color: "#991b1b", opacity: "0.1" },
        ]),
    ],
    tooltip: {
      theme: isDark ? "dark" : "light",
      y: {
        formatter: (val: number) => `${val} customers`,
      },
      marker: {
        show: true,
        fillColors: ["#7c3aed", "#dc2626"],
      },
    },
  };

  const series = [
    {
      name: "Active",
      data: [200, 250, 300, 350, 400,],
    },
    {
      name: "Inactive",
      data: [80, 100, 90, 110, 130,]
    },
  ];

  return (
    <ReactApexChart options={options} series={series} type="bar" height={330} />
  );
};

export default ActiveInactiveChart;
