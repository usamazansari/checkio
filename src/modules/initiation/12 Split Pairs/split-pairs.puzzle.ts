/**
 * # Split Pairs
 * 
 * - Difficulty: Elementary
 * 
 * ## Description
 * Split the string into pairs of two characters. If the string contains
 * an odd number of characters, then the missing second character of the
 * final pair should be replaced with an underscore `_`.
 * 
 * ## Input
 * A `string`.
 * 
 * ## Output
 * An array of `string`s.
 * 
 * ## Example:
 * ```ts
 * splitPairs('abcd') == ['ab', 'cd'];
 * splitPairs('abc') == ['ab', 'c_'];
 * splitPairs('abcdf') == ['ab', 'cd', 'f_'];
 * splitPairs('a') == ['a_'];
 * splitPairs('') == []
 * ```
 * 
 * ## Precondition
 * `0<=len(str)<=100`
 *
 * @param {string} text
 * @return {*}  {string[]}
 */
function splitPairs(text: string): string[] {
  let output: string[] = [];
  const splitted = text.split('');
  for (let index = 0; index < splitted.length / 2; index++) {
    const element = splitted[2 * index];
    const next = splitted[2 * index + 1] ?? '_';
    output.push(`${element}${next}`);
  }
  return output;
}

export { splitPairs as my };
