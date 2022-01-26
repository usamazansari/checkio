/**
 * # Number Length
 * 
 * - Difficulty: Elementary
 * 
 * ## Description
 * You have a positive integer. Try to find out how many digits it has?
 * 
 * ## Input
 * A positive `int`.
 * 
 * ## Output
 * An `int`.
 * 
 * ## Example
 * ```ts
 * numberLength(10) == 2;
 * numberLength(0) == 1;
 * numberLength(4) == 1;
 * numberLength(44) == 2;
 * ```
 *
 * @param {number} value
 * @return {*}  {number}
 */
function numberLength(value: number): number {
  return `${Math.abs(value)}`.length;
}

export { numberLength };
