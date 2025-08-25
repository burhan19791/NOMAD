import Image from "next/image";
import React from "react";

interface Props {
  name: string;
  illustration: string;
}

const CategoryCard = ({ name, illustration }: Props) => {
  return (
    <div className=" rounded-2xl cursor-pointer bg-white flex flex-col items-center justify-center pb-5 hover:scale-105 transition-all duration-300 hover:shadow-lg">
      <div className="relative h-[230px] w-[230px] overflow-hidden">
        <Image
          src={illustration}
          alt={name}
          fill
          className="object-cover p-6"
        />
      </div>
      <div className="text-center text-xl font-semibold text-font-primary">
        {name}
      </div>
    </div>
  );
};

export default CategoryCard;
