import { FC, forwardRef, HTMLAttributes } from 'react';
import { cva, VariantProps } from 'cva';

const InputSubtextVariants = cva(
  'block order-5 text-subtext text-primary-600 peer-focus:text-primary-950',
  {
    variants: {
      variant: {
        standard: 'peer-invalid:hidden peer-disabled:hidden',
        error: 'hidden peer-invalid:inline-block',
      },
      theme: {
        light: '',
        dark: '',
      },
    },
    compoundVariants: [],
    defaultVariants: {
      variant: 'standard',
    },
  },
);

interface InputSubtextProps
  extends HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof InputSubtextVariants> {}

const InputSubtext: FC<InputSubtextProps> = forwardRef<
  HTMLSpanElement,
  InputSubtextProps
>(({ variant, className, children, ...props }, ref) => {
  return (
    <span
      className={InputSubtextVariants({ variant, className })}
      ref={ref}
      {...props}
    >
      {children}
    </span>
  );
});

InputSubtext.displayName = 'InputSubtext';

export default InputSubtext;
