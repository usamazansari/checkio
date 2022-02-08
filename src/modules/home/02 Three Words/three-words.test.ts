import { Setup, Tester } from '../../../common';
import { Puzzle } from './three-words.puzzle';

new Tester({
  solution: Puzzle,
  setup: new Setup({
    tests: [
      {
        arguments: [
          { text: 'Hello World hello' }
        ],
        expected: true
      },
      {
        arguments: [
          { text: 'He is 123 man' }
        ],
        expected: false
      },
      {
        arguments: [
          { text: '1 2 3 4' }
        ],
        expected: false
      },
      {
        arguments: [
          { text: 'bla bla bla bla' }
        ],
        expected: true
      },
      {
        arguments: [
          { text: 'Hi' }
        ],
        expected: false
      },
      {
        arguments: [
          { text: 'one two 3 four five 6 seven eight 9 ten eleven 12' }
        ],
        expected: false
      },
      {
        arguments: [
          { text: 'one two 3 four 5 six 7 eight 9 ten eleven 12' }
        ],
        expected: false
      },
      {
        arguments: [
          { text: 'one two 3 four five six 7 eight 9 ten eleven 12' }
        ],
        expected: true
      },
      {
        arguments: [
          { text: '1231 321 3123 12312 3231 321 312 3123 1231' }
        ],
        expected: false
      },
      {
        arguments: [
          { text: 'sda das das dsa adfs dfasd fas' }
        ],
        expected: true
      },
      {
        arguments: [
          { text: '0 qwerty iddqd asdfg' }
        ],
        expected: true
      },
      {
        arguments: [
          { text: '0 qwerty a asdfg 2' }
        ],
        expected: true
      },
      {
        arguments: [
          { text: '0 qwerty 99999999999 asdfg 2' }
        ],
        expected: false
      },
      {
        arguments: [
          { text: 'qwe fds 32 khh wwewe 123 uiu 8794' }
        ],
        expected: false
      },
    ]
  })
});
