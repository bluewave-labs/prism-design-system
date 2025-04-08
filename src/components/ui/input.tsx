import { cva } from 'class-variance-authority';
import { cn } from '../../lib/utils';
import { InputProps } from '../../types';

const inputVariants = cva('', {
  variants: {
    variant: {
      default: 'input',
      icon: 'input flex items-center justify-between rounded-lg border-[0.5px] border-gray-0/20 bg-gray-40/12 px-4 py-3 text-sm shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 focus-visible:border-gray-60 focus-visible:ring-gray-60/50 focus-visible:ring-[3px] aria-invalid:ring-red-800/20 dark:aria-invalid:ring-red-800/40 aria-invalid:border-red-800 min-h-[50px]',
      'label-out': '',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

function Input({ className, type, variant, id, label, ...props }: InputProps) {
  if (variant === 'icon') {
    return (
      <div className={cn(inputVariants({ variant }), className)}>
        {props.iconLeft && <span className="mr-2">{props.iconLeft}</span>}
        <input type={type} data-slot="input" id={id} className={cn('', 'flex-1', className)} {...props} />
        {props.iconRight && <span className="ml-2">{props.iconRight}</span>}
      </div>
    );
  }

  return (
    <label htmlFor={id}>
      <input type={type} data-slot="input" id={id} className={cn(inputVariants({ variant }), className)} {...props} />
      <span>{label}</span>
    </label>
  );
}

export { Input };
