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

export { allTheSame as my };
