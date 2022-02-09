import { Setup, Tester } from '../../../common';
import { Puzzle } from './split-list.puzzle';

new Tester({
  solution: Puzzle,
  setup: new Setup({
    tests: [
      {
        arguments: [
          { values: [1, 2, 3, 4, 5, 6] }
        ],
        expected: [[1, 2, 3], [4, 5, 6]]
      },
      {
        arguments: [
          { values: [1, 2, 3] }
        ],
        expected: [[1, 2], [3]]
      },
      {
        arguments: [
          { values: [1, 2, 3, 4, 5] }
        ],
        expected: [[1, 2, 3], [4, 5]]
      },
      {
        arguments: [
          { values: [1] }
        ],
        expected: [[1], []]
      },
      {
        arguments: [
          { values: [] }
        ],
        expected: [[], []]
      },
      {
        arguments: [
          { values: [1, 1, 1, 1, 1] }
        ],
        expected: [[1, 1, 1], [1, 1]]
      },
      {
        arguments: [
          { values: [6, 7, 8, 9] }
        ],
        expected: [[6, 7], [8, 9]]
      }
    ]
  })
}).run();
