import { Setup, Tester } from '../../../common';
import { Puzzle } from './all-upper-ii.puzzle';

new Tester({
  solution: Puzzle,
  setup: new Setup({
    tests: [
      {
        arguments: [
          { text: 'ALL UPPER' }
        ],
        expected: true
      },
      {
        arguments: [
          { text: 'all lower' }
        ],
        expected: false
      },
      {
        arguments: [
          { text: 'mixed UPPER and lower' }
        ],
        expected: false
      },
      {
        arguments: [
          { text: '' }
        ],
        expected: false
      },
      {
        arguments: [
          { text: 'Hi' }
        ],
        expected: false
      },
      {
        arguments: [
          { text: '123' }
        ],
        expected: false
      },
      {
        arguments: [
          { text: 'DIGITS123' }
        ],
        expected: true
      },
      {
        arguments: [
          { text: 'WORLD' }
        ],
        expected: true
      }
    ]
  })
}).run();
