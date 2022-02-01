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

const best = (value: string): string => value.split('').reverse().join('');

const creative = (value: string): string => value.split('').reverse().join('');

export { backwardString as my, best, creative };
