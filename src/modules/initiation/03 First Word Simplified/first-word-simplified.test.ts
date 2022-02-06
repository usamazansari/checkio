import { Tester, Setup } from '../../../common';
import { Puzzle } from './first-word-simplified.puzzle';

new Tester(
  {
    solution: Puzzle,
    tests: new Setup({
      tests: [
        {
          arguments: [
            { text: 'Hello world' }
          ],
          expected: 'Hello'
        },
        {
          arguments: [
            { text: 'a word' }
          ],
          expected: 'a'
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
      ]
    })
  }
);
