import React from 'react';

export type CardProps = React.ComponentProps<'div'> & {
  asChild?: boolean;
  variant?: 'default' | 'clickable' | 'console';
};
