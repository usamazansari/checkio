import { Setup, Tester } from '../../../common';
import { Puzzle } from './between-markers.puzzle';

new Tester({
  solution: Puzzle,
  setup: new Setup({
    tests: [
      {
        arguments: [
          { text: 'What is >apple<' },
          { begin: '>' },
          { end: '<' }
        ],
        expected: 'apple'
      },
      {
        arguments: [
          { text: '<head><title>My new site</title></head>' },
          { begin: '<title>' },
          { end: '</title>' }
        ],
        expected: 'My new site'
      },
      {
        arguments: [
          { text: 'No[/b] hi' },
          { begin: '[b]' },
          { end: '[/b]' }
        ],
        expected: 'No'
      },
      {
        arguments: [
          { text: 'No [b]hi' },
          { begin: '[b]' },
          { end: '[/b]' }
        ],
        expected: 'hi'
      },
      {
        arguments: [
          { text: 'No hi' },
          { begin: '[b]' },
          { end: '[/b]' }
        ],
        expected: 'No hi'
      },
      {
        arguments: [
          { text: 'No <hi>' },
          { begin: '>' },
          { end: '<' }
        ],
        expected: ''
      },
      {
        arguments: [
          { text: 'Never send a human to do a machine\'s job.' },
          { begin: 'Never' },
          { end: 'do' }
        ],
        expected: ' send a human to '
      },
      {
        arguments: [
          { text: 'No <hi> one' },
          { begin: '>' },
          { end: '<' }
        ],
        expected: ''
      },
      {
        arguments: [
          { text: '<head><title>title My new site</title></head>' },
          { begin: '<title>' },
          { end: '</title>' }
        ],
        expected: 'title My new site'
      }
    ]
  })
}).run();
