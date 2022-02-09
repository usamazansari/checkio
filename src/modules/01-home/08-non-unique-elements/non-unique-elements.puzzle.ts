import { Solution } from '../../../common';

/**
 * # Non Unique Elements
 * 
 * - Difficulty: Elementary+
 * 
 * ## Description
 * 
 * > If you have `50` different plug types, appliances wouldn't be 
 * > available and would be very expensive. But once an electric outlet 
 * > becomes standardized, many companies can design appliances, and 
 * > competition ensues, creating variety and better prices for 
 * > consumers.
 * > 
 * > -- Bill Gates, Microsoft
 * 
 * You are given a non-empty `list` of `integer`s (X). For this task, 
 * you * should return a `list` consisting of only the **non-unique** 
 * elements * in this `list`. To do so you will need to remove all 
 * unique elements (elements which are contained in a given `list` only 
 * once). When solving this task, do not change the order of the `list`. 
 * 
 * Example: `[1, 2, 3, 1, 3]` has `1` and `3` non-unique elements and 
 * result will be `[1, 3, 1, 3]`.
 * 
 * ## Input
 * A `list` of `integer`s.
 * 
 * ## Output
 * An iterable of `integer`s.
 * 
 * ## Example
 * ```ts
 * nonUniqueElements([1, 2, 3, 1, 3]) == [1, 3, 1, 3];
 * nonUniqueElements([1, 2, 3, 4, 5]) == [];
 * nonUniqueElements([5, 5, 5, 5, 5]) == [5, 5, 5, 5, 5];
 * nonUniqueElements([10, 9, 10, 10, 9, 8]) == [10, 9, 10, 10, 9];
 * nonUniqueElements([2]) == [];
 * ```
 * 
 * ## How it is used
 * This mission will help you to understand how to manipulate arrays, 
 * something that is the basis for solving more complex tasks. The 
 * concept can be easily generalized for real world tasks. 
 * 
 * For example: if you need to clarify statistics by removing low 
 * frequency elements (noise).
 * 
 * You can find out more about JavaScript arrays in 
 * [one of our articles featuring lists, tuples, array.array and 
 * numpy.array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Indexed_collections).
 * 
 * ## Precondition
 * `0 < len(data) < 1000`
 *
 * @param {number[]} data
 * @return {*}  {number[]}
 */
function nonUniqueElements(data: number[]): number[] {
  return data.reduce((acc: number[], datum) => {
    if (data.indexOf(datum) !== data.lastIndexOf(datum)) acc.push(datum);
    return acc;
  }, []);
}

export const Puzzle = new Solution({
  name: 'Non Unique Elements',
  categories: [
    {
      name: 'My',
      fn: nonUniqueElements
    },
    {
      name: 'Clear',
      fn: (data: number[]): number[] => (data.filter((x: number) => data.lastIndexOf(x) != data.indexOf(x)))
    },
    {
      name: 'Creative',
      fn(data: number[]): number[] { return data.filter(x => data.indexOf(x) != data.lastIndexOf(x)); }

    },
    {
      name: 'Third Party',
      fn(data: number[]): number[] { return data.filter((e, i, arr) => arr.indexOf(e) !== arr.lastIndexOf(e)); }
    },
    {
      name: 'Uncategorized',
      fn(data: number[]): number[] { return data.filter(x => data.lastIndexOf(x) > data.indexOf(x)); }
    }
  ]
});
