import { Setup, Tester } from '../../../common';
import { Puzzle } from './is-even.puzzle';

new Tester({
  solution: Puzzle,
  setup: new Setup({
    tests: [
      {
        arguments: [
          { num: 2 }
        ],
        expected: true
      },
      {
        arguments: [
          { num: 5 }
        ],
        expected: false
      },
      {
        arguments: [
          { num: 0 }
        ],
        expected: true
      },
      {
        arguments: [
          { num: 6 }
        ],
        expected: true
      },
      {
        arguments: [
          { num: 17 }
        ],
        expected: false
      }
    ]
  })
});
