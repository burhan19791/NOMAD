import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";

type ProductsGridCardsProps = {
  imageSrc: string;
  title: string;
  price: string | number;
  description: string;
  rating: number; // from 0 to 5
  reviewsCount: number;
  category: string;
};

const ProductsGridCards = ({
  imageSrc,
  title,
  price,
  description,
  rating,
  reviewsCount,
  category,
}: ProductsGridCardsProps) => {
  // Function to render stars based on rating (out of 5)
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <FaStar
          key={i}
          className={
            i <= rating ? "text-yellow text-xs" : "text-font-light text-xs"
          }
        />
      );
    }
    return stars;
  };

  return (
    <div className="p-2 rounded-lg">
      <div className="relative w-full h-64 bg-gray-300 rounded-xl overflow-hidden mb-4">
        {imageSrc && (
          <Image
            src={imageSrc}
            alt={title}
            className="object-contain"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={false}
          />
        )}
      </div>
      <div className="mt-4">
        <div className="flex items-center text-font-primary justify-between">
          <div className="font-bold">{title}</div>
          <div className="font-medium text-sm">${price}</div>
        </div>
        <div className="text-font-light text-xs w-2/3 mb-4">{description}</div>
        <div className="flex items-center justify-between text-xs text-font-light font-medium mt-2">
          <div className="flex items-center gap-1">
            {renderStars()} ({reviewsCount})
          </div>
          <div>{category}</div>
        </div>
      </div>
    </div>
  );
};

export default ProductsGridCards;
