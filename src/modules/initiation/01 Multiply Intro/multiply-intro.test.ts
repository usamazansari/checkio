import { Setup, Tester } from '../../../common';
import { Puzzle } from './multiply-intro.puzzle';

new Tester(
  {
    solution: Puzzle,
    setup: new Setup(
      {
        tests: [
          {
            arguments: [
              { a: 0 },
              { b: 1 }
            ],
            expected: 0
          },
          {
            arguments: [
              { a: 6 },
              { b: 3 }
            ],
            expected: 18
          },
          {
            arguments: [
              { a: 6 },
              { b: 7 }
            ],
            expected: 42
          }
        ]
      }
    )
  }).run();

