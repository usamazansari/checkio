import { my } from './correct-sentence.puzzle';

const Tests = [
  { text: 'greetings, friends', expected: 'Greetings, friends.' },
  { text: 'Greetings, friends', expected: 'Greetings, friends.' },
  { text: 'Greetings, friends.', expected: 'Greetings, friends.' },
  { text: 'hi', expected: 'Hi.' },
  { text: 'welcome to New York', expected: 'Welcome to New York.' }
];

describe('Correct Sentence using', () => {
  describe('My Solution', () => {
    Tests.forEach(test => {
      it(`should return '${test.expected}' for '${test.text}'`, () => {
        expect(my(test.text)).toBe(test.expected);
      });
    });
  });

  // describe('Best solution', () => {
  //   Tests.forEach(test => {
  //     it(`should return '${test.expected}' for '${test.text}'`, () => {
  //       expect(best(test.values, test.search)).toBe(test.expected);
  //     });
  //   });
  // });

  // describe('Creative solution', () => {
  //   Tests.forEach(test => {
  //     it(`should return '${test.expected}' for '${test.text}'`, () => {
  //       expect(creative(test.values, test.search)).toBe(test.expected);
  //     });
  //   });
  // });
});
