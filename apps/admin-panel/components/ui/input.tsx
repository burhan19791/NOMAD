import * as React from 'react';

import { cn } from '@/lib/utils';

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<'input'>>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'bg-inner-card file:text-foreground placeholder:text-muted-foreground focus:ring-purple flex h-9 w-full rounded-md border border-gray-200 px-3 py-5 text-base transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus:ring-1 focus:outline-none focus-visible:ring-1 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:border-none',
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = 'Input';

export { Input };
