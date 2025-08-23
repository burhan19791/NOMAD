import React from "react";
import CardTitle from "../../card-title";
import SortBySelect from "../../sort-by-select";
import ConversionRateAreaChart from "../dashboard-charts/conversion-rate-chart";

const DashboardConversionCard = () => {
  return (
    <div className="bg-card-background p-5 gap-4 h-full rounded-2xl">
      <div className="flex items-center justify-between mb-4">
        <CardTitle title="Conversion Trends" />
        <SortBySelect />
      </div>
      <ConversionRateAreaChart />
    </div>
  );
};

export default DashboardConversionCard;
