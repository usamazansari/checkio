import { my, best, creative } from './remove-all-before.puzzle';

const Tests = [
  { values: [1, 2, 3, 4, 5], b: 3, expected: [3, 4, 5] },
  { values: [1, 1, 2, 2, 3, 3], b: 2, expected: [2, 2, 3, 3] },
  { values: [1, 1, 2, 4, 2, 3, 4], b: 2, expected: [2, 4, 2, 3, 4] },
  { values: [1, 1, 5, 6, 7], b: 2, expected: [1, 1, 5, 6, 7] },
  { values: [], b: 0, expected: [] },
  { values: [7, 7, 7, 7, 7, 7, 7, 7, 7], b: 7, expected: [7, 7, 7, 7, 7, 7, 7, 7, 7] }
];

describe('Remove All Before using', () => {
  describe('My Solution', () => {
    Tests.forEach(test => {
      it(`should return the correct product for ${test.values} bounded at ${test.b}`, () => {
        expect(my(test.values, test.b)).toEqual(test.expected);
      });
    });
  });

  describe('Best solution', () => {
    Tests.forEach(test => {
      it(`should return the correct product for ${test.values} bounded at ${test.b}`, () => {
        expect(best(test.values, test.b)).toEqual(test.expected);
      });
    });
  });

  describe('Creative solution', () => {
    Tests.forEach(test => {
      it(`should return the correct product for ${test.values} bounded at ${test.b}`, () => {
        expect(creative(test.values, test.b)).toEqual(test.expected);
      });
    });
  });
});
