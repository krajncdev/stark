import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '../../../lib/utils';

const introVariants = cva('font-roboto', {
  variants: {
    variant: {
      purple: 'text-purple',
      yellow: 'text-secondary',
    },
    size: {
      default: ' tracking-[0.08em] font-[700]',
    },
  },
  defaultVariants: {
    variant: 'purple',
    size: 'default',
  },
});

export interface ButtonProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof introVariants> {
  asChild?: boolean;
}

const Intro = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }) => {
    const Comp = asChild ? Slot : 'p';
    return (
      <Comp
        className={cn(introVariants({ variant, size, className }))}
        {...props}
      />
    );
  }
);
Intro.displayName = 'Intro';

export { Intro, introVariants };
