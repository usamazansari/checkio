interface ITestSetup {
  expected: any | any[];
  arguments: { [key: string]: any | any[]; }[];
}

export class Setup extends Array {
  constructor({ tests = [] }: Partial<{ tests: ITestSetup[]; }>) {
    super();
    tests.forEach(test => {
      let entries: [string, any | any[]][] = [];

      test.arguments.forEach(arg => { entries.push(Object.entries(arg)[0]); });

      const _arguments = new Map<string, any | any[]>(entries);

      this.push({
        expected: test.expected,
        arguments: [..._arguments.values()],
      });
    });
  }
}
