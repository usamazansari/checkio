/**
 * # End Zeros
 *
 * - Difficulty: Elementary
 *
 * ## Description
 * Try to find out how many zeros a given number has at the end.
 *
 * ## Input
 * A positive `int`.
 *
 * ## Output
 * An `int`.
 *
 * ## Example
 * ```ts
 * endZeros(0) == 1;
 * endZeros(1) == 0;
 * endZeros(10) == 1;
 * endZeros(101) == 0;
 * endZeros(245) == 0;
 * endZeros(100100) == 2;
 * ```
 *
 *
 * @param {number} value
 * @return {*}  {number}
 */
function endZeros(value: number): number {
  return value.toString().match(/0*$/g)?.join('').length ?? 0;
}

export { endZeros };
