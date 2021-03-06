import { Solution } from '../../../common';

/**
 * # Easy Unpack
 *
 * - Difficulty: Elementary
 *
 * ## Description
 * Your mission here is to create a function that sets an `array` and
 * returns a `tuple` with `3` elements - the first, third and second
 * element from the last for the given array.
 *
 * ---
 *
 * ## Input
 * - A tuple
 * - At least 3 elements long
 *
 * ---
 *
 * ## Output
 * A tuple.
 *
 * ---
 *
 * ## Examples
 *
 * ```ts
 * easyUnpack([1, 2, 3, 4, 5, 6, 7, 9]) == [1, 3, 7]
 * easyUnpack([1, 1, 1, 1]) == [1, 1, 1]
 * easyUnpack([6, 3, 7]) == [6, 7, 3]
 * ```
 *
 * @param {any[]} values Tuple of values
 * @return {*}  {any[]} Tuple of values
 */
function easyUnpack(values: any[]): any[] {
  return [
    values[0],
    values[2],
    values[values.length - 2]
  ];
}

export const Puzzle = new Solution({
  name: 'Easy Unpack',
  categories: [
    {
      name: 'My',
      fn: easyUnpack
    },
    {
      name: 'Clear',
      fn: (values: any[]): any[] => {
        return [values[0], values[2], values[values.length - 2]];
      }
    },
    {
      name: 'Creative',
      fn: (e: any[], [f, , t] = e) => {
        return [f, t, e.reverse()[1]];
      }
    },
    {
      name: 'Uncategorized',
      fn(values: any[]): any[] {
        return [values[0], values[2], values[values.length - 2]];
      }
    }
  ]
});
