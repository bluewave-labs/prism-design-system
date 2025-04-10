'use client';

import * as TabsPrimitive from '@radix-ui/react-tabs';
import * as React from 'react';

import { cva } from 'class-variance-authority';
import { cn } from '../../lib/utils';
import { TabsListProps, TabsListRef, TabsTriggerProps, TabsTriggerRef } from '../../types';

const Tabs = TabsPrimitive.Root;

const tabsListVariants = cva(
  'inline-flex h-9 items-center justify-center bg-linear-180 from-gray-0/10 to-gray-0/0 rounded-full text-sm mb-6',

  {
    variants: {
      variant: {
        default: 'p-0 text-gray-40 border-gray-0/30 border-[0.5px]',
        pill: 'p-1 border-gray-0/20 text-gray-10 mb-10 border-[0.5px]',
        tab: 'flex justify-start items-end border-b border-gray-0/20 bg-gray-0/10 text-gray-10 rounded-none bg-transparent from-gray-0/0 to-gray-0/0',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

const TabsList = React.forwardRef<TabsListRef, TabsListProps>(({ className, variant, ...props }, ref) => (
  <TabsPrimitive.List ref={ref} className={cn(tabsListVariants({ variant }), className)} {...props} />
));
TabsList.displayName = TabsPrimitive.List.displayName;

const tabsTriggerVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap px-3 py-1 text-sm font-medium ring-offset-white transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-none disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-blue-30 data-[state=active]:text-blue-90 data-[state=active]:shadow',
  {
    variants: {
      variant: {
        default: 'text-gray-40 border-gray-0/30 self-stretch border-x-[0.25px] border-gray-0/30',
        pill: 'rounded-full',
        tab: 'bg-transparent text-gray-40 py-3.5 data-[state=active]:bg-transparent data-[state=active]:text-blue-30 data-[state=active]:border-b-2 data-[state=active]:border-blue-30',
      },
      position: {
        left: 'rounded-l-full',
        right: 'rounded-r-full',
        center: 'rounded-none',
        default: 'rounded-full',
      }
    },
    defaultVariants: {
      variant: 'default',
      position: 'default',
    },
  }
);

const TabsTrigger = React.forwardRef<TabsTriggerRef, TabsTriggerProps>(({ className, variant, position, ...props }, ref) => (
  <TabsPrimitive.Trigger ref={ref} className={cn(tabsTriggerVariants({ variant, position }), className)} {...props} />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
  React.ComponentRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      'mt-2 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 dark:ring-offset-gray-950 dark:focus-visible:ring-gray-300',
      className
    )}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsContent, TabsList, TabsTrigger };
