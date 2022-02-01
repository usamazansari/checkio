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

const best = (t: string): string => t.replace(/\w+/g, w => [...w].reverse().join(''));

const creative = (text: string): string => text.split(' ').map(palavra => [...palavra].reverse().join('')).join(' ');

export { backwardStringByWord as my, best, creative };
