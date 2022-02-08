import { Setup, Tester } from '../../../common';
import { Puzzle } from './number-length.puzzle';

new Tester({
  solution: Puzzle,
  setup: new Setup({
    tests: [
      {
        arguments: [
          { value: 10 }
        ],
        expected: 2
      },
      {
        arguments: [
          { value: 0 }
        ],
        expected: 1
      },
      {
        arguments: [
          { value: 4 }
        ],
        expected: 1
      },
      {
        arguments: [
          { value: 44 }
        ],
        expected: 2
      },
      {
        arguments: [
          { value: 1567 }
        ],
        expected: 4
      },
      {
        arguments: [
          { value: 100 }
        ],
        expected: 3
      },
      {
        arguments: [
          { value: -123456789012390 }
        ],
        expected: 15
      }
    ]
  })
}).run();
