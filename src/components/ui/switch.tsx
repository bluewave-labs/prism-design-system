'use client';

import * as SwitchPrimitives from '@radix-ui/react-switch';
import * as React from 'react';

import { cva } from 'class-variance-authority';
import { cn } from '../../lib/utils';
import { SwitchProps, SwitchRef } from '../../types';

const rootVariant = cva(
  'peer inline-flex shrink-0 cursor-pointer items-center rounded-full border-gray-50 shadow-sm transition-colors disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-blue-30 data-[state=checked]:border-blue-30 data-[state=unchecked]:bg-gray-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-10/20 focus-visible:ring-offset-2 focus-visible:ring-offset-white',
  {
    variants: {
      size: {
        default: 'h-8 w-13 border-2',
        sm: 'h-5 w-8 border',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  }
);

const thumbVariant = cva(
  'pointer-events-none block rounded-full bg-gray-50 data-[state=checked]:bg-blue-90 shadow-lg ring-0 transition-transform',
  {
    variants: {
      size: {
        default: 'w-6 h-6 data-[state=checked]:translate-x-6 data-[state=unchecked]:translate-x-0.5',
        sm: 'w-3.5 h-3.5 data-[state=checked]:translate-x-3.5 data-[state=unchecked]:translate-x-0.5',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  }
);

const Switch = React.forwardRef<SwitchRef, SwitchProps>(({ className, size, ...props }, ref) => (
  <SwitchPrimitives.Root className={cn(rootVariant({ size }), className)} {...props} ref={ref}>
    <SwitchPrimitives.Thumb className={cn(thumbVariant({ size }))} />
  </SwitchPrimitives.Root>
));
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
