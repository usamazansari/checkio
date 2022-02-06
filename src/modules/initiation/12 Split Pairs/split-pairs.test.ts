import { Setup, Tester } from '../../../common';
import { Puzzle } from './split-pairs.puzzle';

new Tester({
  solution: Puzzle,
  tests: new Setup({
    tests: [
      {
        arguments: [
          { text: 'abcd' }
        ],
        expected: ['ab', 'cd']
      },
      {
        arguments: [
          { text: 'abc' }
        ],
        expected: ['ab', 'c_']
      },
      {
        arguments: [
          { text: 'abcdf' }
        ],
        expected: ['ab', 'cd', 'f_']
      },
      {
        arguments: [
          { text: 'a' }
        ],
        expected: ['a_']
      },
      {
        arguments: [
          { text: '' }
        ],
        expected: []
      },
      {
        arguments: [
          { text: 'hhh' }
        ],
        expected: ['hh', 'h_']
      },
      {
        arguments: [
          { text: 'hhh1' }
        ],
        expected: ['hh', 'h1']
      }
    ],
  }),
});
