import { Solution } from '../../../common';

/**
 * # Nearest Value
 * 
 * - Difficulty: Elementary+
 * 
 * ## Description
 * Find the nearest value to the given one.
 * 
 * You are given a list of values as `Array` form and a value for which
 * you need to find the nearest one.
 * 
 * For example, we have the following set of numbers: 
 * ```
 * [4, 7, 10, 11, 12, 17]
 * ```
 * and we need to find the nearest value to the number `9`.
 * If we sort this set in the ascending order, then to the left of
 * number `9` will be number `7` and to the right - will be number `10`. 
 * But `10` is closer than `7`, which means that the correct answer is
 * `10`.
 * 
 * ### A few clarifications:
 * - If two numbers are at the same distance, you need to choose the
 * smallest one;
 * - The set of numbers is always non-empty, i.e. the `size` is `>=1`;
 * - The given value can be in this set, which means that it’s the
 * answer;
 * - The set can contain both positive and negative numbers, but they 
 * are always integers;
 * - The set isn’t sorted and consists of unique numbers.
 * 
 * ## Input
 * - Two arguments.
 *   - A list of values in the `Array` form.
 *   - The sought value is an `int`.
 * 
 * ## Output
 * `int`.
 * 
 * ## Example
 * ```ts
 * nearestValue([4, 7, 10, 11, 12, 17], 9) == 10;
 * nearestValue([4, 7, 10, 11, 12, 17], 8) == 7;
 * nearestValue([4, 8, 10, 11, 12, 17], 9) == 8;
 * nearestValue([4, 9, 10, 11, 12, 17], 9) == 9;
 * nearestValue([4, 7, 10, 11, 12, 17], 0) == 4;
 * ```
 * 
 * @param {number[]} values
 * @param {number} search
 * @return {*}  {number}
 */
function nearestValue(values: number[], search: number): number {
  const minDiff = Math.min(...values.map(_ => Math.abs(_ - search)));
  return values.includes(search - minDiff) ? search - minDiff : search + minDiff;
}

export const Puzzle = new Solution({
  name: 'Nearest Value',
  categories: [
    {
      name: 'My',
      fn: nearestValue,
    },
    {
      name: 'Clear',
      fn: (v: number[], s: number): number => v.sort((a, b) => (s - a) ** 2 - (s - b) ** 2 || a - b)[0]
    },
    {
      name: 'Creative',
      fn: (
        L: number[],
        n: number,
        N: number[] = [n, ...L].sort((a, b) => a - b),
        i: number = N.indexOf(n),
        { [i - 1]: p = -Infinity, [i + 1]: x = Infinity } = N): number => L.includes(n)
          ? n
          : (n - p <= x - n ? p : x)
    },
    {
      name: 'Uncategorized',
      fn(values: number[], one: number): number {
        let arr = values.sort((x, y) => x - y).map(x => Math.abs(x - one));
        return values[arr.indexOf(Math.min(...arr))];
      }
    }
  ]
});
