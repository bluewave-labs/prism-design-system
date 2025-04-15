import React__default from 'react';

type InputProps = React__default.ComponentPropsWithoutRef<'input'> & {
  variant?: 'default' | 'icon' | 'label-out' | 'no-label';
  label?: string;
  iconLeft?: React__default.ReactNode;
  iconRight?: React__default.ReactNode;
  error?: boolean;
  disabled?: boolean;
  placeholder?: string;
};

export type { InputProps as I };
