import React from "react";
import { cva, VariantProps } from "cva";

export const svgVariants = cva(
  "transition-all ease duration-300", // Base classes for transition
  {
    variants: {
      size: {
        small: "w-2 h-2 stroke-1",
        default: "w-3 h-3 stroke-2",
        large: "w-5 h-5 stroke-3",
      },
      animations: {
        none: "",
      },
    },
    defaultVariants: {
      size: "default",
      animations: "none",
    },
  },
);

export type SvgVariantsProps = VariantProps<typeof svgVariants>;

export interface ExpandedSvgProps
  extends React.SVGProps<SVGSVGElement>,
    SvgVariantsProps {}

const SVGWrapper: React.FC<ExpandedSvgProps> = ({
  size,
  animations,
  className,
  children,
  ...props
}) => {
  return (
    <svg
      className={svgVariants({ size, animations, className })}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {React.Children.map(children, (child) => child)}
    </svg>
  );
};

export default SVGWrapper;
