import * as React from "react";
import { FaSearch } from "react-icons/fa";

import { cn } from "@/lib/utils";

const inputVariants = {
  default: "border-input bg-transparent",
  ghost: "border-transparent bg-transparent shadow-none",
  primary:
    "border-gray-200 bg-gray-50 hover:bg-gray-100 focus:bg-white dark:border-gray-600 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:bg-gray-900",
};

interface InputProps extends React.ComponentProps<"input"> {
  variant?: keyof typeof inputVariants;
  icon?: boolean;
}

function Input({
  className,
  type,
  variant = "default",
  icon = false,
  ...props
}: InputProps) {
  return (
    <div className="relative">
      <input
        type={type}
        data-slot="input"
        className={cn(
          // Base styles
          "flex h-10 w-full min-w-0 rounded-lg px-4 py-2 text-base transition-all duration-200 outline-none",
          "placeholder:text-gray-400 placeholder:text-sm",
          "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
          "md:text-sm",

          // Border and background variants
          "border-2",
          inputVariants[variant],

          // Focus states - All gray now
          "focus-visible:border-gray-300 focus-visible:ring-2 focus-visible:ring-gray-200 focus-visible:ring-offset-2",

          // Hover states (only for primary variant)
          variant === "primary" &&
            "hover:border-gray-300 dark:hover:border-gray-500",

          // Invalid state
          "aria-invalid:border-red-500 aria-invalid:ring-red-500/20",

          // File input styles
          "file:inline-flex file:h-8 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground",

          // Add left padding when icon is present
          icon && "pl-10",

          className
        )}
        {...props}
      />

      {icon && (
        <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm pointer-events-none" />
      )}
    </div>
  );
}

export { Input };
