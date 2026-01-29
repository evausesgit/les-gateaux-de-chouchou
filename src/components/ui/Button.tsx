import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'red' | 'blue' | 'yellow' | 'white' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'red', size = 'md', children, ...props }, ref) => {
    const baseStyles =
      'comic-btn inline-flex items-center justify-center font-sans uppercase tracking-wider disabled:opacity-50 disabled:cursor-not-allowed';

    const variants = {
      red: 'comic-btn-red',
      blue: 'comic-btn-blue',
      yellow: 'comic-btn-yellow',
      white: 'comic-btn-white',
      outline:
        'bg-transparent text-noir border-4 border-noir shadow-[6px_6px_0_0_#000] hover:bg-jaune hover:translate-x-[-3px] hover:translate-y-[-3px] hover:shadow-[9px_9px_0_0_#000] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none',
      ghost:
        'border-transparent shadow-none text-noir hover:bg-jaune hover:border-4 hover:border-noir hover:shadow-[4px_4px_0_0_#000]',
    };

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
