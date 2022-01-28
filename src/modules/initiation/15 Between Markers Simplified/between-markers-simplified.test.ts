import { my, best, creative } from './between-markers-simplified.puzzle';

const Tests = [
  { line: 'What is >apple<', left: '>', right: '<', expected: 'apple' },
  { line: 'What is [apple]', left: '[', right: ']', expected: 'apple' },
  { line: 'What is ><', left: '>', right: '<', expected: '' },
  { line: '[an apple]', left: '[', right: ']', expected: 'an apple' },
  { line: '>Apple< is simple', left: '>', right: '<', expected: 'Apple' }
];

describe('Between Markers Simplified using', () => {
  describe('My Solution', () => {
    Tests.forEach(test => {
      it(`should return '${test.expected}' for searching between '${test.left}' and '${test.right}' in '${test.line}'`, () => {
        expect(my(test.line, test.left, test.right)).toBe(test.expected);
      });
    });
  });

  describe('Best solution', () => {
    Tests.forEach(test => {
      it(`should return '${test.expected}' for searching between '${test.left}' and '${test.right}' in '${test.line}'`, () => {
        expect(best(test.line, test.left, test.right)).toBe(test.expected);
      });
    });
  });

  describe('Creative solution', () => {
    Tests.forEach(test => {
      it(`should return '${test.expected}' for searching between '${test.left}' and '${test.right}' in '${test.line}'`, () => {
        expect(creative(test.line, test.left, test.right)).toBe(test.expected);
      });
    });
  });
});
