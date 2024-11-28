import type { ClassValue } from "clsx";
//needs configuration on the custom file
import { extendTailwindMerge, twMerge } from "tailwind-merge";
import { clsx } from "clsx";

const customTwMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [
        "text-text",
        "text-subtext",
        "text-h1",
        "text-h2",
        "text-h3",
      ],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return customTwMerge(clsx(inputs));
}
