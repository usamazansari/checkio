import { Setup, Tester } from '../../../common';
import { Puzzle } from './second-index.puzzle';

new Tester({
  solution: Puzzle,
  setup: new Setup({
    tests: [
      {
        arguments: [
          { text: 'sims' },
          { symbol: 's' }
        ],
        expected: 3
      },
      {
        arguments: [
          { text: 'find the river' },
          { symbol: 'e' }
        ],
        expected: 12
      },
      {
        arguments: [
          { text: 'hi' },
          { symbol: ' ' }
        ],
        expected: undefined
      },
      {
        arguments: [
          { text: 'hi mayor' },
          { symbol: ' ' }
        ],
        expected: undefined
      },
      {
        arguments: [
          { text: 'hi mr Mayor' },
          { symbol: ' ' }
        ],
        expected: 5
      },
      {
        arguments: [
          { text: 'hi' },
          { symbol: 'i' }
        ],
        expected: undefined
      },
      {
        arguments: [
          { text: 'abc' },
          { symbol: 'd' }
        ],
        expected: undefined
      },
      {
        arguments: [
          { text: 'see you' },
          { symbol: 'e' }
        ],
        expected: 2
      },
      {
        arguments: [
          { text: 'three occurrences' },
          { symbol: 'e' }
        ],
        expected: 4
      }
    ]
  })
}).run();
