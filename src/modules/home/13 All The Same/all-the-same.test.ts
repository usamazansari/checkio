
import { Setup, Tester } from '../../../common';
import { Puzzle } from './all-the-same.puzzle';

new Tester({
  solution: Puzzle,
  setup: new Setup({
    tests: [
      {
        arguments: [
          { elements: [1, 1, 1] }
        ],
        expected: true
      },
      {
        arguments: [
          { elements: [1, 2, 1] }
        ],
        expected: false
      },
      {
        arguments: [
          { elements: ['a', 'a', 'a'] }
        ],
        expected: true
      },
      {
        arguments: [
          { elements: [] }
        ],
        expected: true
      },
      {
        arguments: [
          { elements: [1] }
        ],
        expected: true
      },
      {
        arguments: [
          { elements: [1, 'a', 1] }
        ],
        expected: false
      },
      {
        arguments: [
          { elements: [600000] }
        ],
        expected: true
      },
      {
        arguments: [
          { elements: [10000, 99999] }
        ],
        expected: false
      }
    ]
  })
}).run();
