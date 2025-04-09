export type InputProps = React.ComponentPropsWithoutRef<'input'> & {
  variant?: 'default' | 'icon' | 'label-out' | 'no-label';
  label?: string;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  error?: boolean;
  disabled?: boolean;
  placeholder?: string;
};