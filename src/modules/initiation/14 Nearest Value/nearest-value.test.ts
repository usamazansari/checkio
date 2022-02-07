import { Setup, Tester } from '../../../common';
import { Puzzle } from './nearest-value.puzzle';

new Tester({
  solution: Puzzle,
  setup: new Setup({
    tests: [
      {
        arguments: [
          { values: [4, 7, 10, 11, 12, 17] },
          { search: 9 }
        ],
        expected: 10
      },
      {
        arguments: [
          { values: [4, 7, 10, 11, 12, 17] },
          { search: 8 }
        ],
        expected: 7
      },
      {
        arguments: [
          { values: [4, 8, 10, 11, 12, 17] },
          { search: 9 }
        ],
        expected: 8
      },
      {
        arguments: [
          { values: [4, 9, 10, 11, 12, 17] },
          { search: 9 }
        ],
        expected: 9
      },
      {
        arguments: [
          { values: [4, 7, 10, 11, 12, 17] },
          { search: 0 }
        ],
        expected: 4
      },
      {
        arguments: [
          { values: [4, 7, 10, 11, 12, 17] },
          { search: 100 }
        ],
        expected: 17
      },
      {
        arguments: [
          { values: [5, 10, 8, 12, 89, 100] },
          { search: 7 }
        ],
        expected: 8
      },
      {
        arguments: [
          { values: [1, 2, 3, 4, 5, 6, 7] },
          { search: 2 }
        ],
        expected: 2
      },
      {
        arguments: [
          { values: [1, 3, 4, 5, 6, 7] },
          { search: 2 }
        ],
        expected: 1
      },
      {
        arguments: [
          { values: [0, -2] },
          { search: -1 }
        ],
        expected: -2
      },
      {
        arguments: [
          { values: [1, 2, 3, 4, 5, 6, 7] },
          { search: 20 }
        ],
        expected: 7
      }
    ]
  })
});
