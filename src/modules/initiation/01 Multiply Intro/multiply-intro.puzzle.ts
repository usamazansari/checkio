/**
 * # Multiply Intro
 *
 * - Difficulty: Elementary
 *
 * ## Statement
 * This is an intro mission, the purpose of which is to explain how to
 * solve missions on CheckiO and how to get the most out of solving
 * them. As you solve missions more stations become available to you,
 * containing more complex missions.
 *
 *
 * This mission is the easiest one. Write a function that will receive
 * 2 numbers as input and it should return the multiplication of these
 * 2 numbers.
 *
 * ---
 *
 * ## Input
 * - Two arguments
 * - Both are of type `int`.
 *
 * ---
 *
 * ## Output
 * `int`.
 *
 * ---
 *
 * ## Examples
 *
 * ```ts
 * multTwo(2, 3) == 6
 * multTwo(1, 0) == 0
 * ```
 *
 * @param a The first number
 * @param b The second number
 * @returns Product of `a` and `b`
 */
function multTwo(a: number, b: number): number {
  return a * b;
}

export const Solutions = [
  {
    name: 'My',
    fn: multTwo,
  },
  {
    name: 'Clear',
    fn(a: number, b: number): number { return a * b; },
  },
  {
    name: 'Creative',
    fn: (a: number, b: number) => [...'🐱'.repeat(a).replace(/./ug, '🦄'.repeat(b))].length,
  },
  {
    name: 'Third Party',
    fn(a: number, b: number): number { return a * b; },
  },
  {
    name: 'Uncategorized',
    fn(a: number, b: number): number { return a * b; },
  }
];

