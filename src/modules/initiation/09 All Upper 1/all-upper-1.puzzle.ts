import { Solution } from '../../../common';

/**
 * # All Upper 1
 *
 * - Difficulty: Elementary
 *
 * ## Description 
 * Check if a given string has all symbols in upper case. If the string
 * is empty or doesn't have any letter in it - function should return
 * `true`.
 *
 * ## Input
 * A `string`.
 *
 * ## Output
 * A `boolean`.
 *
 * ## Example
 * ```ts
 * isAllUpper('ALL UPPER') == true;
 * isAllUpper('all lower') == false;
 * isAllUpper('mixed UPPER and lower') == false;
 * isAllUpper('') == true;
 * ```
 *
 * Precondition: a-z, A-Z, 1-9 and spaces
 *
 * @param {string} text
 * @return {*}  {boolean}
 */
function isAllUpper(text: string): boolean {
  return text === text.toUpperCase();
}

export const Puzzle: Solution = new Solution({
  name: 'All Upper I',
  categories: [
    {
      name: 'My',
      fn: isAllUpper,
    },
    {
      name: 'Clear',
      fn: (text: string): boolean => text == text.toUpperCase(),
    },
    {
      name: 'Creative',
      fn(text: string): boolean { return text == text.toUpperCase(); },
    },
    {
      name: 'Third Party',
      fn: (text: string): boolean => { return text === text.toUpperCase(); },
    },
    {
      name: 'Uncategorized',
      fn(text: string): boolean {
        return !Boolean(text.match(/[a-z]/));
      },
    }
  ]
});
