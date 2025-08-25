import React from "react";
import Navbar from "./components/navbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaPaw, FaTwitter } from "react-icons/fa";
import SectionTitle from "./components/section-title";
import ProductCard from "./components/product-card";
import CategoryCard from "./components/home/category-card";
import TestimonialsCard from "./components/home/testimonials-card";
import Link from "next/link";

const LandingPage = () => {
  const testimonials = [
    {
      name: "John Doe",
      username: "John_doe_123",
      testimonial:
        "I love this product! It has helped my pet feel better and I'm so happy with the results.",
    },
    {
      name: "Jane Doe",
      username: "Jane_doe_123",
      testimonial:
        "I love this product! It has helped my pet feel better and I'm so happy with the results.",
    },
    {
      name: "John Doe",
      username: "John_doe_123",
      testimonial:
        "I love this product! It has helped my pet feel better and I'm so happy with the results.",
    },
    {
      name: "Jane Doe",
      username: "Jane_doe_123",
      testimonial:
        "I love this product! It has helped my pet feel better and I'm so happy with the results.",
    },
  ];

  const trendingProducts = [
    {
      category: "Food",
      name: "Whiskas Cat Food",
      description: "Nutritious dry food to keep your cats healthy and happy.",
      price: "15 AED",
      image: "/images/cat-food.png",
      badge: "Cats",
    },
    {
      category: "Houses",
      name: "Cozy Wooden Cat House",
      description:
        "Give your furry friend a safe and stylish retreat with this cozy wooden cat house.",
      price: "25 AED",
      image: "/images/cat-house.png",
      badge: "Cats",
    },
    {
      category: "Accessories",
      name: "Pet Collar",
      description: "Adjustable stylish collar with a comfy fit for your pet.",
      price: "10 AED",
      image: "/images/pet-collar.png",
      badge: "Dogs",
    },
    {
      category: "Food",
      name: "Dog Treats",
      description: "Delicious crunchy treats to reward your furry friends.",
      price: "20 AED",
      image: "/images/dog-treats.webp",
      badge: "Dogs",
    },
    {
      category: "Toys",
      name: "Squeaky Dog Toy",
      description: "Fun squeaky toy to keep your dog entertained for hours.",
      price: "12 AED",
      image: "/images/squeeky-dog-toy.png",
      badge: "Dogs",
    },
    {
      category: "Food",
      name: "Premium Cat Tuna",
      description: "High-quality tuna for your cat's optimal health.",
      price: "18 AED",
      image: "/images/cat-tuna.png",
      badge: "Cats",
    },
    {
      category: "Accessories",
      name: "Pet Leash",
      description: "Durable and stylish leash for daily walks with your pet.",
      price: "14 AED",
      image: "/images/pet-leash.png",
      badge: "Dogs",
    },
    {
      category: "Hygiene",
      name: "Cat Litter",
      description:
        "Absorbent and odor-controlling litter for your kitty's comfort.",
      price: "22 AED",
      image: "/images/cat-litter.png",
      badge: "Cats",
    },
  ];
  const categories = [
    {
      name: "Food",
      illustration: "/images/pet-food-illustration.png",
    },
    {
      name: "Toys",
      illustration: "/images/pet-toys-illustration.png",
    },
    {
      name: "Houses",
      illustration: "/images/pet-house-illustration.png",
    },
    {
      name: "Accessories",
      illustration: "/images/accessories-illustration.png",
    },
  ];

  const featuredProducts = [
    {
      id: 1,
      category: "Food",
      name: "Whiskas Cat Food",
      description: "Nutritious dry food to keep your cats healthy and happy.",
      price: "15 AED",
      image: "/images/cat-food.png",
      badge: "Cats",
    },
    {
      id: 2,
      category: "Houses",
      name: "Cozy Wooden Cat House",
      description:
        "Give your furry friend a safe and stylish retreat with our Cozy Wooden Cat House. Designed with breathable openings, a soft interior, and a durable build.",
      price: "25 AED",
      image: "/images/cat-house.png",
      badge: "Cats",
    },
    {
      id: 3,
      category: "Accessories",
      name: "Pet Collar",
      description: "Adjustable stylish collar with a comfy fit for your pet.",
      price: "10 AED",
      image: "/images/pet-collar.png",
      badge: "Dogs",
    },
    {
      id: 4,
      category: "Food",
      name: "Dog Treats",
      description: "Delicious crunchy treats to reward your furry friends.",
      price: "20 AED",
      image: "/images/dog-treats.webp",
      badge: "Dogs",
    },
  ];

  return (
    <div>
      <div className="responsive-container">
        <main className="mt-6">
          <div className="relative h-[600px] w-full rounded-4xl overflow-hidden">
            <Image
              src="/images/hero.jpg"
              alt="hero"
              fill
              className="object-cover"
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/50  z-10" />
            {/* Optional content on top */}
            <div className="absolute inset-0 z-20 flex flex-col px-7 items-center justify-center">
              <h1 className="text-4xl font-bold text-white">
                Welcome to PetPals
              </h1>
              <p className="text-white  md:w-1/2 w-fit text-center my-4">
                Discover premium pet products, nutritious food, and accessories
                that make tails wag. From toys to treats, we&apos;ve got
                everything to keep your furry friends happy and healthy.
              </p>
            </div>
            <div className="absolute flex items-center shadow-md bg-white rounded-md bottom-28 left-1/2 -translate-x-1/2 z-30 w-fit md:w-2/3 lg:w-1/2 px-4 py-3">
              {/* Left: input + button */}
              <div className="flex items-center justify-between bg-gray-200 rounded-sm px-2 py-2 gap-2">
                <input
                  type="text"
                  placeholder="Search for pet products"
                  className=" outline-none px-2 py-2 text-sm text-black rounded-l-sm"
                />
                <Button variant="black">Search</Button>
              </div>

              {/* Divider */}
              <div className="h-12 w-px bg-gray-300 mx-4 hidden md:block" />

              {/* Right: Shop By links */}
              <div className="items-center hidden md:flex w-1/2 text-sm font-medium text-font-light justify-between">
                <span className="text-font-light text-nowrap">Shop By</span>
                <span className="text-font-primary cursor-pointer">Food</span>
                <span className="text-font-primary cursor-pointer">Toys</span>
                <span className="text-font-primary cursor-pointer">
                  Accessories
                </span>
              </div>
            </div>
          </div>
        </main>
        <section className="mt-10">
          <div className="text-center">
            <SectionTitle
              title="Featured Products"
              description="Discover our best-selling products"
            />
          </div>

          <div className="grid grid-cols-1 mt-6 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {featuredProducts.map((product) => (
              <div key={product.id} className="h-full">
                <ProductCard
                  category={product.category}
                  price={product.price}
                  image={product.image}
                  title={product.name}
                  description={product.description}
                  badge={product.badge}
                />
              </div>
            ))}
          </div>
        </section>
        <section className="mt-10 py-16 bg-white rounded-4xl">
          {/* Remove the extra padding on the container */}
          <div className="max-w-[1200px] mx-auto px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Fun Blob Images */}
            <div className="relative h-[400px] w-full overflow-hidden rounded-xl">
              <Image
                src="/images/about-us.png"
                alt="dog treats"
                fill
                className="object-cover"
              />
            </div>

            {/* Right Side - Text Content */}
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
                About PetPals
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                We&apos;re more than just a pet store - we&apos;re your furry
                friends&apos; biggest fans! Our team of pet lovers is dedicated
                to bringing you the best products and care advice.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Founded with love for all creatures great and small, PetPals has
                been serving the pet community for over a decade. We believe
                every pet deserves the best care, nutrition, and love. From our
                family to yours, we&apos;re here to make your pet parenting
                journey easier and more joyful.
              </p>
              <div className="pt-4">
                <Button variant="primary">Learn More About Us</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-10">
          <div className="text-center">
            <SectionTitle
              title="Browse by Category"
              description="Find everything your pets need in a click"
            />
          </div>
          <div className="grid grid-cols-2 mt-6  lg:grid-cols-4 gap-4">
            {categories.map((category, index) => (
              <div key={index} className="h-full">
                <CategoryCard
                  name={category.name}
                  illustration={category.illustration}
                />
              </div>
            ))}
          </div>
        </section>
        <section className="mt-10">
          <div className="text-center">
            <SectionTitle
              title="Trending Now"
              description="Check out the most popular products for our furry friends"
            />
          </div>
          <div className="grid grid-cols-1 mt-6 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {trendingProducts.map((product, index) => (
              <div key={index} className="h-full">
                <ProductCard
                  category={product.category}
                  price={product.price}
                  image={product.image}
                  title={product.name}
                  description={product.description}
                  badge={product.badge}
                />
              </div>
            ))}
          </div>
        </section>
        <section className="mt-10">
          <div className="text-center">
            <SectionTitle
              title="Hear From Our Customers"
              description="What our customers say about us"
            />
          </div>
          <div className="grid grid-cols-1 mt-6 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="h-full">
                <TestimonialsCard
                  name={testimonial.name}
                  username={testimonial.username}
                  testimonial={testimonial.testimonial}
                />
              </div>
            ))}
          </div>
        </section>
        <section className="mt-10">
          <div
            className="py-16 px-6 rounded-2xl"
            style={{
              background: "linear-gradient(135deg, #3f529b 0%, #6366f1 100%)",
            }}
          >
            <div className="text-center">
              <h1 className="text-2xl mx-auto font-bold text-white">
                Ready To Give Your Pets What They Deserve?
              </h1>
              <p className="text-gray-300 w-1/2 mx-auto  mt-4 text-center leading-relaxed">
                We&apos;re more than just a pet store - we&apos;re your furry
                friends&apos; biggest fans! Our team of pet lovers is dedicated
                to bringing you the best products and care advice.
              </p>
              <Button variant="black" className="mt-6">
                Shop Now
              </Button>
            </div>
          </div>
        </section>
      </div>
      <footer className="bg-black mt-20 p-10 border h-56 w-full "></footer>
    </div>
  );
};

export default LandingPage;
