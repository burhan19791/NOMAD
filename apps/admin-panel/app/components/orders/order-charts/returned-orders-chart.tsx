"use client";

import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

const ReturnedOrdersChart: React.FC = () => {
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

  const options: ApexOptions = {
    chart: {
      type: "bar",
      toolbar: { show: false },
      height: 370,
      foreColor: isDark ? "#9ca3af" : "#6b7280",
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        columnWidth: "45%",
        colors: {
          backgroundBarColors: isDark
            ? ["#2c2c2c", "#2c2c2c", "#2c2c2c", "#2c2c2c"]
            : ["#f3f4f6", "#f3f4f6", "#f3f4f6", "#f3f4f6"],
          backgroundBarOpacity: 1,
          backgroundBarRadius: 4,
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["Damaged", "Wrong Size", "Changed Mind", "Other"],
      labels: {
        show: false,
        style: {
          fontSize: "12px",
          colors: Array(4).fill(isDark ? "#9ca3af" : "#6b7280"),
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          fontSize: "12px",
          colors: Array(4).fill(isDark ? "#9ca3af" : "#6b7280"),
        },
      },
    },
    grid: {
      strokeDashArray: 4,
      borderColor: isDark ? "#334155" : "#e5e7eb",
    },
    colors: [
      function ({
        seriesIndex,
        w,
      }: {
        seriesIndex: number;
        w: ApexChart & {
          globals: {
            dom: {
              baseEl: SVGSVGElement | null;
            };
          };
        };
      }) {
        const svg = w.globals.dom.baseEl?.querySelector("svg");
        if (!svg) return "#7c3aed";

        let defs = svg.querySelector("defs");
        if (!defs) {
          defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
          svg.prepend(defs);
        }

        const gradientId = `grad-${seriesIndex}`;
        let gradient = defs.querySelector(`#${gradientId}`);

        if (!gradient) {
          gradient = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "linearGradient"
          );
          gradient.setAttribute("id", gradientId);
          gradient.setAttribute("x1", "0");
          gradient.setAttribute("y1", "0");
          gradient.setAttribute("x2", "0");
          gradient.setAttribute("y2", "1");

          const stop1 = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "stop"
          );
          stop1.setAttribute("offset", "0%");
          stop1.setAttribute("stop-color", "#7c3aed");
          stop1.setAttribute("stop-opacity", isDark ? "0.95" : "0.8");

          const stop2 = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "stop"
          );
          stop2.setAttribute("offset", "70%");
          stop2.setAttribute("stop-color", "#6b46c1");
          stop2.setAttribute("stop-opacity", isDark ? "0.5" : "0.3");

          const stop3 = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "stop"
          );
          stop3.setAttribute("offset", "100%");
          stop3.setAttribute("stop-color", "#6b46c1");
          stop3.setAttribute("stop-opacity", "0.1");

          gradient.appendChild(stop1);
          gradient.appendChild(stop2);
          gradient.appendChild(stop3);
          defs.appendChild(gradient);
        }

        return `url(#${gradientId})`;
      },
    ],

    tooltip: {
      theme: isDark ? "dark" : "light",
      y: {
        formatter: (val: number) => `${val}%`,
      },
      marker: {
        show: true,
        fillColors: ["#7c6bff"],
      },
    },
  };

  const series = [
    {
      name: "Return Reasons",
      data: [40, 25, 20, 15],
    },
  ];

  return (
    <ReactApexChart options={options} series={series} type="bar" height={370} />
  );
};

export default ReturnedOrdersChart;
