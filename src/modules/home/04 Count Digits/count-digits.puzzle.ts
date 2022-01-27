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
 * `[A-Z][a-z]`
 * 
 * ## Input
 * A `string`.
 * 
 * `Output`
 * An `int`.
 * 
 * ## Example
 * ```ts
 * countDigits('hi') == 0;
 * countDigits('who is 1st here') == 1;
 * countDigits('my numbers is 2') == 1;
 * countDigits('This picture is an oil on canvas ';
 *  'painting by Danish artist Anna '
 *  'Petersen between 1845 and 1910 year') == 8;
 * countDigits('5 plus 6 is') == 2;
 * countDigits('') == 0;
 * ```
 * 
 * @param {string} text
 * @return {*}  {number}
 */
function countDigits(text: string): number {
  return text.match(/\d/g)?.filter(_ => !!_).length ?? 0;
}

export { countDigits as my };
