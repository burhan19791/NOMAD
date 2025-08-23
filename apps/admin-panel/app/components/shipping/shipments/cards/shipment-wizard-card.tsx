'use client';

import CardTitle from '@/app/components/card-title';
import {
  FaCheck,
  FaBoxOpen,
  FaTruck,
  FaShippingFast,
  FaHome,
} from 'react-icons/fa';

export default function ShipmentTrackingWizard() {
  const steps = [
    {
      icon: <FaCheck />,
      title: 'Order Placed',
      desc: 'Your order has been received',
      completed: true,
    },
    {
      icon: <FaBoxOpen />,
      title: 'Processing',
      desc: 'Preparing your items for shipment',
      completed: true,
    },
    {
      icon: <FaShippingFast />,
      title: 'Shipped',
      desc: 'Package is on its way',
      completed: true,
    },
    {
      icon: <FaTruck />,
      title: 'In Transit',
      desc: 'Package is traveling to its destination',
      completed: false,
    },
    {
      icon: <FaHome />,
      title: 'Delivered',
      desc: 'Package has been delivered',
      completed: false,
    },
  ];

  return (
    <div className="bg-card-background rounded-2xl p-5">
      <div className="mb-4">
        <CardTitle title="Order Status" />
      </div>
      <div className="relative flex flex-col items-start gap-8">
        {/* Vertical connector line */}
        <div className="absolute top-5 bottom-5 left-4.5 w-1 bg-gray-200 dark:bg-stone-800"></div>

        {steps.map((step, index) => (
          <div key={index} className="relative flex items-start">
            <div
              className={`z-10 flex h-10 w-10 items-center justify-center rounded-full shadow-md ${
                step.completed
                  ? 'bg-purple shadow-purple/60 text-white shadow-md'
                  : 'bg-inner-card text-font-light'
              }`}
            >
              {step.icon}
            </div>
            <div className="ml-4">
              <p className="font-medium">{step.title}</p>
              <p className="text-sm text-gray-400">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
