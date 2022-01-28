/**
 * # Sum Numbers
 * 
 * - Difficulty: Elementary
 * 
 * ## Description
 * In a given text you need to sum the `number`s. Only separated 
 * `number`s should be counted. If a `number` is part of a word it 
 * shouldn't be counted.
 * 
 * The text consists from `number`s, spaces ` ` and english letters
 * `[A-Za-z]`
 * 
 * ## Input
 * A `string`.
 * 
 * ## Output
 * An `int`.
 * 
 * ## Example
 * ```ts
 * sumNumbers('hi') == 0;
 * sumNumbers('who is 1st here') == 0;
 * sumNumbers('my numbers is 2') == 2;
 * sumNumbers('This picture is an oil on canvas '
 *  'painting by Danish artist Anna '
 *  'Petersen between 1845 and 1910 year') == 3755;
 * sumNumbers('5 plus 6 is') == 11;
 * sumNumbers('') == 0;
 * ```
 * 
 * @param {string} test
 * @return {*}  {number}
 */
function sumNumbers(test: string): number {
  return test.match(/\b\d*\b/g)?.filter(_ => !!_)
    .map(_ => +_)
    .reduce((acc, _) => { acc += _; return acc; }, 0) ?? 0;
}

const best = (text: string): number => text.split(' ').reduce((a, w) => /^[0-9]+$/.test(w)
  ? a + +w
  : a, 0);

const creative = (a: string) => a.split(/ /).reduce((a, b) => a + ~~+b, 0);

export { sumNumbers as my, best, creative };
