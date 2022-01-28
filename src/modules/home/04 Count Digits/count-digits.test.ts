import { my, best, creative } from './count-digits.puzzle';

const Tests = [
  { text: 'hi', expected: 0 },
  { text: 'who is 1st here', expected: 1 },
  { text: 'my numbers is 2', expected: 1 },
  {
    text: 'This picture is an oil on canvas '
      + 'painting by Danish artist Anna '
      + 'Petersen between 1845 and 1910 year',
    expected: 8
  },
  { text: '5 plus 6 is', expected: 2 },
  { text: '', expected: 0 },
  { text: 'It is the natural number following 4 and preceding 6  and is a prime number', expected: 2 }
];

describe('Count Digits using', () => {
  describe('My Solution', () => {
    Tests.forEach(test => {
      it(`should return '${test.expected}' for '${test.text}'`, () => {
        expect(my(test.text)).toBe(test.expected);
      });
    });
  });

  describe('Best solution', () => {
    Tests.forEach(test => {
      it(`should return '${test.expected}' for '${test.text}'`, () => {
        expect(best(test.text)).toBe(test.expected);
      });
    });
  });

  describe('Creative solution', () => {
    Tests.forEach(test => {
      it(`should return '${test.expected}' for '${test.text}'`, () => {
        expect(creative(test.text)).toBe(test.expected);
      });
    });
  });
});
