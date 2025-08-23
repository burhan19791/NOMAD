import CardTitle from '@/app/components/card-title';
import React from 'react';
import { FaBox } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { TiMinus, TiPlus } from 'react-icons/ti';

const ShipmentLocationCard = () => {
  return (
    <div className="bg-card-background rounded-2xl p-5">
      <div className="mb-4">
        <CardTitle title="Order Location" />
      </div>
      <div>
        <div className="bg-inner-card relative flex h-72 items-center justify-center rounded-xl">
          <FaLocationDot className="text-4xl text-gray-400 dark:text-gray-600" />
          <div className="absolute top-5 left-5 flex flex-col gap-2">
            <div className="dark:bg-card-background text-font-primary flex h-8 w-8 items-center justify-center rounded-md bg-white">
              <TiPlus />
            </div>
            <div className="dark:bg-card-background text-font-primary flex h-8 w-8 items-center justify-center rounded-md bg-white">
              <TiMinus />
            </div>
          </div>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <div className="text-font-light text-sm">Last Updated: 2 hours ago</div>
          <div className="text-font-light text-sm">Estimated Arrival: 08/10/2025</div>
        </div>
      </div>
    </div>
  );
};

export default ShipmentLocationCard;
