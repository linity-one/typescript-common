import { ButtonHTMLAttributes, FC, forwardRef } from "react";
import { cva, VariantProps } from "cva";
import { cn } from "@/common/lib/cn";
import LoadingAnimation from "./LoadingAnimation";
import { toast } from "react-toastify";
import loading = toast.loading;

export const ButtonVariants = cva(
  "font-button font-semi-bold flex flex-row items-center justify-center transition-colors duration-300",
  {
    variants: {
      variant: {
        primary: "",
        secondary: "",
        tertiary: "",
      },
      size: {
        sm: "px-md py-xxs text-subtext  rounded-sm gap-1",
        md: "px-2 py-xs text-text rounded-md gap-1.5",
        lg: "px-5 py-1.5 text-h3 rounded-md gap-2",
      },
      theme: {
        dark: "",
        light: "",
      },
    },
    compoundVariants: [
      {
        variant: "primary",
        theme: "dark",
        className: "bg-primary-950 hover:bg-primary-800 text-accent-primary",
      },
      {
        variant: "primary",
        theme: "light",
        className:
          "bg-accent-primary hover:bg-accent-primary-hover text-gunmetal",
      },
      {
        variant: "secondary",
        theme: "dark",
        className:
          "border border-primary-950 text-primary-950 hover:bg-primary-950 hover:text-primary-100",
      },
      {
        variant: "secondary",
        theme: "light",
        className:
          "border border-primary-100 text-primary-100 hover:bg-primary-100 hover:text-primary-950",
      },
      {
        variant: "tertiary",
        theme: "dark",
        className:
          "bg-primary-100 hover:bg-primary-200 text-primary-600 hover:text-primary-950",
      },
      {
        variant: "tertiary",
        theme: "light",
        className:
          "bg-primary-700 hover:bg-primary-600 text-primary-200 hover:text-primary-100",
      },
    ],
    defaultVariants: {
      variant: "primary",
      size: "md",
      theme: "dark",
    },
  },
);

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof ButtonVariants> {
  loading?: boolean;
}

const Button: FC<ButtonProps> = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ loading, children, className, variant, theme, size, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(ButtonVariants({ variant, size, theme }), className)}
        {...props}
      >
        <LoadingAnimation
          className={loading ? "absolute" : "hidden"}
          size={size == "sm" ? "small" : size == "md" ? "default" : "large"}
        />
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";

export default Button;
