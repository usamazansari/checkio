import { Setup, Tester } from '../../../common';
import { Puzzle } from './frequency-sort.puzzle';

new Tester({
  solution: Puzzle,
  setup: new Setup({
    tests: [
      {
        arguments: [
          { items: [4, 6, 2, 2, 6, 4, 4, 4] }
        ],
        expected: [4, 4, 4, 4, 6, 6, 2, 2]
      },
      {
        arguments: [
          { items: ['bob', 'bob', 'carl', 'alex', 'bob'] }
        ],
        expected: ['bob', 'bob', 'bob', 'carl', 'alex']
      },
      {
        arguments: [
          { items: [17, 99, 42] }
        ],
        expected: [17, 99, 42]
      },
      {
        arguments: [
          { items: [] }
        ],
        expected: []
      },
      {
        arguments: [
          { items: [1] }
        ],
        expected: [1]
      },
      {
        arguments: [
          { items: [6, 3] }
        ],
        expected: [6, 3]
      },
      {
        arguments: [
          { items: [1, 1, 1, 1] }
        ],
        expected: [1, 1, 1, 1]
      },
      {
        arguments: [
          { items: [1, 2, 2, 1] }
        ],
        expected: [1, 1, 2, 2]
      }
    ]
  }),
}).run();
