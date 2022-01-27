import { my } from './is-even.puzzle';

const Tests = [
  { num: 2, expected: true },
  { num: 5, expected: false },
  { num: 0, expected: true },
  { num: 6, expected: true },
  { num: 17, expected: false }
];

describe('Is Even using', () => {
  describe('My Solution', () => {
    Tests.forEach(test => {
      it(`should return the correct result for ${test.num}`, () => {
        expect(my(test.num)).toBe(test.expected);
      });
    });
  });

  // describe('Best solution', () => {
  //   Tests.forEach(test => {
  //     it(`should return the correct result for searching ${test.search} in ${test.values}`, () => {
  //       expect(best(test.values, test.search)).toBe(test.expected);
  //     });
  //   });
  // });

  // describe('Creative solution', () => {
  //   Tests.forEach(test => {
  //     it(`should return the correct result for searching ${test.search} in ${test.values}`, () => {
  //       expect(creative(test.values, test.search)).toBe(test.expected);
  //     });
  //   });
  // });
});
