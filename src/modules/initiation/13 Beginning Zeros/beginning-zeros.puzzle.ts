import assert from "assert";

/**
 * # Beginning Zeros
 * 
 * - Difficulty: Elementary+
 * 
 * You have a `string` that consist only of digits. You need to find
 * how many zero digits `0` are at the beginning of the given `string`.
 * 
 * ## Input
 * A `string`, that consist of `digits`.
 * 
 * ## Output
 * An `int`.
 * 
 * ## Example
 * ```ts
 * beginningZeros('100') == 0;
 * beginningZeros('001') == 2;
 * beginningZeros('100100') == 0;
 * beginningZeros('001001') == 2;
 * beginningZeros('012345679') == 1;
 * beginningZeros('0000') == 4;
 * ```ts
 * 
 * ## Precondition
 * `0-9`
 *
 * @param {string} text
 * @return {*}  {number}
 */
function beginningZeros(text: string): number {
  return !!(+text)
    ? text.length - `${+text}`.length
    : text.length;
}

export { beginningZeros as my };
