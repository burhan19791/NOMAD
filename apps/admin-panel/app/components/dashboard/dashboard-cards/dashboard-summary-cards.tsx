import { JSX } from "react";

type Props = {
  title: string;
  subHeading: string;
  icon: JSX.Element;
  stat: string;
  primary: string;
  secondary: string;
};

const DashboardSummaryCard = ({
  title,
  subHeading,
  icon,
  stat,
  primary,
  secondary,
}: Props) => {
  return (
    <div className="bg-card-background p-4 py-8 rounded-2xl flex items-center gap-3 relative">
      <div
        className={`${primary} rounded-full w-16 h-16 flex items-center justify-center`}
      >
        <div>{icon}</div>
      </div>
      <div>
        <h2 className="text-lg text-nowrap font-semibold text-font-primary leading-none mb-1 mr-12">
          {title}
        </h2>
        <p className="text-sm text-nowrap text-font-light">{subHeading}</p>
      </div>
      <div>
        <p className={`text-xs absolute bottom-4 right-4 ${secondary}`}>
          {stat}
        </p>
        <div
          className={`w-5 h-5 flex items-center absolute top-4 right-4 justify-center ${primary} ${secondary} rounded-full text-xs`}
        >
          ?
        </div>
      </div>
    </div>
  );
};

export default DashboardSummaryCard;
