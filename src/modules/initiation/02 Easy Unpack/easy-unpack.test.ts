import { Setup, Tester } from '../../../common';
import { Puzzle } from './easy-unpack.puzzle';

new Tester(
  {
    solution: Puzzle,
    setup: new Setup(
      {
        tests: [
          {
            arguments: [
              { values: [1, 2, 3, 4, 5, 6, 7, 9] }
            ],
            expected: [1, 3, 7]
          },
          {
            arguments: [
              { values: [1, 1, 1, 1] }
            ],
            expected: [1, 1, 1]
          },
          {
            arguments: [
              { values: [6, 3, 7] }
            ],
            expected: [6, 7, 3]
          },
          {
            arguments: [
              { values: [30, 40, 100] }
            ],
            expected: [30, 100, 40]
          },
          {
            arguments: [
              { values: [5, 5, 5, 5, 5] }
            ],
            expected: [5, 5, 5]
          }
        ]
      }
    )
  }).run();
