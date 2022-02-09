import { Solution } from '../../../common';

/**
 * # First Word
 * 
 * - Difficulty: Elementary+
 * 
 * ## Description
 * You are given a `string` where you have to find its first word.
 * 
 * When solving a task pay attention to the following points:
 * - There can be `dot`s and `comma`s in a `string`.
 * - A `string` can start with a letter or, for example, a dot `.` or
 * space ` `.
 * - A word can contain an apostrophe ` ` and it's a part of a word.
 * - The whole text can be represented with one word and that's it.
 * 
 * ## Input
 * A `string`.
 * 
 * ## Output
 * A `string`.
 * 
 * ## Example
 * ```ts
 * firstWord("Hello world") == "Hello";
 * firstWord("greetings, friends") == "greetings";
 * ```
 * 
 * ## How it is used
 * The first word is a command in a command line
 * 
 * ## Precondition
 * The text can contain 
 * ```
 * a-z
 * A-Z
 * ,
 * .
 * '
 * ```
 *
 * @param {string} text
 * @return {*}  {string}
 */
function firstWord(text: string): string {
  return text.match(/[A-Za-z\']*/g)?.filter(_ => !!_)[0] ?? '';
}

export const Puzzle = new Solution({
  name: 'First Word',
  categories: [
    {
      name: 'My',
      fn: firstWord
    },
    {
      name: 'Clear',
      fn(text: string): string { return text.match(/[A-Za-z']+/)?.filter(_ => !!_)[0] ?? ''; }
    },
    {
      name: 'Creative',
      fn(text: string): string { return text.match(/[^ .,]+/)?.filter(_ => !!_)[0] ?? ''; }
    },
    {
      name: 'Uncategorized',
      fn: (text: string): string => text.match(/[\w\']+/g)?.filter(_ => !!_)[0] ?? ''
    }
  ]
});
