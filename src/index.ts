// src/index.ts

/**
 * Capitalizes the first letter of a string.
 */
export function capitalize(str: string): string {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Reverses a given string.
 */
export function reverseString(str: string): string {
  return str.split('').reverse().join('');
}