import React from "react";
import ActiveInactiveChart from "../charts/inactive-vs-active-customer-chart";
import SortBySelect from "../../sort-by-select";
import CardTitle from "../../card-title";

const InactiveActiveCustomersCard = () => {
  return (
    <div className="rounded-2xl bg-card-background p-5">
      <div className="flex items-center justify-between mb-4">
        <CardTitle title="Active vs Inactive Customers" />
        <SortBySelect />
      </div>
      <div>
        <div>
          <ActiveInactiveChart />
        </div>
      </div>
    </div>
  );
};

export default InactiveActiveCustomersCard;
