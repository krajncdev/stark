import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '../../lib/utils';

const sectionVariants = cva('p-4 w-full mx-auto my-0', {
  variants: {
    size: {
      default: 'max-w-[1160px]',
      sm: 'max-w-[960px]',
      zero: 'w-fit',
    },
  },
  defaultVariants: {
    size: 'default',
  },
});

export interface ButtonProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof sectionVariants> {
  asChild?: boolean;
}

const Section = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'section';
    return (
      <Comp
        className={cn(sectionVariants({ size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Section.displayName = 'Section';

export { Section, sectionVariants };
