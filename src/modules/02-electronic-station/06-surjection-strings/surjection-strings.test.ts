import { Setup, Tester } from '../../../common';
import { Puzzle } from './surjection-strings.puzzle';

new Tester({
  solution: Puzzle,
  setup: new Setup({
    tests: [
      {
        arguments: [
          { line1: 'add' },
          { line2: 'egg' }
        ],
        expected: true
      },
      {
        arguments: [
          { line1: 'foo' },
          { line2: 'bar' }
        ],
        expected: false
      },
      {
        arguments: [
          { line1: '' },
          { line2: '' }
        ],
        expected: true
      },
      {
        arguments: [
          { line1: 'all' },
          { line2: 'all' }
        ],
        expected: true
      },
      {
        arguments: [
          { line1: 'paper' },
          { line2: 'title' }
        ],
        expected: true
      },
      {
        arguments: [
          { line1: 'paper' },
          { line2: 'words' }
        ],
        expected: false
      },
      {
        arguments: [
          { line1: 'hail' },
          { line2: 'hoop' }
        ],
        expected: false
      }
    ]
  })
}).run();
