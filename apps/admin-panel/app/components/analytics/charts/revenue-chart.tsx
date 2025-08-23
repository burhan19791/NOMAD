'use client';

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { ApexOptions } from 'apexcharts';

// Dynamically import ReactApexChart
const ReactApexChart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
});

const ProtocolLineChart = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains('dark'));
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains('dark'));
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });
    return () => observer.disconnect();
  }, []);

  const chartOptions: ApexOptions = {
    chart: {
      type: 'bar',
      stacked: false,
      toolbar: { show: false },
      zoom: { enabled: false },
      foreColor: isDark ? '#9ca3af' : '#6b7280',
    },
    plotOptions: {
      bar: {
        columnWidth: '50%', // thin bars
      },
    },
    dataLabels: { enabled: false }, // <--- disable the numbers on bars
    colors: ['#7c3aed'], // full purple
    xaxis: {
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
      labels: {
        style: {
          colors: isDark ? '#9ca3af' : '#6b7280',
        },
      },
    },

    yaxis: {
      labels: {
        formatter: (val) => `$${Math.round(val / 1000)}k`,
        style: { colors: isDark ? '#9ca3af' : '#6b7280' },
      },
    },
    grid: {
      borderColor: isDark ? '#334155' : '#e5e7eb',
      strokeDashArray: 4,
    },
    tooltip: {
      enabled: true,
      theme: isDark ? 'dark' : 'light',
      y: { formatter: (val: number) => `$${val.toLocaleString()}` },
    },
  };

  const chartSeries = [
    {
      name: 'Revenue',
      data: Array.from({ length: 150 }, () =>
        Math.floor(Math.random() * 400000 + 100000),
      ),
    },
  ];

  return (
    <ReactApexChart
      options={chartOptions}
      series={chartSeries}
      type="bar"
      height={340}
      width="100%"
    />
  );
};

export default ProtocolLineChart;
