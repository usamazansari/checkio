import { my } from './nearest-value.puzzle';

const Tests = [
  // { values: [4, 7, 10, 11, 12, 17], search: 9, expected: 10 },
  // { values: [4, 7, 10, 11, 12, 17], search: 8, expected: 7 },
  // { values: [4, 8, 10, 11, 12, 17], search: 9, expected: 8 },
  { values: [4, 9, 10, 11, 12, 17], search: 9, expected: 9 },
  // { values: [4, 7, 10, 11, 12, 17], search: 0, expected: 4 },
  // { values: [4, 7, 10, 11, 12, 17], search: 100, expected: 17 },
  // { values: [5, 10, 8, 12, 89, 100], search: 7, expected: 8 },
  // { values: [-1, 2, 3], search: 0, expected: -1 },
];

describe('Nearest Values using', () => {
  describe('My Solution', () => {
    Tests.forEach(test => {
      it(`should return the correct result for searching ${test.search} in ${test.values}`, () => {
        expect(my(test.values, test.search)).toBe(test.expected);
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
