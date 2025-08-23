"use client";

import React from "react";
import CardTitle from "../../card-title";

import { BsGraphUpArrow } from "react-icons/bs";
import { Badge } from "@/components/ui/badge";
import RevenueChart from "../dashboard-charts/revenue-chart";
import SortBySelect from "../../sort-by-select";

const DashboardRevenueCard = () => {
  return (
    <div className=" rounded-2xl bg-card-background p-5">
      <div className="flex items-center justify-between mb-4">
        <CardTitle title="Total Revenue" />
        <div className="flex items-center justify-between gap-4">
          <SortBySelect />
        </div>
      </div>
      <div className="flex items-end gap-2 mt-3">
        <div className="text-3xl ml-1 text-font-primary font-bold leading-none">
          175,000 AED
        </div>
        <div>
          <Badge className="h-5 min-w-5 font-semibold text-success bg-inner-card rounded-md py-3 px-2  font-mono tabular-nums">
            <BsGraphUpArrow />
            +14%
          </Badge>
        </div>
      </div>
      <RevenueChart />
    </div>
  );
};

export default DashboardRevenueCard;
