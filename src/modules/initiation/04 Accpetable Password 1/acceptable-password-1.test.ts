import { my, best, creative } from './acceptable-password-1.puzzle';

const Tests = [
  { password: 'short', expected: false },
  { password: 'muchlonger', expected: true },
  { password: 'ashort', expected: false }
];

describe('Acceptable Password I using', () => {
  describe('My Solution', () => {
    Tests.forEach(test => {
      it(`should return the correct product for ${test.password}`, () => {
        expect(my(test.password)).toBe(test.expected);
      });
    });
  });

  describe('Best solution', () => {
    Tests.forEach(test => {
      it(`should return the correct product for ${test.password}`, () => {
        expect(best(test.password)).toBe(test.expected);
      });
    });
  });

  describe('Creative solution', () => {
    Tests.forEach(test => {
      it(`should return the correct product for ${test.password}`, () => {
        expect(creative(test.password)).toBe(test.expected);
      });
    });
  });
});
