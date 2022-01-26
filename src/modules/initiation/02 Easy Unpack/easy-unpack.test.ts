import { my, best, creative } from './easy-unpack.puzzle';

const Tests = [
  { values: [1, 2, 3, 4, 5, 6, 7, 9], expected: [1, 3, 7] },
  { values: [1, 1, 1, 1], expected: [1, 1, 1] },
  { values: [6, 3, 7], expected: [6, 7, 3] }
];

describe('Easy Unpack using', () => {
  describe('My Solution', () => {
    Tests.forEach(test => {
      it(`should return the correct product for ${test.values}`, () => {
        expect(my(test.values)).toEqual(test.expected);
      });
    });
  });

  describe('Best solution', () => {
    Tests.forEach(test => {
      it(`should return the correct product for ${test.values}`, () => {
        expect(best(test.values)).toEqual(test.expected);
      });
    });
  });

  describe('Creative solution', () => {
    Tests.forEach(test => {
      it(`should return the correct product for ${test.values}`, () => {
        expect(creative(test.values)).toEqual(test.expected);
      });
    });
  });
});