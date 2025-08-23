import React from "react";
import ReturnedOrdersChart from "../order-charts/returned-orders-chart";
import CardTitle from "../../card-title";

const ReturnedOrdersCard = () => {
  return (
    <div className="bg-card-background p-5 rounded-2xl">
      <CardTitle title="Returned Orders" />
      <ReturnedOrdersChart />
    </div>
  );
};

export default ReturnedOrdersCard;
