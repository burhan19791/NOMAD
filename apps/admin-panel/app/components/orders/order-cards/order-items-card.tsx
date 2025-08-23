import React from "react";
import CardTitle from "../../card-title";

const OrderItemsCard = () => {
  return (
    <div className="bg-card-background p-5 rounded-2xl">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-20 h-20 rounded-md bg-gray-200 dark:bg-inner-card" />
          <div>
            <div className="font-bold text-purple text-lg">Product Item 1</div>
            <div className="text-sm text-font-light">Color: Black, Size: M</div>
            <div className="text-font-primary font-bold text-sm">Qty 2</div>
          </div>
        </div>
        <div className="font-bold text-2xl text-purple">
          59.99
        </div>
      </div>
    </div>
  );
};

export default OrderItemsCard;
