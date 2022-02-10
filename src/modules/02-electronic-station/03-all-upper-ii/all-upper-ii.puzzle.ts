import { Solution } from '../../../common';

/**
 * # All Upper II
 * 
 * - Difficulty: Elementary
 * 
 * ## Description
 * Check if a given `string` has all symbols in upper case. If the 
 * `string` is empty or doesn't have any `letter` in it - function 
 * should return `false`.
 * 
 * ## Input
 * A `string`.
 * 
 * ## Output: 
 * A `boolean`.
 * 
 * ## Example:
 * ```ts
 * isAllUpper('ALL UPPER') == true;
 * isAllUpper('all lower') == false;
 * isAllUpper('mixed UPPER and lower') == false;
 * isAllUpper('') == false;
 * ```
 * 
 * ## Precondition
 * `a-z`, `A-Z`, `1-9` and spaces ` `
 * 
 * @param {string} text
 * @return {*}  {boolean}
 */
function isAllUpper(text: string): boolean {
  return /[A-Z]+/g.test(text.trim())
    ? text.trim().toUpperCase() === text
    : false;
}

export const Puzzle = new Solution({
  name: 'All Upper II',
  categories: [
    {
      name: 'My',
      fn: isAllUpper
    }
  ]
});
