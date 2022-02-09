import { Solution } from '../../../common';

/**
 * # End Zeros
 *
 * - Difficulty: Elementary
 *
 * ## Description
 * Try to find out how many zeros a given number has at the end.
 *
 * ## Input
 * A positive `int`.
 *
 * ## Output
 * An `int`.
 *
 * ## Example
 * ```ts
 * endZeros(0) == 1;
 * endZeros(1) == 0;
 * endZeros(10) == 1;
 * endZeros(101) == 0;
 * endZeros(245) == 0;
 * endZeros(100100) == 2;
 * ```
 *
 *
 * @param {number} value
 * @return {*}  {number}
 */
function endZeros(value: number): number {
  return value.toString().match(/0*$/g)?.join('').length ?? 0;
}

export const Puzzle = new Solution({
  name: 'End Zeros',
  categories: [
    {
      name: 'My',
      fn: endZeros
    },
    {
      name: 'Best',
      fn(value: number): number {
        const s = String(value);
        return s.length - s.replace(/0*$/, '').length;
      }
    },
    {
      name: 'Creative Faulty',
      fn(value: number): number {
        return String(value).match(/0*$/)?.filter(_ => !!_)[0].length ?? 0;
      }
    },
    {
      name: 'Github Copilot',
      fn: (n: number) => {
        let count = 0;
        let s = String(n);
        for (let i = s.length - 1; i >= 0; i--) {
          if (s[i] === '0') count++;
          else break;
        }
        return count;
      }
    },
    {
      name: 'Third Party',
      fn(value: number): number {
        let arr = String(value).split(/[^0]/);
        return arr[arr.length - 1].length;
      }
    },
    {
      name: 'Uncategorized',
      fn(value: number): number {
        var s: string = value.toString();
        var sol: number = 0;
        while (s[s.length - 1] == '0') {
          sol++;
          s = s.substring(0, s.length - 1);
        }
        return sol;
      }
    }
  ]
});
