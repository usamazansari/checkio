/**
 * # Three Words
 * 
 * - Difficulty: Elementary
 * 
 * ## Description
 * Let's teach the Robots to distinguish `word`s and `number`s.
 * You are given a string with `word`s and `number`s separated by 
 * whitespaces ` `. The `word`s contains only letters. You should check 
 * if the string contains three `word`s in succession. For example, the 
 * `string` "start 5 one two three 7 end" contains three `word`s in
 * succession.
 * 
 * ## Input
 * A `string` with `word`s.
 * 
 * ## Output
 * The answer as a `boolean`.
 * 
 * ## Example
 * ```ts
 * threeWords("Hello World hello") == True;
 * threeWords("He is 123 man") == False;
 * threeWords("1 2 3 4") == False;
 * threeWords("bla bla bla bla") == True;
 * threeWords("Hi") == False;
 * ```
 * 
 * ## How it is used
 * This teaches you how to work with `string`s and introduces some
 * useful functions.
 * 
 * ## Precondition
 * The input contains `word`s and/or `number`s. There are no mixed 
 * `word`s (letters and digits combined).
 * ```
 * 0 < len(words) < 100
 * ```
 * 
 * @param {string} text
 * @return {*}  {boolean}
 */
function threeWords(text: string): boolean {
  return !!text.match(/\b[A-Za-z]+\b \b[A-Za-z]+\b \b[A-Za-z]+\b/g)?.filter(_ => !!_).length;
}

const best = (text: string): boolean => /\b[a-z]+ [a-z]+ [a-z]+/i.test(text);

const creative = (_: string): boolean => /(?:[A-Za-z]+\b\s?){3}/.test(_);

export { threeWords as my, best, creative };
