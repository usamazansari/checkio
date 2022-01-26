import { my, best, creative } from './number-length.puzzle';

const Tests = [
  { value: 1234567890, expected: 10 },
  { value: 0, expected: 1 },
  { value: 41234, expected: 5 },
  { value: -1, expected: 1 },
  { value: -1234567890, expected: 10 },
  { value: -123456789012390, expected: 15 }
];

describe('Number Length using', () => {
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