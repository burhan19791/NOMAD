import React from "react";
import CardTitle from "../../card-title";
import CustomerGrowthChart from "../charts/customer-growth-chart";
import { Badge } from "@/components/ui/badge";
import { BsGraphUpArrow } from "react-icons/bs";
import SortBySelect from "../../sort-by-select";

const CustomerGrowthCard = () => {
  return (
    <div className="bg-card-background p-5 rounded-2xl">
      <div className="flex items-center justify-between mb-4">
        <CardTitle title="Customer Growth" />
        <div className="flex items-center justify-between gap-4">
          <SortBySelect />
        </div>
      </div>

      <div className="flex items-end gap-2">
        <div className="text-3xl ml-1 text-font-primary font-bold leading-none">
         56%
        </div>
        <Badge className="h-5 min-w-5 font-semibold text-success bg-inner-card rounded-md py-3 px-2  font-mono tabular-nums">
          <BsGraphUpArrow />
          +14%
        </Badge>
      </div>
      <CustomerGrowthChart />
    </div>
  );
};

export default CustomerGrowthCard;
