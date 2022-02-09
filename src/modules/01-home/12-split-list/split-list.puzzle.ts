import { Solution } from '../../../common';

/**
 * # Split List
 * 
 * - Difficult: Simple
 * 
 * ## Description
 * You have to split a given `array` into two `array`s. If it has an 
 * `odd` amount of elements, then the first `array` should have more 
 * elements. 
 * If it has no elements, then two empty `array`s should be returned.
 * 
 * ## Input
 * `List`.
 * 
 * ## Output
 * `List` of two `list`s.
 * 
 * ## Example:
 * ```ts
 * splitList([1, 2, 3, 4, 5, 6]) == [[1, 2, 3], [4, 5, 6]];
 * splitList([1, 2, 3]) == [[1, 2], [3]];
 * splitList([1, 2, 3, 4, 5]) == [[1, 2, 3], [4, 5]];
 * splitList([1]) == [[1], []];
 * splitList([]) == [[], []];
 * ```
 *
 * @param {number[]} values
 * @return {*}  {number[][]}
 */
function splitList(values: number[]): number[][] {
  const first = ((values.length + 1) / 2) >> 0;
  return [values.slice(0, first), values.slice(first,)];
}

export const Puzzle = new Solution({
  name: 'Split List',
  categories: [
    {
      name: 'My',
      fn: splitList
    },
    {
      name: 'Clear',
      fn(v: number[]): number[][] { return [v.splice(0, Math.ceil(v.length / 2)), v]; }
    },
    {
      name: 'Creative',
      fn: (a: number[]): number[][] => [a.splice(0, a.length + 1 >> 1), a]
    },
    {
      name: 'Third Party',
      fn(values: number[]): number[][] {
        var splitter = Math.ceil(values.length / 2);
        return [values.slice(0, splitter), values.slice(splitter)];
      }
    },
    {
      name: 'Uncategorized',
      fn(items: number[]): number[][] {
        let idx = Math.trunc(items.length / 2) + items.length % 2;
        return [items.slice(0, idx), items.slice(idx)];
      }
    }
  ]
});
