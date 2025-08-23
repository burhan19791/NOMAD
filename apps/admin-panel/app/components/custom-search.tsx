'use client';

import React from 'react';
import { FaSearch } from 'react-icons/fa';

const CustomSearch = () => {
  return (
    <div className="border-inner-card-border bg-inner-card text-font-light dark:text-font-primary flex w-fit items-center rounded-lg border px-3 py-2">
      <FaSearch className="text-font-primary text-xs" />

      {/* Only show input from md and above */}
      <input  
        type="text"
        placeholder="Search..."
        className="placeholder:text-font-primary ml-2 hidden w-44 bg-transparent text-sm outline-none md:inline-block"
      />
    </div>
  );
};

export default CustomSearch;
