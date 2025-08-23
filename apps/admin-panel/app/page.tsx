"use client";

import { FaCartShopping } from "react-icons/fa6";
import DashboardRevenueCard from "./components/dashboard/dashboard-cards/dashboard-revenue-card";
import DashboardSummaryCard from "./components/dashboard/dashboard-cards/dashboard-summary-cards";
import WebsiteVisitsCard from "./components/dashboard/dashboard-cards/website-visits-card"; // New visits chart
import ProductsTable from "./components/dashboard/dashboard-tables/recent-orders-table";
import { BsFillBoxFill } from "react-icons/bs";
import { FaMoneyBillWave } from "react-icons/fa";
import { TbCoinFilled } from "react-icons/tb";
import StockReportTable from "./components/dashboard/dashboard-tables/stock-report-table";
import DashboardConversionCard from "./components/dashboard/dashboard-cards/dashboard-converisons-card";
import NewCustomersCard from "./components/dashboard/dashboard-cards/new-customer-card";
import RefundsReturnsCard from "./components/dashboard/dashboard-cards/refund-card";
import CustomerRetentionCard from "./components/dashboard/dashboard-cards/customer-retention-card";
import { Breadcrumb, BreadcrumbItem } from "flowbite-react";
import { HiHome } from "react-icons/hi2";

export default function DashboardLayout() {
  return (
    <div className="lg:ml-20 xl:ml-64 p-6">
      <div className="grid grid-cols-12 gap-4">
        {/* SUMMARY CARDS */}
        <div className="col-span-12 md:col-span-12 xl:col-span-12 order-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-4">
            <DashboardSummaryCard
              title="175,000 AED"
              subHeading="Total Earnings"
              icon={<TbCoinFilled className="text-4xl text-blue" />}
              stat="+12%"
              primary="bg-blue-light"
              secondary="text-blue"
            />
            <DashboardSummaryCard
              title="127,000 AED"
              subHeading="Total Expenses"
              icon={<FaMoneyBillWave className="text-3xl text-green" />}
              stat="-12%"
              primary="bg-green-light"
              secondary="text-green"
            />
            <DashboardSummaryCard
              title="72"
              subHeading="Total Orders"
              icon={<FaCartShopping className="text-3xl text-yellow" />}
              stat="+6%"
              primary="bg-yellow-light"
              secondary="text-yellow"
            />
            <DashboardSummaryCard
              title="13"
              subHeading="Total Products"
              icon={<BsFillBoxFill className="text-3xl text-purple" />}
              stat="+13%"
              primary="bg-purple-light"
              secondary="text-purple"
            />
          </div>
        </div>

        {/* REVENUE CHART */}
        <div className="col-span-12 lg:col-span-7  xl:col-span-8 order-2">
          <DashboardRevenueCard />
        </div>

        {/* WEBSITE VISITS CHART */}
        <div className="col-span-12 lg:col-span-5 xl:col-span-4 order-3">
          <WebsiteVisitsCard />
        </div>

        {/* TABLE */}
        <div className="col-span-12 order-4">
          <ProductsTable />
        </div>
        <div className="xl:col-span-4 lg:col-span-5  col-span-12 order-5">
          <DashboardConversionCard />
        </div>
        <div className="xl:col-span-8 lg:col-span-7 order-6 col-span-12">
          <StockReportTable />
        </div>
        <div className="col-span-12 md:col-span-4 order-7 ">
          <RefundsReturnsCard />
        </div>
        <div className="col-span-12 md:col-span-4 order-8">
          <NewCustomersCard />
        </div>
        <div className="col-span-12 md:col-span-4 order-8">
          <CustomerRetentionCard />
        </div>
      </div>
    </div>
  );
}
