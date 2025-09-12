'use client';

import { FaCartShopping } from 'react-icons/fa6';
import DashboardRevenueCard from './components/dashboard/dashboard-cards/dashboard-revenue-card';
import DashboardSummaryCard from './components/dashboard/dashboard-cards/dashboard-summary-cards';
import WebsiteVisitsCard from './components/dashboard/dashboard-cards/website-visits-card'; // New visits chart
import ProductsTable from './components/dashboard/dashboard-tables/recent-orders-table';
import { BsFillBoxFill } from 'react-icons/bs';
import { FaMoneyBillWave } from 'react-icons/fa';
import { TbCoinFilled } from 'react-icons/tb';
import StockReportTable from './components/dashboard/dashboard-tables/stock-report-table';
import DashboardConversionCard from './components/dashboard/dashboard-cards/dashboard-converisons-card';
import NewCustomersCard from './components/dashboard/dashboard-cards/new-customer-card';
import RefundsReturnsCard from './components/dashboard/dashboard-cards/refund-card';
import CustomerRetentionCard from './components/dashboard/dashboard-cards/customer-retention-card';
import { Breadcrumb, BreadcrumbItem } from 'flowbite-react';
import { HiHome } from 'react-icons/hi2';

export default function DashboardLayout() {
  return (
    <div className="p-6 lg:ml-20 xl:ml-64">
      <div className="grid grid-cols-12 gap-4">
        {/* SUMMARY CARDS */}
        <div className="order-1 col-span-12 md:col-span-12 xl:col-span-12">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4">
            <DashboardSummaryCard
              title="175,000 AED"
              subHeading="Total Earnings"
              icon={<TbCoinFilled className="text-blue text-4xl" />}
              stat="+12%"
              primary="bg-blue-light"
              secondary="text-blue"
            />
            <DashboardSummaryCard
              title="127,000 AED"
              subHeading="Total Expenses"
              icon={<FaMoneyBillWave className="text-green text-3xl" />}
              stat="-12%"
              primary="bg-green-light"
              secondary="text-green"
            />
            <DashboardSummaryCard
              title="72"
              subHeading="Total Orders"
              icon={<FaCartShopping className="text-yellow text-3xl" />}
              stat="+6%"
              primary="bg-yellow-light"
              secondary="text-yellow"
            />
            <DashboardSummaryCard
              title="13"
              subHeading="Total Products"
              icon={<BsFillBoxFill className="text-purple text-3xl" />}
              stat="+13%"
              primary="bg-purple-light"
              secondary="text-purple"
            />
          </div>
        </div>

        {/* REVENUE CHART */}
        <div className="order-2 col-span-12 lg:col-span-7 xl:col-span-8">
          <DashboardRevenueCard />
        </div>

        {/* WEBSITE VISITS CHART */}
        <div className="order-3 col-span-12 lg:col-span-5 xl:col-span-4">
          <WebsiteVisitsCard />
        </div>

        {/* TABLE */}
        <div className="order-4 col-span-12">
          <ProductsTable />
        </div>
        <div className="order-5 col-span-12 lg:col-span-5 xl:col-span-4">
          <DashboardConversionCard />
        </div>
        <div className="order-6 col-span-12 lg:col-span-7 xl:col-span-8">
          <StockReportTable />
        </div>
        <div className="order-7 col-span-12 md:col-span-4">
          <RefundsReturnsCard />
        </div>
        <div className="order-8 col-span-12 md:col-span-4">
          <NewCustomersCard />
        </div>
        <div className="order-8 col-span-12 md:col-span-4">
          <CustomerRetentionCard />
        </div>
      </div>
    </div>
  );
}
