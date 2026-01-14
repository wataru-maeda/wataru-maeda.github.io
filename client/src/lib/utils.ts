import { clsx, type ClassValue } from "clsx";

/**
 * Utility function for merging class names.
 * Note: With Chakra UI, prefer using Chakra's style props over className.
 */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}
