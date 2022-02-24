import { Setup, Tester } from '../../../common';
import { Puzzle } from './unix-match-i.puzzle';

new Tester({
  solution: Puzzle,
  setup: new Setup({
    tests: [
      {
        arguments: [
          { filename: 'somefile.txt' },
          { pattern: '*' }
        ],
        expected: true
      },
      {
        arguments: [
          { filename: 'other.exe' },
          { pattern: '*' }
        ],
        expected: true
      },
      {
        arguments: [
          { filename: 'my.exe' },
          { pattern: '*.txt' }
        ],
        expected: false
      },
      {
        arguments: [
          { filename: 'log1.txt' },
          { pattern: 'log?.txt' }
        ],
        expected: true
      },
      {
        arguments: [
          { filename: 'log12.txt' },
          { pattern: 'log?.txt' }
        ],
        expected: false
      },
      {
        arguments: [
          { filename: 'log12.txt' },
          { pattern: 'log??.txt' }
        ],
        expected: true
      },
      {
        arguments: [
          { filename: 'log12.txt' },
          { pattern: '**' }
        ],
        expected: true
      },
      {
        arguments: [
          { filename: 'file19.txt' },
          { pattern: '*z*' }
        ],
        expected: false
      },
      {
        arguments: [
          { filename: 'I.txt' },
          { pattern: '???*' }
        ],
        expected: true
      },
      {
        arguments: [
          { filename: 'txt' },
          { pattern: '????' }
        ],
        expected: false
      },
      {
        arguments: [
          { filename: 'name.txt' },
          { pattern: 'name.txt' }
        ],
        expected: true
      },
      {
        arguments: [
          { filename: 'name.txt' },
          { pattern: 'name.exe' }
        ],
        expected: false
      },
      {
        arguments: [
          { filename: 'apache1.log' },
          { pattern: '*.*' }
        ],
        expected: true
      },
      {
        arguments: [
          { filename: '12apache1.log' },
          { pattern: '*.*' }
        ],
        expected: true
      },
      {
        arguments: [
          { filename: '12apache1' },
          { pattern: '*.*' }
        ],
        expected: false
      },
      {
        arguments: [
          { filename: 'name.txt' },
          { pattern: 'name.???' }
        ],
        expected: true
      },
      {
        arguments: [
          { filename: 'name.exe' },
          { pattern: 'name.???' }
        ],
        expected: true
      },
      {
        arguments: [
          { filename: 'name....' },
          { pattern: 'name.???' }
        ],
        expected: true
      },
      {
        arguments: [
          { filename: 'name....' },
          { pattern: 'name.*' }
        ],
        expected: true
      }
    ]
  })
}).run();
