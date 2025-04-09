import { cn } from '../../lib/utils';
import { RadioProps } from '../../types';
import Radio from '../ui/radio';

export const RadioBtn = ({ id, label, disabled, className, ...props }: RadioProps) => {
  return (
    <label
      htmlFor={id}
      className={cn(
        'flex items-start gap-2 grow text-sm text-gray-30',
        disabled ? 'opacity-50 pointer-events-none' : '',
        className
      )}
    >
      <Radio id={id} {...props} />
      <span className="w-[calc(100%-28px)]">{label}</span>
    </label>
  );
};

export default RadioBtn;
