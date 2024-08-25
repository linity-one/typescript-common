import { FC, forwardRef, HTMLAttributes } from "react";
import { cva, VariantProps } from "cva";

const InputWrapperVariants = cva("flex", {
  variants: {
    variant: {
      vertical: "flex-col gap-0.5 min-h-14",
      horizontal: "flex-row gap-1",
    },
  },
  compoundVariants: [],
  defaultVariants: {
    variant: "vertical",
  },
});

interface InputWrapperProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof InputWrapperVariants> {}

const InputWrapper: FC<InputWrapperProps> = forwardRef<
  HTMLDivElement,
  InputWrapperProps
>(({ className, variant, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={InputWrapperVariants({ variant, className })}
      {...props}
    >
      {children}
    </div>
  );
});

InputWrapper.displayName = "InputWrapper";

export default InputWrapper;
