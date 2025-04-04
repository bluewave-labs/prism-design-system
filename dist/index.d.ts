import * as React$1 from 'react';
import { ButtonProps as ButtonProps$1, SidebarProps as SidebarProps$1 } from '@/types';
import * as class_variance_authority_types from 'class-variance-authority/types';
import { VariantProps } from 'class-variance-authority';
import * as SeparatorPrimitive from '@radix-ui/react-separator';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';

type ButtonProps = React.ComponentProps<'button'> & {
  asChild?: boolean;
  variant?: 'default' | 'action' | 'destructive' | 'outline' | 'outline_active' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'xs' | 'sm' | 'md' | 'lg' | 'icon';
  rounded?: 'default' | 'sm' | 'md' | 'lg' | 'full';
};

declare function Button({ className, variant, size, rounded, asChild, ...props }: ButtonProps$1): React$1.JSX.Element;

type ItemNav = {
  title: string;
  url?: string;
  icon: ReactNode;
  children?: ItemNav[];
};

type ItemsNav = {
  label?: string;
  items: ItemNav[];
}[];

type SidebarProps = {
  product?: string;
  nav: ItemsNav;
  footer?: ReactNode;
  notifications?: ReactNode[];
};

declare function Input({ className, type, ...props }: React$1.ComponentProps<'input'>): React$1.JSX.Element;

declare function Separator({ className, orientation, decorative, ...props }: React$1.ComponentProps<typeof SeparatorPrimitive.Root>): React$1.JSX.Element;

declare function TooltipContent({ className, sideOffset, children, ...props }: React$1.ComponentProps<typeof TooltipPrimitive.Content>): React$1.JSX.Element;

type SidebarContextProps = {
    state: 'expanded' | 'collapsed';
    open: boolean;
    setOpen: (open: boolean) => void;
    openMobile: boolean;
    setOpenMobile: (open: boolean) => void;
    isMobile: boolean;
    toggleSidebar: () => void;
};
declare function useSidebar(): SidebarContextProps;
declare function SidebarProvider({ defaultOpen, open: openProp, onOpenChange: setOpenProp, className, style, children, ...props }: React$1.ComponentProps<'div'> & {
    defaultOpen?: boolean;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
}): React$1.JSX.Element;
declare function Sidebar({ side, variant, collapsible, className, children, ...props }: React$1.ComponentProps<'div'> & {
    side?: 'left' | 'right';
    variant?: 'sidebar' | 'floating' | 'inset';
    collapsible?: 'offcanvas' | 'icon' | 'none';
}): React$1.JSX.Element;
declare function SidebarTrigger({ className, onClick, ...props }: React$1.ComponentProps<typeof Button>): React$1.JSX.Element;
declare function SidebarRail({ className, children, ...props }: React$1.ComponentProps<'div'>): React$1.JSX.Element;
declare function SidebarInset({ className, ...props }: React$1.ComponentProps<'main'>): React$1.JSX.Element;
declare function SidebarInput({ className, ...props }: React$1.ComponentProps<typeof Input>): React$1.JSX.Element;
declare function SidebarHeader({ className, ...props }: React$1.ComponentProps<'div'>): React$1.JSX.Element;
declare function SidebarFooter({ className, ...props }: React$1.ComponentProps<'div'>): React$1.JSX.Element;
declare function SidebarSeparator({ className, ...props }: React$1.ComponentProps<typeof Separator>): React$1.JSX.Element;
declare function SidebarContent({ className, ...props }: React$1.ComponentProps<'div'>): React$1.JSX.Element;
declare function SidebarGroup({ className, ...props }: React$1.ComponentProps<'div'>): React$1.JSX.Element;
declare function SidebarGroupLabel({ className, asChild, ...props }: React$1.ComponentProps<'div'> & {
    asChild?: boolean;
}): React$1.JSX.Element;
declare function SidebarGroupAction({ className, asChild, ...props }: React$1.ComponentProps<'button'> & {
    asChild?: boolean;
}): React$1.JSX.Element;
declare function SidebarGroupContent({ className, ...props }: React$1.ComponentProps<'div'>): React$1.JSX.Element;
declare function SidebarMenu({ className, ...props }: React$1.ComponentProps<'ul'>): React$1.JSX.Element;
declare function SidebarMenuItem({ className, ...props }: React$1.ComponentProps<'li'>): React$1.JSX.Element;
declare const sidebarMenuButtonVariants: (props?: ({
    variant?: "default" | "outline" | null | undefined;
    size?: "default" | "sm" | "lg" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare function SidebarMenuButton({ asChild, isActive, variant, size, tooltip, className, ...props }: React$1.ComponentProps<'button'> & {
    asChild?: boolean;
    isActive?: boolean;
    tooltip?: string | React$1.ComponentProps<typeof TooltipContent>;
} & VariantProps<typeof sidebarMenuButtonVariants>): React$1.JSX.Element;
declare function SidebarMenuAction({ className, asChild, showOnHover, ...props }: React$1.ComponentProps<'button'> & {
    asChild?: boolean;
    showOnHover?: boolean;
}): React$1.JSX.Element;
declare function SidebarMenuBadge({ className, ...props }: React$1.ComponentProps<'div'>): React$1.JSX.Element;
declare function SidebarMenuSkeleton({ className, showIcon, ...props }: React$1.ComponentProps<'div'> & {
    showIcon?: boolean;
}): React$1.JSX.Element;
declare function SidebarMenuSub({ className, ...props }: React$1.ComponentProps<'ul'>): React$1.JSX.Element;
declare function SidebarMenuSubItem({ className, ...props }: React$1.ComponentProps<'li'>): React$1.JSX.Element;
declare function SidebarMenuSubButton({ asChild, size, isActive, className, ...props }: React$1.ComponentProps<'a'> & {
    asChild?: boolean;
    size?: 'sm' | 'md';
    isActive?: boolean;
}): React$1.JSX.Element;

declare const AppSidebar: ({ product, nav, footer, notifications }: SidebarProps$1) => React$1.JSX.Element;

declare const colors: {
    blue: {
        5: string;
        10: string;
        20: string;
        30: string;
        40: string;
        50: string;
        60: string;
        70: string;
        80: string;
        90: string;
        95: string;
        100: string;
        105: string;
        110: string;
        115: string;
    };
    gray: {
        100: string;
        95: string;
        90: string;
        85: string;
        80: string;
        70: string;
        60: string;
        50: string;
        40: string;
        30: string;
        20: string;
        10: string;
        0: string;
    };
};

type ColorsType = {
  blue: {
    5: string;
    10: string;
    20: string;
    30: string;
    40: string;
    50: string;
    60: string;
    70: string;
    80: string;
    90: string;
    95: string;
    100: string;
    105: string;
    110: string;
    115: string;
  };
  gray: {
    100: string;
    95: string;
    90: string;
    85: string;
    80: string;
    70: string;
    60: string;
    50: string;
    40: string;
    30: string;
    20: string;
    10: string;
    0: string;
  };
};

export { AppSidebar, Button, Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupAction, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarInput, SidebarInset, SidebarMenu, SidebarMenuAction, SidebarMenuBadge, SidebarMenuButton, SidebarMenuItem, SidebarMenuSkeleton, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem, SidebarProvider, SidebarRail, SidebarSeparator, SidebarTrigger, colors, useSidebar };
export type { ButtonProps, ColorsType, ItemNav, ItemsNav, SidebarProps };
