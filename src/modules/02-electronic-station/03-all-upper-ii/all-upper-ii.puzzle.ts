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
    },
    {
      name: 'Best',
      fn(text: string): boolean {
        return /^(?=[A-Z])[^a-z]*$/.test(text);
      }
    },
    {
      name: 'Creative',
      fn: (s: string): boolean => /^[A-Z][A-Z\d\s]+$/.test(s)
    },
    {
      name: 'Third Party',
      fn(text: string): boolean {

        if (text === '') return false;
        let spaceFlag = true;

        for (let i = 0; i < text.length; i++) {
          let asciiCode = text.charCodeAt(i);

          if (asciiCode === 32) {
            continue;
          }
          if (asciiCode >= 48 && asciiCode <= 57) {
            continue;
          }
          if (!(asciiCode <= 90 && asciiCode >= 65)) {
            return false;
          }

          if (text[i] != ' ') {
            spaceFlag = false;
          }
        }

        if (spaceFlag === true) {
          return false;
        }
        return true;
      }

    },
    {
      name: 'Uncategorized',
      fn(text: string): boolean {
        return text.toUpperCase() == text
          && text.replace(/[^a-zA-Z]/g, '').length > 0;
      }
    }
  ]
});
