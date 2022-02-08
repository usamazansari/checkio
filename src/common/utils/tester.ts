import { Solution, Setup } from '..';

export class Tester {
  #solution: Solution = new Solution({});
  #setup: Setup = new Setup({});

  constructor(
    {
      solution = new Solution({}),
      setup = new Setup({}),
    }:
      Partial<{ solution: Solution; setup: Setup; }>
  ) {
    this.#solution = solution;
    this.#setup = setup;
  }

  public run() {
    const deepEquality = typeof (this.#setup[0].expected) === 'object';
    describe(`${this.#solution.name} using`, () => {
      this.#solution.categories.forEach(category => {
        describe(`${category.name} Solution`, () => {
          this.#setup.forEach(test => {
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

  private formatAssertion(assertion: any | any[]): string | number {
    return (assertion === null || assertion === undefined) // only null and undefined are allowed, not zeros and empty strings.
      ? this.formatForNullUndefined(assertion)
      : this.formatForGoods(assertion);
  }

  formatForNullUndefined(assertion: null | undefined): string | number {
    return `'${assertion}'`;
  }

  private formatForGoods(assertion: any): string | number {
    return (Array.isArray(assertion))
      ? this.formatForArray(assertion)
      : this.formatForNonArray(assertion);
  }

  private formatForNonArray(assertion: any): string | number {
    return (typeof (assertion) === 'object')
      ? this.shortenObject(assertion)
      : this.formatForPrimitives(assertion);
  }

  private formatForPrimitives(assertion: string | number): string | number {
    return ((typeof (assertion) === 'number'))
      ? assertion
      : (assertion.length > 72)
        ? this.shortenString(assertion)
        : `'${assertion}'`;
  }

  private formatForArray(assertion: any[]): string | number {
    return (assertion.length > 72)
      ? this.shortenString(assertion)
      : `[${assertion.join(', ')}]`;
  }

  private shortenObject(assertion: any): string {
    const stringified = JSON.stringify(assertion);
    return stringified.length > 72
      ? `${this.shortenString(assertion)}`
      : stringified;
  }

  private shortenString(assertion: string | any[]): string | number {
    return (Array.isArray(assertion))
      ? `[${assertion.slice(0, 24).join(', ')}...${assertion.slice(-1)[0]}]`
      : `${assertion.replace(/\r\n|\n|\r/g, ' ').slice(0, 24)}...${assertion.slice(-1)[0]}`;
  }

  private formatArguments(args: Map<string, any | any[]>): string {
    let formatted = '';
    args.forEach((value, key) => {
      formatted +=
        `
          ${key}: ${this.formatAssertion(value)}`;
    });
    return formatted;
  }
}
