import { Solution } from '../../../common';

/**
 * # Surjection Strings
 * 
 * - Difficulty: Simple
 * 
 * ## Description
 * *Maybe it's a cipher? Maybe, but we don’t know for sure.*
 * 
 * *Maybe you can call it "[homomorphism](https://en.wikipedia.org/wiki/String_operations#String_homomorphism)"?*
 * *I wish I know this word before.*
 * 
 * You need to check that the 2 given `string`s are isometric. This 
 * means that a character from one `string` can become a match for 
 * characters from another `string`.
 * 
 * One character from one `string` can correspond only to one character 
 * from another `string`. Two or more characters of one `string` can 
 * correspond to one character of another `string`, but not vice versa.
 * 
 * ## Input
 * - Two arguments
 * - Both `string`s.
 * 
 * ## Output
 * A `boolean`.
 * 
 * ## Example
 * ```ts
 * isometricStrings('add', 'egg') == true;
 * isometricStrings('foo', 'bar') == false;
 * isometricStrings('', '') == true;
 * isometricStrings('all', 'all') == true;
 * isometricStrings('gogopy', 'doodle') == false;
 * ```
 * 
 * ## Precondition
 * - both `string`s are the same size
 *
 * @param {string} line1
 * @param {string} line2
 * @return {*}  {boolean}
 */
function isometricStrings(line1: string, line2: string): boolean {
  const unique1 = [...new Set(line1.split(''))];
  const unique2 = [...new Set(line2.split(''))];

  unique2.forEach((char: string, index: number) => {
    line1 = line1.replace(new RegExp(unique1[index], 'g'), char);
  });

  return line1 === line2;
}

export const Puzzle = new Solution({
  name: 'Surjection Strings',
  categories: [
    {
      name: 'My',
      fn: isometricStrings
    }
  ]
});
