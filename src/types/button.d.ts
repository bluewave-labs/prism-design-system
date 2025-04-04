export type ButtonProps = React.ComponentProps<'button'> & {
  asChild?: boolean;
  variant?: 'default' | 'action' | 'destructive' | 'outline' | 'outline_active' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'xs' | 'sm' | 'md' | 'lg' | 'icon';
  rounded?: 'default' | 'sm' | 'md' | 'lg' | 'full';
};
