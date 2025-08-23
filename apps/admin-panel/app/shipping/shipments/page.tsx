'use client';

import ShipmentLocationCard from '@/app/components/shipping/shipments/cards/shipment-location-card';
import RecentShipmentsCard from '@/app/components/shipping/shipments/cards/shipment-recent-card';
import ShipmentSummaryCard from '@/app/components/shipping/shipments/cards/shipment-summary-card';
import ShipmentTrackingWizard from '@/app/components/shipping/shipments/cards/shipment-wizard-card';
import { Breadcrumb, BreadcrumbItem } from 'flowbite-react';
import React from 'react';
import { FaTruckMoving } from 'react-icons/fa';

const ShipmentsPage = () => {
  return (
    <div className="p-6 lg:ml-20 xl:ml-64">
      <Breadcrumb className="mb-6">
        <BreadcrumbItem href="#" icon={FaTruckMoving}>
          Invoices
        </BreadcrumbItem>
        <BreadcrumbItem href="#">Shipments</BreadcrumbItem>
      </Breadcrumb>
      <div className="grid grid-cols-12 gap-4">
        {/* Left column */}
        <div className="col-span-12 lg:col-span-4">
          <RecentShipmentsCard />
        </div>

        {/* Right column with stacked content */}
        <div className="col-span-12 flex flex-col gap-4 lg:col-span-8">
          <ShipmentSummaryCard />
          <ShipmentTrackingWizard />
          <ShipmentLocationCard />
        </div>
      </div>
    </div>
  );
};

export default ShipmentsPage;
