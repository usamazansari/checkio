import { my } from './backward-each-word.puzzle';

const Tests = [
  { text: '', expected: '' },
  { text: 'world', expected: 'dlrow' },
  { text: 'hello world', expected: 'olleh dlrow' },
  { text: 'hello   world', expected: 'olleh   dlrow' },
  { text: 'welcome to a game', expected: 'emoclew ot a emag' },
  { text: 'ha ha ha   this is cool', expected: 'ah ah ah   siht si looc' }
];

describe('Backward Each Word using', () => {
  describe('My Solution', () => {
    Tests.forEach(test => {
      it(`should return '${test.expected}' for '${test.text}'`, () => {
        expect(my(test.text)).toBe(test.expected);
      });
    });
  });

  // describe('Best solution', () => {
  //   Tests.forEach(test => {
  //     it(`should return '${test.expected}' for '${test.text}'`, () => {
  //       expect(best(test.text)).toBe(test.expected);
  //     });
  //   });
  // });

  // describe('Creative solution', () => {
  //   Tests.forEach(test => {
  //     it(`should return '${test.expected}' for '${test.text}'`, () => {
  //       expect(creative(test.text)).toBe(test.expected);
  //     });
  //   });
  // });
});
