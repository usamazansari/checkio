import { Solution } from '../../../common';

/**
 * # All The Same
 * 
 * - Difficulty: Simple
 * 
 * ## Description
 * In this mission you should check if all elements in the given Array are equal.
 * 
 * ## Input
 * `Array`.
 * 
 * ## Output
 * `Boolean`.
 * 
 * ## Example:
 * ```ts
 * allTheSame([1, 1, 1]) == true;
 * allTheSame([1, 2, 1]) == false;
 * allTheSame(['a', 'a', 'a']) == true;
 * allTheSame([]) == true;
 * ```
 * 
 * @param {any[]} elements
 * @return {*}  {boolean}
 */
function allTheSame(elements: any[]): boolean {
  return elements.every(_ => _ === elements[0]);
}

export const Puzzle = new Solution({
  name: 'All the Same',
  categories: [
    {
      name: 'My',
      fn: allTheSame
    },
    {
      name: 'Clear',
      fn(elements: any[]): boolean { return elements.every(e => e == elements[0]); }
    },
    {
      name: 'Creative',
      fn(elements: any[]): boolean {
        let resSet = new Set();
        for (let i = 0; i < elements.length; i++) {
          resSet.add(elements[i].toString().charCodeAt(0));
        }
        return resSet.size === 1 || resSet.size === 0;
      }
    },
    {
      name: 'Uncategorized',
      fn: (elements: any[]): boolean => new Set(elements).size <= 1
    }
  ]
});
