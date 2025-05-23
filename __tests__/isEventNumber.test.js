import { isEvenNumber, conditionalSum } from '../src/isEvenNumber';

describe('isEvenNumber', () => {
  test('returns true for even numbers', () => {
    expect(isEvenNumber(2)).toBe(true);
    expect(isEvenNumber(4)).toBe(true);
    expect(isEvenNumber(100)).toBe(true);
    expect(isEvenNumber(0)).toBe(true);
  });

  test('returns false for odd numbers', () => {
    expect(isEvenNumber(1)).toBe(false);
    expect(isEvenNumber(3)).toBe(false);
    expect(isEvenNumber(99)).toBe(false);
    expect(isEvenNumber(-1)).toBe(false);
  });
});

describe('conditionalSum', () => {
  test('sums even numbers when condition is "even"', () => {
    expect(conditionalSum([1, 2, 3, 4, 5], 'even')).toBe(6);
    expect(conditionalSum([13, 88, 12, 44, 99], 'even')).toBe(144);
  });

  test('sums odd numbers when condition is "odd"', () => {
    expect(conditionalSum([1, 2, 3, 4, 5], 'odd')).toBe(9);
    expect(conditionalSum([13, 88, 12, 44, 99], 'odd')).toBe(112);
  });

  test('returns 0 for empty array', () => {
    expect(conditionalSum([], 'even')).toBe(0);
    expect(conditionalSum([], 'odd')).toBe(0);
  });

  test('handles undefined inputs correctly', () => {
    expect(conditionalSum()).toBe(0);
    expect(conditionalSum(undefined, 'even')).toBe(0);
  });
});
