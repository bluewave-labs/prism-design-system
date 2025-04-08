import * as React from 'react';

import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';
import { Button, ButtonProps } from '../Button';

const cardVariants = cva(
  'bg-gray-0/8 text-gray-30 flex flex-col gap-6 rounded-xl p-6 shadow-sm w-full border-[0.5px] border-gray-0/20 bg-blur',
  {
    variants: {
      variant: {
        default: '',
        clickable:
          'cursor-pointer hover:bg-linear-[180deg] hover:from-gray-0/8 hover:to-gray-0/2 hover:bg-transparent hover:border-gray-0/30',
        console:
          'bg-linear-180 from-gray-0/8 to-gray-0/2 bg-blur border-[0.5px] border-gray-0/20 cursor-pointer hover:from-gray-0/16 hover:to-gray-0/4 hover:bg-transparent hover:border-gray-0/40',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

type CardContext = {
  isHovered: boolean;
  setIsHovered: React.Dispatch<React.SetStateAction<boolean>>;
  children?: React.ReactNode;
};

const CardContext = React.createContext<CardContext | undefined>(undefined);

function useCardContext() {
  const context = React.useContext(CardContext);
  if (!context) {
    throw new Error('Card components must be used within a Card component');
  }
  return context;
}

function CardProvider({ children }: { children: React.ReactNode }) {
  const [isHovered, setIsHovered] = React.useState(false);

  const value = React.useMemo(() => ({ isHovered, setIsHovered }), [isHovered]);
  return <CardContext.Provider value={value}>{children}</CardContext.Provider>;
}

function Card({
  className,
  variant = 'default',
  asChild = false,
  ...props
}: React.ComponentProps<'div'> &
  VariantProps<typeof cardVariants> & {
    asChild?: boolean;
  }) {
  const { setIsHovered } = useCardContext();
  const Comp = asChild ? Slot : 'div';

  const handleMouseEnter = () => {
    if (variant === 'console') {
      setIsHovered(true);
    }
  };
  const handleMouseLeave = () => {
    if (variant === 'console') {
      setIsHovered(false);
    }
  };

  return (
    <Comp
      data-slot="card"
      className={cn(cardVariants({ variant, className }))}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    />
  );
}

function CardHeader({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        '@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6',
        className
      )}
      {...props}
    />
  );
}

function CardTitle({ className, ...props }: React.ComponentProps<'div'>) {
  return <div data-slot="card-title" className={cn('leading-none font-semibold', className)} {...props} />;
}

function CardDescription({ className, ...props }: React.ComponentProps<'div'>) {
  return <div data-slot="card-description" className={cn(' text-sm', className)} {...props} />;
}

function CardAction({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-action"
      className={cn('col-start-2 row-span-2 row-start-1 self-start justify-self-end', className)}
      {...props}
    />
  );
}

function CardContent({ className, ...props }: React.ComponentProps<'div'>) {
  return <div data-slot="card-content" className={cn('min-h-24', className)} {...props} />;
}

function CardFooter({ className, ...props }: React.ComponentProps<'div'>) {
  return <div data-slot="card-footer" className={cn('flex items-center [.border-t]:pt-6', className)} {...props} />;
}

function ConsoleButton({ className, ...props }: ButtonProps) {
  const { isHovered } = useCardContext();
  return (
    <Button
      className={cn(
        'bg-transparent border border-gray-60 text-gray-10 hover:bg-gray-0 hover:border-gray-0 hover:text-gray-100',
        isHovered ? 'bg-gray-0 border-gray-0 text-gray-100' : '',
        className
      )}
      {...props}
    />
  );
}

export {
  Card,
  CardAction,
  CardContent,
  CardContext,
  CardDescription,
  CardFooter,
  CardHeader,
  CardProvider,
  CardTitle,
  ConsoleButton,
  useCardContext,
};
