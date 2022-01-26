import { my, best, creative } from './max-digit.puzzle';

const Tests = [
  { value: 0, expected: 0 },
  { value: 52, expected: 5 },
  { value: 634, expected: 6 },
  { value: 1, expected: 1 },
  { value: 10000, expected: 1 }
];

describe('Max Digit using', () => {
  describe('My Solution', () => {
    Tests.forEach(test => {
      it(`should return the correct product for ${test.value}`, () => {
        expect(my(test.value)).toBe(test.expected);
      });
    });
  });

  describe('Best solution', () => {
    Tests.forEach(test => {
      it(`should return the correct product for ${test.value}`, () => {
        expect(best(test.value)).toBe(test.expected);
      });
    });
  });

  describe('Creative solution', () => {
    Tests.forEach(test => {
      it(`should return the correct product for ${test.value}`, () => {
        expect(creative(test.value)).toBe(test.expected);
      });
    });
  });
});
