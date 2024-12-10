import React from 'react';
import { cn } from '../../utils/cn';

interface ButtonProps {
  value: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary' | 'operator';
  className?: string;
}

export function Button({ value, onClick, variant = 'primary', className }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'h-16 rounded-2xl text-2xl font-semibold transition-all duration-200 active:scale-95',
        'hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-violet-400',
        {
          'bg-violet-500 text-white shadow-lg shadow-violet-200': variant === 'primary',
          'bg-gray-200 text-gray-800': variant === 'secondary',
          'bg-amber-500 text-white shadow-lg shadow-amber-200': variant === 'operator',
        },
        className
      )}
    >
      {value}
    </button>
  );
}