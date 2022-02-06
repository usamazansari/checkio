import { Solution, Setup } from '..';

export class Tester {
  constructor(
    {
      solution = new Solution({}),
      tests = new Setup({}),
      deepEquality = false
    }:
      Partial<{ solution: Solution; tests: Setup; deepEquality?: boolean; }>
  ) {
    describe(`${solution.name} using`, () => {
      solution.categories.forEach(category => {
        describe(`${category.name} Solution`, () => {
          tests.forEach(test => {
            it(`should return ${this.formatAssertion(test.expected)} for ${test.arguments.map((_: any) => this.formatAssertion(_)).join(', ')}`, () => {
              deepEquality
                ? expect(category.fn(...test.arguments)).toEqual(test.expected)
                : expect(category.fn(...test.arguments)).toBe(test.expected);
            });
          });
        });
      });
    });
  }

  formatAssertion(assertion: any | any[]): string {
    return Array.isArray(assertion)
      ? assertion.length > 72
        ? `[${assertion.slice(0, 72).join(', ')}...${assertion.slice(-1)[0]}]`
        : assertion
      : assertion;
  }
}
