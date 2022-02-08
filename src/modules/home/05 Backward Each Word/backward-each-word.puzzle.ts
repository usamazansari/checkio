import { Solution } from '../../../common';

/**
 * # Backward Each Word
 * 
 * - Difficulty: Elementary+
 * 
 * ## Description
 * In a given `string` you should reverse every word, but the words 
 * should stay in their places.
 * 
 * ## Input
 * A `string`.
 * 
 * ## Output
 * A `string`.
 * 
 * ## Example
 * ```ts
 * backwardStringByWord('') == '';
 * backwardStringByWord('world') == 'dlrow';
 * backwardStringByWord('hello world') == 'olleh dlrow';
 * backwardStringByWord('hello   world') == 'olleh   dlrow';
 * ```
 * 
 * ## Precondition
 * The line consists only from alphabetical symbols and spaces.
 *
 * @param {string} text
 * @return {*}  {string}
 */
function backwardStringByWord(text: string): string {
  return text.split(' ')
    .map(word => word.split('')
      .reverse()
      .join('')
    )
    .join(' ');
}

export const Puzzle = new Solution({
  name: 'Backward Each Word',
  categories: [
    {
      name: 'My',
      fn: backwardStringByWord
    },
    {
      name: 'Clear',
      fn: (t: string): string => t.replace(/\w+/g, w => [...w].reverse().join(''))
    },
    {
      name: 'Creative',
      fn(text: string): string { return text.split(' ').map(palavra => [...palavra].reverse().join('')).join(' '); }
    },
    {
      name: 'Uncategorized',
      fn(text: string): string { return text.split(' ').map(x => x.split('').reverse().join('')).join(' '); }
    }
  ]
});
