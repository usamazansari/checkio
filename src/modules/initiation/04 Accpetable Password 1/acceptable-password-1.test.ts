import { Setup, Tester } from '../../../common';
import { Puzzle } from './acceptable-password-1.puzzle';

new Tester({
  solution: Puzzle,
  setup: new Setup({
    tests: [
      {
        arguments: [
          { text: 'short' },
        ],
        expected: false,
      },
      {
        arguments: [
          { text: 'muchlonger' },
        ],
        expected: true,
      },
      {
        arguments: [
          { text: 'ashort' },
        ],
        expected: false,
      },
      {
        arguments: [
          { text: 'this is password' },
        ],
        expected: true,
      }
    ],
  })
}).run();
