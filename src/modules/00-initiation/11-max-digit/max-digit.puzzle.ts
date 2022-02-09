import { Solution } from '../../../common';

/**
 * # Max Digit
 *
 * - Difficulty: Elementary
 *
 * ## Description
 * You have a number and you need to determine which digit in this
 * number is the biggest.
 * 
 * ## Input
 * A positive `int`.
 *
 * ## Output
 * An `int` (0-9).
 * 
 * ## Example
 * ```ts
 * maxDigit(0) == 0;
 * maxDigit(52) == 5;
 * maxDigit(634) == 6;
 * maxDigit(1) == 1;
 * maxDigit(10000) == 1;
 * ```
 *
 * @param {number} value
 * @return {*}  {number}
 */
function maxDigit(value: number): number {
  return Math.max(...`${value}`.split('').map(_ => +_));
}

export const Puzzle = new Solution({
  name: 'Max Digit',
  categories: [
    {
      name: 'My',
      fn: maxDigit,
    },
    {
      name: 'Clear',
      fn(value: number): number { return Math.max(...value.toString().split('').map(_ => +_)); }
    },
    {
      name: 'Creative',
      fn(value: number): number { return Math.max(...Array.from(`${value}`).map(Number)); }
    },
    {
      name: 'Third Party',
      fn(value: number): number { return [...String(value)].map(Number).sort((a, b) => b - a)[0]; }
    },
    {
      name: 'My',
      fn(value: { toString: () => any; }): number { return parseInt([...value.toString()].sort((x, y) => (y - x))[0]); }
    }
  ]
});
