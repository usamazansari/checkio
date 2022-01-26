import assert from "assert";

/**
 * # Replace First
 *
 * - Difficulty: Elementary
 *
 * ## Description
 * In a given array the first element should become the last one. An
 * empty array or array with only one element should stay the same.
 *
 * ## Input
 * `Array`.
 *
 * ## Output
 * `Array`.
 * 
 * ## Example
 * ```ts
 * replaceFirst([1, 2, 3, 4]) == [2, 3, 4, 1];
 * replaceFirst([1]) == [1];
 * replaceFirst([]) == [];
 * ```
 *
 * @param {number[]} values
 * @return {*}  {number[]}
 */
function replaceFirst(values: number[]): number[] {
  const popped = values.shift();
  if (!!popped) values.push(popped);
  return values;
}

const best = (values: number[]): number[] => values.length > 0
  ? values.slice(1).concat(values[0])
  : [];

const creative = (values: number[]): number[] => {
  const [first, ...rest] = values;
  return first ? [...rest, first] : [];
};

export { replaceFirst as my, best, creative };
