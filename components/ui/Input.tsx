import { FC, forwardRef, InputHTMLAttributes } from "react";
import { cva, VariantProps } from "cva";
import { cn } from "../../lib/cn";

const InputVariants = cva("", {
  variants: {
    variant: {
      primary: "",
      secondary: "",
    },
  },
  compoundVariants: [],
  defaultVariants: {
    variant: "primary",
  },
});

interface InputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof InputVariants> {}

const Input: FC<InputProps> = forwardRef<HTMLInputElement, InputProps>(
  ({ variant, className, children, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(InputVariants({ variant }), className)}
        {...props}
      >
        {children}
      </input>
    );
  },
);

Input.displayName = "Input";

export default Input;
