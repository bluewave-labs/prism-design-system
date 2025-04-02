import * as React from 'react';

import { cn } from '@/lib/utils';

function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        'file:text-gray-10 placeholder:text-gray-20 selection:bg-gray-20 selection:text-gray-10 bg-gray-40/12 border-gray-0/20 flex w-full min-w-0 rounded-lg border-[0.5px] px-4 py-3 text-sm shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 focus-visible:border-gray-60 focus-visible:ring-gray-60/50 focus-visible:ring-[3px] aria-invalid:ring-red-800/20 dark:aria-invalid:ring-red-800/40 aria-invalid:border-red-800 min-h-[50px]',
        className
      )}
      {...props}
    />
  );
}

export { Input };
