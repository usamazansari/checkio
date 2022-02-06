import { Setup, Tester } from '../../../common';
import { Puzzle } from './backward-string.puzzle';

new Tester({
  solution: Puzzle,
  tests: new Setup({
    tests: [
      {
        arguments: [
          { value: 'val' }
        ],
        expected: 'lav'
      },
      {
        arguments: [
          { value: '' }
        ],
        expected: ''
      },
      {
        arguments: [
          { value: 'ohho' }
        ],
        expected: 'ohho'
      },
      {
        arguments: [
          { value: '123456789' }
        ],
        expected: '987654321'
      },
      {
        arguments: [
          { value: 'aa' }
        ],
        expected: 'aa'
      },
      {
        arguments: [
          { value: '1,2,3,4' }
        ],
        expected: '4,3,2,1'
      },
      {
        arguments: [
          { value: 'Welcome to CheckiO' }
        ],
        expected: 'OikcehC ot emocleW'
      }
    ]
  })
});
