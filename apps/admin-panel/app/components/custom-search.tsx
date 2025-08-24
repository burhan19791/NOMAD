'use client';

import React from 'react';
import { FaSearch } from 'react-icons/fa';

const CustomSearch = () => {
  return (
    <div className="border-inner-card-border bg-inner-card text-font-light dark:text-font-primary flex w-fit items-center rounded-lg border px-2 py-2 md:px-3">
      <FaSearch className="text-font-primary text-sm" />

      {/* Only show input from md and above */}
      <input
        type="text"
        placeholder="Search..."
        className="placeholder:text-font-primary ml-2 w-44 bg-transparent text-sm outline-none"
      />
    </div>
  );
};

export default CustomSearch;
