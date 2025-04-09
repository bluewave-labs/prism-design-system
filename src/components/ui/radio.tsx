import { cn } from '../../lib/utils';
import { RadioProps } from '../../types';

export const Radio = ({ className, ...props }: Omit<RadioProps, 'label'>) => {
  return (
    <input
      type="radio"
      className={cn(
        'w-5 h-5 relative appearance-none rounded-full',
        'after:rounded-full after:w-5 after:h-5 after:absolute after:top-0 after:left-0 after:border-2 after:border-gray-60 after:cursor-pointer',
        'checked:after:border-blue-30',
        'before:w-2.5 before:h-2.5 before:absolute before:top-1/2 before:left-1/2 before:transform before:-translate-x-1/2 before:-translate-y-1/2 before:z-10 before:rounded-full',
        'checked:before:bg-blue-200',
        className
      )}
      checked={props.checked}
      {...props}
    />
  );
};

export default Radio;
