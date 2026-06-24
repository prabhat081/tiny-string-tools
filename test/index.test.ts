// test/index.test.ts
import { expect, test, describe } from 'vitest';
import { capitalize, reverseString } from '../src/index.js';

describe('String Tools', () => {
  test('capitalize works correctly', () => {
    expect(capitalize('hello')).toBe('Hello');
    expect(capitalize('')).toBe('');
  });

  test('reverseString works correctly', () => {
    expect(reverseString('hello')).toBe('olleh');
    expect(reverseString('npm')).toBe('mpn');
  });
});