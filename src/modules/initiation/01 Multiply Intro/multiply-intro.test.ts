import { my, best, creative } from './multiply-intro.puzzle';

const Tests = [
  { a: 2, b: 3, expected: 6 },
  { a: 1, b: 0, expected: 0 },
  { a: 3, b: 5, expected: 15 }
];

describe('Multiply Intro using', () => {
  describe('My Solution', () => {
    Tests.forEach(test => {
      it(`should return the correct product for ${test.a} * ${test.b}`, () => {
        expect(my(test.a, test.b)).toBe(test.expected);
      });
    });
  });

  describe('Best solution', () => {
    Tests.forEach(test => {
      it(`should return the correct product for ${test.a} * ${test.b}`, () => {
        expect(best(test.a, test.b)).toBe(test.expected);
      });
    });
  });

  describe('Creative solution', () => {
    Tests.forEach(test => {
      it(`should return the correct product for ${test.a} * ${test.b}`, () => {
        expect(creative(test.a, test.b)).toBe(test.expected);
      });
    });
  });
});
