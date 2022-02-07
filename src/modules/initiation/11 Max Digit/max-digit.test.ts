import { Setup, Tester } from '../../../common';
import { Puzzle } from './max-digit.puzzle';

new Tester({
  solution: Puzzle,
  setup: new Setup({
    tests: [
      {
        arguments: [
          { value: 0 }
        ],
        expected: 0
      }, {
        arguments: [
          { value: 52 }
        ],
        expected: 5
      }, {
        arguments: [
          { value: 634 }
        ],
        expected: 6
      }, {
        arguments: [
          { value: 1 }
        ],
        expected: 1
      }, {
        arguments: [
          { value: 10000 }
        ],
        expected: 1
      }, {
        arguments: [
          { value: 3053456 }
        ],
        expected: 6
      }, {
        arguments: [
          { value: 9999999 }
        ],
        expected: 9
      }
    ]
  })
});
