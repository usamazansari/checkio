import { Setup, Tester } from '../../../common';
import { Puzzle } from './replace-first.puzzle';

new Tester({
  solution: Puzzle,
  setup: new Setup({
    tests: [
      {
        arguments: [
          { values: [1, 2, 3, 4] }
        ],
        expected: [2, 3, 4, 1]
      },
      {
        arguments: [
          { values: [1] }
        ],
        expected: [1]
      },
      {
        arguments: [
          { values: [] }
        ],
        expected: []
      },
      {
        arguments: [
          { values: [10, 10] }
        ],
        expected: [10, 10]
      },
      {
        arguments: [
          { values: [1, 2, 2, 2] }
        ],
        expected: [2, 2, 2, 1]
      },
      {
        arguments: [
          { values: [100] }
        ],
        expected: [100]
      }
    ]
  })
});
