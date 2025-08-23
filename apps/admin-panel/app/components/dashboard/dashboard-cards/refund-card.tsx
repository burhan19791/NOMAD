import React from "react";
import { FaChevronUp } from "react-icons/fa";

const refundData = {
  pendingRequests: 5,
  totalRefunded: 2450, // your currency
  commonReasons: [
    { reason: "Size Issue", count: 8 },
    { reason: "Defective Product", count: 5 },
    { reason: "Changed Mind", count: 3 },
  ],
  percentChange: 7, // example WoW growth %
};

const RefundsReturnsCard = () => {
  return (
    <div className="bg-card-background rounded-2xl p-6 ">
      {/* Title */}
      <h2 className="text-font-light text-sm mb-1">Refunds & Returns</h2>

      {/* Top row: main number + percent change */}
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-4xl font-semibold text-font-primary">
          {refundData.pendingRequests}
        </h1>
        <span className="text-success flex items-center gap-1 text-sm font-medium">
          +{refundData.percentChange}%
          <FaChevronUp className="text-success" />
        </span>
      </div>

      {/* Reasons list */}
      <div className="mb-4">
        <h3 className="text-font-light text-xs mb-2 font-semibold">
          Common Reasons
        </h3>
        <ul className="space-y-2 text-sm text-font-light max-h-32 overflow-y-auto">
          {refundData.commonReasons.map(({ reason, count }, i) => (
            <li
              key={i}
              className="flex justify-between items-center border-b border-white/10 last:border-0 py-1"
            >
              <span>{reason}</span>
              <span className="font-semibold text-font-primary">{count}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Total refunded + alert */}
      <div className="flex justify-between items-center text-xs text-font-light font-semibold">
        <div>AED {refundData.totalRefunded.toLocaleString()} refunded</div>
        {refundData.pendingRequests > 3 && (
          <div className="text-red-500 font-semibold">
            ⚠️ High pending refunds!
          </div>
        )}
      </div>
    </div>
  );
};

export default RefundsReturnsCard;
