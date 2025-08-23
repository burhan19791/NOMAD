"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

type Option = {
  value: string;
  label: string;
};

type CustomSelectProps = {
  options: Option[];
  placeholder?: string;
  onChange?: (selected: Option) => void;
  smIcon?: React.ReactNode; // icon to show ONLY on small screens
};

export default function CustomSelect({
  options,
  placeholder = "Select...",
  onChange,
  smIcon,
}: CustomSelectProps) {
  const [selected, setSelected] = useState<Option | null>(null);
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleOpen = () => setOpen((prev) => !prev);

  const handleSelect = (option: Option) => {
    setSelected(option);
    setOpen(false);
    if (onChange) onChange(option);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className="relative text-nowrap text-font-primary">
      {/* Show icon only on small screens */}
      {smIcon && (
        <button
          onClick={toggleOpen}
          className="inline-flex items-center rounded-md border border-inner-card-border bg-inner-card p-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-900 sm:block md:hidden lg:hidden xl:hidden"
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-label="Open select menu"
        >
          {smIcon}
        </button>
      )}

      {/* Show full select on md+ screens */}
      <button
        onClick={toggleOpen}
        className="w-full justify-between items-center rounded-md border border-inner-card-border bg-inner-card px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-900 hidden md:inline-flex"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span>{selected ? selected.label : placeholder}</span>
        <ChevronDown className="ml-2 h-4 w-4" />
      </button>

      {open && (
        <ul
          className="absolute right-0 z-10 mt-1 hover:bg-gray-100 dark:hover:bg-card-background overflow-auto rounded-md border border-inner-card-border bg-inner-card text-font-primary text-sm shadow-lg focus:outline-none"
          role="listbox"
        >
          {options.map((option) => (
            <div
              key={option.value}
              className="bg-inner-card px-2 hover:bg-gray-100 dark:hover:bg-card-background"
            >
              <li
                className={`hover:bg-gray-100 dark:hover:bg-card-background cursor-pointer whitespace-nowrap px-3 py-2 ${
                  selected?.value === option.value ? "font-semibold" : ""
                }`}
                role="option"
                aria-selected={selected?.value === option.value}
                onClick={() => handleSelect(option)}
              >
                {option.label}
              </li>
            </div>
          ))}
        </ul>
      )}
    </div>
  );
}
