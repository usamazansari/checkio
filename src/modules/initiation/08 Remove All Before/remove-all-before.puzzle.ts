/**
 * # Remove All Before
 *
 * - Difficulty: Easy
 *
 * ## Description
 * Not all of the elements are important. What you need to do here is to
 * remove from the array all of the elements before the given one.
 *
 * `[1, 2, ◽3◽ , 4, 5]`
 * 
 * For the illustration we have a array `[1, 2, 3, 4, 5]` and we need to
 * remove all elements that go before `3` - which is `1` and `2`.
 *
 * We have two edge cases here:
 * 1. if a cutting element cannot be found, then the array shoudn't be
 * changed.
 * 2. if the array is empty, then it should remain empty.
 *
 * ## Input
 * Array and the border element.
 *
 * ## Output
 * Array.
 *
 * ## Example
 * ```ts
 * removeAllBefore([1, 2, 3, 4, 5], 3) == [3, 4, 5];
 * removeAllBefore([1, 1, 2, 2, 3, 3], 2) == [2, 2, 3, 3];
 * removeAllBefore([1, 1, 2, 4, 2, 3, 4], 2) == [2, 4, 2, 3, 4];
 * removeAllBefore([1, 1, 5, 6, 7], 2) == [1, 1, 5, 6, 7];
 * removeAllBefore([], 0) == [];
 * ```
 *
 * @param {number[]} values
 * @param {number} b
 * @return {*}  {number[]}
 */
function removeAllBefore(values: number[], b: number): number[] {
  return values.includes(b)
    ? values.slice(values.indexOf(b),)
    : values;
}

export { removeAllBefore as my };
