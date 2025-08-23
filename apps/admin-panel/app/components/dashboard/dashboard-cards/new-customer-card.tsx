import React from "react";
import NewCustomerChart from "../dashboard-charts/new-customers-chart";
import { FaChevronUp } from "react-icons/fa";

const NewCustomersCard = () => {
  const data = [5, 7, 9, 8, 12, 15, 18, 22, 20, 25, 30, 35, 40, 45]; // example daily signups

  return (
    <div className="bg-card-background rounded-2xl p-6">
      <h2 className="text-font-light text-sm mb-1">New Customers</h2>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-4xl font-semibold text-font-primary">45</h1>
        <span className="text-success flex items-center gap-1 text-sm font-medium">
          +12%
          <FaChevronUp className="text-success" />
        </span>
      </div>
      <NewCustomerChart data={data} />
      <div className="mt-4 grid grid-cols-3 text-center text-xs text-font-light">
        <div>
          <div className="font-semibold text-font-primary">45</div>
          <div>Total this month</div>
        </div>
        <div>
          <div className="font-semibold text-font-primary">3.2</div>
          <div>Avg per day</div>
        </div>
        <div>
          <div className="font-semibold text-font-primary">+12%</div>
          <div>WoW growth</div>
        </div>
      </div>
    </div>
  );
};

export default NewCustomersCard;
