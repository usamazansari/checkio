import { Setup, Tester } from '../../../common';
import { Puzzle } from './sum-numbers.puzzle';

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
        expected: 0
      },
      {
        arguments: [
          { test: 'my numbers is 2' }
        ],
        expected: 2
      },
      {
        arguments: [
          {
            test: 'This picture is an oil on canvas '
              + 'painting by Danish artist Anna '
              + 'Petersen between 1845 and 1910 year'
          }
        ],
        expected: 3755
      },
      {
        arguments: [
          { test: '5 plus 6 is' }
        ],
        expected: 11
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
        expected: 10
      }
    ]
  })
});
