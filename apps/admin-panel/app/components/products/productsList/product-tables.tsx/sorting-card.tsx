/* "use client";

import clsx from "clsx";
import { Button } from "flowbite-react";
import React, { useState, useEffect, useRef } from "react";
import { FaSlidersH, FaSort } from "react-icons/fa";
import { HiChevronRight } from "react-icons/hi2";

const TableSortingCard = () => {
  const [isLinkActive, setIsLinkActive] = useState("");
  const [activeCategory, setActiveCategory] = useState("Status");

  const selectedFilters = [
    "Active",
    "Pending",
    "Rejected",
    "Completed",
    "Cancelled",
    "In Progress",
  ];

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsLinkActive("");
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="p-5 rounded-2xl w-full bg-card-background"
    >
      <div className="text-sm text-font-light mb-4">Filter And Sort</div>
      <div className="flex items-center justify-between flex-wrap">
        <div className="flex flex-wrap sm:flex-nowrap items-center md:gap-8 gap-0 w-full sm:w-auto">
          <div
            onClick={() =>
              setIsLinkActive(isLinkActive === "Filter" ? "" : "Filter")
            }
            className={clsx(
              "bg-inner-card flex relative cursor-pointer items-center gap-3 dark:bg-inner-card px-5 pl-3 py-1.5 text-sm rounded-lg w-full sm:w-auto",
              isLinkActive === "Filter" ? "bg-purple text-white" : ""
            )}
          >
            <FaSlidersH />
            Filter
            <HiChevronRight />
            {isLinkActive === "Filter" && (
              <div className="absolute top-full mt-2 left-0 z-50 w-96 bg-card-background shadow-lg rounded-lg flex text-font-primary border border-gray-200 dark:border-inner-card-border">
                <div className="pr-7 border-r border-gray-200 dark:border-inner-card-border p-4">
                  <ul className="flex flex-col gap-3 text-xs md:text-sm font-medium">
                    <li className="text-font-light mb-3">Categories</li>
                    {["Status", "Price", "Stock", "Rating"].map((category) => (
                      <li
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={`cursor-pointer px-3 py-0.5 border-l-4 ${
                          activeCategory === category
                            ? "border-l-purple text-purple-600 font-semibold"
                            : "border-l-transparent hover:border-l-purple  hover:text-purple-600"
                        } transition-all`}
                      >
                        {category}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="w-px bg-gray-200 dark:bg-stone-700" />

                <div className="w-2/3 p-4">
                  <h4 className="text-font-light mb-4">
                    {activeCategory} Filters
                  </h4>

                  <div className="flex gap-2 mb-4 flex-wrap ">
                    {selectedFilters.map((filter) => (
                      <div
                        key={filter}
                        className="inline-flex bg-stone-100 items-center gap-2 rounded-full dark:bg-inner-card px-3 py-1 text-font-primary text-sm"
                      >
                        <span>{filter}</span>
                        <button
                          className="leading-none cursor-pointer text-font-primary hover:text-red-500 focus:outline-none"
                          aria-label={`Remove filter ${filter}`}
                          type="button"
                          onClick={() => alert(`Remove filter: ${filter}`)}
                        >
                          ×
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="h-6 rounded-full w-px bg-gray-200" />

          <div
            onClick={() =>
              setIsLinkActive(isLinkActive === "Sort" ? "" : "Sort")
            }
            className={clsx(
              "bg-inner-card flex relative cursor-pointer items-center gap-3 dark:bg-inner-card px-5 pl-3 py-1.5 text-sm rounded-lg w-full sm:w-auto",
              isLinkActive === "Sort" ? "bg-purple text-white" : ""
            )}
          >
            <FaSort />
            Sort
            <HiChevronRight />
            {isLinkActive === "Sort" && (
              <div className="absolute top-full mt-2 left-0 z-50 w-96 bg-card-background shadow-lg rounded-lg flex text-font-primary border border-gray-200 dark:border-inner-card-border">
                <div className="pr-7 border-r border-gray-200 dark:border-inner-card-border p-4">
                  <ul className="flex flex-col gap-3 text-xs md:text-sm font-medium">
                    <li className="text-font-light mb-3">Categories</li>
                    {["Status", "Price", "Stock", "Rating"].map((category) => (
                      <li
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={`cursor-pointer px-3 py-0.5 border-l-4 ${
                          activeCategory === category
                            ? "border-l-purple text-purple-600 font-semibold"
                            : "border-l-transparent hover:border-l-purple  hover:text-purple-600"
                        } transition-all`}
                      >
                        {category}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="w-px bg-gray-200 dark:bg-stone-700" />

                <div className="w-2/3 p-4">
                  <h4 className="text-font-light mb-4">
                    {activeCategory} Filters
                  </h4>

                  <div className="flex gap-2 mb-4 flex-wrap ">
                    {selectedFilters.map((filter) => (
                      <div
                        key={filter}
                        className="inline-flex bg-stone-100 items-center gap-2 rounded-full dark:bg-inner-card px-3 py-1 text-font-primary text-sm"
                      >
                        <span>{filter}</span>
                        <button
                          className="leading-none cursor-pointer text-font-primary hover:text-red-500 focus:outline-none"
                          aria-label={`Remove filter ${filter}`}
                          type="button"
                          onClick={() => alert(`Remove filter: ${filter}`)}
                        >
                          ×
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="flex items-end gap-4 mt-4 sm:mt-0">
          <div
            onClick={() => alert("Reset All")}
            className="underline text-error text-sm cursor-pointer"
          >
            Reset All
          </div>
          <Button
            className="bg-purple dark:bg-purple hover:bg-purple-700 dark:hover:bg-purple-700 "
            size="xs"
          >
            Apply Changes
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TableSortingCard;
 */
