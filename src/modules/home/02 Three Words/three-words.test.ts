import { my } from './three-words.puzzle';

const Tests = [
  { text: 'Hello World hello', expected: true },
  { text: 'He is 123 man', expected: false },
  { text: '1 2 3 4', expected: false },
  { text: 'bla bla bla bla', expected: true },
  { text: 'Hi', expected: false },
  { text: 'one two 3 four five 6 seven eight 9 ten eleven 12', expected: false },
  { text: 'one two 3 four 5 six 7 eight 9 ten eleven 12', expected: false },
  { text: 'one two 3 four five six 7 eight 9 ten eleven 12', expected: true },
  { text: '1231 321 3123 12312 3231 321 312 3123 1231', expected: false },
  { text: 'sda das das dsa adfs dfasd fas', expected: true },
  { text: '0 qwerty iddqd asdfg', expected: true },
  { text: '0 qwerty a asdfg 2', expected: true },
  { text: '0 qwerty 99999999999 asdfg 2', expected: false },
  { text: 'qwe fds 32 khh wwewe 123 uiu 8794', expected: false },
];

describe('Three Words using', () => {
  describe('My Solution', () => {
    Tests.forEach(test => {
      it(`should return the correct result for ${test.text}`, () => {
        expect(my(test.text)).toBe(test.expected);
      });
    });
  });

  // describe('Best solution', () => {
  //   Tests.forEach(test => {
  //     it(`should return the correct result for ${test.text}`, () => {
  //       expect(best(test.text)).toBe(test.expected);
  //     });
  //   });
  // });

  // describe('Creative solution', () => {
  //   Tests.forEach(test => {
  //     it(`should return the correct result for ${test.text}`, () => {
  //       expect(creative(test.text)).toBe(test.expected);
  //     });
  //   });
  // });
});
