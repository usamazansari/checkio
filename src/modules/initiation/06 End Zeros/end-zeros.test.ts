import { my, best, creative } from './end-zeros.puzzle';

const Tests = [
  { value: 0, expected: 1 },
  { value: 1, expected: 0 },
  { value: 10, expected: 1 },
  { value: 101, expected: 0 },
  { value: 245, expected: 0 },
  { value: 100100, expected: 2 },
  { value: 3456, expected: 0 },
  { value: 100234, expected: 0 }
];

describe('End Zeros using', () => {
  describe('My Solution', () => {
    Tests.forEach(test => {
      it(`should return '${test.expected}' for '${test.value}'`, () => {
        expect(my(test.value)).toBe(test.expected);
      });
    });
  });

  describe('Best solution', () => {
    Tests.forEach(test => {
      it(`should return '${test.expected}' for '${test.value}'`, () => {
        expect(best(test.value)).toBe(test.expected);
      });
    });
  });

  describe('Creative solution', () => {
    Tests.forEach(test => {
      it(`should return '${test.expected}' for '${test.value}'`, () => {
        expect(creative(test.value)).toBe(test.expected);
      });
    });
  });
});
