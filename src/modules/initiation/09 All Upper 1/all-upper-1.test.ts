import { my } from './all-upper-1.puzzle';

const Tests = [
  { text: 'ALL UPPER', expected: true },
  { text: 'all lower', expected: false },
  { text: 'mixed UPPER and lower', expected: false },
  { text: '', expected: true }
];

describe('All Upper I using', () => {
  describe('My Solution', () => {
    Tests.forEach(test => {
      it(`should return the correct product for ${test.text}`, () => {
        expect(my(test.text)).toBe(test.expected);
      });
    });
  });

  // describe('Best solution', () => {
  //   Tests.forEach(test => {
  //     it(`should return the correct product for ${test.text}`, () => {
  //       expect(best(test.text)).toBe(test.expected);
  //     });
  //   });
  // });

  // describe('Creative solution', () => {
  //   Tests.forEach(test => {
  //     it(`should return the correct product for ${test.text}`, () => {
  //       expect(creative(test.text)).toBe(test.expected);
  //     });
  //   });
  // });
});
