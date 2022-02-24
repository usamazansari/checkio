import { Solution } from '../../../common';

/**
 * # Verify Anagrams
 * 
 * - Difficulty: Simple
 * 
 * ## Description
 * An anagram is a type of word play, the result of rearranging the 
 * letters of a word or phrase to produce a new word or phrase, using 
 * all the original letters exactly once. Two words are anagrams to each
 *  other if we can get one from another by rearranging the letters. 
 * 
 * Anagrams are case-insensitive and don't take account whitespaces. 
 * 
 * For example: 
 * - `Gram Ring Mop` and `Programming` are anagrams.
 * - But `Hello` and `Ole Oh` are not.
 * 
 * You are given two words or phrase. 
 * Try to verify are they anagrams or not.
 * 
 * ## Input
 * - Two arguments.
 * - Both `string`s.
 * 
 * Output
 * A `boolean`.
 * 
 * ## Example
 * ```ts
 * verify_anagrams('Programming', 'Gram Ring Mop') == True;
 * verify_anagrams('Hello', 'Ole Oh') == False;
 * verify_anagrams('Kyoto', 'Tokyo') == True;
 * ```
 * 
 * ## How it is used
 * Anagramming can be a fun way to train your brain, but they have and 
 * another application. Psychologists use anagram-oriented tests, often 
 * called `Anagram Solution Tasks`, to assess the implicit memory. 
 * 
 * Anagrams are connected to pseudonyms, by the fact that they may 
 * conceal or reveal, or operate somewhere in between like a mask that 
 * can establish identity. 
 * 
 * In addition to this, multiple anagramming is a technique sometimes 
 * used to solve some kinds of cryptograms.
 * 
 * ## Precondition
 * - `0 < |first_word| < 100;`
 * - `0 < |second_word| < 100;`
 * - Words contain only ASCII latin letters and whitespaces.
 *
 * @param {string} line1
 * @param {string} line2
 * @return {*}  {boolean}
 */
function verifyAnagrams(line1: string, line2: string): boolean {

  function normalize({ input = '' }: { input: string; }): string {
    return input
      .toLowerCase()
      .split(' ')
      .join('')
      .split('')
      .sort()
      .join('');
  }

  return normalize({ input: line1 }) === normalize({ input: line2 });
}

export const Puzzle = new Solution({
  name: 'Verify Anagrams',
  categories: [
    {
      name: 'my',
      fn: verifyAnagrams
    }
  ]
});
