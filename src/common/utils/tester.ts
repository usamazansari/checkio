import { Solution, Setup } from '..';

export class Tester {
  constructor(
    {
      solution = new Solution({}),
      setup: tests = new Setup({}),
    }:
      Partial<{ solution: Solution; setup: Setup; }>
  ) {
    const deepEquality = typeof (tests[0].expected) === 'object';
    describe(`${solution.name} using`, () => {
      solution.categories.forEach(category => {
        describe(`${category.name} Solution`, () => {
          tests.forEach(test => {
            it(`should return ${this.formatAssertion(test.expected)} for ${this.formatArguments(test.arguments)} 
            ⏲️ `, () => {
              deepEquality
                ? expect(category.fn(...test.arguments.values())).toStrictEqual(test.expected)
                : expect(category.fn(...test.arguments.values())).toBe(test.expected);
            });
          });
        });
      });
    });
  }

  formatAssertion(assertion: any | any[]): string | number {
    return Array.isArray(assertion)
      ? assertion.length > 72
        ? `[${assertion.slice(0, 72).join(', ')}...${assertion.slice(-1)[0]}]`
        : `[${assertion.join(', ')}]`
      : (typeof (assertion) === 'number')
        ? assertion
        : `'${assertion}'`;
  }

  formatArguments(args: Map<string, any | any[]>): string {
    let formatted = '';
    args.forEach((value, key) => {
      formatted +=
        `
          ${key}: ${this.formatAssertion(value)}`;
    });
    return formatted;
  }
}
