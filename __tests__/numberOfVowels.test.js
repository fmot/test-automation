// __tests__/numberOfVowels.test.js
import { numberOfVowels } from '../src/numberOfVowels';

describe('numberOfVowels', () => {
  test('counts vowels correctly in simple strings', () => {
    expect(numberOfVowels('apple')).toBe(2);
    expect(numberOfVowels('banana')).toBe(3);
    expect(numberOfVowels('hello')).toBe(2);
  });

  test('handles strings with no vowels', () => {
    expect(numberOfVowels('rythmn')).toBe(0);
    expect(numberOfVowels('try')).toBe(0);
    expect(numberOfVowels('xyz')).toBe(0);
  });

  test('handles empty strings', () => {
    expect(numberOfVowels('')).toBe(0);
  });

  test('only counts  lowercase vowels', () => {
    expect(numberOfVowels('ApPlE')).toBe(0);
    expect(numberOfVowels('HELLO')).toBe(0);
  });

  test('handles strings with special characters', () => {
    expect(numberOfVowels('hello!')).toBe(2);
    expect(numberOfVowels('a,e,i,o,u')).toBe(5);
  });
});
