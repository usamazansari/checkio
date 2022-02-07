import { Setup, Tester } from '../../../common';
import { Puzzle } from './beginning-zeros.puzzle';

new Tester({
  solution: Puzzle,
  setup: new Setup({
    tests: [
      {
        arguments: [
          { text: '100' }
        ],
        expected: 0
      },
      {
        arguments: [
          { text: '001' }
        ],
        expected: 2
      },
      {
        arguments: [
          { text: '100100' }
        ],
        expected: 0
      },
      {
        arguments: [
          { text: '001001' }
        ],
        expected: 2
      },
      {
        arguments: [
          { text: '012345679' }
        ],
        expected: 1
      },
      {
        arguments: [
          { text: '0000' }
        ],
        expected: 4
      },
      {
        arguments: [
          { text: '734' }
        ],
        expected: 0
      },
      {
        arguments: [
          { text: '110' }
        ],
        expected: 0
      },
      {
        arguments: [
          { text: '567' }
        ],
        expected: 0
      },
      {
        arguments: [
          { text: '1' }
        ],
        expected: 0
      },
      {
        arguments: [
          { text: '0' }
        ],
        expected: 1
      },
    ]
  })
});
