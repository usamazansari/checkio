import { my, best, creative } from './first-word.puzzle';

const Tests = [
  { text: 'Hello world', expected: 'Hello' },
  { text: ' a word ', expected: 'a' },
  { text: 'don\'t touch it', expected: 'don\'t' },
  { text: 'greetings, friends', expected: 'greetings' },
  { text: '... and so on ...', expected: 'and' },
  { text: 'hi', expected: 'hi' },
  { text: 'Holy Edison', expected: 'Holy' },
  { text: 'Don\'t speak... I know just what you\'re saying', expected: 'Don\'t' },
  { text: 'Hello.World', expected: 'Hello' }
];

describe('Easy Unpack using', () => {
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
