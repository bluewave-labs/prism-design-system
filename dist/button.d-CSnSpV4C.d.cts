import React__default from 'react';

type ButtonProps = React__default.ComponentProps<'button'> & {
  asChild?: boolean;
  variant?: 'default' | 'action' | 'destructive' | 'outline' | 'outline_active' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'xs' | 'sm' | 'md' | 'lg' | 'icon';
  rounded?: 'default' | 'sm' | 'md' | 'lg' | 'full';
};

export type { ButtonProps as B };
