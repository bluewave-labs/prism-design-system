'use client';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { cn } from '../../lib/utils';
import { SelectProps } from '../../types';

export const Select = ({ selected, options, onSelect, disabled = false }: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const [showAbove, setShowAbove] = useState(false);

  useEffect(() => {
    const handlePosition = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const spaceBelow = window.innerHeight - rect.bottom;
        const spaceAbove = rect.top;
        setShowAbove(spaceBelow < 200 && spaceAbove > spaceBelow);
      }
    };

    if (isOpen) {
      handlePosition();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div
      ref={ref}
      onClick={() => {
        if (disabled) {
          return;
        }
        setIsOpen(!isOpen);
      }}
      className={cn('relative w-[204px]', disabled ? 'opacity-50 pointer-events-none' : 'cursor-pointer')}
    >
      <p className="flex items-center justify-between border-[0.5px] bg-gray-40/12 border-gray-0/20 py-2.5 px-3.5 rounded-md cursor-pointer">
        {selected}
        {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </p>
      <div
        className={cn(
          'absolute border bg-gray-80 border-gray-0/20 flex-col z-20 text-gray-10 gap-0 w-full max-h-[200px] overflow-y-auto',
          isOpen ? 'flex' : 'hidden',
          showAbove ? 'bottom-full rounded-t-sm' : 'top-full rounded-b-sm'
        )}
      >
        {options.map((item, index) => (
          <button
            key={index}
            onClick={() => {
              onSelect(item);
              setIsOpen(false);
            }}
            className={cn(
              'py-2 px-3 text-sm w-full text-left hover:bg-gray-0/12 cursor-pointer',
              selected === item ? 'bg-gray-0/12' : ''
            )}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Select;
