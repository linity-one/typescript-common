import { FC, forwardRef, HTMLAttributes } from "react";
import { cva, VariantProps } from "cva";
import { Field } from "@headlessui/react";

export const InputWrapperVariants = cva("flex", {
  variants: {
    variant: {
      vertical: "flex-col gap-0.5 min-h-14",
      horizontal: "flex-row gap-1 items-center",
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

const InputWrapper: FC<InputWrapperProps> = ({
  className,
  variant,
  children,
  ...props
}) => {
  return (
    <Field className={InputWrapperVariants({ variant, className })} {...props}>
      {children}
    </Field>
  );
};

InputWrapper.displayName = "InputWrapper";

export default InputWrapper;
