import React from "react";
import CardTitle from "../../card-title";

const OrderReceiptCard = () => {
  return (
    <div className="bg-card-background p-5 rounded-2xl flex flex-col gap-4">
      <CardTitle title="Receipt" />
      <div className="flex items-center justify-between mt-2">
        <div className="text-font-light text-sm font-bold">Subtotal</div>
        <div className="font-bold text-font-light">$345.99</div>
      </div>
      <div className="flex items-center justify-between">
        <div className="text-font-light text-sm font-bold">Tax(14%)</div>
        <div className="font-bold text-font-light">$24.42</div>
      </div>
      <div className="flex items-center justify-between">
        <div className="text-font-light text-sm font-bold">Delivery Charge</div>
        <div className="font-bold text-font-light">$20.00</div>
      </div>
      <div className="flex items-center justify-between">
        <div className="text-font-light text-sm font-bold">Discount</div>
        <div className="font-bold text-font-light">N/A</div>
      </div>
      <div className="flex items-center justify-between">
        <div className="text-font-light text-sm font-bold">Total</div>
        <div className="font-bold text-font-light">$462.99</div>
      </div>
      <div className="flex items-center justify-between">
        <div className="text-font-light text-sm font-bold">Payment Method</div>
        <div className="font-bold text-font-light">PayPal</div>
      </div>
    </div>
  );
};

export default OrderReceiptCard;
