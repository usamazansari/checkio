import { Solution } from '../../../common';

/**
 *
 * # Ascending List
 *
 * - Difficulty: Elementary+
 *
 * ## Description
 * Determine whether the sequence of elements items is ascending so that
 * its each element is strictly larger than (and not merely equal to)
 * the element that precedes it.
 *
 * ## Input
 * Iterable with `int`s.
 *
 * ## Output
 * A `boolean`
 *
 * ## Example
 * ```ts
 * isAscending([-5, 10, 99, 123456]) == true;
 * isAscending([99]) == true;
 * isAscending([4, 5, 6, 7, 3, 7, 9]) == false;
 * isAscending([]) == true;
 * isAscending([1, 1, 1, 1]) == false;
 * ```
 *
 * @param {number[]} values
 * @return {*}  {boolean}
 */
function isAscending(values: number[]): boolean {
  const mapped = [...new Set([...values].sort((a, b) => a - b))];
  return mapped.length === values.length && mapped.every((v, i) => v === values[i]);
}

export const Puzzle = new Solution({
  name: 'Ascending List',
  categories: [
    {
      name: 'My',
      fn: isAscending,
    },
  ],
});
