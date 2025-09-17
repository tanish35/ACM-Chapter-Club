import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Combine multiple `clsx`-style class values into a single, Tailwind-merged class string.
 *
 * Accepts any number of `ClassValue` arguments (strings, arrays, objects, etc.), normalizes them with `clsx`, then resolves and deduplicates Tailwind utility conflicts with `twMerge`.
 *
 * @param inputs - One or more `ClassValue` entries to be combined
 * @returns A single class string with Tailwind classes merged and conflicting utilities deduplicated
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
