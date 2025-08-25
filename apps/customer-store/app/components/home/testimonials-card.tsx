import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

type Props = {
  name: string;
  username: string;
  testimonial: string;
};

const TestimonialsCard = ({ name, username, testimonial }: Props) => {
  return (
    <div className="bg-card-background p-5 rounded-2xl text-center transition-all duration-300 hover:scale-105 hover:shadow-lg">
      <div className="flex flex-col items-center justify-center gap-2">
        <div className="bg-gray-100 rounded-full w-10 h-10"></div>
        <h1 className="text-2xl font-bold leading-none">{name}</h1>
        <h2 className="text-sm text-font-light leading-none">{username}</h2>
        <p className="text-sm text-font-primary leading-relaxed mt-3">
          {testimonial}
        </p>
        <div className="flex items-center justify-center gap-2 bg-primary rounded-full w-10 h-10 mt-3">
          <FaQuoteLeft className="text-white text-base" />
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCard;
