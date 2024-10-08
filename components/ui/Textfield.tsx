import {
  FC,
  forwardRef,
  InputHTMLAttributes,
  TextareaHTMLAttributes,
} from "react";
import { cva, VariantProps } from "cva";
import { cn } from "../../lib/cn";

const InputVariants = cva(
  "peer order-2  h-20 rounded-md border-primary-400 py-1 px-2 text-text text-primary-950 placeholder:text-primary-600 " +
    "focus:outline-none focus:border-primary-400 focus:ring-1 focus:ring-offset-0 focus:ring-primary-600 " +
    "invalid:outline-none invalid:ring-offset-0 invalid:ring-alert invalid:border-alert invalid:ring-0 " +
    "invalid:focus:outline-none invalid:focus:ring-offset-0 invalid:focus:ring-alert invalid:focus:border-alert invalid:focus:ring-1 " +
    "disabled:bg-primary-200 text-primary-600",
  {
    variants: {
      variant: {
        primary: "",
      },
    },
    compoundVariants: [],
    defaultVariants: {
      variant: "primary",
    },
  },
);

interface InputProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof InputVariants> {}

const Input: FC<InputProps> = forwardRef<HTMLTextAreaElement, InputProps>(
  ({ variant, className, children, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={cn(InputVariants({ variant, className }))}
        {...props}
      >
        {children}
      </textarea>
    );
  },
);

Input.displayName = "Input";

export default Input;
