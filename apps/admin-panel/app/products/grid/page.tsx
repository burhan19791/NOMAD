'use client';

import CardTitle from '@/app/components/card-title';
import ProductsOverviewCard from '@/app/components/products/productsList/products-overview-cards/products-overview-cards';
import { Breadcrumb, BreadcrumbItem, Button } from 'flowbite-react';
import {
  FaBox,
  FaDollarSign,
  FaExclamationTriangle,
  FaWallet,
  FaShoppingBag,
  FaClipboardList,
} from 'react-icons/fa';
import { TiPlus } from 'react-icons/ti';
import ProductsGridCards from '@/app/components/products/productsGrid/products-grid-card';
import { useRouter } from 'next/navigation';

const ProductsList = () => {
  const router = useRouter();

  const products = [
    {
      imageSrc: '/images/shirt-guy.png',
      title: 'Black Hoodie',
      price: 75.99,
      description: 'Comfortable and warm black hoodie.',
      rating: 4,
      reviewsCount: 20,
      category: 'Apparel',
    },
    {
      imageSrc: '/images/nomad-cap.png',
      title: 'Nomad Cap',
      price: 25.0,
      description: 'Stylish cap for everyday wear and stuff.',
      rating: 5,
      reviewsCount: 15,
      category: 'Accessories',
    },
    {
      imageSrc: '/images/cargo-pants.png',
      title: 'Cargo Pants',
      price: 59.99,
      description: 'Durable cargo pants with lots of pockets.',
      rating: 3,
      reviewsCount: 8,
      category: 'Apparel',
    },
    {
      imageSrc: '/images/cargo-pants.png',
      title: 'Cargo Pants',
      price: 59.99,
      description: 'Durable cargo pants with lots of pockets.',
      rating: 3,
      reviewsCount: 8,
      category: 'Apparel',
    },
  ];

  return (
    <div className="p-6 lg:ml-20 xl:ml-64">
      <Breadcrumb className="mb-6">
        <BreadcrumbItem href="#" icon={FaShoppingBag}>
          Products
        </BreadcrumbItem>
        <BreadcrumbItem href="#">Gird View</BreadcrumbItem>
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
            description="Products out of stock"
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

        {/* Header & Add Product Button */}
        <div className="col-span-12 mt-6 flex items-center justify-between">
          <CardTitle title="Products Grid" />
          <div className="flex items-center gap-2">
            <Button
              onClick={() => router.push('/products/list')}
              className="bg-purple dark:bg-purple gap-2 px-3 py-2 text-white hover:bg-purple-700 focus:ring-2 focus:ring-purple-300 md:px-4 md:py-5 dark:hover:bg-purple-700"
            >
              <FaClipboardList />
            </Button>
            <Button
              onClick={() => router.push('products/create')}
              className="bg-purple dark:bg-purple gap-2 px-3 py-2 text-white hover:bg-purple-700 focus:ring-2 focus:ring-purple-300 md:px-4 md:py-5 dark:hover:bg-purple-700"
            >
              <TiPlus className="text-lg" />
              <div className="hidden md:flex">Add New Product</div>
            </Button>
          </div>
        </div>

        {/* Map the products array here */}
        {products.map((product, index) => (
          <div
            key={index}
            className="col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-3"
          >
            <ProductsGridCards
              imageSrc={product.imageSrc}
              title={product.title}
              price={product.price}
              description={product.description}
              rating={product.rating}
              reviewsCount={product.reviewsCount}
              category={product.category}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
