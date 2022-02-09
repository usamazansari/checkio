import { Solution } from '../../../common';

/**
 * # Split Pairs
 * 
 * - Difficulty: Elementary+
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

export const Puzzle = new Solution({
  name: 'Split Pairs',
  categories: [
    {
      name: 'My',
      fn: splitPairs,
    },
    {
      name: 'Clear',
      fn: (t: string) => (t + '_').match(/../g) || []
    },
    {
      name: 'Creative',
      fn: (s: string) => s.padEnd(s.length + s.length % 2, '_')
        .split(/(\w{2})/)
        .filter(n => !!n)
    },
    {
      name: 'Third Party',
      fn(text: string): string[] {
        if (text.length < 0 || text.length > 100) return ['0<=len(str)<=100'];
        var tabStr = text.split('');
        var tabRes = [];
        var pairCount = 0;
        var pairConstr: string = '';
        tabStr.map(t => {
          if (pairCount == 1) {
            pairConstr = pairConstr + t;
            tabRes.push(pairConstr);
            pairCount = 0;
          } else {
            pairConstr = t;
            pairCount++;
          }
        });
        if (pairCount == 1) {
          pairConstr = pairConstr + '_';
          tabRes.push(pairConstr);
        }
        return tabRes;
      },
    },
    {
      name: 'Uncategorized',
      fn(text: string): string[] {
        var a = text.length % 2 != 0 ? text.concat('_') : text;
        return a.length > 0 ? a.match(/.{1,2}/g)?.filter(_ => !!_) ?? [] : [];
      },
    },
    {
      name: 'Github Copilot',
      fn(t: string): string[] { return `${t}_`.match(/.{2}/g) || []; }
    }
  ]
});
