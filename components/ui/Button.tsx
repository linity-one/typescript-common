import { ButtonHTMLAttributes, FC, forwardRef } from 'react';
import { cva, VariantProps } from 'cva';
import { cn } from '@/common/lib/cn';

const ButtonVariants = cva(
  'font-bold font-button rounded-md flex flex-row items-center gap-1 ',
  {
    variants: {
      variant: {
        primary: 'bg-cloud hover:bg-storm text-gunmetal',
        secondary: 'bg-gunmetal',
        lime: 'bg-cloud hover:bg-storm text-gunmetal',
        gunmetal: '',
        nav: 'bg-gunmetal',
        ghost: '',
      },
      size: {
        sm: '',
        md: 'px-4 py-1',
        lg: '',
      },
    },
    compoundVariants: [],
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
);

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof ButtonVariants> {}

const Button: FC<ButtonProps> = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, variant, size, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(ButtonVariants({ variant, size }), className)}
        {...props}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';

export default Button;
