# CheckIO

---

### Solutions

The list of all the solutions can be found here

### Workspace Setup

1. Typescript configuration
2. Hot reload using `nodemon`

---

### Formatting Guidelines

The problem function should have documentation as per the description at `checkio.org`

The 2 types of files to be interacted are:
1. Puzzles
2. Tests

```ts
// {{ description }}.puzzle.ts
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

Tests are written in separate file for each problem

```ts
// {{ description }}.test.ts
const Tests = [/* Test Cases with expectations */];
Tests.forEach(test => {
  const actual = my(test.a, test.b); /* params */
  const response = EQUALITY.shallow(actual, test.expected); /* Service to check Equality */
  LOG.default(`  Expected: ${test.expected}`); /* Service to perform logging */
  LOG.default(`  Actual: ${actual}`);
  response ? LOG.pass() : LOG.fail();
});
```

---

### Debugging

1. Updated the name of test file in `test.ts`
2. Hit `F5` in VS Code

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
