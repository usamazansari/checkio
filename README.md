# CheckIO

### Solution to puzzles at [checkio.org](https://js.checkio.org/)

1. [Multiply Intro](puzzles/001-multiply-intro.ts)
2. [Easy Unpack](puzzles/002-easy-unpack.ts)

---

### Workspace Setup

1. Typescript configuration
2. Hot reload using `nodemon`
3. `ts-node` should be installed globally

> To debug a file, make sure it is open in the editor. Only then the debugger would work.

---

### Formatting Guidelines

The problem function should have documentation as per the description at `checkio.org`


The 3 types of files to be interacted are:
1. Puzzles
2. Solutions
3. Tests

```ts
// {{ number }}-{{ description }}.puzzle.ts
/**
 * # Name of the problem
 *
 * ## Description
 * Description of the problem
 * Lorem ipsum dolor sit amet consectetur,
 * adipisicing elit. Tempore, debitis! Nulla quia
 * commodi amet maiores sequi vitae itaque illo a
 * libero, quod minus debitis rem, sint aperiam
 * saepe doloribus nostrum?
 *
 * ---
 *
 * ## Input
 * Description of the input.
 *
 * ---
 *
 * ## Output
 * Description of the output.
 *
 * ---
 *
 * ## Example
 *
 * ```ts
 * // example as per the description at `check.io`
 * ```
 *
 * ---
 *
 * ## How is it used
 * Statements in `How is it used` (optional)
 *
 * ---
 * 
 * ## Precondition
 * Statements in `Precondition` (optional) 
 * 
 * @param params Parameters
 * @returns Description of returning value
 */
function problem(...params: Parameters): Type<Return> {}
```

> Remember to remove all the trailing whitespaces until `eslint` is added

The best solution and the creative solution are added in respective solution files.
No documentation required for best and creative solutions.

```ts
// {{ number }}-{{ description }}.solution.ts
const solutions = {
  best: (...params) => {} /* the best solution */,
  creative: (...params) => {} /* the creative solution */
}
```

Tests are written in separate file for each problem

```ts
// {{ number }}-{{ description }}.test.ts
// TBD after installation of `jest`
```

---

### Commit Message Standards

| Event                       | Message                                                         |
| --------------------------- | --------------------------------------------------------------- |
| Problem Entered             | ➕ problem added #`{{ number }}`                                 |
| Problem Solved              | ✔️ problem #`{{ number }}` solved                                |
| Problem not solved          | ➖ problem #`{{ number }}` not solved                            |
| Problem in progress         | 🚧 problem #`{{ number }}` in progress                           |
| Best and Creative Solutions | ✨ Best and Creative solutions for problem #`{{ number }}` added |
| Workspace Configuration     | *varies*                                                        |
| Update `README.md`          | 📝 updated README                                                |

---

©️ [@usama251993](https://github.com/usama251993)
