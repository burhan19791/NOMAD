"use client";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import SectionTitle from "./components/section-title";
import ProductCard from "./components/product-card";
import { MdPets } from "react-icons/md";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Input } from "@/components/ui/input";

const LandingPage = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

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
      <div className="">
        <main className="">
          <div className="relative h-[600px] w-full overflow-hidden">
            <Image
              src="/images/hero.jpg"
              alt="hero"
              fill
              className="object-cover"
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/50  z-10" />
            {/* Optional content on top */}
            <div className="absolute inset-0 z-20 flex flex-col mb-20 px-7 items-center justify-center">
              <h1 className="text-4xl font-bold text-white">
                Welcome to PetPals
              </h1>
              <p className="text-white  md:w-2/3 lg:w-1/2 w-full text-center my-4">
                Discover premium pet products, nutritious food, and accessories
                that make tails wag. From toys to treats, we&apos;ve got
                everything to keep your furry friends happy and healthy.
              </p>
            </div>
            <div className="absolute flex mb-12 items-center shadow-md bg-white rounded-md bottom-28 left-1/2 -translate-x-1/2 z-30 w-fit md:w-2/3 lg:w-1/2 xl:w-2/5 px-4 py-3">
              {/* Left: input + button */}
              <div className="flex items-center justify-between w-full  md:w-1/2 bg-gray-200 rounded-sm px-2 py-2 gap-2">
                <Input
                variant="ghost"
                  type="text"
                  placeholder="Search for pet products"
                  className=" outline-none text-sm text-black rounded-l-sm"
                />
                <Button variant="black">Search</Button>
              </div>

              {/* Divider */}
              <div className="h-12 w-px bg-gray-300 mx-3 hidden md:block" />

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
        <section className="mt-10 responsive-container">
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
        <section className="mt-10 responsive-container">
          {/* Pet CTA */}
        </section>
        <section className="mt-10 py-16 bg-white">
          {/* Remove the extra padding on the container */}
          <div className="responsive-container mx-auto px-8  lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
        {/* <section className="mt-10 responsive-container">
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
        </section> */}

        <section className="mt-10 responsive-container">
          <div className="text-center mb-8">
            <SectionTitle
              title="Trending Now"
              description="Check out the most popular products for our furry friends"
            />
          </div>

          {/* Carousel Container */}
          <div className="relative">
            <Carousel
              setApi={setApi}
              opts={{
                align: "start",
                loop: true,
                dragFree: false,
                containScroll: "trimSnaps",
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {trendingProducts.map((product, index) => (
                  <CarouselItem
                    key={index}
                    className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                  >
                    <div className="h-full">
                      <ProductCard
                        category={product.category}
                        price={product.price}
                        image={product.image}
                        title={product.name}
                        description={product.description}
                        badge={product.badge}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              {/* Navigation Buttons - Back to original styling */}
              <CarouselPrevious className="left-4 md:left-8 lg:left-12 bg-white hover:bg-gray-50 border-gray-200 hover:border-gray-300 shadow-lg rounded-full w-12 h-12 -translate-x-1/2" />
              <CarouselNext className="right-4 md:right-8 lg:right-12 bg-white hover:bg-gray-50 border-gray-200 hover:border-gray-300 shadow-lg rounded-full w-12 h-12 translate-x-1/2" />
            </Carousel>

            {/* Working Carousel Indicators */}
            <div className="flex justify-center mt-6 gap-2">
              {Array.from({ length: count }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    current === index + 1
                      ? "bg-primary scale-110"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </section>
        <section className="mt-10">
          <div className="reponsive-container w-full h-[500px] relative overflow-hidden">
            <Image
              src="/images/pet-cta.jpg"
              alt="pet cta"
              fill
              className="object-cover object-center  md:object-right lg:object-right transition-transform duration-700 hover:scale-105"
            />

            {/* Enhanced overlay with gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20 z-10" />

            <div className="absolute inset-0 z-20 flex flex-col justify-center   responsive-container">
              {/* Left-aligned content for better visual balance */}
              <div className="max-w-2xl">
                <div className="mb-2">
                  <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2.5 mb-4">
                    <span className="text-2xl text-primary">
                      <MdPets />
                    </span>
                    <span className="text-white text-sm font-medium">
                      Join 2,000+ Pet Parents
                    </span>
                  </div>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                  Give Your Pet Their
                  <span className="block text-primary">Own Profile</span>
                </h1>

                <p className="text-white/90 text-base md:text-lg leading-relaxed mb-8 max-w-xl">
                  Because every wag, purr, and chirp deserves to be remembered.
                  Create a profile for your pet and unlock personalized care
                  made just for them.
                </p>

                <div className="flex flex-row gap-4 items-start">
                  <Button
                    variant="primary"
                    className="hover:bg-purple-700 hover:scale-105 transition-all duration-300"
                  >
                    Create Profile
                  </Button>
                  <Button
                    variant="outline"
                    className="border-white/30 hover:bg-primary/20 text-white bg-white/10 backdrop-blur-sm"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-10 responsive-container">
          <div className="text-center">
            <SectionTitle
              title="Shop By Your Pets"
              description="Find everything your pets need in a click"
            />
          </div>

          {/* Pet Profile Cards Section */}
          <div className="mt-8">
            {/* If user has pets - show their profiles */}
            <div className="grid grid-cols-12 gap-6">
              {/* Example Pet Profile Card 1 */}
              <div className="bg-white rounded-2xl col-span-12 md:col-span-6 lg:col-span-4 p-6 shadow-md hover:scale-95 hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative w-16 h-16">
                    <Image
                      src="/images/max.jpg"
                      alt="dog"
                      fill
                      className="object-cover rounded-full"
                    />

                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-400 rounded-full border-2 border-white"></div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900">Max</h3>
                    <p className="text-gray-600 text-sm">
                      Golden Retriever • 3 years old
                    </p>
                  </div>
                </div>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Weight:</span>
                    <span className="font-medium">28 kg</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Favorite Food:</span>
                    <span className="font-medium">Chicken & Rice</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Health Status:</span>
                    <span className="text-green-600 font-medium">
                      ✓ Healthy
                    </span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size={"sm"}
                    className="flex-1 text-sm"
                  >
                    View Profile
                  </Button>
                  <Button
                    variant="primary"
                    size={"sm"}
                    className="flex-1 text-sm"
                  >
                    Shop for Max
                  </Button>
                </div>
              </div>

              {/* Example Pet Profile Card 2 */}
              <div className="bg-white rounded-2xl col-span-12 md:col-span-6 lg:col-span-4 p-6 shadow-md hover:scale-95 hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative">
                    <div className="relative w-16 h-16">
                      <Image
                        src="/images/luna.jpg"
                        alt="dog"
                        fill
                        className="object-cover rounded-full"
                      />

                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-400 rounded-full border-2 border-white"></div>
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-400 rounded-full border-2 border-white"></div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900">Luna</h3>
                    <p className="text-gray-600 text-sm">
                      Persian Cat • 2 years old
                    </p>
                  </div>
                </div>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Weight:</span>
                    <span className="font-medium">4.2 kg</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Favorite Toy:</span>
                    <span className="font-medium">Feather Wand</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Health Status:</span>
                    <span className="text-green-600 font-medium">
                      ✓ Healthy
                    </span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size={"sm"}
                    className="flex-1 text-sm"
                  >
                    View Profile
                  </Button>
                  <Button
                    variant="primary"
                    size={"sm"}
                    className="flex-1 text-sm"
                  >
                    Shop for Luna
                  </Button>
                </div>
              </div>

              {/* Add New Pet Card */}
              <div className="bg-gradient-to-br from-gray-50  to-gray-100 rounded-2xl col-span-12 md:col-span-12 lg:col-span-4 p-6 border-2 border-dashed border-gray-300 hover:border-primary hover:bg-gray-50 transition-all duration-300 cursor-pointer group">
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                    <span className="text-3xl text-gray-400 group-hover:text-primary">
                      +
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-700 mb-2 group-hover:text-primary">
                    Add New Pet
                  </h3>
                  <p className="text-gray-500 text-sm">
                    Create a profile for another furry friend
                  </p>
                </div>
              </div>
            </div>

            {/* If user has no pets - show CTA */}
            {/* <div className="text-center py-12">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">🐾</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                No pets added yet
              </h3>
              <p className="text-gray-500 mb-6">
                Create your first pet profile to get personalized recommendations
              </p>
              <Button variant="primary">
                Create Your First Pet Profile
              </Button>
            </div> */}
          </div>
        </section>
        <section className="mt-10 responsive-container">
          <div className="text-center mb-6">
            <SectionTitle
              title="Hear From Our Customers"
              description="What our customers say about us"
            />
          </div>

          {/* Modern Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-primary/20 relative overflow-hidden">
                  {/* Decorative background element */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/5 to-transparent rounded-full -translate-y-10 translate-x-10 group-hover:scale-110 transition-transform duration-500"></div>

                  {/* Quote mark */}
                  <div className="text-lg text-primary mb-4">
                    <FaQuoteLeft />
                  </div>

                  {/* Testimonial text */}
                  <p className="text-gray-700 text-sm leading-relaxed mb-6 relative z-10">
                    {testimonial.testimonial}
                  </p>

                  {/* Customer info */}
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center text-gray-600 font-semibold text-lg group-hover:scale-105 transition-transform">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 text-sm">
                        {testimonials[index].name}
                      </h4>
                      <div className="flex items-center gap-1 mt-1">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className="text-yellow-400 text-xs">
                            <FaStar className="text-yellow" />
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Pet type badge */}
                  <div className="absolute top-4 right-4">
                    <span className="inline-flex items-center gap-1 bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                      {index === 0 && "🐕"}
                      {index === 1 && "🐱"}
                      {index === 2 && "🐰"}
                      {index === 3 && "🐠"}
                      <span className="text-xs">Pet Parent</span>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Simple CTA */}
          <div className="text-center mt-8">
            <Button
              variant="primary-outline"
              className="border-primary text-primary hover:bg-primary hover:text-white"
            >
              Share Your Story
            </Button>
          </div>
        </section>
        <section className="mt-10 responsive-container">
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
