import { Setup, Tester } from '../../../common';
import { Puzzle } from './end-zeros.puzzle';

new Tester({
  solution: Puzzle,
  tests: new Setup({
    tests: [
      {
        arguments: [
          { value: 0 }
        ],
        expected: 1
      },
      {
        arguments: [
          { value: 1 }
        ],
        expected: 0
      },
      {
        arguments: [
          { value: 10 }
        ],
        expected: 1
      },
      {
        arguments: [
          { value: 101 }
        ],
        expected: 0
      },
      {
        arguments: [
          { value: 245 }
        ],
        expected: 0
      },
      {
        arguments: [
          { value: 100100 }
        ],
        expected: 2
      },
      {
        arguments: [
          { value: 3456 }
        ],
        expected: 0
      },
      {
        arguments: [
          { value: 100234 }
        ],
        expected: 0
      }
    ]
  })
});
