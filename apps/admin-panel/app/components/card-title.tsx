import React from "react";

type Props = {
  title: string;
};

const CardTitle = ({ title }: Props) => {
  return (
    <div    >
      <h2 className="text-font-primary text-xl leading-none font-semibold">{title}</h2>
    </div>
  );
};

export default CardTitle;
