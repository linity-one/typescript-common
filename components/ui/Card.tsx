import { FC, forwardRef, HTMLAttributes } from "react";
import { cva, VariantProps } from "cva";
import { cn } from "../../lib/cn";

const CardVariants = cva(
  "group/card p-6 bg-white shadow-400 rounded-xl flex gap-1",
  {
    variants: {
      variant: {
        static: "",
        hover_shadow_increase:
          "transition-shadow duration-300 hover:shadow-600",
        hover_liftoff:
          "transition-all duration-300 hover:shadow-800 hover:-translate-y-0.25 hover:scale-[1.005]",
      },
      flow: {
        vertical: "flex-col",
        horizontal: "flex-row",
      },
    },
    compoundVariants: [],
    defaultVariants: {
      variant: "static",
      flow: "vertical",
    },
  },
);

interface CardProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof CardVariants> {}

const Card: FC<CardProps> = forwardRef<HTMLDivElement, CardProps>(
  ({ variant, flow, className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn(CardVariants({ variant, flow }), className)}>
        {children}
      </div>
    );
  },
);

Card.displayName = "Card";

export default Card;
