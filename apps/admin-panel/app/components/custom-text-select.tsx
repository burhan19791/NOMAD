import React, { useState, useRef, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";

interface CustomSelectProps {
  title: string;
  options: string[];
  onSelect?: (option: string) => void;
}

const CustomTextSelect: React.FC<CustomSelectProps> = ({
  title,
  options,
  onSelect,
}) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleOpen = () => setOpen((prev) => !prev);

  const handleSelect = (option: string) => {
    setSelected(option);
    setOpen(false);
    if (onSelect) onSelect(option);
  };

  // Close dropdown if clicked outside
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
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <div
        onClick={toggleOpen}
        className="cursor-pointer flex items-center gap-2 select-none"
        style={{ userSelect: "none" }}
      >
        <span className="text-font-primary font-medium">
          {selected ?? title}
        </span>
        <FaChevronDown
          className={`transition-transform duration-200 ${
            open ? "rotate-180" : "rotate-0"
          }`}
          size={14}
        />
      </div>

      {open && (
        <div className="absolute mt-2 w-max bg-card-background rounded-md shadow-lg z-10 py-1 min-w-[8rem]">
          {options.map((option) => (
            <div
              key={option}
              onClick={() => handleSelect(option)}
              className="px-4 py-2 text-sm cursor-pointer hover:bg-gray-200 dark:hover:bg-inner-card rounded"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomTextSelect;
