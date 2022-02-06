import { Solutions } from './multiply-intro.puzzle';

const Tests = [
  { a: 0, b: 1, expected: 0 },
  { a: 6, b: 3, expected: 18 },
  { a: 6, b: 7, expected: 42 }
];

describe('Multiply Intro using', () => {
  Solutions.forEach(solution => {
    describe(`${solution.name} Solution`, () => {
      Tests.forEach(test => {
        it(`should return '${test.expected}' for '${test.a}' * '${test.b}'`, () => {
          expect(solution.fn(test.a, test.b)).toBe(test.expected);
        });
      });
    });
  });
});
