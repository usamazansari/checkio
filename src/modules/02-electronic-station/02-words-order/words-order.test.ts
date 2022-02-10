import { Setup, Tester } from '../../../common';
import { Puzzle } from './words-order.puzzle';

new Tester({
  solution: Puzzle,
  setup: new Setup({
    tests: [
      {
        arguments: [
          { text: 'hi world im here' },
          { words: ['world', 'here'] }
        ],
        expected: true
      },
      {
        arguments: [
          { text: 'hi world im here' },
          { words: ['here', 'world'] }
        ],
        expected: false
      },
      {
        arguments: [
          { text: 'hi world im here' },
          { words: ['world'] }
        ],
        expected: true
      },
      {
        arguments: [
          { text: 'hi world im here' },
          { words: ['world', 'here', 'hi'] }
        ],
        expected: false
      },
      {
        arguments: [
          { text: 'hi world im here' },
          { words: ['world', 'im', 'here'] }
        ],
        expected: true
      },
      {
        arguments: [
          { text: 'hi world im here' },
          { words: ['world', 'hi', 'here'] }
        ],
        expected: false
      },
      {
        arguments: [
          { text: 'hi world im here' },
          { words: ['world', 'world'] }
        ],
        expected: false
      },
      {
        arguments: [
          { text: 'hi world im here' },
          { words: ['country', 'world'] }
        ],
        expected: false
      },
      {
        arguments: [
          { text: 'hi world im here' },
          { words: ['wo', 'rld'] }
        ],
        expected: false
      },
      {
        arguments: [
          { text: '' },
          { words: ['world', 'here'] }
        ],
        expected: false
      },
      {
        arguments: [
          { text: 'hi world world im here' },
          { words: ['world', 'world'] }
        ],
        expected: false
      },
      {
        arguments: [
          { text: 'london in the capital of great britain' },
          { words: ['London'] }
        ],
        expected: false
      },
      {
        arguments: [
          { text: 'london in the capital of great britain' },
          { words: ['london'] }
        ],
        expected: true
      },
      {
        arguments: [
          { text: 'london in the capital of great britain' },
          { words: ['london', 'great'] }
        ],
        expected: true
      },
      {
        arguments: [
          { text: 'london in the capital of great britain' },
          { words: ['London', 'of', 'great'] }
        ],
        expected: true
      },
    ]
  })
}).run();
