import { Solution } from '../../../common';

/**
 * # First Word Simplified
 *
 * - Difficulty: Elementary
 *
 * ## Description
 * You are given a string where you have to find its first word.
 *
 * 
 * This is a simplified version of the [First 
 * Word](https://js.checkio.org/en/mission/first-word) mission.
 *
 * - Input string consists of only english letters and spaces.
 * - There aren’t any spaces at the beginning and the end of the string.
 *
 * ---
 *
 * ## Input
 * A string.
 *
 * ---
 *
 * ## Output
 * A string.
 *
 * ## Example
 *
 * ```ts
 * firstWord('Hello world') == 'Hello'
 * ```
 *
 * ## How it is used
 * The first word is a command in a command line.
 *
 * ## Precondition
 * Text can contain a-z, A-Z and spaces.
 *
 * @param text The input string
 * @returns 
 */
function firstWord(text: string): string {
  return text.split(' ')[0].trim();
}

export const Puzzle: Solution = new Solution({
  name: 'First Word',
  categories: [
    {
      name: 'My',
      fn: firstWord
    },
    {
      name: 'Clear',
      fn(text: string): string { return text.split(' ')[0]; }
    },
    {
      name: 'Creative',
      fn: (s: string): string => s.slice(s.search(/\w/), 0o1 + s.search(/\w\b/))
    },
    {
      name: 'Uncategorized',
      fn(text: string): string {
        return (!(text.indexOf(' ') + 1))
          ? text
          : text.substr(0, text.indexOf(' '));
      }
    }
  ]
});
