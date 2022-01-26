import { my, best, creative } from './number-length.puzzle';

const Tests = [
  { value: 10, expected: 2 },
  { value: 0, expected: 1 },
  { value: 4, expected: 1 },
  { value: 44, expected: 2 },
  { value: 1567, expected: 4 },
  { value: 100, expected: 3 },
  { value: -123456789012390, expected: 15 }
];

describe('Number Length using', () => {
  describe('My Solution', () => {
    Tests.forEach(test => {
      it(`should return the correct result for ${test.value}`, () => {
        expect(my(test.value)).toBe(test.expected);
      });
    });
  });

  describe('Best solution', () => {
    Tests.forEach(test => {
      it(`should return the correct result for ${test.value}`, () => {
        expect(best(test.value)).toBe(test.expected);
      });
    });
  });

  describe('Creative solution', () => {
    Tests.forEach(test => {
      it(`should return the correct result for ${test.value}`, () => {
        expect(creative(test.value)).toBe(test.expected);
      });
    });
  });
});
