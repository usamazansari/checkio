import { Solution } from '../../../common';

/**
 * # Words Order
 * 
 * - Difficulty: Elementary+
 * 
 * ## Description
 * You have a text and a `list` of words. You need to check if the words
 * in a `list` appear in the same order as in the given text.
 * 
 * ### Cases you should expect while solving this challenge:
 * - a word from the `list` is not in the text - your function should 
 * return `false`;
 * - any word can appear more than once in a text - use only the first
 * one;
 * - two words in the given list are the same - your function should 
 * return `false`;
 * - the condition is case sensitive, which means `hi` and `Hi` are two 
 * different words;
 * - the text includes only English letters and spaces.
 * 
 * ## Input
 * - Two arguments
 *   - The first one is a given text
 *   - the second is a `list` of words.
 * 
 * ## Output
 * A `boolean`.
 * 
 * ## Example:
 * ```ts
 * wordsOrder('hi world im here', ['world', 'here']) == true;
 * wordsOrder('hi world im here', ['here', 'world']) == false;
 * wordsOrder('hi world im here', ['world']) == true;
 * wordsOrder('hi world im here', ['world', 'here', 'hi']) == false;
 * wordsOrder('hi world im here', ['world', 'im', 'here']) == true;
 * wordsOrder('hi world im here', ['world', 'hi', 'here']) == false;
 * wordsOrder('hi world im here', ['world', 'world']) == false;
 * wordsOrder('hi world im here', ['country', 'world']) == false;
 * wordsOrder('hi world im here', ['wo', 'rld']) == false;
 * wordsOrder('', ['world', 'here']) == false;
 * ```
 *
 * @param {string} text
 * @param {string[]} words
 * @return {*}  {boolean}
 */
function wordsOrder(text: string, words: string[]): boolean {
  if (words.length === [...new Set(words)].length) {
    const matcher = words
      .map(word => text.match(new RegExp(`\\b${word}\\b`, 'gi')))
      .filter(Boolean);
    if (!!matcher.length) {
      const indices = words.map(word => text.indexOf(word));
      if (indices.includes(-1)) return false;
      const sorted = [...indices].sort((a, b) => a - b);
      return indices.every((index, i) => index === sorted[i]);
    }
    return false;
  }
  return false;
}

export const Puzzle = new Solution({
  name: 'Words Order',
  categories: [
    {
      name: 'My',
      fn: wordsOrder
    },
    {
      name: 'Best',
      fn: (t: string, a: string[]): boolean => a
        .every((v: string, i: number) =>
          t.split(' ').includes(v)
          && t.split(v)[1].includes(a[i + 1]
            || ''))
    },
    {
      name: 'Creative',
      fn(text: string, words: string[]): boolean {
        return (words.length === new Set(words).size)
          && RegExp(`\\b${words.join('\\b.*\\b')}\\b`).test(text);
      }
    },
    {
      name: 'Uncategorized',
      fn(text: string, words: string[]): boolean {
        let t = text.split(' ');
        if (words.length != new Set(words).size || t.length < words.length) return false;
        for (let i of words) {
          if (t.indexOf(i) == -1) return false;
          t = t.slice(t.indexOf(i) + 1);
        }
        return true;
      }
    },
    {
      name: 'Github Copilot',
      fn(text: string, words: string[]): boolean {
        let textArray = text.split(' ');
        let wordsArray = words.slice();
        let textMap = new Map();
        let wordsMap = new Map();
        for (let i = 0; i < textArray.length; i++) {
          if (textMap.has(textArray[i])) {
            textMap.set(textArray[i], textMap.get(textArray[i]) + 1);
          } else {
            textMap.set(textArray[i], 1);
          }
        }
        for (let i = 0; i < wordsArray.length; i++) {
          if (wordsMap.has(wordsArray[i])) {
            wordsMap.set(wordsArray[i], wordsMap.get(wordsArray[i]) + 1);
          } else {
            wordsMap.set(wordsArray[i], 1);
          }
        }
        let textMapArray = [...textMap];
        let wordsMapArray = [...wordsMap];
        if (textMapArray.length === wordsMapArray.length) {
          for (let i = 0; i < textMapArray.length; i++) {
            if (textMapArray[i][1] !== wordsMapArray[i][1]) {
              return false;
            }
          }
        } else {
          return false;
        }
        return true;
      }
    }
  ]
});
