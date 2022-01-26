import { my } from './beginning-zeros.puzzle';

const Tests = [
  { text: '100', expected: 0 },
  { text: '001', expected: 2 },
  { text: '100100', expected: 0 },
  { text: '001001', expected: 2 },
  { text: '012345679', expected: 1 },
  { text: '0000', expected: 4 }
];

describe('Split Pairs using', () => {
  describe('My Solution', () => {
    Tests.forEach(test => {
      it(`should return the correct result for ${test.text}`, () => {
        expect(my(test.text)).toEqual(test.expected);
      });
    });
  });

  // describe('Best solution', () => {
  //   Tests.forEach(test => {
  //     it(`should return the correct result for ${test.text}`, () => {
  //       expect(best(test.text)).toEqual(test.expected);
  //     });
  //   });
  // });

  // describe('Creative solution', () => {
  //   Tests.forEach(test => {
  //     it(`should return the correct result for ${test.text}`, () => {
  //       expect(creative(test.text)).toEqual(test.expected);
  //     });
  //   });
  // });
});
