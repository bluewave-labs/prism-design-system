/* eslint-disable no-unused-vars */
import { cva } from 'class-variance-authority';
import { useEffect, useState } from 'react';
import { cn } from '../../lib/utils';
import { InputProps } from '../../types';

const inputVariants = cva('', {
  variants: {
    variant: {
      default:
        'text-gray-10 placeholder:text-gray-20 bg-transparent grow text-sm shadow-xs outline-none focus-visible:ring-none pt-4',
      icon: 'flex items-center justify-center bg-gray-40/12 border-gray-0/20 w-full min-w-0 rounded-md border-[0.5px] px-2 py-2 text-sm shadow-xs transition-[color,box-shadow] aria-invalid:border-red-800 h-14 text-gray-10 placeholder:text-gray-20 outline-none focus-visible:ring-[0.5px] focus-visible:ring-gray-0/10 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-0/8',
      'label-out':
        'bg-gray-40/12 border-gray-0/20 w-full min-w-0 rounded-md border-[0.5px] px-2 py-2 text-sm shadow-xs transition-[color,box-shadow] aria-invalid:border-red-800 h-14 text-gray-10 placeholder:text-gray-20 grow outline-none focus-visible:ring-[1px] focus-visible:ring-gray-0/10 focus-visible:ring-offset-1 focus-visible:ring-offset-gray-0/8 disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed',
      'no-label':
        'bg-gray-40/12 border-gray-0/20 w-full min-w-0 rounded-md border-[0.5px] px-2 py-2 text-sm shadow-xs transition-[color,box-shadow] aria-invalid:border-red-800 h-14 text-gray-10 placeholder:text-gray-20 outline-none focus-visible:ring-[0.5px] focus-visible:ring-gray-0/10 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-0/8 disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed',
    },
    error: {
      true: 'border-red-800',
      false: '',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

const labelVariants = cva('', {
  variants: {
    variant: {
      default:
        'relative flex items-center bg-gray-40/12 border-gray-0/20 w-full min-w-0 rounded-md border-[0.5px] px-4 py-2 text-sm shadow-xs transition-[color,box-shadow] aria-invalid:border-red-800 h-14',
      'label-out': 'flex flex-col-reverse items-start justify-center w-full min-w-0',
    },
    disabled: {
      true: 'opacity-50 cursor-not-allowed',
      false: '',
    },
    error: {
      true: 'border-red-800',
      false: '',
    },
  },
  defaultVariants: {
    variant: 'default',
    disabled: false,
    error: false,
  },
});

function Input(props: InputProps) {
  const { className, type, variant, id, label, disabled, error, ...rest } = props;
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    if (props.value) {
      setIsFocused(true);
    }
  }, [props.value]);

  if (variant === 'icon') {
    return <InputIcon {...props} />;
  }

  if (variant === 'no-label') {
    return <NoLabelInput {...props} />;
  }

  return (
    <label
      htmlFor={id}
      aria-invalid={error}
      className={cn(
        labelVariants({
          variant,
          disabled: disabled ?? false,
          error: error ?? false,
        })
      )}
    >
      <input
        type={type}
        data-slot="input"
        id={id}
        aria-invalid={error}
        className={cn(inputVariants({ variant, error: variant === 'label-out' && error ? error : false }), className)}
        placeholder="&nbsp;"
        onFocus={() => setIsFocused(true)}
        onBlur={(e) => {
          if (!e.target.value) {
            setIsFocused(false);
          }
        }}
        {...rest}
      />
      <span
        className={cn(
          variant !== 'label-out'
            ? 'absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-40 transition-all ease-in-out'
            : 'text-gray-10 font-medium mb-4 ml-1',
          isFocused && variant !== 'label-out' ? 'scale-[80%] top-3 left-3' : ''
        )}
      >
        {label}
      </span>
    </label>
  );
}

function InputIcon({ variant, className, type, id, iconLeft, iconRight, disabled, error, ...props }: InputProps) {
  return (
    <div className={cn(inputVariants({ variant, error: error ?? false }), className)}>
      {iconLeft && <span className="mr-2 text-2xl">{iconLeft}</span>}
      <input
        type={type}
        data-slot="input"
        id={id}
        disabled={disabled}
        className={cn('grow outline-none focus-visible:ring-none', className)}
        {...props}
      />
      {iconRight && <span className="ml-2 text-2xl">{iconRight}</span>}
    </div>
  );
}

function NoLabelInput({ variant, className, type, id, disabled, error, ...props }: InputProps) {
  const { iconLeft, iconRight, ...rest } = props;
  return (
    <input
      type={type}
      data-slot="input"
      id={id}
      aria-invalid={error}
      disabled={disabled}
      className={cn(inputVariants({ variant, error }), className)}
      placeholder="&nbsp;"
      {...rest}
    />
  );
}

export { Input };
