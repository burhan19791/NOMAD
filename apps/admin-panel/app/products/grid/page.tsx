"use client";

import CardTitle from "@/app/components/card-title";
import ProductsOverviewCard from "@/app/components/products/productsList/products-overview-cards/products-overview-cards";
import { Breadcrumb, BreadcrumbItem, Button } from "flowbite-react";
import {
  FaBox,
  FaDollarSign,
  FaExclamationTriangle,
  FaWallet,
  FaShoppingBag,
} from "react-icons/fa";
import { TiPlus } from "react-icons/ti";
import ProductsGridCards from "@/app/components/products/productsGrid/products-grid-card";

const ProductsList = () => {
  const products = [
    {
      imageSrc: "/images/shirt-guy.png",
      title: "Black Hoodie",
      price: 75.99,
      description: "Comfortable and warm black hoodie.",
      rating: 4,
      reviewsCount: 20,
      category: "Apparel",
    },
    {
      imageSrc: "/images/nomad-cap.png",
      title: "Nomad Cap",
      price: 25.0,
      description: "Stylish cap for everyday wear and stuff.",
      rating: 5,
      reviewsCount: 15,
      category: "Accessories",
    },
    {
      imageSrc: "/images/cargo-pants.png",
      title: "Cargo Pants",
      price: 59.99,
      description: "Durable cargo pants with lots of pockets.",
      rating: 3,
      reviewsCount: 8,
      category: "Apparel",
    },
    {
      imageSrc: "/images/cargo-pants.png",
      title: "Cargo Pants",
      price: 59.99,
      description: "Durable cargo pants with lots of pockets.",
      rating: 3,
      reviewsCount: 8,
      category: "Apparel",
    },
  ];

  return (
    <div className="lg:ml-20 xl:ml-64 p-6">
      <Breadcrumb className="mb-6">
        <BreadcrumbItem href="#" icon={FaShoppingBag}>
          Products
        </BreadcrumbItem>
        <BreadcrumbItem href="#">Gird View</BreadcrumbItem>
      </Breadcrumb>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 xl:col-span-3 md:col-span-6">
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

        <div className="col-span-12 xl:col-span-3 md:col-span-6">
          <ProductsOverviewCard
            title="Total Products"
            description="Number of products"
            mainValue={342}
            percentageChange="+8%"
            percentageColor="success"
            icon={<FaBox className="text-xl" />}
          />
        </div>

        <div className="col-span-12 xl:col-span-3 md:col-span-6">
          <ProductsOverviewCard
            title="Out of Stock"
            description="Products fully out of stock"
            mainValue={12}
            percentageChange="-5%"
            percentageColor="danger"
            icon={<FaExclamationTriangle className="text-xl" />}
          />
        </div>

        <div className="col-span-12 xl:col-span-3 md:col-span-6">
          <ProductsOverviewCard
            title="Inventory Value"
            description="Value of current stock"
            mainValue="450,000"
            icon={<FaWallet className="text-xl" />}
          />
        </div>

        {/* Header & Add Product Button */}
        <div className="col-span-12 mt-6 flex justify-between items-center">
          <CardTitle title="Products Grid" />
          <Button
              className="bg-purple dark:bg-purple dark:hover:bg-purple-700 gap-2 py-2 px-3 md:py-5 md:px-4 hover:bg-purple-700  text-white"
            >
              <TiPlus className="text-lg"/>
              <div className="hidden md:flex">Add New Product</div>
            </Button>
        </div>

        {/* Map the products array here */}
        {products.map((product, index) => (
          <div
            key={index}
            className="lg:col-span-3 sm:col-span-6 col-span-12 md:col-span-6"
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
