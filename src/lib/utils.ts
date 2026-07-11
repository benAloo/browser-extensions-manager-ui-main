import type { Extension } from "@/types/extension";
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function assignSequentialIds<T extends Extension>(data: T[]): T[] {
  return data.map((item, index) => ({
    ...item,
    id: index + 1,
  }));
}
