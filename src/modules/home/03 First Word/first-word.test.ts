import { Setup, Tester } from '../../../common';
import { Puzzle } from './first-word.puzzle';

new Tester({
  solution: Puzzle,
  setup: new Setup({
    tests: [
      {
        arguments: [
          { text: 'Hello world' }
        ],
        expected: 'Hello'
      },
      {
        arguments: [
          { text: ' a word ' }
        ],
        expected: 'a'
      },
      {
        arguments: [
          { text: 'don\'t touch it' }
        ],
        expected: 'don\'t'
      },
      {
        arguments: [
          { text: 'greetings, friends' }
        ],
        expected: 'greetings'
      },
      {
        arguments: [
          { text: '... and so on ...' }
        ],
        expected: 'and'
      },
      {
        arguments: [
          { text: 'hi' }
        ],
        expected: 'hi'
      },
      {
        arguments: [
          { text: 'Holy Edison' }
        ],
        expected: 'Holy'
      },
      {
        arguments: [
          { text: 'Don\'t speak... I know just what you\'re saying' }
        ],
        expected: 'Don\'t'
      },
      {
        arguments: [
          { text: 'Hello.World' }
        ],
        expected: 'Hello'
      }
    ]
  })
});
