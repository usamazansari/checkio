import { my } from './second-index.puzzle';

const Tests = [
  { text: 'sims', symbol: 's', expected: 3 },
  { text: 'find the river', symbol: 'e', expected: 12 },
  { text: 'hi', symbol: ' ', expected: undefined },
  { text: 'hi mayor', symbol: ' ', expected: undefined },
  { text: 'hi mr Mayor', symbol: ' ', expected: 5 },
  { text: 'hi', symbol: 'i', expected: undefined },
  { text: 'abc', symbol: 'd', expected: undefined },
  { text: 'see you', symbol: 'e', expected: 2 },
  { text: 'three occurrences', symbol: 'e', expected: 10 }
];

describe('Second Index using', () => {
  describe('My Solution', () => {
    Tests.forEach(test => {
      it(`should return '${test.expected}' for '${test.text.length > 48 ? 'very long input' : test.text}' having '${test.symbol}'`, () => {
        expect(my(test.text, test.symbol)).toBe(test.expected);
      });
    });
  });

  // describe('Best solution', () => {
  //   Tests.forEach(test => {
  //     it(`should return '${test.expected}' for '${test.text.length > 48 ? 'very long input' : test.text}' having '${test.symbol}'`, () => {
  //       expect(best(test.text, test.symbol)).toBe(test.expected);
  //     });
  //   });
  // });

  // describe('Creative solution', () => {
  //   Tests.forEach(test => {
  //     it(`should return '${test.expected}' for '${test.text.length > 48 ? 'very long input' : test.text}' having '${test.symbol}'`, () => {
  //       expect(creative(test.text, test.symbol)).toBe(test.expected);
  //     });
  //   });
  // });
});
