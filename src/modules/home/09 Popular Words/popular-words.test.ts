import { my } from './popular-words.puzzle';

const Tests = [
  {
    text: `When I was One
    I had just begun
    When I was Two
    I was nearly new`,
    words: ['i', 'was', 'three', 'near'],
    expected: { i: 4, was: 3, three: 0, near: 0 }
  },
  {
    text: '\nWhen I was One\nI had just begun\nWhen I was Two\nI was nearly new\n',
    words: ['i', 'was', 'three', 'near'],
    expected: { i: 4, was: 3, three: 0, near: 0 }
  },
  {
    text: `When I was One
    I had just begun
    When I was Two
    I was nearly new`,
    words: ['one', 'two', 'three'],
    expected: { one: 1, two: 1, three: 0 }
  },
  {
    text: '\nWhen I was One\nI had just begun\nWhen I was Two\nI was nearly new\n',
    words: ['one', 'two', 'three'],
    expected: { one: 1, two: 1, three: 0 }
  },
  {
    text: `It\'s flying from somewhere
    As fast as it can
    I couldn\'t keep up with it
    Not if I ran`,
    words: ['it\'s', 'ran', 'i'],
    expected: { 'it\'s': 1, 'ran': 1, 'i': 2 }
  },
  {
    text: 'It\'s flying from somewhere\nAs fast as it can\nI couldn\'t keep up with it\nNot if I ran',
    words: ['it\'s', 'ran', 'i'],
    expected: { 'it\'s': 1, 'ran': 1, 'i': 2 }
  },
  {
    text: `And the Raven never flitting still is sitting still is sitting
    On the pallid bust of Pallas just above my chamber door
    And his eyes have all the seeming of a demon\'s that is dreaming
    And the lamp-light o\'er him streaming throws his shadow on the floor
    And my soul from out that shadow that lies floating on the floor
    Shall be lifted nevermore`,
    words: ['raven', 'still', 'is', 'floor', 'nevermore'],
    expected: { 'raven': 1, 'still': 2, 'is': 3, 'floor': 2, 'nevermore': 1 }
  },
  {
    text: 'And the Raven never flitting still is sitting still is sitting\nOn the pallid bust of Pallas just above my chamber door\nAnd his eyes have all the seeming of a demon\'s that is dreaming\nAnd the lamp-light o\'er him streaming throws his shadow on the floor\nAnd my soul from out that shadow that lies floating on the floor\nShall be lifted nevermore',
    words: ['raven', 'still', 'is', 'floor', 'nevermore'],
    expected: { 'raven': 1, 'still': 2, 'is': 3, 'floor': 2, 'nevermore': 1 }
  },
  {
    text: `I will go to the cinema
    No you will not`,
    words: ['i', 'will', 'no'],
    expected: { 'i': 1, 'will': 2, 'no': 1 }
  },
  {
    text: 'I will go to the cinema\nNo you will not',
    words: ['i', 'will', 'no'],
    expected: { 'i': 1, 'will': 2, 'no': 1 }
  }
];

describe('Popular Words using', () => {
  describe('My Solution', () => {
    Tests.forEach(test => {
      it(`should return expected result for '${test.text.length > 48 ? 'very long input' : test.text}' having ${test.words.length > 7 ? 'many words' : 'words: ' + test.words.join(' | ')}`, () => {
        expect(my(test.text, test.words)).toEqual(test.expected);
      });
    });
  });

  // describe('Best solution', () => {
  //   Tests.forEach(test => {
  //     it(`should return '${test.expected}' for '${test.text}'`, () => {
  //       expect(best(test.text)).toEqual(test.expected);
  //     });
  //   });
  // });

  // describe('Creative solution', () => {
  //   Tests.forEach(test => {
  //     it(`should return '${test.expected}' for '${test.text}'`, () => {
  //       expect(creative(test.text)).toEqual(test.expected);
  //     });
  //   });
  // });
});

