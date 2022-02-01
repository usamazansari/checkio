/**
 * # Acceptable Password I
 *
 * - Difficulty: Elementary
 *
 * ## Description
 * You are the beginning of a password series. Every mission will be
 * based on the previous one. Going forward the missions will become
 * slightly more complex.
 *
 * In this mission you need to create a password verification function.
 *
 * Those are the verification conditions:
 * - the length should be bigger than 6.
 *
 * ## Input
 * A `string`.
 *
 * ## Output
 * A `boolean`.
 *
 * ## Example
 *
 * ```ts
 * isAcceptablePassword('short')      == false;
 * isAcceptablePassword('muchlonger') == true;
 * isAcceptablePassword('ashort')     == false;
 * ```
 *
 * ## How it’s used
 * - For password verification form
 * - Also it’s good to learn how the task can be evaluated.
 *
 * @param {string} password
 * @return {*}  {boolean}
 */
function isAcceptablePassword(password: string): boolean {
  return password.length > 6;
}

const best = (password: string): boolean => password.length > 6;

const creative = (_: string) => !!_[0b110];

export { isAcceptablePassword as my, best, creative };
