"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";
import {
  FaFish,
  FaHeart,
  FaPaw,
  FaShoppingCart,
  FaSoap,
  FaStar,
  FaTimes,
} from "react-icons/fa";
import { IoFastFood } from "react-icons/io5";
import { TbBowlFilled, TbMenu3 } from "react-icons/tb";
import { usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { FaCandyCane } from "react-icons/fa6";
import { PiBoneFill, PiYarnFill } from "react-icons/pi";
import {
  GiBirdHouse,
  GiCoral,
  GiDogBowl,
  GiDogHouse,
  GiFeather,
  GiHouse,
  GiSmallFire,
  GiSmallFishingSailboat,
  GiWaterDrop,
} from "react-icons/gi";
import { MdOutlineCottage } from "react-icons/md";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const fishItems = [
    {
      id: 1,
      name: "Food",
      description:
        "Nutritious flakes, pellets, and frozen food to keep fish healthy.",
      icon: IoFastFood,
    },
    {
      id: 2,
      name: "Treats",
      description: "Special treats to spoil your aquatic friends.",
      icon: FaFish,
    },
    {
      id: 3,
      name: "Toys & Decor",
      description:
        "Aquarium decorations and toys to keep fish active and engaged.",
      icon: GiCoral,
    },
    {
      id: 4,
      name: "Accessories",
      description: "Bowls, tanks, filters, and all essential aquarium gear.",
      icon: GiSmallFishingSailboat,
    },
    {
      id: 5,
      name: "Hygiene",
      description: "Water conditioners, cleaners, and maintenance supplies.",
      icon: FaSoap,
    },
    {
      id: 6,
      name: "Supplies",
      description: "Daily essentials like nets, heaters, and water tools.",
      icon: GiWaterDrop,
    },
  ];
  const tinyItems = [
    {
      id: 1,
      name: "Food",
      description:
        "Nutritious pellets, seeds, and fresh veggies for small pets.",
      icon: IoFastFood,
    },
    {
      id: 2,
      name: "Treats",
      description: "Tasty little bites to reward your tiny friends.",
      icon: FaCandyCane,
    },
    {
      id: 3,
      name: "Toys",
      description: "Chew toys, tunnels, and wheels to keep them active.",
      icon: FaStar,
    },
    {
      id: 4,
      name: "Cages & Accessories",
      description:
        "Cages, bedding, tunnels, and all the essentials for small pets.",
      icon: MdOutlineCottage,
    },
    {
      id: 5,
      name: "Hygiene",
      description: "Cleaning supplies, bedding, and grooming essentials.",
      icon: FaSoap,
    },
    {
      id: 6,
      name: "Supplies",
      description:
        "Daily necessities like water bottles, bowls, and chew blocks.",
      icon: GiSmallFire, // fun placeholder for miscellaneous small items
    },
  ];
  const birdItems = [
    {
      id: 1,
      name: "Food",
      description: "Nutritious seeds and pellets to keep your birds healthy.",
      icon: IoFastFood,
    },
    {
      id: 2,
      name: "Treats",
      description: "Tasty treats for training or just showing love.",
      icon: FaCandyCane,
    },
    {
      id: 3,
      name: "Toys",
      description: "Fun toys and swings to keep your birds active and happy.",
      icon: PiBoneFill, // can replace with a bird toy icon like GiFeather
    },
    {
      id: 4,
      name: "Accessories",
      description: "Cages, perches, feeders, and all the essentials for birds.",
      icon: GiBirdHouse,
    },
    {
      id: 5,
      name: "Hygiene",
      description:
        "Baths, perches, and cleaning supplies for a healthy environment.",
      icon: FaSoap,
    },
    {
      id: 6,
      name: "Supplies",
      description: "Daily necessities like feeders, waterers, and toys.",
      icon: GiFeather,
    },
  ];

  const dogItems = [
    {
      id: 1,
      name: "Food",
      description: "Nutritious meals to keep your pets healthy and happy.",
      icon: IoFastFood,
    },
    {
      id: 2,
      name: "Treats",
      description: "Tasty rewards for training and showing love.",
      icon: FaCandyCane,
    },
    {
      id: 3,
      name: "Toys",
      description: "Fun and engaging toys to keep pets entertained.",
      icon: PiBoneFill,
    },
    {
      id: 4,
      name: "Accessories",
      description: "Collars, leashes, bowls, and stylish pet gear.",
      icon: GiDogBowl,
    },
    {
      id: 5,
      name: "Hygiene",
      description: "Shampoos, brushes, and care essentials.",
      icon: FaSoap,
    },
    {
      id: 6,
      name: "Supplies",
      description: "Daily necessities like litter, cages, and bedding.",
      icon: GiDogHouse,
    },
  ];

  const catItems = [
    {
      id: 1,
      name: "Food",
      description: "Healthy meals to keep your feline friend strong and happy.",
      icon: FaFish,
    },
    {
      id: 2,
      name: "Treats",
      description: "Delicious bites to spoil your cat or use for training.",
      icon: FaCandyCane,
    },
    {
      id: 3,
      name: "Toys",
      description: "Fun toys to keep your cat active and entertained.",
      icon: PiYarnFill, // You can replace this with a cat toy icon
    },
    {
      id: 4,
      name: "Accessories",
      description:
        "Collars, scratching posts, bowls, and stylish gear for cats.",
      icon: TbBowlFilled,
    },
    {
      id: 5,
      name: "Hygiene",
      description: "Shampoos, brushes, litter mats, and grooming essentials.",
      icon: FaSoap,
    },
    {
      id: 6,
      name: "Supplies",
      description: "Litter boxes, beds, carriers, and daily necessities.",
      icon: GiHouse,
    },
  ];

  const brands = [
    { id: 1, name: "Whiskas", src: "/images/brands/whiskas-logo.png" },
    { id: 2, name: "Pedigree", src: "/images/brands/happy-cat-logo.png" },
    { id: 3, name: "Royal Canin", src: "/images/brands/royal-canin-logo.png" },
    { id: 4, name: "Purina", src: "/images/brands/purina-logo.png" },
    { id: 5, name: "Hill's", src: "/images/brands/hills-logo.png" },
    { id: 6, name: "Friskies", src: "/images/brands/friskies-logo.png" },
  ];

  const pathname = usePathname();

  return (
    <>
      <nav className="py-4 sticky top-0 z-50 bg-white/90 backdrop-blur-sm">
        <div className="flex items-center justify-between responsive-container">
          <Link href="/" className="cursor-pointer">
            <h1 className="text-xl font-bold flex items-center gap-2">
              <FaPaw className="text-primary" />
              PetPals
            </h1>
          </Link>
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="text-font-primary font-medium">
              <NavigationMenuItem
                className={cn(pathname === "/dogs" && "font-bold text-primary")}
              >
                <NavigationMenuTrigger className="hover:text-primary">
                  <Link href="">Dogs</Link>
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-white z-50 w-96 h-auto p-8 border-none">
                  <div className="grid grid-cols-3 gap-10 w-[600px]">
                    {dogItems.map((dogItem) => (
                      <Link href={`/dogs/food`} key={dogItem.id}>
                        <div
                          key={dogItem.id}
                          className="flex flex-col gap-2 cursor-pointer hover:bg-primary/5 rounded-md px-4 py-2"
                        >
                          <div className="font-medium flex items-center gap-2 transition-transform duration-300 hover:translate-x-2 hover:text-primary">
                            <dogItem.icon className="text-primary text-3xl bg-primary/10 rounded-md p-2" />
                            {dogItem.name}
                          </div>
                          <div className="text-sm text-font-light">
                            {dogItem.description}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem
                className={cn(pathname === "/cats" && "font-bold text-primary")}
              >
                <NavigationMenuTrigger>
                  <Link href="/cats">Cats</Link>
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-white z-50 w-96 h-auto p-8 border-none">
                  <div className="grid grid-cols-3 gap-10 w-[600px]">
                    {catItems.map((catItem) => (
                      <div
                        key={catItem.id}
                        className="flex flex-col gap-2 cursor-pointer hover:bg-primary/5 rounded-md px-4 py-2"
                      >
                        <div className="font-medium flex items-center gap-2 transition-transform duration-300 hover:translate-x-2 hover:text-primary">
                          <catItem.icon className="text-primary text-3xl bg-primary/10 rounded-md p-2" />
                          {catItem.name}
                        </div>
                        <div className="text-sm text-font-light">
                          {catItem.description}
                        </div>
                      </div>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem
                className={cn(
                  pathname === "/birds" && "font-bold text-primary"
                )}
              >
                <NavigationMenuTrigger>
                  <Link href="/birds">Birds</Link>
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-white z-50 w-96 h-auto p-8 border-none">
                  <div className="grid grid-cols-3 gap-10 w-[700px]">
                    {birdItems.map((birdItem) => (
                      <div
                        key={birdItem.id}
                        className="flex flex-col gap-2 cursor-pointer hover:bg-primary/5 rounded-md px-4 py-2"
                      >
                        <div className="font-medium text-nowrap flex items-center gap-2 transition-transform duration-300 hover:translate-x-2 hover:text-primary">
                          <birdItem.icon className="text-primary text-3xl bg-primary/10 rounded-md p-2" />
                          {birdItem.name}
                        </div>
                        <div className="text-sm text-font-light">
                          {birdItem.description}
                        </div>
                      </div>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem
                className={cn(pathname === "/fish" && "font-bold text-primary")}
              >
                <NavigationMenuTrigger>
                  <Link href="/fish">Fish</Link>
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-white z-50 w-96 h-auto p-8 border-none">
                  <div className="grid grid-cols-3 gap-10 w-[600px]">
                    {fishItems.map((fishItem) => (
                      <div
                        key={fishItem.id}
                        className="flex flex-col gap-2 cursor-pointer hover:bg-primary/5 rounded-md px-4 py-2"
                      >
                        <div className="font-medium flex items-center gap-2 transition-transform duration-300 hover:translate-x-2 hover:text-primary">
                          <fishItem.icon className="text-primary text-3xl bg-primary/10 rounded-md p-2" />
                          {fishItem.name}
                        </div>
                        <div className="text-sm text-font-light">
                          {fishItem.description}
                        </div>
                      </div>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem
                className={cn(
                  pathname === "/tinies" && "font-bold text-primary"
                )}
              >
                <NavigationMenuTrigger>
                  <Link href="/tinies">Tinies</Link>
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-white z-50 w-96 h-auto p-8 border-none">
                  <div className="grid grid-cols-3 gap-10 w-[600px]">
                    {tinyItems.map((tinyItem) => (
                      <div
                        key={tinyItem.id}
                        className="flex flex-col gap-2 cursor-pointer hover:bg-primary/5 rounded-md px-4 py-2"
                      >
                        <div className="font-medium flex items-center gap-2 transition-transform duration-300 hover:translate-x-2 hover:text-primary">
                          <tinyItem.icon className="text-primary text-3xl bg-primary/10 rounded-md p-2" />
                          {tinyItem.name}
                        </div>
                        <div className="text-sm text-font-light">
                          {tinyItem.description}
                        </div>
                      </div>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem
                className={cn(
                  pathname === "/tinies" && "font-bold text-primary"
                )}
              >
                <NavigationMenuTrigger>
                  <Link href="/tinies">Brands</Link>
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-white z-50 min-w-[750px] flex justify-center items-center h-auto p-8 border-none">
                  <div className="grid grid-cols-3 gap-5">
                    {brands.map((brand) => (
                      <div
                        key={brand.id}
                        className="flex flex-col items-center w-54 bg-gray-50 hover:bg-gray-100 transition-all duration-300 cursor-pointer hover:scale-105 rounded-md p-4"
                      >
                        <div className="relative w-36 h-36">
                          <Image
                            src={brand.src}
                            alt={brand.name}
                            fill
                            className="object-contain"
                          />
                        </div>
                        <div className="font-bold text-center text-font-primary">
                          {brand.name}
                        </div>
                      </div>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem
                className={cn(
                  pathname === "/blogs" && "font-bold text-primary"
                )}
              >
                <Link href="/blogs">Blogs</Link>
              </NavigationMenuItem>
              <NavigationMenuItem
                className={cn(
                  pathname === "/contact" && "font-bold text-primary"
                )}
              >
                <Link href="/contact">Contact</Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <div className="flex items-center gap-6">
            <div className="cursor-pointer">
              <FaHeart className="text-lg text-font-light hover:text-error" />
            </div>
            <div className="cursor-pointer">
              <FaShoppingCart className="text-lg text-font-light hover:text-primary" />
            </div>
            <Button variant={"primary"} className="hidden lg:flex">
              Sign Up
            </Button>
            <TbMenu3
              className="text-2xl cursor-pointer text-font-primary lg:hidden"
              onClick={() => setIsOpen(!isOpen)}
            />
          </div>
        </div>
      </nav>
      <nav
        className={`
          fixed top-0 left-0 w-72 h-full bg-white z-[101]
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0 shadow-lg" : "-translate-x-full"}
          lg:hidden
        `}
      >
        <div className="flex items-start flex-col p-10 pl-10">
          <div>
            <Link href="/" className="cursor-pointer">
              <h1 className="text-3xl font-bold flex items-center gap-2">
                <FaPaw className="text-primary" />
                PetPals
              </h1>
            </Link>
          </div>
          <div className="mt-10">
            <div
              className="text-2xl font-bold "
              onClick={() => setActiveLink("dogs")}
            >
              Dogs
            </div>
            {activeLink === "dogs" && (
              <div className="text-base font-medium text-font-light flex flex-col gap-2 mt-4">
                <Link
                  href="/dogs/food"
                  className={cn(pathname === "/dogs/food" && "text-primary")}
                >
                  Food
                </Link>
                <Link
                  href="/dogs"
                  className={cn(pathname === "/dogs/food" && "text-primary")}
                >
                  Treats
                </Link>
                <Link
                  href="/dogs"
                  className={cn(pathname === "/dogs/food" && "text-primary")}
                >
                  Toys
                </Link>
                <Link
                  href="/dogs"
                  className={cn(pathname === "/dogs/food" && "text-primary")}
                >
                  Accessories
                </Link>
                <Link
                  href="/dogs"
                  className={cn(pathname === "/dogs/food" && "text-primary")}
                >
                  Hygiene
                </Link>
                <Link
                  href="/dogs"
                  className={cn(pathname === "/dogs/food" && "text-primary")}
                >
                  Supplies
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/50 z-[100]  backdrop-blur-sm lg:hidden"
        ></div>
      )}
    </>
  );
};

export default Navbar;
