"use client";

import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FaFilter, FaTimes } from "react-icons/fa";
import React, { useState } from "react";

const ProductListingFilterCard = () => {
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState({ min: "", max: "" });

  const brands = ["Royal Canin", "Hill's", "Purina", "Blue Buffalo", "Nutro"];
  const sizes = ["2.5kg", "5kg", "10kg", "15kg", "20kg"];

  const clearAllFilters = () => {
    setSelectedBrands([]);
    setSelectedSizes([]);
    setPriceRange({ min: "", max: "" });
  };

  const getActiveFiltersCount = () => {
    return (
      selectedBrands.length +
      selectedSizes.length +
      (priceRange.min ? 1 : 0) +
      (priceRange.max ? 1 : 0)
    );
  };

  return (
    <div className="bg-card-background p-5 rounded-2xl border border-gray-100 shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <FaFilter className="text-primary text-lg" />
          <h2 className="text-font-primary text-xl font-bold">Filters</h2>
        </div>
        {getActiveFiltersCount() > 0 && (
          <button
            onClick={clearAllFilters}
            className="text-xs text-gray-500 hover:text-gray-700 underline"
          >
            Clear all
          </button>
        )}
      </div>

      {/* Search */}

      {/* Compact Active Filters */}
      {getActiveFiltersCount() > 0 && (
        <div className="mb-4 p-3 bg-gray-50 rounded-lg">
          <div className="text-xs text-gray-600 mb-2">
            Active: {getActiveFiltersCount()}
          </div>
          <div className="flex flex-wrap gap-1">
            {selectedBrands.slice(0, 2).map((brand) => (
              <Badge
                key={brand}
                variant="secondary"
                className="text-xs px-2 py-1"
              >
                {brand}
              </Badge>
            ))}
            {selectedSizes.slice(0, 2).map((size) => (
              <Badge
                key={size}
                variant="secondary"
                className="text-xl px-2 py-1"
              >
                {size}
              </Badge>
            ))}
            {getActiveFiltersCount() > 4 && (
              <Badge variant="secondary" className="text-xs px-2 py-1">
                +{getActiveFiltersCount() - 4} more
              </Badge>
            )}
          </div>
        </div>
      )}

      {/* Filter Sections */}
      <div className="space-y-4">
        {/* Brands */}
        <div>
          <h3 className="text-font-primary text-lg font-semibold mb-2">
            Brands
          </h3>
          <div className="space-y-1 grid grid-cols-2 gap-2">
            {brands.map((brand) => (
              <label
                key={brand}
                className="flex items-center gap-2 cursor-pointer"
              >
                <Checkbox
                  checked={selectedBrands.includes(brand)}
                  onCheckedChange={() => {
                    if (selectedBrands.includes(brand)) {
                      setSelectedBrands(
                        selectedBrands.filter((b) => b !== brand)
                      );
                    } else {
                      setSelectedBrands([...selectedBrands, brand]);
                    }
                  }}
                />
                <span className="text-sm text-gray-700">{brand}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Sizes */}
        <div>
          <h3 className="text-font-primary text-lg font-semibold mb-2">Size</h3>
          <div className="grid grid-cols-2 gap-2">
            {sizes.map((size) => (
              <label
                key={size}
                className="flex items-center gap-2 cursor-pointer"
              >
                <Checkbox
                  checked={selectedSizes.includes(size)}
                  onCheckedChange={() => {
                    if (selectedSizes.includes(size)) {
                      setSelectedSizes(selectedSizes.filter((s) => s !== size));
                    } else {
                      setSelectedSizes([...selectedSizes, size]);
                    }
                  }}
                />
                <span className="text-sm text-gray-700">{size}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Price Range */}
        <div>
          <h3 className="text-font-primary text-sm font-semibold mb-2">
            Price (AED)
          </h3>
          <div className="flex items-center gap-2">
            <Input
              type="number"
              variant="primary"
              placeholder="Min"
              value={priceRange.min}
              onChange={(e) =>
                setPriceRange({ ...priceRange, min: e.target.value })
              }
              className="w-full text-xs"
            />
            <div className="text-gray-400 text-xs">-</div>
            <Input
              type="number"
              variant="primary"
              placeholder="Max"
              value={priceRange.max}
              onChange={(e) =>
                setPriceRange({ ...priceRange, max: e.target.value })
              }
              className="w-full text-xs"
            />
          </div>
        </div>
      </div>

      {/* Apply Button */}
      <div className="mt-5 pt-4 border-t border-gray-100">
        <Button
          variant="primary"
          size="sm"
          className="w-full text-sm"
          disabled={getActiveFiltersCount() === 0}
        >
          Apply ({getActiveFiltersCount()})
        </Button>
      </div>
    </div>
  );
};

export default ProductListingFilterCard;
