export type InputProps = React.ComponentPropsWithoutRef<'input'> & {
  variant?: 'default' | 'icon' | 'label-out';
  label?: string;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  error?: boolean;
  disabled?: boolean;
  placeholder?: string;
};