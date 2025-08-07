import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateId(): string {
  return Math.random().toString(36).substr(2, 9);
}

export function formatQuery(query: string): string {
  return query.trim().replace(/\s+/g, " ");
}

export function validateQuery(query: string): {
  isValid: boolean;
  errors: string[];
} {
  const errors: string[] = [];
  const trimmedQuery = query.trim();

  if (!trimmedQuery) {
    errors.push("Query cannot be empty");
  }

  if (trimmedQuery.length > 2048) {
    errors.push("Query is too long (maximum 2048 characters)");
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
}
