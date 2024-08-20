import { ButtonHTMLAttributes, FC, forwardRef } from 'react';
import { cva, VariantProps } from 'cva';
import { cn } from '@/common/lib/cn';

export const ButtonVariants = cva(
  'font-button text-text flex flex-row items-center gap-1 transition-colors duration-300',
  {
    variants: {
      variant: {
        primary: '',
        secondary: '',
      },
      size: {
        sm: 'text-subtext px-md py-xxs rounded-sm',
        md: 'px-2 py-xs text-text rounded-md',
      },
      theme: {
        dark: '',
        light: '',
      },
    },
    compoundVariants: [
      {
        variant: 'primary',
        theme: 'dark',
        className: 'bg-gunmetal hover:bg-gunmetal-800 text-lime',
      },
      {
        variant: 'primary',
        theme: 'light',
        className: 'bg-lime hover:bg-lime-hover text-gunmetal',
      },
      {
        variant: 'secondary',
        theme: 'dark',
        className:
          'border border-gunmetal text-gunmetal hover:bg-gunmetal hover:text-cloud',
      },
      {
        variant: 'secondary',
        theme: 'light',
        className:
          'bg-gunmetal border border-cloud text-cloud hover:bg-cloud hover:text-gunmetal',
      },
    ],
    defaultVariants: {
      variant: 'primary',
      size: 'md',
      theme: 'dark',
    },
  },
);

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof ButtonVariants> {}

const Button: FC<ButtonProps> = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, variant, theme, size, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(ButtonVariants({ variant, size, theme }), className)}
        {...props}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';

export default Button;
