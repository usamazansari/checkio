import { Setup, Tester } from '../../../common';
import { Puzzle } from './backward-each-word.puzzle';

new Tester({
  solution: Puzzle,
  setup: new Setup({
    tests: [
      {
        arguments: [
          { text: '' }
        ],
        expected: ''
      },
      {
        arguments: [
          { text: 'world' }
        ],
        expected: 'dlrow'
      },
      {
        arguments: [
          { text: 'hello world' }
        ],
        expected: 'olleh dlrow'
      },
      {
        arguments: [
          { text: 'hello   world' }
        ],
        expected: 'olleh   dlrow'
      },
      {
        arguments: [
          { text: 'welcome to a game' }
        ],
        expected: 'emoclew ot a emag'
      },
      {
        arguments: [
          { text: 'ha ha ha   this is cool' }
        ],
        expected: 'ah ah ah   siht si looc'
      }
    ]
  })
}).run();
