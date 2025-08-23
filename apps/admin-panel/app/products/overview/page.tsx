'use client';

import { Breadcrumb, BreadcrumbItem, Badge } from 'flowbite-react';
import { FaShoppingBag, FaStar, FaBox } from 'react-icons/fa';
import { useState } from 'react';
import ProductRatingDescriptionCard from '@/app/components/products/productsOerview/product-rating-description-card';

const ProductOverview = () => {
  const [activeTab, setActiveTab] = useState('description');

  return (
    <div className="p-6 lg:ml-20 xl:ml-64">
      <Breadcrumb className="mb-6">
        <BreadcrumbItem href="#" icon={FaShoppingBag}>
          Products
        </BreadcrumbItem>
        <BreadcrumbItem href="#">Overview</BreadcrumbItem>
        <BreadcrumbItem href="#">P1234</BreadcrumbItem>
      </Breadcrumb>

      {/* Main Product Section */}
      <div className="bg-card-background mb-6 rounded-2xl p-5">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Left Side - Product Images */}
          <div className="order-1 w-full lg:order-1">
            <div className="flex gap-4">
              {/* Thumbnail Column (always vertical left) */}
              <div className="flex flex-shrink-0 flex-col gap-3">
                <div className="ring-purple h-16 w-16 cursor-pointer rounded-lg bg-gray-300 ring-2 transition-all hover:ring-2" />
                <div className="h-16 w-16 cursor-pointer rounded-lg bg-gray-300 transition-all hover:ring-2" />
                <div className="h-16 w-16 cursor-pointer rounded-lg bg-gray-300 transition-all hover:ring-2" />
                <div className="h-16 w-16 cursor-pointer rounded-lg bg-gray-300 transition-all hover:ring-2" />
                <div className="h-16 w-16 cursor-pointer rounded-lg bg-gray-300 transition-all hover:ring-2" />
              </div>

              {/* Main Image */}
              <div className="flex flex-1 justify-center">
                <div className="h-[400px] w-full max-w-full rounded-xl bg-gray-200 shadow-sm md:h-[350px] lg:aspect-square lg:h-auto lg:max-w-[500px]">
                  <div className="flex h-full w-full items-center justify-center">
                    <FaBox className="text-6xl text-gray-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Product Details */}
          <div className="order-2 space-y-6 lg:order-2">
            {/* Product Header */}
            <div>
              <div className="text-font-light flex items-center gap-1 text-sm">
                <span>Product ID</span>
                <span className="text-purple font-semibold">#P1234</span>
              </div>
              <h1 className="text-font-primary mt-3 text-3xl leading-tight font-bold">
                Nomad Cotton Hoodie
              </h1>
              <div className="mt-0.5 flex items-center gap-2">
                <div className="flex items-center gap-1.5">
                  <div className="flex items-center">
                    <FaStar className="text-yellow text-sm" />
                  </div>
                  <span className="text-font-primary text-sm font-medium">
                    4.2
                  </span>
                  <span className="text-font-light text-xs">(202 Reviews)</span>
                </div>
                <Badge color="success">In Stock</Badge>
              </div>
            </div>

            {/* Product Description */}
            <div>
              <p className="text-font-light text-sm">
                You can always count on a classic. The Nomad Cotton Hoodie
                combines premium sustainable cotton with contemporary design.
                Features advanced moisture-wicking technology and durable
                construction perfect for outdoor adventures and everyday
                comfort.
              </p>
            </div>

            {/* Pricing */}
            <div className="mt-4 flex items-end gap-2">
              <div className="text-font-primary text-2xl font-bold">
                $120.99
              </div>
              <div className="text-font-light text-lg font-bold line-through">
                $150.50
              </div>
            </div>

            <div className="flex items-center gap-8">
              {/* Colors */}
              <div>
                <div className="text-font-light mb-2 text-sm">Colors</div>
                <div className="flex items-center gap-2">
                  <div className="inline-block rounded-full border border-gray-300 p-1 dark:border-stone-600">
                    <div className="h-5 w-5 rounded-full bg-black"></div>
                  </div>

                  <div className="inline-block rounded-full border border-gray-300 p-1 dark:border-stone-600">
                    <div className="h-5 w-5 rounded-full bg-white"></div>
                  </div>
                </div>
              </div>

              {/* Sizes */}
              <div className="sm:col-span-2">
                <div className="text-font-light mb-2 text-sm">Sizes</div>
                <div className="flex flex-wrap gap-4">
                  <div className="bg-inner-card flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold">
                    S
                  </div>
                  <div className="bg-inner-card flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold">
                    M
                  </div>
                  <div className="bg-inner-card flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold">
                    L
                  </div>
                  <div className="bg-inner-card flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold">
                    XL
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div>
                <div className="text-font-light text-sm">
                  Quantity
                </div>
                <div className="text-font-primary">49 units in stock</div>
              </div>
              <div>
                <div className="text-font-light text-sm">
                  Total Sales
                </div>
                <div className="text-font-primary">345 units sold</div>
              </div>
              <div>
                <div className="text-font-light text-sm">
                  Category
                </div>
                <div className="text-font-primary">Men&apos;s Hoodies</div>
              </div>
              <div>
                <div className="text-font-light text-sm">
                  Added On
                </div>
                <div className="text-font-primary">
                   15th August 2025
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-card-background rounded-2xl p-5">
        <div>
          <ProductRatingDescriptionCard />
        </div>
      </div>
    </div>
  );
};

export default ProductOverview;
