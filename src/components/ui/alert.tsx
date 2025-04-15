import { cva } from 'class-variance-authority';
import * as React from 'react';

import { X } from 'lucide-react';
import { cn } from '../../lib/utils';
import { BannerProps } from '../../types';

const alertVariants = cva(
  'text-gray-30 flex flex-col gap-6 rounded-xl p-6 shadow-sm w-full border-[0.5px] border-gray-0/20 bg-blur transition-colors duration-200 ease-in-out bg-gray-0/8 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-gray-950 [&>svg~*]:pl-7 dark:border-gray-800 dark:[&>svg]:text-gray-50 relative',
  {
    variants: {
      variant: {
        default: '',
        destructive:
          'border-red-500/50 text-red-500 dark:border-red-500 [&>svg]:text-red-500 dark:border-red-900/50 dark:text-red-900 dark:dark:border-red-900 dark:[&>svg]:text-red-900',
        closeable: 'data-[closed=true]:hidden',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

const Alert = React.forwardRef<HTMLDivElement, BannerProps>(({ className, variant, children, ...props }, ref) => {
  const [closed, setClosed] = React.useState(false);

  return variant === 'closeable' ? (
    !closed && (
      <div ref={ref} role="alert" className={cn(alertVariants({ variant }), className)} {...props}>
        <button onClick={() => setClosed(true)} className='absolute top-2 right-2 cursor-pointer hover:text-gray-10'>
          <X />
          <span className="sr-only">Close</span>
        </button>
        {children}
      </div>
    )
  ) : (
    <div ref={ref} role="alert" className={cn(alertVariants({ variant }), className)} {...props}>
      {children}
    </div>
  );
});
Alert.displayName = 'Alert';

const AlertTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h5 ref={ref} className={cn('mb-1 font-medium leading-none tracking-tight', className)} {...props} />
  )
);
AlertTitle.displayName = 'AlertTitle';

const AlertDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('text-sm [&_p]:leading-relaxed', className)} {...props} />
  )
);
AlertDescription.displayName = 'AlertDescription';

export { Alert, AlertDescription, AlertTitle };
