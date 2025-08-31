import ProductListingFilterCard from "@/app/components/product-listing/product-listing-filter-card";
import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import ProductCard from "@/app/components/product-card";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
} from "@/components/ui/select";

const DogsFoodPage = () => {
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
  return (
    <div className="responsive-container mt-10">
      <div>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/components">Dogs</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Food</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="flex items-center justify-between">
        <div className="mb-6 mt-6 font-bold text-3xl">14 Items</div>
        <Select>
          <SelectTrigger className="w-[120px]">
            <SelectValue placeholder="Sort By" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Sort By</SelectLabel>
              <SelectItem value="apple">Newest</SelectItem>
              <SelectItem value="banana">Popular</SelectItem>
              <SelectItem value="blueberry">Oldest</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-3">
          <ProductListingFilterCard />
        </div>
        <div className="col-span-9">
          <div className="grid grid-cols-3 gap-4">
            {trendingProducts.map((product, index) => (
              <div key={index} className="">
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DogsFoodPage;
