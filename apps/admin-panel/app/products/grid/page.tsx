'use client';

import CardTitle from '@/app/components/card-title';
import ProductsOverviewCard from '@/app/components/products/productsList/products-overview-cards/products-overview-cards';
import { Breadcrumb, BreadcrumbItem } from 'flowbite-react';
import { Button } from '@/components/ui/button';
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
      title: 'Premium Cotton Blend Hoodie',
      price: 79.99,
      description:
        'Ultra-soft cotton blend hoodie perfect for everyday comfort. Features a modern fit with ribbed cuffs and hem.',
      rating: 4.6,
      reviewsCount: 128,
      category: 'Apparel',
    },
    {
      imageSrc: '/images/nomad-cap.png',
      title: 'Classic Baseball Cap',
      price: 24.99,
      description:
        'Timeless baseball cap with embroidered logo. Made from breathable cotton twill with adjustable strap.',
      rating: 4.3,
      reviewsCount: 89,
      category: 'Accessories',
    },
    {
      imageSrc: '/images/cargo-pants.png',
      title: 'Utility Cargo Pants',
      price: 64.99,
      description:
        'Functional cargo pants with multiple pockets. Durable cotton canvas construction, perfect for outdoor activities.',
      rating: 4.4,
      reviewsCount: 67,
      category: 'Apparel',
    },
    {
      imageSrc: '/images/shirt-guy.png',
      title: 'Graphic Print T-Shirt',
      price: 34.99,
      description:
        'Vibrant graphic print t-shirt made from 100% organic cotton. Comfortable fit with unique artwork design.',
      rating: 4.7,
      reviewsCount: 156,
      category: 'Apparel',
    },
    {
      imageSrc: '/images/nomad-cap.png',
      title: 'Leather Crossbody Bag',
      price: 89.99,
      description:
        'Handcrafted genuine leather crossbody bag with adjustable strap. Features multiple compartments and premium hardware.',
      rating: 4.8,
      reviewsCount: 203,
      category: 'Accessories',
    },
    {
      imageSrc: '/images/cargo-pants.png',
      title: 'Denim Jacket',
      price: 94.99,
      description:
        'Classic denim jacket with modern styling. Pre-washed for comfort, featuring chest pockets and adjustable waist.',
      rating: 4.5,
      reviewsCount: 112,
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
        <div className="col-span-12 grid grid-cols-1 gap-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product, index) => (
            <div key={index} className="h-full">
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
    </div>
  );
};

export default ProductsList;
