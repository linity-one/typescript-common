import { FC, forwardRef, LabelHTMLAttributes } from "react";
import { cva, VariantProps } from "cva";
import { Label } from "@headlessui/react";

const labelVariants = cva("text-text order-1 transition-colors duration-300", {
  variants: {
    theme: {
      dark: "text-primary-600 peer-focus:text-primary-950",
      light: "text-primary-200 peer-focus:text-primary-100",
    },
  },
  compoundVariants: [],
  defaultVariants: {
    theme: "dark",
  },
});

interface labelProps
  extends LabelHTMLAttributes<HTMLLabelElement>,
    VariantProps<typeof labelVariants> {}

const label: FC<labelProps> = forwardRef<HTMLLabelElement, labelProps>(
  ({ className, children, theme, ...props }, ref) => {
    return (
      <Label
        ref={ref}
        className={labelVariants({ theme, className })}
        {...props}
      >
        {children}
      </Label>
    );
  },
);

label.displayName = "label";

export default label;
