import { Setup, Tester } from '../../../common';
import { Puzzle } from './remove-all-before.puzzle';

new Tester({
  solution: Puzzle,
  tests: new Setup({
    tests: [
      {
        arguments: [
          { values: [1, 2, 3, 4, 5] },
          { b: 3 }
        ],
        expected: [3, 4, 5]
      },
      {
        arguments: [
          { values: [1, 1, 2, 2, 3, 3] },
          { b: 2 }
        ],
        expected: [2, 2, 3, 3]
      },
      {
        arguments: [
          { values: [1, 1, 2, 4, 2, 3, 4] },
          { b: 2 }
        ],
        expected: [2, 4, 2, 3, 4]
      },
      {
        arguments: [
          { values: [1, 1, 5, 6, 7] },
          { b: 2 }
        ],
        expected: [1, 1, 5, 6, 7]
      },
      {
        arguments: [
          { values: [] },
          { b: 0 }
        ],
        expected: []
      },
      {
        arguments: [
          { values: [7, 7, 7, 7, 7, 7, 7, 7, 7] },
          { b: 7 }
        ],
        expected: [7, 7, 7, 7, 7, 7, 7, 7, 7]
      },
      {
        arguments: [
          { values: [10, 1, 5, 6, 7, 10] },
          { b: 5 }
        ],
        expected: [5, 6, 7, 10]
      },
      {
        arguments: [
          { values: [1, 2, 6, 7, 1, 2, 4, 6, 7, 8, 3, 5, 2, 3] },
          { b: 6 }
        ],
        expected: [6, 7, 1, 2, 4, 6, 7, 8, 3, 5, 2, 3]
      }
    ]
  })
});
