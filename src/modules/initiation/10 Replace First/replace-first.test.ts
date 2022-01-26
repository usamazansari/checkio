import { my } from './replace-first.puzzle';

const Tests = [
  { values: [1, 2, 3, 4], expected: [2, 3, 4, 1] },
  { values: [1], expected: [1] },
  { values: [], expected: [] }
];

describe('Replace First using', () => {
  describe('My Solution', () => {
    Tests.forEach(test => {
      it(`should return the correct product for ${test.values}`, () => {
        expect(my(test.values)).toEqual(test.expected);
      });
    });
  });

  // describe('Best solution', () => {
  //   Tests.forEach(test => {
  //     it(`should return the correct product for ${test.values}`, () => {
  //       expect(best(test.values)).toEqual(test.expected);
  //     });
  //   });
  // });

  // describe('Creative solution', () => {
  //   Tests.forEach(test => {
  //     it(`should return the correct product for ${test.values}`, () => {
  //       expect(creative(test.values)).toEqual(test.expected);
  //     });
  //   });
  // });
});
