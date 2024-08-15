import type { ClassValue } from "clsx";
//needs configuration on the custom file
//import { twMerge } from 'tailwind-merge';
import { clsx } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}
