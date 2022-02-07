import { Setup, Tester } from '../../../common';
import { Puzzle } from './correct-sentence.puzzle';

const Tests = [
  { text: 'greetings, friends', expected: 'Greetings, friends.' },
  { text: 'Greetings, friends', expected: 'Greetings, friends.' },
  { text: 'Greetings, friends.', expected: 'Greetings, friends.' },
  { text: 'hi', expected: 'Hi.' },
  { text: 'welcome to New York', expected: 'Welcome to New York.' }
];

new Tester({
  solution: Puzzle,
  setup: new Setup({
    tests: [
      {
        arguments: [
          { text: 'greetings, friends' }
        ],
        expected: 'Greetings, friends.'
      },
      {
        arguments: [
          { text: 'Greetings, friends' }
        ],
        expected: 'Greetings, friends.'
      },
      {
        arguments: [
          { text: 'Greetings, friends.' }
        ],
        expected: 'Greetings, friends.'
      },
      {
        arguments: [
          { text: 'hi' }
        ],
        expected: 'Hi.'
      },
      {
        arguments: [
          { text: 'welcome to New York' }
        ],
        expected: 'Welcome to New York.'
      }
    ]
  })
});
