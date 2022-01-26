import { my, best, creative } from './first-word-simplified.puzzle';

const Tests = [
  { text: 'Hello world', expected: 'Hello' },
  { text: 'a word', expected: 'a' },
  { text: 'hi', expected: 'hi' },
  { text: 'Holy Edison', expected: 'Holy' }
];

describe('First Word Simplified using', () => {
  describe('My Solution', () => {
    Tests.forEach(test => {
      it(`should return the correct result for ${test.text}`, () => {
        expect(my(test.text)).toBe(test.expected);
      });
    });
  });

  describe('Best solution', () => {
    Tests.forEach(test => {
      it(`should return the correct result for ${test.text}`, () => {
        expect(best(test.text)).toBe(test.expected);
      });
    });
  });

  describe('Creative solution', () => {
    Tests.forEach(test => {
      it(`should return the correct result for ${test.text}`, () => {
        expect(creative(test.text)).toBe(test.expected);
      });
    });
  });
});
