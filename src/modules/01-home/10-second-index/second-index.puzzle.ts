import { Solution } from '../../../common';

/**
 * # Second Index
 * 
 * - Difficulty: Elementary+
 * 
 * ## Description
 * You are given two `string`s and you have to find an index of the 
 * second occurrence of the second `string` in the first one.
 * 
 * Let's go through the first example where you need to find the second 
 * occurrence of `s` in a word `sims`.
 * It’s easy to find its first occurrence with a function `indexOf` 
 * which will point out that `s` is the first symbol in a word `sims` 
 * and therefore the index of the first occurrence is `0`. But we have 
 * to find the second `s` which is `4`th in a row and that means that 
 * the index of the second occurrence (and the answer to a question) is 
 * `3`.
 * 
 * ## Input
 * Two `string`s.
 * 
 * ## Output
 * `Int` or `undefined`
 * 
 * ## Example
 * ```ts
 * secondIndex('sims', 's') == 3;
 * secondIndex('find the river', 'e') == 12;
 * secondIndex('hi', ' ')  == undefined;
 * ```
 *
 * @param {string} text
 * @param {string} symbol
 * @return {*}  {(number | undefined)}
 */
function secondIndex(text: string, symbol: string): number | undefined {
  const first = text.indexOf(symbol);
  const second = text.indexOf(symbol, first + 1);
  return (!!(first + 1))
    ? (!!(second + 1))
      ? second
      : undefined
    : undefined;
}

export const Puzzle = new Solution({
  name: 'Second Index',
  categories: [
    {
      name: 'My',
      fn: secondIndex
    },
    {
      name: 'Clear',
      fn(text: string, symbol: string): number | undefined {
        const p1 = text.indexOf(symbol);
        if (p1 < 0) return undefined;
        const p2 = text.indexOf(symbol, p1 + 1);
        return p2 < 0 ? undefined : p2;
      }
    },
    {
      name: 'Creative',
      fn: (t: string, s: string): number | undefined => ([...t.matchAll(new RegExp(s)), 0, 0][1] as RegExpMatchArray).index
    },
    {
      name: 'Uncategorized',
      fn(text: string, symbol: string): number | undefined {
        var [x, n] = [0, 0];
        if (text.indexOf(symbol) >= 0 && text.indexOf(symbol) < text.length - 1) {
          n = text.indexOf(symbol) + 1;
          x = text.slice(n).indexOf(symbol);
        }
        return x >= 0 ? x + n : undefined;
      }
    }
  ]
});
