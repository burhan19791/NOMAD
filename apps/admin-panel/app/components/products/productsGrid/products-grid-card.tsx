import Image from 'next/image';
import React from 'react';
import { FaStar } from 'react-icons/fa';

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
            i <= rating ? 'text-yellow text-xs' : 'text-font-light text-xs'
          }
        />,
      );
    }
    return stars;
  };

  return (
    <div className="flex h-full flex-col rounded-lg">
      {/* Image Section - Fixed height */}
      <div className="dark:bg-card-background/50 relative mb-4 h-72 w-full overflow-hidden bg-gray-200/30">
        {imageSrc && (
          <Image
            src={imageSrc}
            alt={title}
            className="object-contain pt-4"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={false}
          />
        )}
      </div>

      {/* Content Section - Flex grow to fill available space */}
      <div className="flex flex-1 flex-col">
        {/* Title and Price - Fixed at top */}
        <div className="mb-3 flex items-start justify-between">
          <h3 className="text-font-primary line-clamp-2 flex-1 leading-tight font-bold">
            {title}
          </h3>
          <div className="text-purple ml-2 text-sm font-semibold">${price}</div>
        </div>

        {/* Description - Flexible height */}
        <p className="text-font-light mb-4 line-clamp-3 flex-1 text-sm leading-relaxed">
          {description}
        </p>

        {/* Rating and Category - Fixed at bottom */}
        <div className="mt-auto flex items-center justify-between text-xs font-medium">
          <div className="text-font-light flex items-center gap-1">
            {renderStars()} ({reviewsCount})
          </div>
          <div className="text-font-light">{category}</div>
        </div>
      </div>
    </div>
  );
};

export default ProductsGridCards;
