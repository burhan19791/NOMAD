'use client';

import CardTitle from '@/app/components/card-title';
import OrderCompletionCard from '@/app/components/orders/order-cards/order-completion-card';
import CompletedVsPendingOrdersCard from '@/app/components/orders/order-cards/order-completion-card';
import { OrderSummaryCard } from '@/app/components/orders/order-cards/order-summary-cards';
import ReturnedOrdersCard from '@/app/components/orders/order-cards/returned-orders-card';
import OrdersTable from '@/app/components/orders/order-tables/order-table';
import { Breadcrumb, BreadcrumbItem } from 'flowbite-react';
import { Button } from '@/components/ui/button';
import React from 'react';
import { FaDownload, FaShoppingCart } from 'react-icons/fa';
import { MdPrint } from 'react-icons/md';

const OrdersList = () => {
  return (
    <div className="p-6 lg:ml-20 xl:ml-64">
      <Breadcrumb className="mb-6">
        <BreadcrumbItem href="#" icon={FaShoppingCart}>
          Orders
        </BreadcrumbItem>
        <BreadcrumbItem href="#">List View</BreadcrumbItem>
      </Breadcrumb>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-6 xl:col-span-3">
          <OrderSummaryCard
            title="Weekly Orders"
            mainText={109}
            percentageText="+14% from last week"
            barLightColor="bg-purple-light"
            barDarkColor="bg-purple"
            barFillPercentage={65}
          />
        </div>
        <div className="col-span-12 md:col-span-6 xl:col-span-3">
          <OrderSummaryCard
            title="Pending Orders"
            mainText={12}
            percentageText="+12% from last week"
            barLightColor="bg-yellow-light"
            barDarkColor="bg-yellow"
            barFillPercentage={40}
          />
        </div>
        <div className="col-span-12 md:col-span-6 xl:col-span-3">
          <OrderSummaryCard
            title="Weekly Refunds"
            mainText={23}
            percentageText="-23% from last week"
            barLightColor="bg-error-light"
            barDarkColor="bg-error"
            barFillPercentage={81}
          />
        </div>
        <div className="col-span-12 md:col-span-6 xl:col-span-3">
          <OrderSummaryCard
            title="Order Growth"
            mainText={'59%'}
            percentageText="+14% from last week"
            barLightColor="bg-green-light"
            barDarkColor="bg-green"
            barFillPercentage={42}
          />
        </div>
        <div className="col-span-12">
          <OrderCompletionCard />
        </div>
        {/* <div className="col-span-4">
          <ReturnedOrdersCard />
        </div> */}
        <div className="col-span-12 flex items-center justify-between">
          <CardTitle title="Orders List" />
          <div className="flex items-center gap-4">
            <Button className="dark:hover:bg-inner-card dark:border-inner-card dark:bg-inner-card text-font-primary gap-2 border border-gray-300 bg-white px-3 py-2 hover:bg-gray-200 md:px-4 md:py-5">
              <FaDownload />
              <div className="hidden md:flex">Download</div>
            </Button>
            <Button className="dark:hover:bg-inner-card dark:border-inner-card dark:bg-inner-card text-font-primary gap-2 border border-gray-300 bg-white px-3 py-2 hover:bg-gray-200 md:px-4 md:py-5">
              <MdPrint className="text-lg" />
              <div className="hidden md:flex">Print</div>
            </Button>
          </div>
        </div>
        <div className="col-span-12">
          <OrdersTable />
        </div>
      </div>
    </div>
  );
};

export default OrdersList;
