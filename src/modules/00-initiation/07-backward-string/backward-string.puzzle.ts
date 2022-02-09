import { Solution } from '../../../common';

/**
 * # Backward String
 *
 * - Difficulty: Elementary
 *
 * You should return a given string in reverse order.
 *
 * ## Input
 * A `string`.
 *
 * ## Output
 * A `string`.
 *
 * ## Example
 *
 * ```ts
 * backwardString('val') == 'lav';
 * backwardString('') == '';
 * backwardString('ohho') == 'ohho';
 * backwardString('123456789') == '987654321';
 * ```
 *
 * @param {string} value
 * @return {*}  {string}
 */
function backwardString(value: string): string {
  return value.split('').reverse().join('');
}

export const Puzzle = new Solution({
  name: 'Backward String',
  categories: [
    {
      name: 'My',
      fn: backwardString
    },
    {
      name: 'Clear',
      fn(value: string): string { return value.split('').reverse().join(''); }

    },
    {
      name: 'Creative',
      fn(value: string): string { return value.split('').reverse().join(''); }

    },
    {
      name: 'Third Party',
      fn(value: string) { return value.split('').reverse().join(''); }
    },
    {
      name: 'Uncategorized',
      fn(value: string): string { return [...value].reverse().join(''); }
    }
  ]
});
