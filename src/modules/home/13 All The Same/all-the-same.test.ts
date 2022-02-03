import { my } from './all-the-same.puzzle';

const Tests = [
  { elements: [1, 1, 1], expected: true },
  { elements: [1, 2, 1], expected: false },
  { elements: ['a', 'a', 'a'], expected: true },
  { elements: [], expected: true },
  { elements: [1], expected: true },
  { elements: [1, 'a', 1], expected: false },
  { elements: [600000], expected: true },
  { elements: [10000, 99999], expected: false }
];

describe('All the Same using', () => {
  describe('My Solution', () => {
    Tests.forEach(test => {
      it(`should return '${test.expected}' for '${test.elements}'`, () => {
        expect(my(test.elements)).toEqual(test.expected);
      });
    });
  });

  // describe('Best solution', () => {
  //   Tests.forEach(test => {
  //     it(`should return '${test.expected}' for '${test.elements}'`, () => {
  //       expect(best(test.elements)).toEqual(test.expected);
  //     });
  //   });
  // });

  // describe('Creative solution', () => {
  //   Tests.forEach(test => {
  //     it(`should return '${test.expected}' for '${test.elements}'`, () => {
  //       expect(creative(test.elements)).toEqual(test.expected);
  //     });
  //   });
  // });
});
