// test/index.test.ts
import { expect, test, describe } from 'vitest';
import { capitalize, reverseString, slugify, truncate, isValidEmail, getInitials, maskText, cleanSpaces, titleCase} from '../src/index.js';

describe('String Tools', () => {
  test('capitalize works correctly', () => {
    expect(capitalize('hello')).toBe('Hello');
    expect(capitalize('')).toBe('');
  });

  test('reverseString works correctly', () => {
    expect(reverseString('hello')).toBe('olleh');
    expect(reverseString('npm')).toBe('mpn');
  });

  test('slugify converts strings to URL-friendly formats', () => {
    expect(slugify('Learn Node JS Layout!')).toBe('learn-node-js-layout');
    expect(slugify('  Hello---World  ')).toBe('hello-world'); // spaces aur extra hyphens handle karna
  });

  test('truncate cuts long strings and adds ellipses', () => {
    expect(truncate('This is a very long text', 10)).toBe('This is a...');
    expect(truncate('Short text', 20)).toBe('Short text'); // agar limit se chota hai toh cut nahi hona chahiye
  });

  test('isValidEmail validates formats correctly', () => {
    expect(isValidEmail('test@example.com')).toBe(true);
    expect(isValidEmail('invalid-email.com')).toBe(false);
    expect(isValidEmail('abc@def.')).toBe(false);
  });


  test('getInitials extracts first letters correctly', () => {
    expect(getInitials('Prabhat Kumar')).toBe('PK');
    expect(getInitials('john doe smith')).toBe('JS');
    expect(getInitials('Alice')).toBe('AL'); // Single word fallback
  });

  test('maskText hides sensitive information', () => {
    expect(maskText('9876543210')).toBe('******3210');
    expect(maskText('1234567812345678', 4, 'X')).toBe('XXXXXXXXXXXX5678');
  });

  test('cleanSpaces removes weird formatting', () => {
    expect(cleanSpaces('  Prabhat    Kumar  \n Developer ')).toBe('Prabhat Kumar Developer');
  });

  test('titleCase formats text properly', () => {
    expect(titleCase('hElLo wOrLd')).toBe('Hello World');
    expect(titleCase('PRABHAT KUMAR')).toBe('Prabhat Kumar');
  });
  
});