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

export { splitList as my };
