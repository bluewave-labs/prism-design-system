import * as TabsPrimitive from '@radix-ui/react-tabs';
import { ReactNode } from 'react';

export interface TabsProps {
  tabsList: {
    value: string;
    label: string;
    content: ReactNode;
  }[];
  defaultValue?: string;
  variant?: 'default' | 'pill' | 'tab';
  className?: string;
  contentClassName?: string;
  tabsListClassName?: string;
}

export type TabsListRef = React.ComponentRef<typeof TabsPrimitive.List>;
export type TabsListProps = React.ComponentPropsWithoutRef<typeof TabsPrimitive.List> & {
  variant?: 'default' | 'pill' | 'tab';
};

export type TabsTriggerRef = React.ComponentRef<typeof TabsPrimitive.Trigger>;
export type TabsTriggerProps = React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger> & {
  variant?: 'default' | 'pill' | 'tab';
  position?: 'left' | 'right' | 'center' | 'default';
};
