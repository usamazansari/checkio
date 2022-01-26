import { my, best, creative } from './multiply-intro.puzzle';

const Tests = [
  { a: 0, b: 1, expected: 0 },
  { a: 6, b: 3, expected: 18 },
  { a: 6, b: 7, expected: 42 }
];

describe('Multiply Intro using', () => {
  describe('My Solution', () => {
    Tests.forEach(test => {
      it(`should return the correct result for ${test.a} * ${test.b}`, () => {
        expect(my(test.a, test.b)).toBe(test.expected);
      });
    });
  });

  describe('Best solution', () => {
    Tests.forEach(test => {
      it(`should return the correct result for ${test.a} * ${test.b}`, () => {
        expect(best(test.a, test.b)).toBe(test.expected);
      });
    });
  });

  describe('Creative solution', () => {
    Tests.forEach(test => {
      it(`should return the correct result for ${test.a} * ${test.b}`, () => {
        expect(creative(test.a, test.b)).toBe(test.expected);
      });
    });
  });
});
