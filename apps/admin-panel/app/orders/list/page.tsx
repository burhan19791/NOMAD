"use client";

import CardTitle from "@/app/components/card-title";
import OrderCompletionCard from "@/app/components/orders/order-cards/order-completion-card";
import CompletedVsPendingOrdersCard from "@/app/components/orders/order-cards/order-completion-card";
import { OrderSummaryCard } from "@/app/components/orders/order-cards/order-summary-cards";
import ReturnedOrdersCard from "@/app/components/orders/order-cards/returned-orders-card";
import OrdersTable from "@/app/components/orders/order-tables/order-table";
import { Breadcrumb, BreadcrumbItem, Button } from "flowbite-react";
import React from "react";
import { FaDownload, FaShoppingCart } from "react-icons/fa";
import { MdPrint } from "react-icons/md";

const OrdersList = () => {
  return (
    <div className="lg:ml-20 xl:ml-64 p-6">
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
            mainText={"59%"}
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
        <div className="col-span-12 flex justify-between items-center">
          <CardTitle title="Orders List" />
          <div className="flex items-center gap-4">
            <Button
              className="bg-white gap-2 dark:hover:bg-inner-card py-2 px-3 md:py-5 md:px-4 hover:bg-gray-200 border border-gray-300  dark:border-inner-card dark:bg-inner-card text-font-primary"
            >
              <FaDownload />
              <div className="hidden md:flex">Download</div>
            </Button>
            <Button
              className="bg-white gap-2 dark:hover:bg-inner-card py-2 px-3 md:py-5 md:px-4 hover:bg-gray-200 border border-gray-300  dark:border-inner-card dark:bg-inner-card text-font-primary"
            >
              <MdPrint className="text-lg"/>
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
