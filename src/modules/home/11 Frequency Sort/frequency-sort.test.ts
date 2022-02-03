import { my } from './frequency-sort.puzzle';

const Tests = [
  { items: [4, 6, 2, 2, 6, 4, 4, 4], expected: [4, 4, 4, 4, 6, 6, 2, 2] },
  { items: ['bob', 'bob', 'carl', 'alex', 'bob'], expected: ['bob', 'bob', 'bob', 'carl', 'alex'] },
  { items: [17, 99, 42], expected: [17, 99, 42] },
  { items: [], expected: [] },
  { items: [1], expected: [1] },
  { items: [6, 3], expected: [6, 3] },
  { items: [1, 1, 1, 1], expected: [1, 1, 1, 1] },
  { items: [1, 2, 2, 1], expected: [1, 1, 2, 2] }
];

describe('Frequency Sort using', () => {
  describe('My Solution', () => {
    Tests.forEach(test => {
      it(`should return '${test.expected}' for '${test.items}'`, () => {
        expect(my(test.items)).toEqual(test.expected);
      });
    });
  });

  // describe('Best solution', () => {
  //   Tests.forEach(test => {
  //     it(`should return '${test.expected}' for '${test.items}'`, () => {
  //       expect(best(test.items)).toEqual(test.expected);
  //     });
  //   });
  // });

  // describe('Creative solution', () => {
  //   Tests.forEach(test => {
  //     it(`should return '${test.expected}' for '${test.items}'`, () => {
  //       expect(creative(test.items)).toEqual(test.expected);
  //     });
  //   });
  // });
});
