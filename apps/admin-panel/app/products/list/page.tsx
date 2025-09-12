'use client';

import CardTitle from '@/app/components/card-title';
import ProductsTable from '@/app/components/products/productsList/product-tables.tsx/products-table';
import ProductsOverviewCard from '@/app/components/products/productsList/products-overview-cards/products-overview-cards';
import { Breadcrumb, BreadcrumbItem } from 'flowbite-react';
import { Button } from '@/components/ui/button';
import {
  FaBox,
  FaDollarSign,
  FaDownload,
  FaExclamationTriangle,
  FaShoppingBag,
  FaWallet,
} from 'react-icons/fa';
import { TiPlus } from 'react-icons/ti';
import { MdPrint } from 'react-icons/md';
import { IoGrid } from 'react-icons/io5';
import { useRouter } from 'next/navigation';

const ProductsList = () => {
  const router = useRouter();

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
            icon={<FaDollarSign className="text-2xl" />}
            color="purple-gradient"
          />
        </div>

        <div className="col-span-12 md:col-span-6 xl:col-span-3">
          <ProductsOverviewCard
            title="Total Products"
            description="Number of products"
            mainValue={342}
            icon={<FaBox className="text-xl" />}
          />
        </div>

        <div className="col-span-12 md:col-span-6 xl:col-span-3">
          <ProductsOverviewCard
            title="Out of Stock"
            description="Products out of stock"
            mainValue={12}
            icon={<FaExclamationTriangle className="text-error text-xl" />}
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
            <Button
              onClick={() => router.push('/products/grid')}
              variant="primary"
              className="gap-2 px-3 py-2 md:px-4 md:py-5"
            >
              <IoGrid />
            </Button>
            <Button
              variant="outline"
              className="gap-2 px-3 py-2 md:px-4 md:py-5"
            >
              <FaDownload />
            </Button>
            <Button
              variant="outline"
              className="gap-2 px-3 py-2 md:px-4 md:py-5"
            >
              <MdPrint className="text-lg" />
            </Button>
            <Button
              onClick={() => router.push('/products/create')}
              variant="primary"
              className="gap-2 px-3 py-2 md:px-4 md:py-5"
            >
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
