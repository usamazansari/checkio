import { my, best, creative } from './split-pairs.puzzle';

const Tests = [
  { text: 'abcd', expected: ['ab', 'cd'] },
  { text: 'abc', expected: ['ab', 'c_'] },
  { text: 'abcdf', expected: ['ab', 'cd', 'f_'] },
  { text: 'a', expected: ['a_'] },
  { text: '', expected: [] },
  { text: 'hhh', expected: ['hh', 'h_'] },
  { text: 'hhh1', expected: ['hh', 'h1'] }
];

describe('Split Pairs using', () => {
  describe('My Solution', () => {
    Tests.forEach(test => {
      it(`should return the correct product for ${test.text}`, () => {
        expect(my(test.text)).toEqual(test.expected);
      });
    });
  });

  describe('Best solution', () => {
    Tests.forEach(test => {
      it(`should return the correct product for ${test.text}`, () => {
        expect(best(test.text)).toEqual(test.expected);
      });
    });
  });

  describe('Creative solution', () => {
    Tests.forEach(test => {
      it(`should return the correct product for ${test.text}`, () => {
        expect(creative(test.text)).toEqual(test.expected);
      });
    });
  });
});
