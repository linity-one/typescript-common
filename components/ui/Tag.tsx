import { FC, forwardRef, HTMLAttributes } from "react";
import { cva, VariantProps } from "cva";
import { XIcon } from "./Icons";
import { cn } from "../../lib/cn";

const TagVariants = cva(
  "flex flex-row py-1.5 gap-1 px-2.5 items-center w-fit rounded-xl group",
  {
    variants: {
      theme: {
        dark: "transition duration-300 bg-cloud text-primary-600 hover:bg-primary-200 hover:text-primary-950",
        light: "",
      },
    },
    compoundVariants: [],
    defaultVariants: {
      theme: "dark",
    },
  },
);

interface TagProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof TagVariants> {
  closeCallback?: () => void;
}

const Tag: FC<TagProps> = forwardRef<HTMLDivElement, TagProps>(
  ({ theme, className, children, closeCallback, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          TagVariants({ theme, className }),
          closeCallback ? "cursor-pointer" : "",
        )}
        onClick={() => (closeCallback ? closeCallback() : {})}
        {...props}
      >
        <span className="text-subtext">{children}</span>
        {closeCallback && (
          <XIcon
            size="default"
            className="duration-100 group-hover:scale-110"
          />
        )}
      </div>
    );
  },
);

Tag.displayName = "Tag";

export default Tag;
