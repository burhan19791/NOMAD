"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { FaChevronDown, FaHeart, FaPaw, FaShoppingCart } from "react-icons/fa";
import { IoChevronDownOutline } from "react-icons/io5";
import { TbMenu3 } from "react-icons/tb";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="py-4 sticky top-0 z-50 bg-white/90 backdrop-blur-sm">
      <div className="flex items-center justify-between responsive-container">
        <h1 className="text-xl font-bold flex items-center gap-2">
          <FaPaw className="text-primary" />
          PetPals
        </h1>
        <ul className=" items-center font-medium gap-6 text-font-primary hidden md:flex">
          <li>
            <Link
              className={pathname === "/" ? "text-primary font-bold" : ""}
              href="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/products"
              className={`flex items-center gap-1.5 ${
                pathname === "/products" ? "text-primary font-bold" : ""
              }`}
            >
              Products <IoChevronDownOutline className="mt-0.5" />
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={pathname === "/about" ? "text-primary font-bold" : ""}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={
                pathname === "/contact" ? "text-primary font-bold" : ""
              }
            >
              Contact
            </Link>
          </li>
        </ul>
        <div className="flex items-center gap-6">
          <div className="cursor-pointer">
            <FaHeart className="text-lg text-font-light hover:text-error" />
          </div>
          <div className="cursor-pointer">
            <FaShoppingCart className="text-lg text-font-light hover:text-primary" />
          </div>
          <Button variant={"primary"} className="hidden md:flex">
            Sign Up
          </Button>
          <TbMenu3 className="text-2xl cursor-pointer text-font-primary md:hidden" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
