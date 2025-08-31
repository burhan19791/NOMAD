"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { CheckIcon } from "lucide-react";

import { cn } from "@/lib/utils";

function Checkbox({
  className,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        "peer h-4 w-4 shrink-0 rounded border-2 border-gray-300 bg-white transition-all duration-200",
        "hover:border-primary/60 hover:bg-primary/5",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:ring-offset-2",
        "disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:border-gray-300 disabled:hover:bg-white",
        "data-[state=checked]:bg-primary data-[state=checked]:border-primary data-[state=checked]:hover:bg-primary/90",
        "dark:border-gray-600 dark:bg-gray-800 dark:hover:border-primary/60 dark:hover:bg-primary/10",
        "dark:data-[state=checked]:bg-primary dark:data-[state=checked]:border-primary dark:data-[state=checked]:hover:bg-primary/90",
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="flex items-center justify-center text-white transition-all duration-200"
      >
        <CheckIcon className="h-3 w-3 stroke-[3]" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}

export { Checkbox };
