import { my } from './split-list.puzzle';

const Tests = [
  { values: [1, 2, 3, 4, 5, 6], expected: [[1, 2, 3], [4, 5, 6]] },
  { values: [1, 2, 3], expected: [[1, 2], [3]] },
  { values: [1, 2, 3, 4, 5], expected: [[1, 2, 3], [4, 5]] },
  { values: [1], expected: [[1], []] },
  { values: [], expected: [[], []] },
  { values: [1, 1, 1, 1, 1], expected: [[1, 1, 1], [1, 1]] },
  { values: [6, 7, 8, 9], expected: [[6, 7], [8, 9]] }
];

describe('Split List using', () => {
  describe('My Solution', () => {
    Tests.forEach(test => {
      it(`should return '${test.expected}' for '${test.values}'`, () => {
        expect(my(test.values)).toEqual(test.expected);
      });
    });
  });

  // describe('Best solution', () => {
  //   Tests.forEach(test => {
  //     it(`should return '${test.expected}' for '${test.values}'`, () => {
  //       expect(best(test.values)).toEqual(test.expected);
  //     });
  //   });
  // });

  // describe('Creative solution', () => {
  //   Tests.forEach(test => {
  //     it(`should return '${test.expected}' for '${test.values}'`, () => {
  //       expect(creative(test.values)).toEqual(test.expected);
  //     });
  //   });
  // });
});
