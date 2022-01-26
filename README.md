# CheckIO

---

### Solutions

The list of all the solutions can be found [here](documents/solutions.md)

### Workspace Setup

1. Typescript configuration
2. Jest with debugging

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
 * Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore,
 * debitis! Nulla quia commodi amet maiores sequi vitae itaque illo a
 * libero, quod minus debitis rem, sint aperiam saepe doloribus nostrum?
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
 * // example as per the description at `checkio.org`
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

Test using [Jest](https://jestjs.io/)

---

### Debugging

1. Set breakpoints
2. Hit `F5`

---

### Commit Message Standards

| Event                       | Message                                                     |
| --------------------------- | ----------------------------------------------------------- |
| Problem Entered             | ➕ problem added #`{{ number }}`                             |
| Problem Solved              | ✔️ problem #`{{ number }}` solved                            |
| Update Test Cases           | 🧪 updated test cases for problem #`{{ number }}`            |
| Problem not solved          | ➖ problem #`{{ number }}` not solved                        |
| Problem in progress         | 🚧 problem #`{{ number }}` in progress                       |
| Best and Creative Solutions | ✨ added best/creative solutions for problem #`{{ number }}` |
| Workspace Configuration     | ** *varies* **                                              |
| Update `README.md`          | 📝 updated README                                            |

---

©️ [usama251993](https://github.com/usama251993)
