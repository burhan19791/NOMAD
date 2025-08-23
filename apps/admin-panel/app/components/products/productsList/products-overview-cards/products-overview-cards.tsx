import React from "react";

interface ProductsOverviewCardProps {
  title: string;
  description: string;
  mainValue: string | number;
  percentageChange?: string;
  percentageColor?: "success" | "danger" | "neutral";
  icon?: React.ReactNode;
  color?: "default" | "purple-gradient";
}

const ProductsOverviewCard: React.FC<ProductsOverviewCardProps> = ({
  title,
  description,
  mainValue,
  percentageChange,
  percentageColor = "neutral",
  icon,
  color = "default",
}) => {
  // Determine color classes for percentage text
  const percentageColorClass =
    percentageColor === "success"
      ? "text-green-500"
      : percentageColor === "danger"
      ? "text-red-500"
      : color === "purple-gradient"
      ? "text-purple-300"
      : "text-gray-400";

  // Background and text colors based on color prop
  const cardClass =
    color === "purple-gradient"
      ? "bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 text-white"
      : "bg-card-background";

  // Title, description and icon colors for purple gradient or default
  const titleClass =
    color === "purple-gradient" ? "text-white" : "text-font-primary";
  const descriptionClass =
    color === "purple-gradient" ? "text-white/70" : "text-font-light";
  const iconClass =
    color === "purple-gradient" ? "text-white" : "text-font-light";

  return (
    <div
      className={`${cardClass} p-6 rounded-2xl flex flex-col justify-between `}
    >
      <div className="flex items-center justify-between mb-1">
        <h3 className={`text-base font-semibold ${titleClass}`}>{title}</h3>
        <div className={iconClass}>{icon}</div>
      </div>
      <p className={`text-xs ${descriptionClass} md:w-2/3 lg:w-3/4`}>{description}</p>
      <div className="flex items-end gap-3 mt-6">
        <div
          className={`text-3xl font-bold ${
            color === "purple-gradient" ? "text-white" : "text-font-primary"
          }`}
        >
          {mainValue}
        </div>
        {percentageChange && (
          <div className={`${percentageColorClass} text-md font-medium`}>
            {percentageChange}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsOverviewCard;
