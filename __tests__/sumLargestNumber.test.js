// __tests__/sumLargestNumber.test.js
import { sumLargestNumbers } from '../src/sumLargestNumber';

describe('sumLargestNumbers', () => {
  test('returns sum of two largest numbers in array', () => {
    expect(sumLargestNumbers([1, 10])).toBe(11);
    expect(sumLargestNumbers([1, 2, 3])).toBe(5);
    expect(sumLargestNumbers([10, 4, 34, 6, 92, 2])).toBe(126);
  });

  test('works with negative numbers', () => {
    expect(sumLargestNumbers([-1, -5, -3])).toBe(-4);
    expect(sumLargestNumbers([5, -10, 3])).toBe(8);
  });

  test('handles arrays with duplicate values', () => {
    expect(sumLargestNumbers([5, 5, 3])).toBe(10);
    expect(sumLargestNumbers([10, 10, 10])).toBe(20);
  });

  test('returns NaN for empty arrays', () => {
    expect(isNaN(sumLargestNumbers([]))).toBe(true);
  });

  test('handles undefined input', () => {
    expect(isNaN(sumLargestNumbers())).toBe(true);
  });
});
