'use client';

import CardTitle from '@/app/components/card-title';
import ProductsTable from '@/app/components/products/productsList/product-tables.tsx/products-table';
import ProductsOverviewCard from '@/app/components/products/productsList/products-overview-cards/products-overview-cards';
import { Breadcrumb, BreadcrumbItem, Button } from 'flowbite-react';
import {
  FaBox,
  FaDollarSign,
  FaDownload,
  FaExclamationTriangle,
  FaPrint,
  FaShoppingBag,
  FaWallet,
} from 'react-icons/fa';
import { TiPlus } from 'react-icons/ti';
import { MdPrint } from 'react-icons/md';

const ProductsList = () => {
  return (
    <div className="p-6 lg:ml-20 xl:ml-64">
      <Breadcrumb className="mb-6">
        <BreadcrumbItem href="#" icon={FaShoppingBag}>
          Products
        </BreadcrumbItem>
        <BreadcrumbItem href="#">List View</BreadcrumbItem>
      </Breadcrumb>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-6 xl:col-span-3">
          <ProductsOverviewCard
            title="Total Revenue"
            description="Revenue from products"
            mainValue="1,234,567"
            percentageChange="+12%"
            percentageColor="success"
            icon={<FaDollarSign className="text-2xl" />}
            color="purple-gradient"
          />
        </div>

        <div className="col-span-12 md:col-span-6 xl:col-span-3">
          <ProductsOverviewCard
            title="Total Products"
            description="Number of products"
            mainValue={342}
            percentageChange="+8%"
            percentageColor="success"
            icon={<FaBox className="text-xl" />}
          />
        </div>

        <div className="col-span-12 md:col-span-6 xl:col-span-3">
          <ProductsOverviewCard
            title="Out of Stock"
            description="Products fully out of stock"
            mainValue={12}
            percentageChange="-5%"
            percentageColor="danger"
            icon={<FaExclamationTriangle className="text-xl" />}
          />
        </div>

        <div className="col-span-12 md:col-span-6 xl:col-span-3">
          <ProductsOverviewCard
            title="Inventory Value"
            description="Value of current stock"
            mainValue="450,000"
            icon={<FaWallet className="text-xl" />}
          />
        </div>
        {/* <div className="col-span-12">
          <TableSortingCard />
        </div>   */}
        

        <div className="col-span-12 flex items-center justify-between">
          <CardTitle title="Products List" />
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
              <div className="hidden md:flex">Add New Product</div>
            </Button>
          </div>
        </div>
        <div className="col-span-12">
          <ProductsTable />
        </div>
      </div>
    </div>
  );
};

export default ProductsList;
