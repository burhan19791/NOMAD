'use client';

import CardTitle from '@/app/components/card-title';
import CustomSearch from '@/app/components/custom-search';
import React, { useState } from 'react';
import { MdCalendarToday, MdPersonOutline } from 'react-icons/md';
import { LuBox } from 'react-icons/lu';
import { FaSearch } from 'react-icons/fa';

interface Shipment {
  id: string;
  status: string;
  customer: string;
  delivery: string;
  items: string;
  total: number;
}

const shipmentsData: Shipment[] = [
  {
    id: 'ORD-001',
    status: 'In Transit',
    customer: 'John Doe',
    delivery: 'ETA 13 August 2025',
    items: '3 items via FedEx',
    total: 234.99,
  },
  {
    id: 'ORD-002',
    status: 'Delivered',
    customer: 'Jane Smith',
    delivery: 'Delivered 10 August 2025',
    items: '1 item via DHL',
    total: 120.0,
  },
  {
    id: 'ORD-003',
    status: 'Pending',
    customer: 'Michael Lee',
    delivery: 'ETA 15 August 2025',
    items: '5 items via UPS',
    total: 450.5,
  },
  {
    id: 'ORD-004',
    status: 'In Transit',
    customer: 'John Doe',
    delivery: 'ETA 13 August 2025',
    items: '3 items via FedEx',
    total: 234.99,
  },
];

const RecentShipmentsCard = () => {
  const [selected, setSelected] = useState(shipmentsData[0].id);

  return (
    <div className="bg-card-background flex h-[700px] flex-col rounded-2xl py-5">
      <div className="px-5">
        <div className="mb-4">
          <CardTitle title="Recent Shipments" />
        </div>
        <div className="w-full">
          <div className="border-inner-card-border bg-inner-card text-font-light dark:text-font-primary flex w-full items-center rounded-lg border px-3 py-2">
            <FaSearch className="text-font-primary text-xs" />
            {/* Only show input from md and above */}
            <input
              type="text"
              placeholder="Search..."
              className="placeholder:text-font-primary ml-2 hidden w-full bg-transparent text-sm outline-none md:inline-block"
            />
          </div>
        </div>
      </div>
      <hr className="my-6 text-gray-300 dark:text-stone-700" />

      {/* Scrollable shipment cards */}
      <div className="flex-1 space-y-4 overflow-y-auto px-5 pb-5">
        {shipmentsData.map((shipment) => {
          const isSelected = shipment.id === selected;
          return (
            <div
              key={shipment.id}
              onClick={() => setSelected(shipment.id)}
              className={`cursor-pointer rounded-lg border p-5 ${
                isSelected
                  ? 'border-purple/50 bg-purple/10 dark:border-purple/70 dark:bg-purple/20'
                  : 'dark:bg-inner-card/40 border-gray-300 bg-gray-100/40 dark:border-transparent'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-start gap-3">
                  <h2 className="text-font-primary text-xl font-bold">
                    {shipment.id}
                  </h2>
                </div>

                <div className="text-purple text-lg font-bold">
                  ${shipment.total.toFixed(2)}
                </div>
              </div>
              <div className="flex items-end justify-between">
                <div className="text-font-light mt-2 flex flex-col gap-3 text-sm">
                  <div className="flex items-center gap-2">
                    <MdPersonOutline className="text-purple" />
                    <span className="font-medium">{shipment.customer}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MdCalendarToday className="text-purple" />
                    <span className="font-medium">{shipment.delivery}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <LuBox className="text-purple" />
                    <span className="font-medium">{shipment.items}</span>
                  </div>
                </div>
                <div className="bg-purple rounded-full px-3 py-2 text-xs font-semibold text-white">
                  In Transit
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecentShipmentsCard;
