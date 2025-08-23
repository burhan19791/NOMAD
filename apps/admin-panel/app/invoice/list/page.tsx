'use client';

import CardTitle from '@/app/components/card-title';
import { Breadcrumb, BreadcrumbItem, Button } from 'flowbite-react';
import {
  FaDownload, FaFileInvoice, FaChartLine,
  FaClock
} from 'react-icons/fa';
import { TiPlus } from 'react-icons/ti';
import { MdPrint } from 'react-icons/md';
import InvoicesTable from '@/app/components/invoices/invoices-table';
import InvoiceCard from '@/app/components/invoices/invoice-card';
import { FaFileLines } from 'react-icons/fa6';

const InvoicesList = () => {
  return (
    <div className="p-6 lg:ml-20 xl:ml-64">
      <Breadcrumb className="mb-6">
        <BreadcrumbItem href="#" icon={FaFileLines}>
          Invoices
        </BreadcrumbItem>
        <BreadcrumbItem href="#">List View</BreadcrumbItem>
      </Breadcrumb>

      {/* Beautiful Gradient Cards - Moved to Top */}
      <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-3">
        <InvoiceCard
          title="Payment Trends"
          description="Analytics and insights for payment patterns"
          icon={<FaChartLine className="text-xl" />}
          progressPercentage={75}
          gradientFrom="from-emerald-500"
          gradientTo="to-teal-600"
          textColor="text-emerald-100"
        />

        <InvoiceCard
          title="Overdue Alerts"
          description="Manage late payments and send reminders"
          icon={<FaClock className="text-xl" />}
          progressPercentage={33}
          gradientFrom="from-amber-500"
          gradientTo="to-orange-600"
          textColor="text-amber-100"
        />

        <InvoiceCard    
          title="Invoice Templates"
          description="Customize and manage invoice designs"
          icon={<FaFileInvoice className="text-xl" />}
          progressPercentage={80}
          gradientFrom="from-indigo-500"
          gradientTo="to-purple-600"
          textColor="text-indigo-100"
        />
      </div>

      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 flex items-center justify-between">
          <CardTitle title="Invoices List" />
          <div className="flex items-center gap-2 md:gap-4">
            <Button className="dark:hover:bg-inner-card dark:border-inner-card dark:bg-inner-card text-font-primary gap-2 border border-gray-300 bg-white px-3 py-2 hover:bg-gray-200 md:px-4 md:py-5">
              <FaDownload />
              <div className="hidden md:flex">Download</div>
            </Button>
            <Button className="dark:hover:bg-inner-card dark:border-inner-card dark:bg-inner-card text-font-primary gap-2 border border-gray-300 bg-white px-3 py-2 hover:bg-gray-200 md:px-4 md:py-5">
              <MdPrint className="text-lg" />
              <div className="hidden md:flex">Print</div>
            </Button>
            <Button className="bg-purple dark:bg-purple gap-2 px-3 py-2 text-white hover:bg-purple-700 md:px-4 md:py-5 dark:hover:bg-purple-700">
              <TiPlus className="text-lg" />
              <div className="hidden md:flex">Create Invoice</div>
            </Button>
          </div>
        </div>
        <div className="col-span-12">
          <InvoicesTable />
        </div>
      </div>
    </div>
  );
};

export default InvoicesList;
