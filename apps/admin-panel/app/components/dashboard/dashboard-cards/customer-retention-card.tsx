import React from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

const retentionData = {
  retentionRate: 72,
  changePercent: 4,
  totalCustomers: 1200,
  returningCustomers: 864,
  churnedCustomers: 336,
};

const CustomerRetentionCard = () => {
  const isPositive = retentionData.changePercent >= 0;

  return (
    <div className="bg-card-background rounded-2xl p-6 flex flex-col items-start text-left">
      <h2 className="text-font-light text-sm mb-1">Customer Retention</h2>

      <div className="flex items-center justify-between w-full mb-4">
        <h1 className="text-4xl font-bold text-font-primary">
          {retentionData.retentionRate}%
        </h1>

        <span
          className={`flex items-center gap-1 text-sm font-semibold mt-1 mb-4 ${
            isPositive ? "text-success" : "text-danger"
          }`}
        >
          {isPositive ? "+" : "-"}
          {Math.abs(retentionData.changePercent)}%
          {isPositive ? (
            <FaChevronUp className="text-success" />
          ) : (
            <FaChevronDown className="text-danger" />
          )}
        </span>
      </div>

      <p className="text-xs text-font-light w-2/3 mb-5">
        Percentage of customers who made repeat purchases in the last month.
      </p>
      <div className="w-full grid grid-cols-2 gap-y-6 pt-4 text-xs text-font-light">
        <div>
          <div className="font-semibold text-font-primary">
            {retentionData.totalCustomers.toLocaleString()}
          </div>
          <div>Total Customers</div>
        </div>
        <div>
          <div className="font-semibold text-font-primary">
            {retentionData.returningCustomers.toLocaleString()}
          </div>
          <div>Returning Customers</div>
        </div>
        <div>
          <div className="font-semibold text-font-primary">
            {retentionData.churnedCustomers.toLocaleString()}
          </div>
          <div>Churned Customers</div>
        </div>
        <div>
          <div className="font-semibold text-font-primary">
            {retentionData.churnedCustomers.toLocaleString()}
          </div>
          <div>Something Customers</div>
        </div>
      </div>
    </div>
  );
};

export default CustomerRetentionCard;
