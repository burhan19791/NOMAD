import React from "react";

type SectionTitleProps = {
  title: string;
  description?: string;
};

const SectionTitle = ({ title, description }: SectionTitleProps) => {
  return (
    <div>
      <h2 className="text-3xl text-font-primary font-bold">{title}</h2>
      {description && <p className=" text-font-light">{description}</p>}
    </div>
  );
};

export default SectionTitle;
