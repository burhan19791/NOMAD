import React from 'react';

interface InvoiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  progressPercentage: number;
  gradientFrom: string;
  gradientTo: string;
  textColor: string;
}

const InvoiceCard: React.FC<InvoiceCardProps> = ({
  title,
  description,
  icon,
  progressPercentage,
  gradientFrom,
  gradientTo,
  textColor,
}) => {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${gradientFrom} ${gradientTo} p-8 text-white transition-all duration-300 hover:shadow-2xl`}
    >
      <div className="absolute -top-4 -right-4 h-24 w-24 rounded-full bg-white/10"></div>
      <div className="absolute -bottom-4 -left-4 h-16 w-16 rounded-full bg-white/5"></div>
      <div className="relative z-10">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm">
          {icon}
        </div>
        <h3 className="mb-2 text-xl font-bold">{title}</h3>
        <p className={`${textColor}`}>{description}</p>
        <div className="mt-4 flex items-center gap-2">
          <div className="h-2 flex-1 rounded-full bg-white/20">
            <div
              className="h-2 rounded-full bg-white transition-all duration-300"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
          <span className="text-sm font-medium">{progressPercentage}%</span>
        </div>
      </div>
    </div>
  );
};

export default InvoiceCard;
