/**
 * # Is Even
 * 
 * - Difficulty: Elementary
 * 
 * ## Description
 * Check if the given `number` is even or not. Your function should
 * return `true` if the number is `even`, and `false` if the number is 
 * `odd`.
 * 
 * ## Input
 * An `int`.
 * 
 * ## Output
 * A `boolean`.
 * 
 * ## Example
 * ```ts
 * isEven(2) == true;
 * isEven(5) == false;
 * isEven(0) == true;
 * ```
 * 
 * ## How it’s used
 * (math is used everywhere)
 * 
 * ## Precondition
 * both given `int`s should be between `-1000` and `1000`
 *
 * @param {number} num
 * @return {*}  {boolean}
 */
function isEven(num: number): boolean {
  return !(num % 2);
}

const best = (num: number): boolean => !(num % 2);

const creative = (x: number) => !!(x & 1 ^ 1);

export { isEven as my, best, creative };
