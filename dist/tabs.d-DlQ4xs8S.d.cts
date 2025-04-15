import * as TabsPrimitive from '@radix-ui/react-tabs';
import { ReactNode } from 'react';

interface TabsProps {
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

type TabsListRef = React.ComponentRef<typeof TabsPrimitive.List>;
type TabsListProps = React.ComponentPropsWithoutRef<typeof TabsPrimitive.List> & {
  variant?: 'default' | 'pill' | 'tab';
};

type TabsTriggerRef = React.ComponentRef<typeof TabsPrimitive.Trigger>;
type TabsTriggerProps = React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger> & {
  variant?: 'default' | 'pill' | 'tab';
  position?: 'left' | 'right' | 'center' | 'default';
};

export type { TabsProps as T, TabsListProps as a, TabsListRef as b, TabsTriggerProps as c, TabsTriggerRef as d };
