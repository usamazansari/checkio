import { my, best, creative } from './backward-string.puzzle';

const Tests = [
  { value: 'val', expected: 'lav' },
  { value: '', expected: '' },
  { value: 'ohho', expected: 'ohho' },
  { value: '123456789', expected: '987654321' },
  { value: 'aa', expected: 'aa' },
  { value: '1,2,3,4', expected: '4,3,2,1' },
  { value: 'Welcome to CheckiO', expected: 'OikcehC ot emocleW' }
];

describe('Backward String using', () => {
  describe('My Solution', () => {
    Tests.forEach(test => {
      it(`should return '${test.expected}' for '${test.value}'`, () => {
        expect(my(test.value)).toBe(test.expected);
      });
    });
  });

  describe('Best solution', () => {
    Tests.forEach(test => {
      it(`should return '${test.expected}' for '${test.value}'`, () => {
        expect(best(test.value)).toBe(test.expected);
      });
    });
  });

  describe('Creative solution', () => {
    Tests.forEach(test => {
      it(`should return '${test.expected}' for '${test.value}'`, () => {
        expect(creative(test.value)).toBe(test.expected);
      });
    });
  });
});
