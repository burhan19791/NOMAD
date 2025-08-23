import React from "react";

interface OrderOverviewSummaryCardProps {
  title: string;
  subtitle: string;
  percentageText: string;
  primaryColorClass: string; // e.g. "bg-purple"
  secondaryColorClass: string; // e.g. "text-purple-light"
  Icon: React.ComponentType<{ className?: string }>;
}

const OrderOverviewSummaryCard: React.FC<OrderOverviewSummaryCardProps> = ({
  title,
  subtitle,
  percentageText,
  primaryColorClass,
  secondaryColorClass,
  Icon,
}) => {
  return (
    <div className="bg-card-background p-3 py-6 items-center flex flex-col rounded-2xl">
      <div
        className={`${primaryColorClass} flex rounded-full items-center w-15 h-15 justify-center`}
      >
        <Icon className={`text-3xl ${secondaryColorClass}`} />
      </div>
      <div className="font-bold text-font-primary text-xl mt-4">{title}</div>
      <div className="text-font-light text-sm">{subtitle}</div>
      <div className="mt-6 text-sm text-success font-medium">
        {percentageText}
      </div>
    </div>
  );
};

export default OrderOverviewSummaryCard;
