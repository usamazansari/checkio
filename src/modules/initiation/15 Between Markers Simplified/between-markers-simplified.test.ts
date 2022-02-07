import { Setup, Tester } from '../../../common';
import { Puzzle } from './between-markers-simplified.puzzle';

const Tests = [
  { line: 'What is >apple<', left: '>', right: '<', expected: 'apple' },
  { line: 'What is [apple]', left: '[', right: ']', expected: 'apple' },
  { line: 'What is ><', left: '>', right: '<', expected: '' },
  { line: '[an apple]', left: '[', right: ']', expected: 'an apple' },
  { line: '>Apple< is simple', left: '>', right: '<', expected: 'Apple' }
];

new Tester({
  solution: Puzzle,
  setup: new Setup({
    tests: [
      {
        arguments: [
          { line: 'What is >apple<' },
          { left: '>' },
          { right: '<' }
        ],
        expected: 'apple'
      },
      {
        arguments: [
          { line: 'What is [apple]' },
          { left: '[' },
          { right: ']' }
        ],
        expected: 'apple'
      },
      {
        arguments: [
          { line: 'What is ><' },
          { left: '>' },
          { right: '<' }
        ],
        expected: ''
      },
      {
        arguments: [
          { line: '[an apple]' },
          { left: '[' },
          { right: ']' }
        ],
        expected: 'an apple'
      },
      {
        arguments: [
          { line: '>Apple< is simple' },
          { left: '>' },
          { right: '<' }
        ],
        expected: 'Apple'
      }
    ]
  })
});
