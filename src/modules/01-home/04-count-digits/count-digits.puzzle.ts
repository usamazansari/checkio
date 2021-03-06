import { Solution } from '../../../common';

/**
 * # Count Digits
 * 
 * - Difficulty: Elementary
 * 
 * ## Description
 * You need to count the number of digits in a given `string`.
 * 
 * ## Input
 * A `string`.
 * 
 * ## Output
 * An `int`.
 * 
 * ## Example
 * ```ts
 * countDigits('hi') == 0;
 * countDigits('who is 1st here') == 1;
 * countDigits('my numbers is 2') == 1;
 * countDigits('This picture is an oil on canvas '
 *  'painting by Danish artist Anna '
 *  'Petersen between 1845 and 1910 year') == 8;
 * countDigits('5 plus 6 is') == 2;
 * countDigits('') == 0;
 * ```
 * 
 * @param {string} text
 * @return {*}  {number}
 */
function countDigits(text: string): number {
  return text.match(/\d/g)?.filter(_ => !!_).length ?? 0;
}

export const Puzzle = new Solution({
  name: 'Count Digits',
  categories: [
    {
      name: 'My',
      fn: countDigits
    },
    {
      name: 'Clear',
      fn(text: string): number { return [...text].filter(c => /[0-9]/.test(c)).length; }
    },
    {
      name: 'Creative',
      fn(text: string): number { return [...text].filter(e => !isNaN(parseInt(e))).length; }
    },
    {
      name: 'Uncategorized',
      fn: (text: string) => text.match(/\d/g) ? text.match(/\d/g)?.filter(_ => !!_).length : 0
    }
  ]
});
