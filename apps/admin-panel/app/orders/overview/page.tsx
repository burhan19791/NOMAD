"use client";

import CardTitle from "@/app/components/card-title";
import OrderDetailsCard from "@/app/components/orders/order-cards/order-details-card";
import OrderItemsCard from "@/app/components/orders/order-cards/order-items-card";
import OrderOverviewSummaryCard from "@/app/components/orders/order-cards/order-overview-summary-cards";
import OrderReceiptCard from "@/app/components/orders/order-cards/order-receipt-card";
import { Breadcrumb, BreadcrumbItem } from "flowbite-react";
import React from "react";
import { BsCheckCircle, BsFillCreditCard2FrontFill } from "react-icons/bs";
import { FaDollarSign, FaShoppingCart } from "react-icons/fa";
import { GiDeliveryDrone } from "react-icons/gi";
import { IoMdPerson } from "react-icons/io";
import { MdOutlinePendingActions } from "react-icons/md";

const OrdersOverview = () => {
  return (
    <div className="lg:ml-20 xl:ml-64 p-6">
      <Breadcrumb className="mb-6">
        <BreadcrumbItem href="#" icon={FaShoppingCart}>
          Orders
        </BreadcrumbItem>
        <BreadcrumbItem href="#">Overview</BreadcrumbItem>
      </Breadcrumb>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 sm:col-span-6 xl:col-span-3">
          <OrderOverviewSummaryCard
            title="Burhan Shah"
            subtitle="Customer Name"
            percentageText="+5% from last week"
            primaryColorClass="bg-purple-light"
            secondaryColorClass="text-purple"
            Icon={IoMdPerson}
          />
        </div>
        <div className="col-span-12 sm:col-span-6 xl:col-span-3">
          <OrderOverviewSummaryCard
            title="$1,245.00"
            subtitle="Order Total"
            percentageText="+12% from last week"
            primaryColorClass="bg-green-light"
            secondaryColorClass="text-green"
            Icon={FaDollarSign}
          />
        </div>
        <div className="col-span-12 sm:col-span-6 xl:col-span-3">
          <OrderOverviewSummaryCard
            title="Processing"
            subtitle="Order Status"
            percentageText="On track"
            primaryColorClass="bg-blue-light"
            secondaryColorClass="text-blue"
            Icon={MdOutlinePendingActions}
          />
        </div>
        <div className="col-span-12 sm:col-span-6 xl:col-span-3">
          <OrderOverviewSummaryCard
            title="PayPal"
            subtitle="Payment Method"
            percentageText="53% customers use card"
            primaryColorClass="bg-yellow-light"
            secondaryColorClass="text-yellow"
            Icon={BsFillCreditCard2FrontFill}
          />
        </div>

        <div className="col-span-12">
          <div className="mb-4">
            <CardTitle title="Order Items" />
          </div>
          <div className="gap-4 flex flex-col">
            <OrderItemsCard />
            <OrderItemsCard />
            <OrderItemsCard />
          </div>
        </div>
        <div className="col-span-12 lg:col-span-12">
          <OrderDetailsCard  />
        </div>
        <div className="col-span-4 lg:col-span-8"></div>
        <div className="col-span-8 lg:col-span-4 order-last">
          <OrderReceiptCard />
        </div>
      </div>
    </div>
  );
};

export default OrdersOverview;
