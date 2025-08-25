import React from "react";
import Image from "next/image";
import { FaRegHeart, FaStar } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

type ProductCardProps = {
  category: string;
  title: string;
  description: string;
  price: string;
  image: string;
  badge?: string; // optional
};

const ProductCard = ({
  category,
  title,
  description,
  price,
  image,
  badge,
}: ProductCardProps) => {
  return (
    <div className="bg-card-background rounded-lg p-4 h-full flex flex-col">
      {/* Image */}
      <div className="dark:bg-card-background/50 mb-4 h-70 w-full overflow-hidden bg-gray-200/30 relative">
        <Image
          src={image}
          alt={title}
          className="object-contain p-5 hover:scale-110 transition-all duration-400"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute rounded-full bg-white p-2 right-3 top-3 hover:bg-error hover:text-white transition-all duration-300 hover:scale-110 cursor-pointer">
          <FaRegHeart />
        </div>
      </div>

      {/* Text Content - This will grow to fill available space */}
      <div className="flex flex-col flex-1">
        <h2 className="text-font-light text-sm font-medium tracking-widest">
          {category}
        </h2>
        <h3 className="text-font-primary line-clamp-2 mt-1 font-bold">
          {title}
        </h3>
        <p className="text-font-light line-clamp-2 text-sm mt-2 flex-1">
          {description}
        </p>

        {/* Price + optional badge */}
        <div className="flex items-center justify-between mt-3 mb-4">
          <div className="font-bold">{price}</div>
          {badge && <Badge variant="success">{badge}</Badge>}
        </div>

        {/* Button - This will always be at the bottom */}
        <div className="mt-auto">
          <Button variant="primary" className="w-full">
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
