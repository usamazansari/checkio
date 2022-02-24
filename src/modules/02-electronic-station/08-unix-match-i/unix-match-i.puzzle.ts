import { Solution } from '../../../common';

/**
 * # Unix Match I
 * 
 * Difficulty: Moderate
 * 
 * ## Description
 * Sometimes you find yourself in a situation when, among a huge number 
 * of files on your computer or in a separate folder, you need to find 
 * files of a certain type. For example, images with the extension 
 * `.jpg` or documents with the extension `.txt`, or even files that 
 * have the word `butterfly` in their name. 
 * 
 * Doing this manually can be time-consuming. `Matching` or patterns for
 * searching files by a specific mask are just what you need for these 
 * sort of challenges.
 * 
 * This mission will help you understand how this works.
 * 
 * You need to find out if the given unix pattern matches the given 
 * filename.
 * 
 * Let me show you what I mean by matching the filenames in the 
 * unix-shell. 
 * 
 * For example, `*` matches everything and `*.txt` matches all of the 
 * files that have `txt` extension. 
 * Here is a small table that shows symbols that can be used in 
 * patterns.
 * 
 * | Symbol | Description                  |
 * | :----: | ---------------------------- |
 * |   *    | matches everything           |
 * |   ?    | matches any single character |
 * 
 * ## Input
 * - Two arguments
 * - Both `string`s.
 * 
 * ## Output
 * A `boolean`.
 * 
 * ## Example:
 * ```ts
 * unixMatch('somefile.txt' , '*')        == true;
 * unixMatch('other.exe'    , '*')        == true;
 * unixMatch('my.exe'       , '*.txt')    == false;
 * unixMatch('log1.txt'     , 'log?.txt') == true;
 * unixMatch('log12.txt'    , 'log?.txt') == false
 * ```
 * 
 * ## How it is used
 * In the unix-shell
 * 
 * ## Precondition
 * `0 < filename.length < 100`
 *
 * @param {string} filename
 * @param {string} pattern
 * @return {*}  {boolean}
 */
function unixMatch(filename: string, pattern: string): boolean {
  const re = new RegExp(pattern
    .replace('.', '\\.')
    .replace(/\?/g, '.')
    .replace(/\*/g, '.*'));
  return re.test(filename);
}

export const Puzzle = new Solution({
  name: 'Unix Match I',
  categories: [
    {
      name: 'My',
      fn: unixMatch
    }
  ]
});
