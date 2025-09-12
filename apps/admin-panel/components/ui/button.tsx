import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  "inline-flex items-center !py-5 justify-center gap-2 whitespace-nowrap font-semibold rounded-md text-sm transition-all duration-200 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 dark:aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          'bg-primary text-primary-foreground shadow-xs hover:bg-primary/90',
        destructive:
          'bg-error cursor-pointer text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
        outline:
          'border-gray-200 border dark:border-none focus:ring-3 focus:ring-gray-200 dark:border-inner-card dark:focus:ring-inner-card/70 dark:hover:bg-inner-card bg-inner-card cursor-pointer',
        secondary:
          'bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80',
        ghost:
          'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
        link: 'text-primary underline-offset-4 hover:underline',
        // Add your custom variants here
        primary:
          'bg-purple cursor-pointer text-white hover:bg-purple-700  dark:hover:bg-primary focus:ring-3 focus:ring-purple/40',
        'primary-outline':
          'border-2 border-primary bg-transparent text-primary hover:bg-purple-200 dark:hover:bg-purple-700 focus:ring-2 focus:ring-primary/30 focus:ring-offset-2',
        black:
          'bg-black cursor-pointer text-white hover:bg-black/80 dark:hover:bg-black/80 focus:ring-2 focus:ring-black/30 focus:ring-offset-2',
      },

      size: {
        default: 'h-9 px-4 py-2 has-[>svg]:px-3',
        sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
        lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
        icon: 'size-9',
        // Add your custom sizes here
        xl: 'h-12 px-6 py-3 text-base',
        '2xl': 'h-14 px-8 py-4 text-lg',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
