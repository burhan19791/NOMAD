"use client"

import React from "react";
import OrderCompletionTimeChart from "../order-charts/order-completion-time-chart";
import CardTitle from "../../card-title";
import { BsGraphUpArrow } from "react-icons/bs";
import SortBySelect from "../../sort-by-select";
import { Badge } from "@/components/ui/badge";

const OrderCompletionCard = () => {
  return (
    <div className=" rounded-2xl bg-card-background p-5">
      <div className="flex items-center justify-between mb-4">
        <CardTitle title="Average Order Completion Time" />
        <div className="flex items-center justify-between gap-4">
          <SortBySelect />
        </div>
      </div>
      <div className="flex items-end gap-2 mt-3">
        <div className="text-3xl text-font-primary font-bold leading-none">
          2.5 Days
        </div>
        <div>
          <Badge className="h-5 min-w-5 font-semibold text-success bg-inner-card rounded-md py-3 px-2  font-mono tabular-nums">
            <BsGraphUpArrow />
            +14%
          </Badge>
        </div>
      </div>
      <OrderCompletionTimeChart />
    </div>
  );
};

export default OrderCompletionCard;
