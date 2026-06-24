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


// URL Slugify
export function slugify(str: string): string {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/[\s_-]+/g, '-') // Replace spaces with hyphen
    .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
}

// Text Truncate
export function truncate(str: string, maxLength: number): string {
  if (str.length <= maxLength) return str;
  return str.slice(0, maxLength).trim() + '...';
}

// Email Validation
export function isValidEmail(str: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(str);
}

/**
 * Extracts initials from a full name (e.g., "Prabhat Kumar" -> "PK")
 */
export function getInitials(name: string): string {
  if (!name || name.trim() === '') return '';
  const words = name.trim().split(/\s+/);
  if (words.length === 1) return words[0].substring(0, 2).toUpperCase();
  return (words[0][0] + words[words.length - 1][0]).toUpperCase();
}

/**
 * Masks a string leaving only the last few characters visible.
 * Useful for credit cards or phone numbers.
 */
export function maskText(str: string, visibleCount: number = 4, maskChar: string = '*'): string {
  if (!str || str.length <= visibleCount) return str;
  const hiddenPart = maskChar.repeat(str.length - visibleCount);
  const visiblePart = str.slice(-visibleCount);
  return hiddenPart + visiblePart;
}

/**
 * Removes all extra spaces, tabs, and newlines, leaving only single spaces.
 */
export function cleanSpaces(str: string): string {
  return str.replace(/\s+/g, ' ').trim();
}


/**
 * Converts a string to Title Case (e.g., "hello WORLD" -> "Hello World")
 */
export function titleCase(str: string): string {
  return str
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}