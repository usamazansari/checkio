import { Setup, Tester } from '../../../common';
import { Puzzle } from './count-digits.puzzle';

new Tester({
  solution: Puzzle,
  setup: new Setup({
    tests: [
      {
        arguments: [
          { test: 'hi' }
        ],
        expected: 0
      },
      {
        arguments: [
          { test: 'who is 1st here' }
        ],
        expected: 1
      },
      {
        arguments: [
          { test: 'my numbers is 2' }
        ],
        expected: 1
      },
      {
        arguments: [
          {
            test: 'This picture is an oil on canvas '
              + 'painting by Danish artist Anna '
              + 'Petersen between 1845 and 1910 year'
          }
        ],
        expected: 8
      },
      {
        arguments: [
          { test: '5 plus 6 is' }
        ],
        expected: 2
      },
      {
        arguments: [
          { test: '' }
        ],
        expected: 0
      },
      {
        arguments: [
          { test: 'It is the natural number following 4 and preceding 6  and is a prime number' }
        ],
        expected: 2
      }
    ]
  })
}).run();
